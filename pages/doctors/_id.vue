<template lang="pug">
  div(v-if="!loading" style="padding-bottom: 150px;")
    main-panel(
      :pic-url="picURL"
      :full-name="fullNameWithSuffixes"
      :bio="bio"
      :specialties="specialties"
      :professions="professions"
      :education="education"
      :practicing-since="practicingSince"
      :is-verified="isVerified"
    )
    stats
    facilities(
      :first-name="firstName"
      :doctorId="doctor.id"
      :clinics="clinics"
      :total="clinicsTotal"
      :limit="clinicsLimit"
       @onUpdatePage="fetchDoctorInfo($event)"
    )
    services(
      :first-name="firstName"
      :services="services"
    )
    learning-corner(:doctor-id="doctor.id")
</template>

<script>
import _ from 'lodash';
import {
  getDoctorWebsite,
  recordWebsiteVisit,
} from '~/utils/axios';
import Facilities from '~/components/doctor-website/Facilities';
import LearningCorner from '~/components/doctor-website/LearningCorner';
import MainPanel from '~/components/doctor-website/MainPanel';
import Services from '~/components/doctor-website/ServicesPanel';
import Stats from '~/components/doctor-website/Stats';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Facilities,
    LearningCorner,
    MainPanel,
    Services,
    Stats,
  },
  layout: 'doctor-website',
  async asyncData ({ app, router, params, error }) {
    try {
      const doctor = await getDoctorWebsite({ username: params.id }, true);
      if (_.isEmpty(doctor)) {
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
    if (this.$route.query.audience === 'self') {
      return;
    };
    await recordWebsiteVisit({ uid: this.doctor.id });
    this.fetchDoctorInfo();
  },
  methods: {
    async fetchDoctorInfo (page = 1) {
      const skip = this.clinicsLimit * (page - 1);

      const { items, total } = await this.$sdk.service('organizations').find({
        createdBy: this.doctor?.id,
        $limit: this.clinicsLimit,
        $skip: skip,
        $populate: {
          doctorSchedules: {
            service: 'schedule-slots',
            method: 'find',
            localKey: 'createdBy',
            foreignKey: 'account',
          },
        },
      });

      this.clinicsTotal = total;
      this.clinics = items;
    },
  },
};
</script>

<style scoped>
.mycure-link {
  color: white;
  text-decoration: none;
}
</style>
