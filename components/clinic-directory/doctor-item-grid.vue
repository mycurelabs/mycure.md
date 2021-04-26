<template lang="pug">
  v-col(cols="6" lg="2" md="4" sm="6")
    v-card(height="250" elevation="8" style="width: 100%; border-radius: 5px;").d-flex.flex-column
      v-row(justify="center" align="center" no-gutters)
        v-avatar(size="80" rounded).ma-1.pt-2
          img(v-lazy="require(`~/assets/images/doctor-website/${this.doctor.imageFile}`)")
      v-row(justify="center" no-gutters)
        v-col.text-center
          p.mb-1 {{ doctorName }}
          p.grey--text.caption.mb-0.mt-n2 {{ doctor.specialization }} | {{ doctor.experience }} Years
      v-row(align="start" justify="center" no-gutters dense)
        v-btn(color="primary" small elevation="0").mb-1.letter-spacing-normal.text-none Book Now!
      v-row(align="end" no-gutters dense)
        v-btn(
          :small="!$isMobile"
          :x-small="$isMobile"
          width="50%"
          height="100%"
          color="#f0f0f0"
          tile
          elevation="0"
        ).btn-bottom-left.right-border.letter-spacing-normal.text-none.primary--text Availability
        v-btn(
          :small="!$isMobile"
          :x-small="$isMobile"
          width="50%"
          height="100%"
          color="#f0f0f0"
          tile
          elevation="0"
        ).btn-bottom-right.letter-spacing-normal.text-none.primary--text View Site
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
      if (this.$vuetify.breakpoint.name === 'xs' && name.length > 15) {
        return this.$morphTruncate(name, 15);
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
