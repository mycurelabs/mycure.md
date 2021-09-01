<template lang="pug">
  v-card(height="100%" elevation="2").orgs-card.px-5.pt-5.pb-3
    v-row
      img(
        :src="picURL"
        alt="Services"
        :width="$isRegularScreen? '82px' : '130px'"
        :height="$isRegularScreen? '82px' : '130px'"
        style="border-radius: 20px"
      ).ma-3
      v-col.my-3
        v-row
          span(:class="[nameFontSize, $isWideScreen ? 'name-width-wide' : 'name-width-reg']").text-truncate.font-weight-bold.mb-0 {{ fullNameWithSuffixes }}&nbsp;
        v-row(:class="textFontSize").info-text.font-weight-semibold
          span(v-if="organization.doc_specialties") {{ organization.doc_specialties[0] }}&nbsp;&nbsp;
          span(v-else) ---&nbsp;&nbsp;
          //- v-chip(v-if="organization.doc_website" color="primary" outlined x-small).mt-1 verified
        v-row(justify="start").mt-5
          v-icon(color="primary" :small="!$isWideScreen") mdi-briefcase-variant-outline
          div(:class="textFontSize").info-text.mt-1
            span(v-if="organization.doc_practicingSince") &nbsp;{{ yearsOfExperience }} year/s of experience
            span(v-else) &nbsp;- year/s of experience
        v-row(justify="start").mt-3
          v-icon(color="primary" :small="!$isWideScreen") mdi-map-marker
          div(:class="textFontSize").info-text.mt-1
            span(v-if="organization.doc_practicingSince") &nbsp;{{ yearsOfExperience }} somewhere
            span(v-else) &nbsp;- somewhere
        //- v-row(justify="start").pt-3
        //-   v-btn(
        //-     color="success"
        //-     target="_blank"
        //-     rel="noopener noreferrer"
        //-     small
        //-     rounded
        //-     :href="doctorWebsite"
        //-   ).text-none.elevation-0.font-weight-light.ma-1.font-10
        //-     v-icon(:x-small="!$isMobile") mdi-stethoscope
        //-     b &nbsp;Teleconsult
        //-   v-btn(
        //-     color="primary"
        //-     target="_blank"
        //-     rel="noopener noreferrer"
        //-     small
        //-     rounded
        //-     :href="doctorWebsite"
        //-   ).text-none.elevation-0.font-weight-light.ma-1.font-10
        //-     v-icon(:x-small="!$isMobile") mdi-calendar
        //-     b &nbsp;Book a Visit
    v-col
      v-row(justify="end")
        v-btn(
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
          :small="!$isWideScreen"
          rounded
          :href="doctorWebsite"
          :class="$isWideScreen ? ['font-14', 'px-6'] : ['font-10', 'px-5'] "
        ).text-none.elevation-0.font-weight-light.mt-n2
          b View

    //- v-row(v-if="organization.doc_specialties").mt-6.pa-2
    //-   v-col(cols="12")
    //-     v-row
    //-       v-chip(v-for="(specialty, key) in organization.doc_specialties" :key="key").font-12.ma-1 {{ specialty }}&nbsp;
</template>

<script>
// import VClamp from 'vue-clamp';
// import { format } from 'date-fns';
// import uniqBy from 'lodash/uniqBy';
// import { formatAddress, formatName } from '~/utils/formats';
// import FacilityPlaceholder from '~/assets/images/facility-placeholder.jpg';

// import { formatName } from '~/utils/formats';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    VClamp: () => import('vue-clamp'),
  },
  props: {
    organization: {
      type: Object,
      default: () => {},
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.days = [
      { text: 'Mon', value: 1 },
      { text: 'Tues', value: 2 },
      { text: 'Wed', value: 3 },
      { text: 'Thu', value: 4 },
      { text: 'Fri', value: 5 },
      { text: 'Sat', value: 6 },
      { text: 'Sun', value: 0 },
    ];
    return {
      scheduleExpanded: false,
      isDescriptionExpanded: false,
    };
  },
  computed: {
    doctorWebsite () {
      const username = this.organization?.doc_website; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/doctors/${username}`;
    },
    fullNameWithSuffixes () {
      let fullName = this.organization.name.firstName;
      if (this.organization.name.middleInitial) fullName = fullName + ' ' + this.organization.name.middleInitial;
      fullName = fullName + ' ' + this.organization.name.lastName;
      if (this.organization.name.generationalSuffix) fullName = fullName + ' ' + this.organization.name.generationalSuffix;
      if (this.organization.name.doc_professions) fullName = fullName + ', ' + this.organization.name.doc_professions;
      if (this.organization.name.academicSuffix) fullName = fullName + ', ' + this.organization.name.academicSuffix;
      if (this.organization.name.professionalSuffix) fullName = fullName + ', ' + this.organization.name.professionalSuffix;
      return fullName;
    },
    picURL () {
      const sex = this.organization?.sex;
      if (sex === 'female') {
        return this.organization?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.organization?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    },
    yearsOfExperience () {
      const from = new Date(this.organization.doc_practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    nameFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-16'],
        wide: ['font-24'],
      });
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-10'],
        regular: ['font-10'],
        wide: ['font-14'],
      });
    },
  },
};
</script>

<style scoped>
.orgs-card {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}
.info-text {
 color: #393d45;
}
.name-width-wide {
  max-width: 300px;
}
.name-width-reg {
  max-width: 180px;
}
</style>
