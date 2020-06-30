<template lang="pug">
  v-container(fluid).my-10
    v-row(
      justify="center"
      align="center"
      :class="{ 'mb-6': !$isMobile }"
    ).px-6
      h1.text-center {{ panelTitle }}
    v-row(
      justify="center"
      align="center"
      :class="{ 'mb-6': !$isMobile }"
    ).px-6
      p(:class="subtitleClasses") {{ subtitleText }}
    v-row.mb-6
      template(v-for="item in doctors")
        doctor-item-grid(:doctor="item")
    v-row(justify="center" align="center" :class="{ 'mb-6': !$isMobile }")
      v-btn(
        large
        color="#8db738"
        elevation="0"
        :href="doctorSignUpUrl"
      ).text-none.letter-spacing-normal.white--text.font-weight-bold.px-8 I'M A DOCTOR. SIGN ME UP.
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
import DoctorItemGrid from '~/components/commons/generic-doctor-item-grid';
export default {
  components: {
    DoctorItemGrid,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
    doctorSignUpUrl: {
      type: String,
      default: 'https://www.mycure.md/signup/individual/',
    },
  },
  data () {
    this.panelTitle = 'Our Featured Doctors';
    this.panelSubtitle = 'See our newest addition to the crusade and doctors most loved by the community.';
    return {};
  },
  computed: {
    subtitleText () {
      return this.$isMobile
        ? this.panelSubtitle
        : parseTextWithNewLine(this.panelSubtitle, ['and ']);
    },
    subtitleClasses () {
      return this.$isMobile
        ? ['text-center', 'font-20', 'grey--text']
        : ['text-center', 'font-20', 'grey--text', 'pre-white-space'];
    },
  },
};
</script>
