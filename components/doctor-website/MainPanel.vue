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
            v-avatar(size="200")
              img(:src="picUrl")
            br
            br
            h2 {{ fullName }}
          //- Professional Info
          v-col(cols="10" v-if="hasProfessionalInfo").text-center
            p(v-if="practicingSince").font-open-sans {{yearsOfExperience}} Years of Experience
            br(v-else)
            v-chip(v-for="(specialty, key) in specialties" :key="key" color="white").mx-1 {{ specialty }}
            //- span.font-gray.font-open-sans {{ specialtiesMapped }}
            br
            //- //- Educational Background
            //- div(v-if="education.length")
            //-   strong.primary--text Education
            //-   br
            //-   div(v-for="(educ, key) in education" :key="key").font-gray.font-open-sans
            //-     strong {{educ.from }} - {{ educ.to }}
            //-     br
            //-     span {{ educ | format-school }}
            br
            //- Virtual Consult
            book-appointment-btn(
              color="info"
              btn-text="Book Me Now"
              rounded
              depressed
              x-large
              show-icon
              :class="{ 'font-11' : $isMobile }"
            ).text-none.font-weight-bold
            br

            //- //- Share Btn and Menu
            //- v-menu(
            //-   v-model="socialMenu"
            //-   :close-on-content-click="false"
            //-   offset-y
            //- )
            //-   template(v-slot:activator="{ on }")
            //-     v-btn(
            //-       v-on="on"
            //-       small
            //-       rounded
            //-       depressed
            //-       color="primary"
            //-       :class="{ 'font-11' : $isMobile , 'ml-1': !$isMobile }"
            //-     ).text-none.mt-1
            //-       | Share
            //-       v-icon(small right) mdi-share-variant
            //-   v-card(color="primary" width="275")
            //-     v-card-text
            //-       h4.white--text Love this doctor? Let your friends know by sharing this website!
            //-       v-row(no-gutters)
            //-         v-col(cols="12")
            //-           social-sharing(
            //-             :url="doctorLink"
            //-             :title="windowTitle"
            //-             inline-template
            //-           )
            //-             div
            //-               network(network="facebook").social-image
            //-                 img(src="~/assets/images/doctor-website/facebook-logo-white.png" width="20%").pa-3
            //-               network(network="twitter").social-image
            //-                 img(src="~/assets/images/doctor-website/twitter-logo-white.png" width="20%").pa-3
            //-               network(network="linkedin").social-image
            //-                 img(src="~/assets/images/doctor-website/linkedin-logo-white.png" width="20%").pa-3
            //-               network(network="email").social-image
            //-                 img(src="~/assets/images/doctor-website/gmail-logo-white.png" width="20%").pa-3
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    BookAppointmentBtn,
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
    education: {
      type: Array,
      default: () => ([]),
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    professions: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: [Date, Number],
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    /** @type {Organization[]} */
    memberCmsOrganizations: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      socialMenu: false,
    };
  },
  computed: {
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
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
  height: 150vh;
  /* top: 0;
  position: absolute; */
}
</style>
