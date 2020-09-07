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
    :header="panelContents.title"
    :descriptions="[panelContents.description]"
    :web-image="panelContents.image"
  )
    div(slot="additional-content")
      v-btn(text @click="onGetStarted").ml-n4
        strong.text-capitalize.primary--text.font-18 Request an Invite
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
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data',
      title: 'Safekeep your important medical data',
      description: 'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
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
