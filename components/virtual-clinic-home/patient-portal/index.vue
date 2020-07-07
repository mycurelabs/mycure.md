<template lang="pug">
  v-container#patient-portal.py-12
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12" md="5")
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="patientPortalImage"
          image-alt="Connect with your patient"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4" offset-md="1")
        h1.font-30.lh-title.pb-3.font-weight-light {{patientPortalContent.title}}
        br
        p.text-justify.font-16.mt-3.font-gray {{patientPortalContent.description}}
        br
        v-btn(@click="onPatientPortal" color="#EDBA42" depressed)
          span.white--text.text-none Sign Up As Patient
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="patientPortalImage"
        image-alt="Connect with your patient"
        image-file-extension=".webp"
      ).pt-12
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.patientPortalContent = {
      title: 'Connect with your patient online and increase engagement.',
      description: 'Streamline your workflow and save time! Set-up appointments and consultations, coordinate patient care, issue ePresciptions and release diagnostics results - all that and more with an online portal to interact with your patients.',
    };
    this.patientPortalImage = '';
    return {};
  },
  methods: {
    onPatientPortal () {
      this.$emit('goToPatientPortal');
    },
  },
};
</script>

<style scoped>
</style>
