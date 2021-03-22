<template lang="pug">
  generic-container
    v-row.mb-10
      v-col(cols="12").text-center
        h1 Our Featured Doctors
        p.font-20.grey--text See our newest addition to the crusade and #[br(v-if="!$isMobile")] doctors most loved by the community.
      template(v-for="doctor in doctors")
        doctor-item-grid(:doctor="doctor")
      v-col(cols="12").text-center
        v-btn(
          color="#8db738"
          large
          depressed
          :href="href"
        ).text-none.white--text.px-8 I'm a doctor. Sign me up.
</template>

<script>
import DoctorItemGrid from '~/components/commons/generic-doctor-item-grid';
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    DoctorItemGrid,
    GenericContainer,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.panelTitle = 'Our Featured Doctors';
    this.panelSubtitle = 'See our newest addition to the crusade and doctors most loved by the community.';
    return {};
  },
  computed: {
    href () {
      if (process.browser) {
        return `${window.location.origin}/signup/health-facilities`;
      }
      return `${process.env.WEB_MAIN_URL}/signup/health-facilities`;
    },
  },
};
</script>
