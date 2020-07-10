<template lang="pug">
  v-container.mt-12
    v-row(justify="center" align="center")
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{ BRING_YOUR_PRACTICE_ONLINE.header }}
        br
        p.text-center.font-18.font-gray {{ BRING_YOUR_PRACTICE_ONLINE.description }}
          a(@click="goToFeatures").font-16.font-weight-bold {{ BRING_YOUR_PRACTICE_ONLINE.descriptionLink }}
    //- FIRST PANEL
    v-row(justify="center" align="center" no-gutters).py-10.mb-n4
      v-col(v-if="!$isMobile" cols="12" md="5").mr-n2.ml-2
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="HOME_START_YOUR_PHYSICAL.image"
          image-alt="Start your physical and digital journey"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4" offset-md="1")
        h1(v-html="HOME_START_YOUR_PHYSICAL.header").font-30.lh-title.pb-3.font-weight-light
        br
        p.font-16.font-gray.text-justify.my-0 {{ HOME_START_YOUR_PHYSICAL.description }}
        br
        br
        v-btn(text @click="onGetStarted").ml-n4
          strong.text-capitalize.primary--text.font-18 {{ HOME_START_YOUR_PHYSICAL.btnTxt }}
          v-icon.primary--text {{ HOME_START_YOUR_PHYSICAL.btnIcon }}
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="HOME_START_YOUR_PHYSICAL.image"
        image-alt="Start your physical and digital journey"
        image-file-extension=".webp"
      ).pt-6
    //- SECOND PANEL
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(justify="start" cols="12" md="4" :class="{ 'ml-3': !$isMobile }")
        h1(v-html="YOUR_ONLINE_CLINIC.header").font-30.font-weight-light
        br
        p.font-16.font-gray.text-justify.mb-0 {{ YOUR_ONLINE_CLINIC.description }}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{ YOUR_ONLINE_CLINIC.btnTxt }}
          v-icon.primary--text {{ YOUR_ONLINE_CLINIC.btnIcon }}
      v-col(cols="12" md="5" offset-md="1")
        picture-source(
          custom-path="virtual-clinic-home/"
          image-alt="Your online clinic everywhere"
          image-file-extension=".webp"
          :image="YOUR_ONLINE_CLINIC.image"
          :image-width="[!$isMobile ? '105%' : '100%']"
          :class="{ 'ml-n5' : !$isMobile }"
        )
    //- THIRD PANEL
    v-row(justify="center" align="center" no-gutters).py-10.mb-n4
      v-col(v-if="!$isMobile" cols="12" md="5").mr-n2.ml-2
        picture-source(
          custom-path="virtual-clinic-home/"
          :image="GET_MORE_PATIENTS.image"
          image-alt="Get more patients"
          image-file-extension=".webp"
        )
      v-col(cols="12" md="4" offset-md="1")
        h1.font-30.font-weight-light {{ GET_MORE_PATIENTS.header }}
        br
        p.font-16.font-gray.text-justify.mb-0 {{ GET_MORE_PATIENTS.description }}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{ GET_MORE_PATIENTS.btnTxt }}
          v-icon.primary--text {{ GET_MORE_PATIENTS.btnIcon }}
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        :image="GET_MORE_PATIENTS.image"
        image-alt="Get more patients"
        image-file-extension=".webp"
      ).pt-6
    //- FOURTH PANEL
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(cols="12" md="4" justify="start" :class="{ 'ml-3': !$isMobile }")
        h1(v-html="MANAGE_EVERYTHING_EASILY.header").font-30.font-weight-light
        br
        p.font-16.font-gray.text-justify.mb-0 {{ MANAGE_EVERYTHING_EASILY.description }}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{ MANAGE_EVERYTHING_EASILY.btnTxt }}
          v-icon.primary--text {{ MANAGE_EVERYTHING_EASILY.btnIcon }}
      v-col(cols="12" md="5" offset-md="1")
        picture-source(
          custom-path="virtual-clinic-home/"
          image-alt="Manage everything easily"
          image-file-extension=".webp"
          :image="MANAGE_EVERYTHING_EASILY.image"
          :image-width="[!$isMobile ? '105%' : '100%']"
          :class="{ 'ml-n5' : !$isMobile }"
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
