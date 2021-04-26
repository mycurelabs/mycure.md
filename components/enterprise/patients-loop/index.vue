<template lang="pug">
  generic-media-panel(
    align-left-column="center"
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="enterprise/"
    file-extension=".webp"
    web-image-width="104%"
    mobile-image-width="95%"
    web-image-class="ml-n3"
    mobile-image-class="text-center"
    :content-align-left="true"
    :header="title"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  )
    //- div(slot="additional-content")
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
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-final-E-patient-portal',
      title: 'Keep your patients in the loop',
      description: 'Making sure your patients are informed is easier and faster with an online patient portal. Release diagnostic results right as they\'re finalized and coordinate with your patients easier with online consultations.',
      btnTxt: 'Get Started',
      btnIcon: 'mdi-arrow-right',
    };
    return {};
  },
  computed: {
    title () {
      return this.$isMobile
        ? this.panelContents.title
        : parseTextWithNewLine(this.panelContents.title, ['patients ']);
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
