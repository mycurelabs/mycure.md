<template lang="pug">
  div(v-if="!loading").main-container
    main-panel(
      :pic-url="picURL"
      :full-name="fullNameWithSuffixes"
      :bio="bio"
      :specialties="specialties"
      :professions="professions"
      :education="education"
      :practicing-years="practicingYears"
      :is-verified="isVerified"
    )
    //- Banner
    div.banner-container
      img(
        :src="banner"
        alt="MYCURE Doctor Banner"
      ).banner
      //- v-row(justify="end")
      //-   v-col(cols="12" md="4")
      //-     v-btn(
      //-       color="white"
      //-       rounded
      //-       block
      //-       @click="onHeartDoctor"
      //-     ).text-none
      //-       v-icon(left color="error") mdi-heart-outline
      //-       span.error--text Heart

    //- Workflow area
    v-container
      v-row(justify="center")
        generic-panel
          //- Profile
          v-col(cols="12" lg="4")
            profile(
              :pic-url="picURL"
              :full-name="fullNameWithSuffixes"
              :first-name="firstName"
              :practicing-since="practicingSince"
              :practicing-years="practicingYears"
              :bio="bio"
              :specialties="specialties"
              :education="education"
              :metrics="doctorMetrics"
            )
          //- Tabs
          v-col(cols="12" lg="8")
            website-features(
              :doctorId="doctor.id"
              :clinics="clinics"
              :clinics-total="clinicsTotal"
              :clinics-limit="clinicsLimit"
              :services="services"
              @onUpdateClinicPage="fetchDoctorInfo($event)"
            )
    v-snackbar(
      v-model="showSnack"
      :color="snackbarModel.color"
    ) {{ snackbarModel.text }}
</template>

<script>
import _ from 'lodash';
import {
  heartDoctor,
  getDoctorWebsite,
  recordWebsiteVisit,
  fetchDoctorMetrics,
} from '~/utils/axios';
import GenericPanel from '~/components/generic/GenericPanel';
import MainPanel from '~/components/doctor-website/MainPanel';
import Profile from '~/components/doctor-website/Profile';
import WebsiteFeatures from '~/components/doctor-website/WebsiteFeatures';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    GenericPanel,
    MainPanel,
    Profile,
    WebsiteFeatures,
  },
  layout: 'doctor-website',
  async asyncData ({ app, router, params, error }) {
    try {
      const doctor = await getDoctorWebsite({ username: params.id }, true);
      if (_.isEmpty(doctor) || !doctor.id) {
        error({ statusCode: 404, message: 'doctor-not-found' });
      }

      return {
        doctor,
      };
    } catch (e) {
      console.error(e);
    }
  },
  data () {
    this.clinicsLimit = 3;
    return {
      // - UI State
      loading: true,
      showSnack: false,
      // - Data models
      selectedTab: 'clinics',
      doctorMetrics: {},
      memberCMSOrganizations: [],
      snackbarModel: {
        color: 'success',
        text: null,
      },
      clinics: [],
      // - Paginations
      page: 1,
      clinicsTotal: 0,
    };
  },
  head () {
    return headMeta({
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
  computed: {
    picURL () {
      const sex = this.doctor?.sex;
      if (sex === 'female') {
        return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    name () {
      return this.doctor?.name || {};
    },
    firstName () {
      return this.name.firstName || '';
    },
    fullName () {
      return formatName(this.doctor?.name || {}, 'firstName middleInitial lastName generationalSuffix');
    },
    fullNameWithSuffixes () {
      return [
        this.fullName,
        ...this.professions,
        this.doctor?.name.academicSuffix,
        this.doctor?.name.professionalSuffix,
      ].filter(Boolean).join(', ');
    },
    bio () {
      return this.doctor?.doc_bio || ''; // eslint-disable-line
    },
    specialties () {
      return this.doctor?.doc_specialties || []; // eslint-disable-line
    },
    professions () {
      return this.doctor?.doc_professions || []; // eslint-disable-line
    },
    practicingSince () {
      return this.doctor?.doc_practicingSince; // eslint-disable-line
    },
    practicingYears () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    services () {
      return this.doctor?.doc_services; // eslint-disable-line
    },
    education () {
      return this.doctor?.educations;
    },
    isVerified () {
      return this.doctor?.doc_verified; // eslint-disable-line
    },
    banner () {
      return this.doctor?.doc_websiteBannerURL || require('~/assets/images/doctor-website/mycure-doctor-website-banner.png');
    },
  },
  async mounted () {
    this.loading = false;
    if (!this.$route.query.audience || this.$route.query.audience !== 'self') {
      // Record new
      await recordWebsiteVisit({ uid: this.doctor.id });
    }
    // Fetch metrics
    await this.fetchMetrics();
    // Fetch Doctor info
    this.fetchDoctorInfo();
  },
  methods: {
    async fetchDoctorInfo (page = 1) {
      try {
        const skip = this.clinicsLimit * (page - 1);
        const { items, total } = await this.$sdk.service('organizations').find({
          createdBy: this.doctor.id,
          $limit: this.clinicsLimit,
          $skip: skip,
          $populate: {
            doctorSchedules: {
              service: 'schedule-slots',
              method: 'find',
              localKey: 'id',
              foreignKey: 'organization',
              createdBy: this.doctor.id,
            },
          },
        });
        this.clinicsTotal = total;
        this.clinics = items;
      } catch (error) {
        console.error(error);
        this.$nuxt.$router.push('/');
      }
    },
    async fetchMetrics () {
      try {
        const data = await fetchDoctorMetrics({ uid: this.doctor.id }, this.$sdk);
        this.doctorMetrics = data || {};
      } catch (error) {
        console.error(error);
        this.enqueueSnack({
          color: 'error',
          text: 'Failed to fetch doctor metrics',
        });
      }
    },
    async onHeartDoctor () {
      try {
        await heartDoctor({ id: this.doctor.id });
        this.enqueueSnack({
          color: 'success',
          text: 'You have sent a heart to this doctor!',
        });
        this.fetchMetrics();
      } catch (error) {
        console.error(error);
        this.enqueueSnack({
          color: 'error',
          text: 'Failed to send a heart, please try again later!',
        });
      }
    },
    enqueueSnack ({ text, color }) {
      this.snackbarModel = {
        text,
        color,
      };
      this.showSnack = true;
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #f0f0f0;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.banner-container {
  min-height: 300px;
  position: relative;
}
.banner {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
}
.mycure-link {
  color: white;
  text-decoration: none;
}

.bottom-padding {
  padding-bottom: 500px;
}

@media screen and (min-width: 1000px) {
  .bottom-padding {
    padding-bottom: 150px;
  }
}
</style>
