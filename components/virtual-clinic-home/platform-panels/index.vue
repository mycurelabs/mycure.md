<template lang="pug">
  v-container.mt-12.mb-6
    v-row(justify="center")
      v-col(cols="12" md="6" align="center")
        h1.font-36.font-weight-light.text-center {{ panelHeader.title }}
        br
        p.text-center.font-18.font-gray {{ panelHeader.description }}
          router-link(:to="{ name: 'features' }").font-16.font-weight-bold.primary--text {{ panelHeader.descriptionLink }}
      template(v-for="(panel, key) in panelContents")
        generic-media-panel(
          v-bind="getColumnPosition(key)"
          custom-image-path="virtual-clinic-home/"
          file-extension=".webp"
          offset-cols-right="1"
          web-image-width="104%"
          mobile-image-width="95%"
          mobile-image-class="text-center"
          :header="panel.title"
          :descriptions="[panel.description]"
          :web-image="panel.image"
        ).mb-n10
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
    this.panelHeader = {
      title: 'Build your virtual clinic today',
      description: 'One platform built with online appointments, video chat, EMR system, point-of-sale, telehealth, medical billing, and ',
      descriptionLink: 'more!',
    };
    this.panelContents = [
      {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-A-telehealth',
        title: 'Start your physical and digital clinic journey',
        description: 'We strongly agree that the best treatment comes from face-to-face interaction with patients. Imagine using this hybrid platform for both your physical clinic & an online one.',
      },
      {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-B-appointment',
        title: 'Your online clinic everywhere',
        description: 'You can accommodate follow-up consults conveniently from where you are right now with video chat advancements. You can save more time skipping traffic and hospital hassle.',
      },
      {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-C-doctor-website',
        title: 'Get more patients',
        description: 'Reach more patients anywhere on the globe. Share your professional website online and get patients who need your help with the power of the internet.',
      },
      {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-D-billing-encounter-summary',
        title: 'Manage everything easily',
        description: 'Get real-time reports and analytics everytime you use the MYCURE platform. Have access to all your patient charts anytime you need without having to worry about data privacy and security.',
      },
    ];
    return {};
  },
  methods: {
    getColumnPosition (key) {
      if (key % 2 === 0) {
        return {
          contentAlignRight: true,
          alignLeftColumn: 'center',
          colsLeft: '5',
          colsRight: '4',
        };
      }
      return {
        contentAlignLeft: true,
        alignRightColumn: 'center',
        colsLeft: '4',
        colsRight: '5',
        webImageClass: 'ml-n3',
      };
    },
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
</style>
