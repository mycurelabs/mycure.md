<template lang="pug">
  v-container(style="background-color: #f7e8e6" :class="{ 'border-radius': !$isMobile }").py-12
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12" md="5")
        picture-source(
          custom-path="virtual-clinic-home/"
          image-alt="Connect with your patient"
          image-file-extension=".webp"
          :image="patientPortalImage"
        )
      v-col(
        cols="10"
        md="4"
        offset-md="1"
        :class="{'text-center': $isMobile}"
      )
        h1(:class="panelTitleClasses").font-30.lh-title.pb-3.font-weight-light {{ patientPortalContent.title }}
        br
        p(:class="panelDescriptionClasses").font-16.mt-3.font-gray {{ patientPortalContent.description }}
        br
        v-btn(@click="goToPatientPortal" color="#EDBA42" depressed)
          span.white--text.text-none View Patient Portal
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        image-alt="Connect with your patient"
        image-file-extension=".webp"
        :image="patientPortalImage"
      ).pt-12
</template>

<script>
// components
import PictureSource from '~/components/commons/PictureSource';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: { PictureSource },
  data () {
    this.patientPortalContent = {
      title: parseTextWithNewLine('Increase your patient engagement. Connect online!', ['your ', 'engagement. ']),
      description: 'Streamline your workflow and save time! Set-up appointments and consultations, coordinate patient care, issue ePresciptions, and release diagnostics results - all that and more with an online portal to interact with your patients.',
    };
    this.patientPortalImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-patient-banner';
    return {};
  },
  computed: {
    panelTitleClasses () {
      return this.$isMobile
        ? ['text-center']
        : ['pre-white-space'];
    },
    panelDescriptionClasses () {
      return [`text-${this.$isMobile ? 'center' : 'justify'}`];
    },
  },
  methods: {
    goToPatientPortal () {
      this.$emit('goToPatientPortal');
    },
  },
};
</script>

<style scoped>
.border-radius {
  border-radius: 10px;
}
</style>
