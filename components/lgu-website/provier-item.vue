<template lang="pug">
  v-col(cols="6" lg="2" md="3" sm="6").pa-2
    v-card(height="100%" color="#FAFAFA").elevation-1
      v-card-text.pa-1.py-4.text-center
        v-avatar(size="110" rounded)
          img(:src="picURL")
      v-card-text(style="min-height: 55px").pa-1.text-center
        v-tooltip(bottom)
          template(v-slot:activator="{ on, attrs }")
            p(
              style="line-height: 15px;"
              v-on="on"
            ) #[b {{ fullNameWithSuffixes | morph-truncate(27) }}]
          span {{fullNameWithSuffixes}}
        p(style="line-height: 15px;").black--text.mt-6.mb-2.body-2
          strong {{ specialties[0] }}
        p(style="line-height: 15px;" v-if="practicingSince").grey--text {{yearsOfExperience}}
</template>

<script>
import { formatName } from '~/utils/formats';
export default {
  props: {
    /**
     * Object doctor item
     * @type {Object}
     */
    doctor: {
      type: Object,
      default: null,
    },
  },
  computed: {
    picURL () {
      const sex = this.doctor?.sex;
      if (sex === 'female') {
        return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
      }
      return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
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
    specialties () {
      return this.doctor?.personalDetails?.doc_specialties || []; // eslint-disable-line
    },
    professions () {
      return this.doctor?.personalDetails?.doc_professions || []; // eslint-disable-line
    },
    practicingSince () {
      return this.doctor?.personalDetails?.doc_practicingSince; // eslint-disable-line
    },
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      const diff = to - from;
      const yearText = diff > 1 ? 'years' : 'year';
      const diffText = `${diff} ${yearText} of experience`;
      return diffText;
    },
  },
};
</script>

<style scoped>
.right-border {
  border-right: 1px solid #bfc3cc !important;
}
.btn-bottom-left {
  border-bottom-left-radius: 5px;
}
.btn-bottom-right {
  border-bottom-right-radius: 5px;
}
</style>
