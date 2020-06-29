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
    )
    services(
      :services="services"
    )
    tabs(
      :clinics="clinics"
      :bio="bio"
      :specialties="specialties"
      :professions="professions"
      :practicing-since="practicingSince"
      :education="education"
    )
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
import { getDoctorWebsite, getDoctorClinics, recordWebsiteVisit } from '~/utils/axios';
import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/doctor-website/app-bar';
import Panel1 from '~/components/doctor-website/panel-1';
import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
import Social from '~/components/doctor-website/social';
export default {
  layout: 'doctor-website',
  components: {
    AppBar,
    Panel1,
    Services,
    Tabs,
    Social,
  },
  async asyncData ({ app, router, params, error }) {
    try {
      const doctor = await getDoctorWebsite({ username: params.id });
      console.warn('doctor', doctor);
      if (_.isEmpty(doctor)) {
        error({ statusCode: 404, message: 'doctor-not-found' });
      }
      const clinics = await getDoctorClinics({ uid: doctor.id });
      console.warn('clinics', clinics);
      return {
        doctor,
        clinics: clinics || [],
      };
    } catch (e) {
      console.error(e);
    }
  },
  data () {
    return {
      selectedTab: 'clinics',
      loading: true,
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
  },
  async mounted () {
    this.loading = false;
    if (this.$route.query.audience === 'self') {
      return;
    };
    await recordWebsiteVisit({ uid: this.doctor.id });
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
