<template lang="pug">
  v-col(lg="2" md="3" sm="6")
    v-card(width="200" height="250" elevation="8").d-flex.flex-column
      v-row(justify="center" align="center" no-gutters)
        v-avatar(size="70" rounded).red.ma-1
          img(:src="doctor.imageUrl")
      v-row(justify="center" no-gutters)
        p.text-center.mb-0 {{ doctor.firstName }} {{ doctor.lastName }} {{ doctor.title }}
        p.text-center.grey--text.caption.mb-0.mt-n2 {{ doctor.specialization }} | {{ doctor.experience }} Years
      v-row(align="end" justify="center" no-gutters dense)
        v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none Book Now!
      v-row(align="end" no-gutters dense)
        v-btn(small style="width: 50%;" color="#fafcff" tile elevation="0").right-border.letter-spacing-normal.text-none Availability
        v-btn(small style="width: 50%;" color="#fafcff" tile elevation="0").letter-spacing-normal.text-none View Site
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
.right-border {
  border-right: 1px solid #bfc3cc !important;
}
.letter-spacing-normal {
  letter-spacing: normal;
}
</style>
