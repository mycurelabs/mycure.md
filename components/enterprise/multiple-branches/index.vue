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
    :with-subheader="true"
    :header="panelContents.title"
    :sub-header="panelContents.subHeader"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  )
    div(slot="additional-content")
      v-btn(text @click="onGetStarted").ml-n4
        strong.text-capitalize.primary--text.font-18 Book a Demo
        v-icon.primary--text mdi-arrow-right
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-E-multiple-branches',
      subHeader: 'FOR MULTI-BRANCH FACILITIES',
      title: 'Monitor multiple branches on one system',
      description: 'All you need is one clean dashboard to see how your clinics are faring. The precious data from your multiple branches is automatically aggregated to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
    };
    return {};
  },
  methods: {
    onGetStarted () {
      window.open('https://calendly.com/mycure/demo', '_blank');
    },
  },
};
</script>
