<template lang="pug">
  div(v-if="!loading")
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
      v-col(cols="12" md="2" :class="{ 'order-last pb-12' : $isMobile }")
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
    mc-footer
    //- social(
    //-   :name="name"
    //- )
    //- v-footer(
    //-   height="auto"
    //- )
    //-   v-row
    //-     v-col.text-left
    //-       div.d-flex
    //-         span Powered by
    //-         img(
    //-           src="../../assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
    //-           to="/"
    //-           width="100"
    //-           height=""
    //-         ).ml-2.mb-2
    //-       div
    //-         span Copyright {{new Date().getFullYear()}} All Rights Reserved.
    //-     v-col.text-right.my-2
    //-       div
    //-         span Terms of Use | Privacy Policy | Send us your feedback
    //-       div
    //-         span.primary--text See more doctors | Create my own Doctor Website
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
import McFooter from '~/components/commons/mc-footer';
import Panel1 from '~/components/doctor-website/panel-1';
import ProfessionalInfo from '~/components/doctor-website/professional-info';
import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
export default {
  layout: 'doctor-website',
  components: {
    AppBar,
    McFooter,
    Panel1,
    ProfessionalInfo,
    Services,
    Tabs,
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
