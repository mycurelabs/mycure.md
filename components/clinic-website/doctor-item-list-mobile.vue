<template lang="pug">
  v-col(cols="12")
    v-card
      div.d-flex
        v-avatar(size="100" rounded).ma-4
          img(
            v-lazy="require(`~/assets/images/doctor-website/${this.doctor.imageFile}`)"
          )
        div
          v-card-title.headline.word-break {{ doctorName }}
          v-card-subtitle.pb-2 {{ doctor.specialization }} | {{ doctor.experience }} Years
          v-card-actions.ml-2
            v-btn(color="primary" elevation="0" width="110").letter-spacing-normal.text-none Book Now!
        div.ml-auto.mr-1
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-dots-vertical
            v-list
              v-list-item
                v-btn(width="110" color="#fafcff" tile elevation="0" :class="{ 'mr-2': $isMobile }").letter-spacing-normal.text-none Availability
              v-list-item
                v-btn(width="110" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
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
  computed: {
    doctorName () {
      const name = `${this.doctor?.firstName || ''} ${this.doctor?.lastName || ''} ${this.doctor?.title || ''}`;
      if (this.$vuetify.breakpoint.name === 'xs' && name.length > 15) {
        return this.$morphTruncate(name, 15);
      }
      return name;
    },
  },
};
</script>

<style scoped>
.word-break {
  word-break: break-word;
}
.letter-spacing-normal {
  letter-spacing: normal;
}
</style>
