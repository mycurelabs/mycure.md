<template lang="pug">
  v-col(cols="6" lg="2" md="4" sm="6").pa-1
    v-card(height="100%").elevation-1
      v-card-text.pa-1.py-4.text-center
        v-avatar(size="80" rounded)
          img(v-lazy="require(`~/assets/images/doctor-website/${doctor.imageFile}`)")
      v-card-text(style="min-height: 55px").pa-1.text-center
        p(style="line-height: 15px;").mb-0.grey--text.caption {{ doctor.specialization }} | {{ doctor.experience }} Years
        p(style="line-height: 15px;").mb-0 #[b {{ doctorName }}]
      v-card-text.pa-1.text-center
        v-btn(
          color="primary"
          elevation="0"
          small
        ).mb-1.text-none Book Now!
      v-card-actions.pa-0
        v-btn(
          depressed
          small
          block
        ).text-none View Website
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
      const name = `${this.doctor?.fullName || ''} ${this.doctor?.title || ''}`;
      if (this.$vuetify.breakpoint.name === 'xs' && name.length > 13) {
        return this.$morphTruncate(name, 13);
      }
      return name;
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
