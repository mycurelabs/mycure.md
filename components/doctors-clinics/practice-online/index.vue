<template lang="pug">
  generic-media-panel(
    align-left-column="center"
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="doctors-clinics/"
    file-extension=".webp"
    web-image-width="104%"
    mobile-image-width="95%"
    web-image-class="ml-n3"
    mobile-image-class="text-center"
    :content-align-left="true"
    :header="panelContents.title"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  )
    div(slot="additional-content")
      //- TODO: List
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice',
      title: 'Practice as a Group',
      description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehenesive workspace.',
    };
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
