<template lang="pug">
  v-container.mt-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{BRING_YOUR_PRACTICE_ONLINE.header}}
        br
        p.text-center.font-18.font-gray {{BRING_YOUR_PRACTICE_ONLINE.description}}
          a(@click="goToFeatures").font-16.font-weight-bold {{ BRING_YOUR_PRACTICE_ONLINE.descriptionLink }}
    //- FIRST PANEL
    v-row(align="center").py-10.mb-n4
      v-col(v-if="!$isMobile" cols="12" md="6").pr-0.ml-2
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="HOME_START_YOUR_PHYSICAL.image"
          image-alt="Start your physical and digital journey"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4" :class="{ 'ml-10': !$isMobile }")
        h1.font-30.lh-title.pb-3.font-weight-light {{HOME_START_YOUR_PHYSICAL.header}}
        br
        p.font-16.font-gray.text-justify.my-0 {{HOME_START_YOUR_PHYSICAL.description}}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text.font-18 {{HOME_START_YOUR_PHYSICAL.btnTxt}}
          v-icon.primary--text {{HOME_START_YOUR_PHYSICAL.btnIcon}}
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="HOME_START_YOUR_PHYSICAL.image"
        image-alt="Start your physical and digital journey"
        image-file-extension=".webp"
      )
    //- SECOND PANEL
    v-row(justify="end" align="center").py-10.mb-n4
      v-col(cols="12" offset-md="1" md="4" :class="{ 'mr-10': !$isMobile }")
        h1.font-30.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(cols="12" md="6" :class="{ 'pl-0': !$isMobile }")
        picture-source(
          :image-width="$isMobile ? '100%' : '65%'"
          custom-path="virtual-clinic-home/"
          :image="YOUR_ONLINE_CLINIC.image"
          image-alt="Your online clinic everywhere"
          image-file-extension=".webp"
        )
    //- THIRD PANEL
    v-row(align="center").py-10.mb-n4
      v-col(v-if="!$isMobile" cols="12" md="6").pr-0.ml-2
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="GET_MORE_PATIENTS.image"
          image-alt="Get more patients"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4"  :class="{ 'ml-10': !$isMobile }")
        h1.font-30.font-weight-light {{GET_MORE_PATIENTS.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{GET_MORE_PATIENTS.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{GET_MORE_PATIENTS.btnTxt}}
          v-icon.primary--text {{GET_MORE_PATIENTS.btnIcon}}
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="GET_MORE_PATIENTS.image"
        image-alt="Get more patients"
        image-file-extension=".webp"
      )
    //- FOURTH PANEL
    v-row(justify="end" align="center").py-10.mb-n4
      v-col(cols="12" offset-md="1" md="4" :class="{ 'mr-10': !$isMobile }")
        h1.font-30.font-weight-light {{MANAGE_EVERYTHING_EASILY.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(cols="12" md="6" :class="{ 'pl-0': !$isMobile }")
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="MANAGE_EVERYTHING_EASILY.image"
          image-alt="Manage everything easily"
          image-file-extension=".webp"
        )
</template>

<script>
// constants
import {
  BRING_YOUR_PRACTICE_ONLINE,
  HOME_START_YOUR_PHYSICAL,
  YOUR_ONLINE_CLINIC,
  GET_MORE_PATIENTS,
  MANAGE_EVERYTHING_EASILY,
} from './home-content';
// components
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: {
    PictureSource,
  },
  data () {
    this.HOME_START_YOUR_PHYSICAL = HOME_START_YOUR_PHYSICAL;
    this.YOUR_ONLINE_CLINIC = YOUR_ONLINE_CLINIC;
    this.GET_MORE_PATIENTS = GET_MORE_PATIENTS;
    this.MANAGE_EVERYTHING_EASILY = MANAGE_EVERYTHING_EASILY;
    this.BRING_YOUR_PRACTICE_ONLINE = BRING_YOUR_PRACTICE_ONLINE;
    return {};
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
    goToFeatures () {
      this.$emit('goToFeatures');
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
