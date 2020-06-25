<template lang="pug">
  v-col(cols="6" lg="2" md="4" sm="6")
    v-card(height="250" elevation="8" style="width: 100%;").d-flex.flex-column
      v-row(justify="center" align="center" no-gutters)
        v-avatar(:size="$isMobile ? 90 : 70" rounded).ma-1
          img(
            v-lazy="require(`~/assets/images/doctor-website/${this.doctor.imageFile}`)"
          )
      v-row(justify="center" no-gutters)
        v-col(cols="12")
          p.text-center.mb-0 {{ doctorName }}
        v-col(cols="12")
          p.text-center.grey--text.caption.mb-0.mt-n2 {{ doctor.specialization }} | {{ doctor.experience }} Years
      v-row(align="end" justify="center" no-gutters dense)
        v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none Book Now!
      v-row(align="end" no-gutters dense)
        v-btn(:small="!$isMobile" :x-small="$isMobile" style="width: 50%;" color="#fafcff" tile elevation="0").right-border.letter-spacing-normal.text-none Availability
        v-btn(:small="!$isMobile" :x-small="$isMobile" style="width: 50%;" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
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
      const name = `${this.doctor.firstName} ${this.doctor.lastName} ${this.doctor.title}`;

      if (this.$vuetify.breakpoint.name === 'xs') {
        if (name.length > 11) {
          return `${name.substring(0, 11)}..`;
        }
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
.letter-spacing-normal {
  letter-spacing: normal;
}
</style>
