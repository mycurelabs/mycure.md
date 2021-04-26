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
      v-btn(text @click="onGetStarted").ml-n4
        strong.text-capitalize.primary--text.font-18 Request An Invite
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
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice',
      title: 'Take your entire practice online - even your group clinic',
      description: 'Easily coordinate with other doctors in your group practice and centralize your clinic system under one subscription.',
      btnTxt: 'Get Started',
      btnIcon: 'mdi-arrow-right',
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
