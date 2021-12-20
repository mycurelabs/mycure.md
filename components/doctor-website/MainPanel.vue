<template lang="pug">
  generic-blue-bg(large-dots).panel-bg
    v-container.white--text
      v-row(justify="center")
        //- Logo
        v-col(v-if="!$isMobile" cols="10")
          v-row(align="center").px-3.py-5
            nuxt-link(to="/")
              img(
                src="~/assets/images/mycure-logo-white.png"
                width="120"
                alt="MYCURE logo"
              ).mt-1
            v-spacer
            v-btn(
              text
              @click="onRedirect('Profile')"
            ).text-none.mc-h7.white--text.font-weight-light Profile
            v-btn(
              text
              @click="onRedirect('Facilities')"
            ).text-none.mc-h7.white--text.font-weight-light Facilities
            v-btn(
              text
              @click="onRedirect('Services')"
            ).text-none.mc-h7.white--text.font-weight-light Services
            v-btn(
              text
              @click="onRedirect('Learning Corner')"
            ).text-none.mc-h7.white--text.font-weight-light Learning Corner
            share-button(color="white" @clipSuccess="$emit('clipSuccess')")
        v-col(v-else cols="10").pt-8
          v-row(align="center")
            nuxt-link(to="/")
              img(
                src="~/assets/images/mycure-logo-white.png"
                width="120"
                alt="MYCURE logo"
              ).mt-1
            v-spacer
            share-button(color="white" is-small @clipSuccess="$emit('clipSuccess')")
            v-menu(offset-y)
              template(v-slot:activator="{ on }")
                v-btn(
                  v-on="on"
                  icon
                  depressed
                  tile
                ).text-none.font-12.font-weight-medium
                  v-icon(color="white") {{ mdiMenu }}
              v-list
                v-list-item(
                  v-for="(tab, key) in tabs"
                  :key="key"
                  @click="onRedirect(tab)"
                )
                  v-list-item-title {{ tab }}
        generic-panel(:row-bindings="{ justify: 'center' }")
          //- Profile picture and main info
          v-col(cols="12").text-center
            v-avatar(size="200").elevation-5
              img(:src="picUrl").img-border
            br
            br
            h1.mc-h2 {{ fullName }}
            p(v-if="practicingYear").mc-h7.white--text.mb-0.font-weight-light {{ `PRACTICING SINCE ${practicingYear}` }}
            br
            span(v-if="!$isMobile").mc-b2.font-weight-light.white--text {{ specialties.slice(0, 3).join(' | ')}}
            div(v-else).text-center
              p(v-for="specialty in specialties.slice(0, 4)").mb-0.mc-b2.font-weight-light.white--text {{ specialty }}
            //- v-row(justify="center")
            //-   //- p(v-if="practicingYears").mc-h7.white--text.mb-0 {{ `${practicingYears} Year${ practicingYears > 1 ? 's' : ''} of Experience` }}
            //-   //- Professional Info
            //-   v-col(cols="10" md="8" v-if="hasProfessionalInfo").text-center.mb-8
            //-     span {{ specialties.slice(0, 3).join(' | ')}}
          //- Analytics
          v-col(cols="12" md="6")
            v-row(justify="center")
              v-col(v-if="metricData[metric.value] > 100 || metric.title !== 'lives saved'" v-for="(metric, key) in metricMappings" :key="key" cols="4" :sm="$isWideScreen ? '2' : '3'").text-center
                picture-source(
                  image-file-extension=".webp"
                  :image="metric.imgIcon"
                  :image-alt="metric.imgIcon"
                  :image-width="$isMobile ? '50' : $isRegularScreen ? '50' : '50'"
                  :image-height="$isMobile ? '50' : $isRegularScreen ? '50' : '50'"
                  :extension-exclusive="true"
                  custom-path="doctor-website/"
                ).mb-2
                //- v-avatar(size="50" :color="metric.color").lighten-3.mb-2
                //-   v-icon(:color="metric.color" size="30").darken-1 {{ metric.icon }}
                br
                span.lh-title
                  span.mc-h5.white--text {{ metricData[metric.value] }}
                  br
                  span.font-12 {{ metric.title }}
          //- Consult btn
          v-col(cols="10").text-center.justify-center
            v-btn(
              hover
              depressed
              x-large
              color="success"
              :class="{ 'font-11' : $isMobile }"
              :disabled="!isBookable"
              @click="onBook"
            ).text-none.custom-book-btn.white--text.rounded-lg.mc-btn1 {{ !isBookable && !isPreviewMode ? 'The doctor is out' : 'Book Now' }}
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import {
  mdiEye,
  mdiPulse,
  mdiBookshelf,
  mdiShareVariant,
  mdiMenu,
  mdiClose,
} from '@mdi/js';
import ShareButton from '~/components/doctor-website/ShareButton';
import GenericPanel from '~/components/generic/GenericPanel';
import canUseWebp from '~/utils/can-use-webp';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    SocialSharing,
    GenericBlueBg,
    PictureSource,
    ShareButton,
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
    practicingYear: {
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
        icon: mdiEye,
        imgIcon: 'views-icon',
        title: 'views',
        value: 'websiteVisits',
        color: 'info',
      },
      {
        icon: mdiPulse,
        imgIcon: 'lives-icon',
        title: 'lives saved',
        value: 'patients',
        color: 'error',
      },
      {
        icon: mdiBookshelf,
        imgIcon: 'records-icon',
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
    this.tabs = ['Profile', 'Facilities', 'Services', 'Learning Corner'];
    return {
      canUseWebp: null,
      mdiShareVariant,
      drawer: false,
      mdiMenu,
      mdiClose,
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
    onRedirect (type) {
      if (this.isPreviewMode) return;
      this.$emit('redirect', type);
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
  background-image: url('../../assets/images/doctor-website/Doctor-Website-Background-Clouds.png');
}
.bg-webp {
  background-image: url('../../assets/images/doctor-website/Doctor-Website-Background-Clouds.webp');
}
.bg-newpng {
  background-image: url('../../assets/images/doctor-website/Doctor-Clinics-BG.png');
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
  /* background: linear-gradient(258.57deg, #59A3F1 14.32%, #3371B0 76.89%); */
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
