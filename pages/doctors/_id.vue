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
    div.banner

    //- Workflow area
    v-container
      v-row(justify="center")
        generic-panel
          //- Profile
          v-col(cols="12" lg="4")
            profile(
              :pic-url="picURL"
              :full-name="fullNameWithSuffixes"
              :practicing-since="practicingSince"
              :practicing-years="practicingYears"
              :bio="bio"
              :specialties="specialties"
              :education="education"
            )
          //- Tabs
          v-col(cols="12" lg="8")

    //- stats(:data="doctorMetrics")
    //- facilities(
    //-   :first-name="firstName"
    //-   :doctorId="doctor.id"
    //-   :clinics="clinics"
    //-   :total="clinicsTotal"
    //-   :limit="clinicsLimit"
    //-    @onUpdatePage="fetchDoctorInfo($event)"
    //- )
    //- services(
    //-   :first-name="firstName"
    //-   :services="services"
    //- )
    //- learning-corner(:doctor-id="doctor.id")
</template>

<script>
import _ from 'lodash';
import {
  getDoctorWebsite,
  recordWebsiteVisit,
  fetchDoctorMetrics,
} from '~/utils/axios';
import Facilities from '~/components/doctor-website/Facilities';
import GenericPanel from '~/components/generic/GenericPanel';
import LearningCorner from '~/components/doctor-website/LearningCorner';
import MainPanel from '~/components/doctor-website/MainPanel';
import Services from '~/components/doctor-website/ServicesPanel';
import Stats from '~/components/doctor-website/Stats';
import Profile from '~/components/doctor-website/Profile';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Facilities,
    GenericPanel,
    LearningCorner,
    MainPanel,
    Services,
    Stats,
    Profile,
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
      selectedTab: 'clinics',
      loading: true,
      page: 1,
      clinicsTotal: 0,
      doctorMetrics: {},
      clinics: [],
      memberCMSOrganizations: [],
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
    },
    async fetchMetrics () {
      try {
        const data = await fetchDoctorMetrics({ uid: this.doctor.id }, this.$sdk);
        this.doctorMetrics = data || {};
      } catch (error) {
        console.error(error);
      }
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
.banner {
  min-height: 300px;
  background-image: url('../../assets/images/doctor-website/mycure-doctor-website-banner.png');
  background-size: cover;
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
