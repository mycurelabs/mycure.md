<template lang="pug">
  div(:class="backgroundImage").panel-bg
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
            p(v-if="practicingYears" style="color: #878E9B;").font-open-sans.font-weight-medium {{practicingYears}} Years of Experience
            br(v-else)
            v-chip(v-for="(specialty, key) in specialties" :key="key" color="#878E9B").ma-1.white--text {{ specialty }}
          //- Consult btn
          v-col(cols="10" v-if="!$isMobile").text-center.justify-center
              div(style="width: 25%; margin: auto;").white
                strong(slot="badge").font-18.warning--text I'm available
              v-hover(
                v-slot="{ hover }"
                open-delay="100"
              )

                v-btn(
                  depressed
                  x-large
                  :color="hover ? 'info' : 'warning'"
                  :class="{ 'font-11' : $isMobile }"
                  :disabled="!isBookable"
                  @click="$emit('book')"
                ).text-none.font-weight-bold.custom-book-btn.rounded-xl.font-18 {{ hover ? 'Book me now' : 'The doctor is in' }}
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import GenericPanel from '~/components/generic/GenericPanel';
import canUseWebp from '~/utils/can-use-webp';
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
      canUseWebp: null,
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
    backgroundImage () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  async mounted () {
    this.canUseWebp = await canUseWebp();
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
.bg-png {
  background-image: url('../../assets/images/doctor-website/Doctor Website - Background Clouds.png');
}
.bg-webp {
  background-image: url('../../assets/images/doctor-website/Doctor Website - Background Clouds.webp');
}
.panel-bg {
  background-size: cover;
  width: 100%;
  height: 1100px;
  position: relative;
  /* top: 0;
  position: absolute; */
}
.custom-book-btn {
  height: 70px !important;
  width: 300px;
}

@media screen and (max-width: 700px) {
  .panel-bg {
    height: 1000px;
  }
}
@media screen and (min-width: 1600px) {
  .panel-bg {
    height: 1300px;
  }
}
@media screen and (min-width: 1800px) {
  .panel-bg {
    height: 1500px;
  }
}
</style>
