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
              img(:src="picUrl").img-border
            br
            br
            span.font-weight-bold.mc-title-set-2 Dr. {{ fullName }}
            v-row(justify="center").mc-content-set-5.black--text
              //- Professional Info
              v-col(cols="10" md="8" v-if="hasProfessionalInfo").text-center.mb-8
                span {{ specialties.slice(0, 3).join(', ')}}
                p(v-if="practicingYears").font-open-sans.font-weight-medium.mb-0 {{practicingYears}} Years of Experience
          //- Analytics
          v-col(cols="12" md="8")
            v-row(justify="center")
              v-col(v-if="metricData[metric.value] > 100 || metric.title !== 'lives saved'" v-for="(metric, key) in metricMappings" :key="key" cols="4" :sm="$isWideScreen ? '2' : '3'").text-center
                v-avatar(size="50" :color="metric.color").lighten-3
                  v-icon(:color="metric.color").darken-1 {{ metric.icon }}
                br
                span.lh-title
                  span.font-14.font-weight-bold {{ metricData[metric.value] }}
                  br
                  span.font-12 {{ metric.title }}
          //- Consult btn
          v-col(cols="10").text-center.justify-center
            v-btn(
              hover
              rounded
              depressed
              x-large
              :class="{ 'font-11' : $isMobile }"
              :disabled="!isBookable"
              @click="onBook"
            ).text-none.font-weight-bold.custom-book-btn.font-18.white--text {{ !isBookable && !isPreviewMode ? 'The doctor is out' : 'Book Now' }}
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
    metrics: {
      type: Object,
      default: () => ({}),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBookable: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.metricMappings = [
      {
        icon: 'mdi-eye',
        title: 'views',
        value: 'websiteVisits',
        color: 'info',
      },
      {
        icon: 'mdi-pulse',
        title: 'lives saved',
        value: 'patients',
        color: 'error',
      },
      {
        icon: 'mdi-bookshelf',
        title: 'records',
        value: 'records',
        color: 'success',
      },
      // {
      //   icon: 'mdi-heart-outline',
      //   title: 'hearts',
      //   value: 'hearts',
      //   color: 'error',
      // },
    ];
    return {
      canUseWebp: null,
    };
  },
  computed: {
    metricData () {
      return {
        websiteVisits: this.metrics.websiteVisits || 0,
        patients: this.metrics.patients || 0,
        records: this.metrics.records || 0,
        // - hearts: this.metrics.hearts || 0,
      };
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
    backgroundImage () {
      // return this.canUseWebp ? 'bg-webp' : 'bg-png';
      return this.$isMobile ? 'bg-png' : 'bg-newpng';
    },
  },
  async mounted () {
    this.canUseWebp = await canUseWebp();
  },
  methods: {
    onBook () {
      if (this.isPreviewMode) return;
      this.$emit('book');
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
.bg-png {
  background-image: url('../../assets/images/doctor-website/Doctor Website - Background Clouds.png');
}
.bg-webp {
  background-image: url('../../assets/images/doctor-website/Doctor Website - Background Clouds.webp');
}
.bg-newpng {
  background-image: url('../../assets/images/doctor-website/Doctor Clinics BG.png');
}
.panel-bg {
  background-size: cover;
  width: 100%;
  height: 1000px;
  position: relative;
  /* top: 0;
  position: absolute; */
}
.custom-book-btn {
  height: 50px !important;
  width: 250px;
  background: linear-gradient(258.57deg, #59A3F1 14.32%, #3371B0 76.89%);
}
.book-text:hover {
  cursor: pointer;
}
.img-border {
  border: 8px solid white;
}
.btn-banner {
  width: 25%;
  margin: auto;
}

@media screen and (max-width: 500px) {
  .btn-banner {
    width: 50%;
  }
  .custom-book-btn {
    width: 200px;
  }
}

@media screen and (max-width: 700px) {
  .panel-bg {
    height: 1000px;
  }
}

@media screen and (min-width: 1300px) {
  .btn-banner {
    width: 200px;
  }
}
@media screen and (min-width: 1600px) {
  .panel-bg {
    height: 1100px;
  }
}
@media screen and (min-width: 1800px) {
  .panel-bg {
    height: 1300px;
  }
}
</style>
