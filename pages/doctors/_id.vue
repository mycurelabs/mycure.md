<template lang="pug">
  div(v-if="!loading")
    app-bar
    panel-1(
      :pic-url="picURL"
      :full-name="fullNameWithSuffixes"
      :bio="bio"
      :specialties="specialties"
      :professions="professions"
      :practicing-since="practicingSince"
      :member-cms-organizations="memberCMSOrganizations"
      :is-verified="isVerified"
    )
    v-row.mt-8
      v-col(cols="12" md="2")
        professional-info(
          :specialties="specialties"
          :professions="professions"
          :practicing-since="practicingSince"
          :education="education"
        )
      v-col(cols="12" md="10").pa-0
        tabs(
          :clinics="clinics"
          :bio="bio"
          :specialties="specialties"
          :professions="professions"
          :practicing-since="practicingSince"
          :education="education"
          :services="services"
          :doctorId="doctor.id"
          :total="clinicsTotal"
          :limit="clinicsLimit"
          @onUpdatePage="fetchDoctorInfo"
        ).mb-12
    social(
      :name="name"
    )
    v-footer(
      height="auto"
      color="primary"
    )
      v-row
        v-col.text-center
          span.white--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link MYCURE]
    //- pre {{doctor}}
</template>

<script>
import _ from 'lodash';
import {
  getDoctorWebsite,
  getMemberOrganizations,
  recordWebsiteVisit,
} from '~/utils/axios';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/doctor-website/app-bar';
import Panel1 from '~/components/doctor-website/panel-1';
import ProfessionalInfo from '~/components/doctor-website/professional-info';
import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
import Social from '~/components/doctor-website/social';
export default {
  layout: 'doctor-website',
  components: {
    AppBar,
    Panel1,
    ProfessionalInfo,
    Services,
    Tabs,
    Social,
  },
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
  computed: {
    picURL () {
      const sex = this.doctor?.sex;
      if (sex === 'female') {
        return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    name () {
      return this.doctor?.name;
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

      // const [clinics, memberCMSOrganizations, total] = await Promise.all([
      //   getDoctorClinics({
      //     uid: this.doctor?.id,
      //     $limit: this.clinicsLimit,
      //     $skip: skip,
      //   }),
      //   getMemberOrganizations({
      //     uid: this.doctor?.id,
      //     type: 'cms',
      //     select: ['id', 'name', 'picURL'],
      //   }),
      // ]);

      const { items, total } = await this.$sdk.service('organizations').find({
        createdBy: this.doctor?.id,
        $limit: this.clinicsLimit,
        $skip: skip,
      });

      this.clinicsTotal = total;
      this.clinics = items;

      const [memberCMSOrganizations] = await getMemberOrganizations({
        uid: this.doctor?.id,
        type: 'cms',
        select: ['id', 'name', 'picURL'],
      });

      this.memberCMSOrganizations = memberCMSOrganizations;
    },
  },
  head () {
    return headMeta({
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
.mycure-link {
  color: white;
  text-decoration: none;
}
</style>
