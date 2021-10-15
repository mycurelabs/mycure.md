<template lang="pug">
  div(v-if="!loading").main-container
    //- Dialogs
    choose-appointment(
      v-model="appointmentDialog"
      :organizations="clinics"
      @select="onSelectAppointment($event)"
    )
    choose-facility(
      v-model="facilityDialog"
      :organizations="clinics"
      :doctor-id="doctor.id"
      :appointment-type="appointmentType"
    )
    //- First panel
    main-panel(
      :metrics="doctorMetrics"
      :pic-url="picURL"
      :full-name="fullNameWithSuffixes"
      :bio="bio"
      :specialties="specialties"
      :professions="professions"
      :education="education"
      :practicing-years="practicingYears"
      :is-verified="isVerified"
      :is-bookable="isBookable"
      :is-preview-mode="isPreviewMode"
      @book="onBook"
    )

    //- Patient panel
    //- patient-panel(:metrics="doctorMetrics")

    //- Banner
    //- div.banner-container.mt-n5
    //-   img(
    //-     :src="banner"
    //-     alt="MYCURE Doctor Banner"
    //-   ).banner
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
        generic-panel(:row-bindings="{ justify: 'center' }")
          //- Profile
          v-col(cols="12" lg="4" xl="3")
            profile(
              :pic-url="picURL"
              :full-name="fullNameWithSuffixes"
              :first-name="firstName"
              :practicing-since="practicingSince"
              :practicing-years="practicingYears"
              :bio="bio"
              :specialties="specialties"
              :education="education"
              :is-bookable="isBookable"
              :is-preview-mode="isPreviewMode"
              @book="onBook"
            )
          //- Tabs
          v-col(cols="12" lg="8" xl="7")
            website-features(
              :doctorId="doctor.id"
              :clinics="clinics"
              :clinics-total="clinicsTotal"
              :clinics-limit="clinicsLimit"
              :services="services"
              :is-preview-mode="isPreviewMode"
              @onUpdateClinicPage="fetchDoctorInfo($event)"
            )#doctor-website-features
    v-snackbar(
      v-model="showSnack"
      :color="snackbarModel.color"
    ) {{ snackbarModel.text }}
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import intersection from 'lodash/intersection';
// import VueScrollTo from 'vue-scrollto';
import ChooseAppointment from '~/components/doctor-website/ChooseAppointment';
import ChooseFacility from '~/components/doctor-website/ChooseFacility';
import GenericPanel from '~/components/generic/GenericPanel';
import MainPanel from '~/components/doctor-website/MainPanel';
import PatientPanel from '~/components/doctor-website/PatientPanel';
import Profile from '~/components/doctor-website/Profile';
import WebsiteFeatures from '~/components/doctor-website/WebsiteFeatures';
import {
  heartDoctor,
  getDoctorWebsite,
  recordWebsiteVisit,
  fetchDoctorMetrics,
} from '~/utils/axios';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
import { fetchUserFacilities } from '~/services/organization-members';
import { fetchOrganizations } from '~/services/organizations';

const BOOKABLE_FACILITY_TYPES = [
  'doctor-booking',
  'doctor-telehealth',
  'clinic-booking',
  'clinic-telehealth',
];

export default {
  components: {
    ChooseAppointment,
    ChooseFacility,
    GenericPanel,
    MainPanel,
    PatientPanel,
    Profile,
    WebsiteFeatures,
  },
  layout: 'doctor-website',
  async asyncData ({ app, router, params, error }) {
    try {
      const doctor = await getDoctorWebsite({ username: params.id }, true);
      if (isEmpty(doctor) || !doctor.id) {
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
    this.clinicsLimit = 6;
    return {
      // - UI State
      loading: true,
      showSnack: false,
      appointmentDialog: false,
      facilityDialog: false,
      // - Data models
      selectedTab: 'clinics',
      appointmentType: null,
      doctorMetrics: {},
      memberCMSOrganizations: [],
      snackbarModel: {
        color: 'success',
        text: null,
      },
      clinics: [],
      schedules: [],
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
    mode () {
      return this.$route.query.mode;
    },
    isPreviewMode () {
      return this.mode === 'preview';
    },
    picURL () {
      return this.doctor?.picURL || require('~/assets/images/commons/MYCURE Default Avatar.png');
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
      let from = this.practicingSince || 0;
      if (`${from}`.length > 4) from = new Date(from).getFullYear(); // eslint-disable-line
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
    /**
     * Check if doctor has a schedule in any clinic
     *
     * Also check if the doctor has enabled booking / telehealth
     */
    isBookable () {
      if (!this.clinics?.length) return false;
      return !!this.clinics.find(c => (c?.$populated?.doctorSchedules?.length || c?.doctorSchedules?.length) &&
        intersection(c?.types, BOOKABLE_FACILITY_TYPES)?.length);
    },
    banner () {
      return this.doctor?.doc_websiteBannerURL || require('~/assets/images/doctor-website/doctor-banner-placeholder.png');
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
    // Record Page view for Google analytics
    this.$gtag.pageview(`/doctors/${this.$route.params.id}`);
  },
  methods: {
    async fetchDoctorInfo (page = 1) {
      try {
        const skip = this.clinicsLimit * (page - 1);

        /* Uses organization-members service */
        const { items, total } = await fetchUserFacilities(this.$sdk, {
          id: this.doctor.id,
          limit: this.clinicsLimit,
          skip,
        });
        this.clinicsTotal = total;
        this.clinics = items;

        /**
         * Normally, this does not happen. A doctor would not have
         * a website if they haven't enabled either booking or telehealth.
         * This was added to display the created facilities of our
         * already EXISTING doctors prior to the changes made in booking and telehealth.
         */
        if (!this.isBookable && !this.clinics?.length) {
          const { items, total } = await fetchOrganizations(this.$sdk, {
            createdBy: this.doctor.id,
            limit: this.clinicsLimit,
            skip,
          });
          this.clinicsTotal = total;
          this.clinics = items;
        }
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
    onSelectAppointment (type) {
      this.appointmentType = type;
      this.facilityDialog = true;
    },
    onBook () {
      this.appointmentDialog = true;
      // VueScrollTo.scrollTo('#doctor-website-features', 500, { offset: -100, easing: 'ease' });
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
  background-color: #f9f9f9;
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
