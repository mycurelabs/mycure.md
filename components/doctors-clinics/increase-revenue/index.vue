<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" align="center")
        h1.font-30.lh-title.font-weight-light Your New Virtual Clinic
      v-col(cols="12" md="10")
        picture-source(
          custom-path="doctors-clinics/"
          image-alt="New virtual clinic"
          image-file-extension=".webp"
          :image="panelMainImage"
        )
      v-col(
        v-for="(data, key) in secondPanelContents"
        justify="center"
        align-self="center"
        cols="12"
        md="5"
        :key="key"
      ).pt-12.pl-6
        div.d-flex
          img(v-lazy="require(`~/assets/images/doctors-clinics/${data.headerIcon}`)" height="30%" :class="{'pt-3': $isMobile}")
          h1.font-30.lh-title.pb-6.mt-3.ml-3.font-weight-light {{ data.header }}
        br
        p.text-justify.font-16.font-gray.pr-2 {{ data.description }}
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.font-18.text-capitalize.primary--text Request an Invite
          v-icon.primary--text mdi-arrow-right
</template>

<script>
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.secondPanelContents = [
      {
        headerIcon: 'doctors-clinics-increase-revenue.png',
        header: 'Increase your revenue',
        description: 'Treat more patients and reduce no-shows and cancellations with online consultations via secure video and voice calls.',
      },
      {
        headerIcon: 'doctors-clinics-build-clientele.png',
        header: 'Build your clientele',
        description: 'Build patient loyalty and accommodate patients outside of your physical work hours. It\'s easy for your old and new patients to set appointments with you.',
      },
    ];
    this.panelMainImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult';
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
