<template lang="pug">
  v-container
    app-bar(:picURL="picURL")
    search-and-sort.pt-12
    //- panel-1(
    //-   :pic-url="picURL"
    //-   :full-name="fullNameWithSuffixes"
    //-   :bio="bio"
    //-   :specialties="specialties"
    //-   :professions="professions"
    //-   :practicing-since="practicingSince"
    //- )

    //- services(
    //-   :services="services"
    //- )

    //- tabs(
    //-   :clinics="clinics"
    //-   :bio="bio"
    //-   :specialties="specialties"
    //-   :professions="professions"
    //-   :practicing-since="practicingSince"
    //-   :education="education"
    //- )

    //- social(
    //-   :name="name"
    //- )

    v-footer(color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(cols="12" md="6" lg="5" xl="4" :align="!$isMobile ? 'start' : 'center'" :class="{'d-flex': !$isMobile}")
          img(
            height="45"
            src="~/assets/images/mycure-header-logo.png"
            to="/"
          )
          p.ml-5.mt-3 &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col(cols="12" md="6" lg="5" xl="4" :align="!$isMobile ? 'end' : 'center'")
          span Share the love:
          template(v-for="(icon, key) in icons")
            a(
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ).pl-3
              v-icon.font-30 {{ icon.icon }}
</template>

<script>
import _ from 'lodash';
import { getHospitalWebsite, getHospitalProfile /* recordWebsiteVisit */ } from '~/utils/axios';
// import { formatName } from '~/utils/formats';
// import headMeta from '~/utils/head-meta';
import AppBar from '~/components/hospital-website/app-bar';
import SearchAndSort from '~/components/clinic-website/search-and-sort';
// import Panel1 from '~/components/doctor-website/panel-1';
// import Services from '~/components/doctor-website/services';
// import Tabs from '~/components/doctor-website/tabs';
// import Social from '~/components/doctor-website/social';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    SearchAndSort,
    // Panel1,
    // Services,
    // Tabs,
    // Social,
  },
  async asyncData ({ app, router, params, error }) {
    try {
      const hospitalWebsite = await getHospitalWebsite({ username: params.id });
      console.log({ username: params.id });
      if (_.isEmpty(hospitalWebsite)) {
        error({ statusCode: 404, message: 'hospital-not-found' });
      }
      const clinics = await getHospitalProfile({ uid: hospitalWebsite.id });
      return {
        hospitalWebsite,
        clinics: clinics || [],
      };
    } catch (e) {
      console.error(e);
    }
  },
  data () {
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    return {
      hospitalProfile: [],
      selectedTab: 'clinics',
      // loading: true,
    };
  },
  computed: {
    picURL () {
      return this.hospitalWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
      // return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    // name () {
    //   return this.doctor?.name;
    // },
    // fullName () {
    //   return formatName(this.doctor?.name || {}, 'firstName middleInitial lastName generationalSuffix');
    // },
    // fullNameWithSuffixes () {
    //   return [
    //     this.fullName,
    //     ...this.professions,
    //     this.doctor?.name.academicSuffix,
    //     this.doctor?.name.professionalSuffix,
    //   ].filter(Boolean).join(', ');
    // },
    // bio () {
    //   return this.doctor?.doc_bio || ''; // eslint-disable-line
    // },
    // specialties () {
    //   return this.doctor?.doc_specialties || []; // eslint-disable-line
    // },
    // professions () {
    //   return this.doctor?.doc_professions || []; // eslint-disable-line
    // },
    // practicingSince () {
    //   return this.doctor?.doc_practicingSince; // eslint-disable-line
    // },
    // services () {
    //   return this.doctor?.doc_services; // eslint-disable-line
    // },
    // education () {
    //   return this.doctor?.educations;
    // },
  },
  // async mounted () {
  //   this.loading = false;
  //   if (this.$route.query.audience === 'self') {
  //     return;
  //   };
  //   await recordWebsiteVisit({ uid: this.doctor.id });
  // },
  // head () {
  //   return headMeta({
  //     title: `${this.fullNameWithSuffixes}`,
  //     description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
  //     socialBanner: this.picURL,
  //   });
  // },
};
</script>
