<template lang="pug">
  v-card(flat width="100%").mt-n16
    v-card-text.text-center
      v-avatar(size="200").mt-n16.pa-3.elevation-5
        img(:src="picUrl")
    v-card-text
      h1(v-if="fullName" :class="mainTextClasses") Dr. {{ fullName }}
      p(v-if="practicingYears") {{practicingYears}} Years of Experience
      br
      v-row
        v-col(v-for="(metric, key) in metricMappings" :key="key" cols="12" md="4").text-center
          v-icon(:color="metric.color") {{ metric.icon }}
          br
          span(:class="`${metric.color}--text`").font-12.lh-title {{ metricData[metric.value] }} {{ metric.title }}
        v-col(cols="12" md="4").text-center
          v-menu(
            v-model="socialMenu"
            :close-on-content-click="false"
            offset-y
          )
            template(v-slot:activator="{ on }")
              v-btn(
                v-on="on"
                small
                rounded
                depressed
                text
                color="primary"
              ).text-none
                v-icon(color="primary" left) mdi-export-variant
                span.primary--text.font-12 Share
            v-card(color="primary" width="275")
              v-card-text
                h4.white--text Love this doctor? Let your friends know by sharing this website!
                v-row(no-gutters)
                  v-col(cols="12")
                    div.d-flex
                      share-network(network="facebook" :url="doctorLink" title="Doctor").social-image.pa-3
                        v-icon(large color="white") mdi-facebook
                      share-network(network="twitter" v-bind="networkBindings").social-image.pa-3
                        v-icon(large color="white") mdi-twitter
                      //- share-network(network="linkedin" v-bind="networkBindings").social-image
                      //-   img(src="~/assets/images/doctor-website/linkedin-logo-white.png" width="20%").pa-3
                      share-network(network="email" v-bind="networkBindings").social-image.pa-3
                        v-icon(large color="white") mdi-email
      br
      h2(:class="sectionTextClasses").primary--text About Me
      p {{ bio || 'I am ready to accomodate you! How can I help you?' }}
      div(v-if="specialties.length")
        h2(:class="sectionTextClasses").primary--text Tags
        v-chip(v-for="(specialty, key) in specialties" :key="key" small).mx-1.mt-1.font-12 {{ specialty }}
        br
        br
      div(v-if="practicingSince")
        h2(:class="sectionTextClasses").primary--text Practicing Since
        p {{ new Date(practicingSince).getFullYear() }} - {{ practicingYears }} Years of Experience
      //- Educational Background
      div(v-if="education.length")
        h2(:class="sectionTextClasses").primary--text Education
        div(v-for="(educ, key) in education" :key="key").mt-2
          span {{ educ | format-school }}
          br
          span {{ educ.from }} - {{ educ.to }}
      br
      book-appointment-btn(
        color="primary"
        btn-text="Book an Appointment"
        rounded
        block
        depressed
        x-large
        show-icon
        :class="{ 'font-11' : $isMobile }"
      ).text-none.font-weight-bold.elevation-5
</template>

<script>
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import classBinder from '~/utils/class-binder';
export default {
  filters: {
    formatSchool (educ) {
      if (!educ.degree) return educ.school;
      return `${educ.degree} - ${educ.school}`;
    },
  },
  components: {
    BookAppointmentBtn,
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
    firstName: {
      type: String,
      default: null,
    },
    practicingSince: {
      type: Number,
      default: null,
    },
    practicingYears: {
      type: Number,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    education: {
      type: Array,
      default: () => ([]),
    },
    metrics: {
      type: Object,
      default: () => ({}),
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
        color: 'success',
      },
      {
        icon: 'mdi-bookshelf',
        title: 'medical records',
        value: 'records',
        color: 'primary',
      },
      {
        icon: 'mdi-heart-outline',
        title: 'hearts',
        value: 'hearts',
        color: 'error',
      },
    ];
    return {
      // - UI State
      socialMenu: false,
    };
  },
  computed: {
    metricData () {
      console.log('metrics', this.metrics);
      return {
        websiteVisits: this.metrics.websiteVisits || 0,
        patients: this.metrics.patients || 0,
        records: this.metrics.records || 0,
        hearts: this.metrics.hearts || 0,
      };
    },
    mainTextClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-24'],
        wide: ['font-m'],
      });
    },
    sectionTextClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
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
    networkBindings () {
      return {
        title: this.windowTitle,
        url: this.doctorLink,
        description: `Book a consultation with ${this.firstName} today!`,
      };
    },
  },
};
</script>

<style scoped>
.social-image {
  text-decoration: none;
}
.social-image:hover {
  cursor: pointer !important;
}
.social-icon {
  z-index: 99;
}
</style>
