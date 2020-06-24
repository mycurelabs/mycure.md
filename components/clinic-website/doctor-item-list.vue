<template lang="pug">
  v-col(cols="12")
    v-card
      div.d-flex
        v-avatar(size="100" rounded).ma-4
          img(
            v-lazy="require(`~/assets/images/doctor-website/${this.doctor.imageFile}`)"
          )
        div
          v-card-title.headline {{ doctor.firstName }} {{ doctor.lastName }} {{ doctor.title }}
          v-card-subtitle {{ doctor.specialization }} | {{ doctor.experience }} Years
          v-card-actions.ml-2
            v-btn(color="primary" elevation="0" width="110").letter-spacing-normal.text-none Book Now!
          div(v-if="$isMobile").ml-4
            v-btn(v-if="$isMobile" width="110" color="#fafcff" tile elevation="0" :class="{ 'mr-2': $isMobile }").letter-spacing-normal.text-none Availability
            v-btn(v-if="$isMobile" width="110" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
        div(v-if="!$isMobile").ml-auto.mr-8.my-auto
          div
            v-btn(width="110" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none Availability
          div.mt-2
            v-btn(width="110" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
    //- v-card(height="150" elevation="8" style="width: 100%;").d-flex
    //-   v-col(cols="1").align-center.mr-4
    //-     v-avatar(size="100" rounded).ma-3
    //-       img(
    //-         v-lazy="require(`~/assets/images/doctor-website/${this.doctor.imageFile}`)"
    //-       )
    //-   v-col(cols='4')
    //-     p.mb-0 {{ doctor.firstName }} {{ doctor.lastName }} {{ doctor.title }}
    //-     p.grey--text.caption.mb-0.mt-n2 {{ doctor.specialization }} | {{ doctor.experience }} Years
    //-     v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none Book Now!
    //-   v-spacer
    //-   v-col
    //-     v-btn(color="#fafcff" tile elevation="0").letter-spacing-normal.text-none Availability
    //-     v-btn(color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
</template>

<script>
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
};
</script>

<style scoped>
.letter-spacing-normal {
  letter-spacing: normal;
}
</style>
