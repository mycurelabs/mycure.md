<template lang="pug">
  v-container.platform-panels
    v-row(justify="center" align="center")
      v-col(cols="12" md="6")
        h1.font-36.font-weight-light.text-center {{BRING_YOUR_PRACTICE_ONLINE.header}}
        br
        p.text-center.font-18.font-gray {{BRING_YOUR_PRACTICE_ONLINE.description}}
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        picture-source(
          customPath="virtual-clinic-home/"
          :image="HOME_START_YOUR_PHYSICAL.image"
          imageAlt="Start your physical and digital journey"
          imageFileExtension=".webp"
          :imageClasses="['pr-12']"
        )
      v-col(align-self="center" cols="12" md="6" lg="4").second-column
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
        customPath="virtual-clinic-home/"
        :image="HOME_START_YOUR_PHYSICAL.image"
        imageAlt="Start your physical and digital journey"
        imageFileExtension=".webp"
      )
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(cols="12" md="6" lg="4").first-column.img-online-clinic
        h1.font-30.font-weight-light {{YOUR_ONLINE_CLINIC.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{YOUR_ONLINE_CLINIC.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{YOUR_ONLINE_CLINIC.btnTxt}}
          v-icon.primary--text {{YOUR_ONLINE_CLINIC.btnIcon}}
      v-col(justify="center" align="center" cols="12" md="5").second-column
        picture-source(
          customPath="virtual-clinic-home/"
          :image="YOUR_ONLINE_CLINIC.image"
          imageAlt="Your online clinic everywhere"
          imageFileExtension=".webp"
        )
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(v-if="!$isMobile" align="center" cols="12" md="6").first-column
        picture-source(
          customPath="virtual-clinic-home/"
          :image="GET_MORE_PATIENTS.image"
          imageAlt="Get more patients"
          imageFileExtension=".webp"
          :imageClasses="['pr-12']"
        )
      v-col(align="center" cols="12" md="6" lg="4").text-left.second-column
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
        customPath="virtual-clinic-home/"
        :image="GET_MORE_PATIENTS.image"
        imageAlt="Get more patients"
        imageFileExtension=".webp"
      )
    v-row(justify="center" align="center").py-10.mb-n4
      v-col(cols="12" md="6" lg="4").first-column
        h1.font-30.font-weight-light {{MANAGE_EVERYTHING_EASILY.header}}
        br
        p.font-16.font-gray.text-justify.mb-0 {{MANAGE_EVERYTHING_EASILY.description}}
        br
        br
        v-btn(@click="onGetStarted" text).ml-n4
          strong.text-capitalize.primary--text.font-18 {{MANAGE_EVERYTHING_EASILY.btnTxt}}
          v-icon.primary--text {{MANAGE_EVERYTHING_EASILY.btnIcon}}
      v-col(align="center" cols="12" md="5").second-column.img-manage-easily
        picture-source(
          customPath="virtual-clinic-home/"
          :image-width="$isMobile ? '100%' : '120%'"
          :image="MANAGE_EVERYTHING_EASILY.image"
          imageAlt="Manage everything easily"
          imageFileExtension=".webp"
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
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
.platform-panels{
  margin-top: 55%;
}
@media screen and (max-width: 1000px) {
  .platform-panels{
    margin-top: 5%;
  }
}
@media screen and (device-width: 768px) and (orientation: portrait)  {
  .platform-panels {
    margin-top: 5%;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait)  {
  /* ipad pro */
  .platform-panels {
    margin-top: 55%;
  }
}
@media screen and (device-width: 1024px) and (orientation: landscape)  {
  /* ipad */
  .platform-panels {
    margin-top: 55%;
  }
}
@media screen and (min-width: 1366px) {
  .first-column {
    margin-left: -5%;
  }
  .second-column {
    margin-left: 5%;
  }
}
</style>
