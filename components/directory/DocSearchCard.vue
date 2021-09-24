<template lang="pug">
  v-card(height="100%" elevation="2").orgs-card.px-3.pb-3.pt-4.d-flex.flex-column
    v-row
      img(
        :src="picURL"
        alt="Services"
        :width="$isRegularScreen? '82px' : '130px'"
        :height="$isRegularScreen? '82px' : '130px'"
        style="border-radius: 20px"
      ).ma-3
      v-col
        div
          v-clamp(
            autoresize
            :max-lines="1"
            :class="[nameFontSize, $isWideScreen ? 'name-width-wide' : 'name-width-reg']"
          ).font-weight-bold.mb-0 {{ fullNameWithSuffixes }}&nbsp;
        div(:class="textFontSize").info-text.font-weight-semibold
          v-clamp(
            v-if="hasSpecialties"
            autoresize
            :max-lines="1"
          ) {{ specialtiesText }}&nbsp;&nbsp;
          span(v-else) ---&nbsp;&nbsp;
          //- v-chip(v-if="doctor.doc_website" color="primary" outlined x-small).mt-1 verified
        div.d-flex.mt-1
          v-icon(color="primary" :small="!$isWideScreen" left) mdi-briefcase-variant-outline
          div(:class="textFontSize").info-text.mt-1
            span(v-if="doctor") &nbsp;{{ doctor.doc_practicingSince ? yearsOfExperience : '-' }} year/s of experience
            span(v-else) &nbsp;- year/s of experience
        div(justify="start").mt-1.d-flex
          v-icon(color="primary" :small="!$isWideScreen" left) mdi-information-outline
          div(v-if="bio")
            v-clamp(
              autoresize
              :max-lines="2"
              :class="[textFontSize, {'font-italic': !bio }]"
            ) {{ bio || 'No address provided'}}
          div(v-else)
            v-clamp(
              autoresize
              :max-lines="2"
              :class="[textFontSize, 'font-italic']"
            ) No information provided
    v-spacer
    v-card-actions.pa-0
      v-col
        v-row(justify="end")
          v-btn(
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            :small="!$isWideScreen"
            rounded
            :class="$isWideScreen ? ['font-14', 'px-6'] : ['font-10', 'px-5'] "
            @click="dialogBox = true"
          ).text-none.elevation-0.font-weight-light.mt-2
            b View

    //- v-row(v-if="doctor.doc_specialties").mt-6.pa-2
    //-   v-col(cols="12")
    //-     v-row
    //-       v-chip(v-for="(specialty, key) in doctor.doc_specialties" :key="key").font-12.ma-1 {{ specialty }}&nbsp;
    v-dialog(
      v-model="dialogBox"
      width="50%"
      content-class="rounded-xl"
      :scrollable="false"
    ).pa-0
      doc-dialog-card(:doctor="doctor")
</template>

<script>
import VClamp from 'vue-clamp';
import { formatAddress } from '~/utils/formats';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    VClamp,
    DocDialogCard: () => import('~/components/directory/DocDialogCard.vue'),
  },
  props: {
    doctor: {
      type: Object,
      default: () => ({}),
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
      dialogBox: false,
      scheduleExpanded: false,
      isDescriptionExpanded: false,
    };
  },
  computed: {
    hasDoctorWebsite () {
      return !!this.doctor?.doc_website && !!this.doctor?.id;
    },
    doctorWebsite () {
      const username = this.doctor?.doc_website || this.doctor?.id; // eslint-disable-line
      return `${process.env.WEB_MAIN_URL}/doctors/${username}`;
    },
    fullNameWithSuffixes () {
      if (!this.doctor?.name) return '';
      let fullName = this.doctor.name.firstName;
      if (this.doctor.name.middleInitial) fullName = fullName + ' ' + this.doctor.name.middleInitial;
      fullName = fullName + ' ' + this.doctor.name.lastName;
      if (this.doctor.name.generationalSuffix) fullName = fullName + ' ' + this.doctor.name.generationalSuffix;
      if (this.doctor.name.doc_professions) fullName = fullName + ', ' + this.doctor.name.doc_professions;
      if (this.doctor.name.academicSuffix) fullName = fullName + ', ' + this.doctor.name.academicSuffix;
      if (this.doctor.name.professionalSuffix) fullName = fullName + ', ' + this.doctor.name.professionalSuffix;
      return fullName;
    },
    picURL () {
      return this.doctor?.picURL || require('~/assets/images/commons/MYCURE Default Avatar.png');
    },
    specialtiesText () {
      return this.doctor?.doc_specialties?.join(', ') || '';
    },
    yearsOfExperience () {
      const from = new Date(this.doctor.doc_practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    address () {
      const { address } = this.doctor;
      return formatAddress(address, 'street1, street2, city, province, region, country');
    },
    bio () {
      return this.doctor?.doc_bio;
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
        mobile: ['font-12'],
        regular: ['font-10'],
        wide: ['font-14'],
      });
    },
    hasSpecialties () {
      return this.doctor?.doc_specialties?.length;
    },
  },
  methods: {
    visitWebsite () {
      const username = this.doctor?.doc_website || this.doctor?.id;
      this.$router.push(`/doctors/${username}`);
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
