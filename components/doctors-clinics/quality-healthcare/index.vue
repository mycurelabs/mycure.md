<template lang="pug">
  generic-media-panel(
    align-right-column="center"
    cols-left="5"
    cols-right="4"
    offset-cols-right="1"
    custom-image-path="doctors-clinics/"
    file-extension=".webp"
    web-image-width="104%"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    :content-align-right="true"
    :header="title"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  ).cta-container
    div(slot="additional-content")
      v-btn(text @click="onGetStarted").ml-n4
        strong.text-capitalize.primary--text.font-18 Get Started
        v-icon.primary--text mdi-arrow-right
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-E-patient-portal',
      title: 'Access quality healthcare - instantly',
      description: 'Set-up appointments and consultations, coordinate patient care, issue ePresciptions and release diagnostics results - all that and more with an online portal to interact with your patients.',
    };
    return {};
  },
  computed: {
    title () {
      return this.$isMobile
        ? this.panelContents.title
        : parseTextWithNewLine(this.panelContents.title, ['healthcare ']);
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
