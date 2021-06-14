<template lang="pug">
  div.panel-bg
    v-container
      v-row(justify="center")
        //- Logo
        v-col(cols="10")
           nuxt-link(to="/")
              img(
                src="~/assets/images/MYCURE-logo.png"
                width="120"
                alt="MYCURE logo"
              ).mt-1
        generic-panel(:row-bindings="{ justify: 'center' }")
          //- Profile picture and main info
          v-col(cols="12").text-center
            v-avatar(size="200").elevation-5
              img(:src="picUrl")
            br
            br
            h2 Dr. {{ fullName }}
          //- Professional Info
          v-col(cols="10" v-if="hasProfessionalInfo").text-center.mb-10
            p(v-if="practicingYears").font-open-sans {{practicingYears}} Years of Experience
            br(v-else)
            v-chip(v-for="(specialty, key) in specialties" :key="key" color="white").mx-1 {{ specialty }}
            //- span.font-gray.font-open-sans {{ specialtiesMapped }}

          //- Consult btn
          v-col(cols="10").text-center
            v-tooltip(
              color="white"
              top
              :disabled="!isBookable"
            )
              template(v-slot:activator="{ on }")
                v-btn(
                  v-on="on"
                  color="warning"
                  depressed
                  x-large
                  :class="{ 'font-11' : $isMobile }"
                  :disabled="!isBookable"
                  @click="$emit('book')"
                ).text-none.font-weight-bold.elevation-5.rounded-xl The doctor is in
              strong.font-18.warning--text I'm available
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
    SocialSharing,
  },
  filters: {
    formatSchool (educ) {
      if (!educ.degree) return educ.school;
      return `${educ.degree} - ${educ.school}`;
    },
  },
  props: {
    picUrl: {
      type: String,
      default: null,
    },
    fullName: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    professions: {
      type: Array,
      default: () => ([]),
    },
    practicingYears: {
      type: Number,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBookable: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      socialMenu: false,
    };
  },
  computed: {
    specialtiesMapped () {
      return this.specialties.join(', ');
    },
    educationsMapped () {
      return this.education;
    },
    hasProfessionalInfo () {
      return this.specialtiesMapped || this.practicingSince;
    },
    doctorLink () {
      if (process.client) {
        return window.location.href;
      }
      return '';
    },
    windowTitle () {
      if (process.client) {
        return window.document.title;
      }
      return '';
    },
  },
};
</script>

<style scoped>
.divider-container {
  position: relative;
  height: 150px;
}
.divider {
  border-left: 2px solid black;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}
.social-image:hover {
  cursor: pointer !important;
}
.panel-bg {
  background-image: url('../../assets/images/doctor-website/Doctor BG Full.png');
  background-size: cover;
  width: 100%;
  min-height: 150vh;
  /* top: 0;
  position: absolute; */
}
</style>
