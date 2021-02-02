<template lang="pug">
  generic-media-panel(
    align-right-column="center"
    cols-left="5"
    cols-right="4"
    offset-cols-right="1"
    custom-image-path="enterprise/"
    file-extension=".webp"
    web-image-width="104%"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    :content-align-right="true"
    :header="panelContents.title"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  )
    //- div(slot="additional-content")
    //-   v-btn(text @click="onGetStarted").ml-n4
    //-     strong.text-capitalize.primary--text.font-18 Get Started
    //-     v-icon.primary--text mdi-arrow-right
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-C-book-online-calendar',
      title: 'Handle outpatient consultations online',
      description: 'Continue to give your patients quality care online while keeping your physicians safe.',
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
