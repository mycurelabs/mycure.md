<template lang="pug">
v-card(:color="$isMobile ? '#f9f9f9' : 'white mt-n16'" flat width="100%")
    v-card-text.text-center
      v-avatar(size="200" :class="{'mt-n16': !$isMobile}").elevation-5
        img(:src="picUrl").img-border
    v-card-text
      h1(v-if="fullName" :class="mainTextClasses").lh-title.black--text Dr. {{ fullName }}
      br
      //- v-row(justify="center")
      //-   v-col(cols="6" sm="3").text-center
      //-     div.mb-6
      //-       v-menu(
      //-         v-model="socialMenu"
      //-         :close-on-content-click="false"
      //-         offset-y
      //-       )
      //-         template(v-slot:activator="{ on }")
      //-           div.text-center
      //-             v-btn(
      //-               v-on="on"
      //-               icon
      //-               small
      //-               depressed
      //-               color="primary"
      //-             ).text-none
      //-               v-icon(color="primary") mdi-export-variant
      //-             br
      //-             span.primary--text.font-12 Share
      //-         v-card(color="primary" width="275")
      //-           v-card-text
      //-             h4.white--text Love this doctor? Let your friends know by sharing this website!
      //-             v-row(no-gutters)
      //-               v-col(cols="12")
      //-                 div.d-flex
      //-                   share-network(network="facebook" v-bind="networkBindings").social-image.pa-3
      //-                     v-icon(large color="white") mdi-facebook
      //-                   share-network(network="twitter" v-bind="networkBindings").social-image.pa-3
      //-                     v-icon(large color="white") mdi-twitter
      //-                   //- share-network(network="linkedin" v-bind="networkBindings").social-image
      //-                   //-   img(src="~/assets/images/doctor-website/linkedin-logo-white.png" width="20%").pa-3
      //-                   share-network(network="email" v-bind="networkBindings").social-image.pa-3
      //-                     v-icon(large color="white") mdi-email
      //- br
      div.mb-6
        h2(:class="sectionTextClasses").secondary--text About Me
        v-clamp(autoresize :max-lines="3") {{ bio }}
          template(v-slot:after="{ expand, collapse, clamped, expanded }")
            a(v-if="clamped" @click="expand").primary--text See more...
            a(v-else-if="expanded" @click="collapse").primary--text See less
      div(v-if="specialties.length").mb-6
        h2(:class="sectionTextClasses").secondary--text Specializations
        v-chip(v-for="(specialty, key) in specialties" :key="key" small color="#ECEDEF").mx-1.mt-1.font-12
          span.font-gray {{ specialty }}
      div(v-if="practicingSince").mb-6
        h2(:class="sectionTextClasses").secondary--text Practicing Since
        p {{ new Date(practicingSince).getFullYear() }} - {{ practicingYears }} Years of Experience
      //- Educational Background
      div(v-if="education.length").mb-6
        h2(:class="sectionTextClasses").secondary--text Education
        div(v-for="(educ, key) in education" :key="key").mt-3
          span {{ educ | format-school }}
          br
          span {{ educ.from }} - {{ educ.to }}
      //- TODO: Confirm what functionality
      //- v-btn(
      //-   color="secondary"
      //-   block
      //-   depressed
      //-   x-large
      //-   :class="{ 'font-11' : $isMobile }"
      //-   :disabled="!isBookable"
      //-   @click="onBook"
      //- ).text-none.rounded-xl
      //-   v-icon(left) mdi-calendar-blank
      //-   span Book an Appointment
</template>

<script>
import VClamp from 'vue-clamp';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    VClamp,
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
      default: 'I am ready to accomodate you! How can I help you?',
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    education: {
      type: Array,
      default: () => ([]),
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
    return {
      // - UI State
      socialMenu: false,
    };
  },
  computed: {
    mainTextClasses () {
      return classBinder(this, {
        mobile: ['font-24', 'text-center'],
        regular: ['font-24'],
        wide: ['font-m'],
      });
    },
    sectionTextClasses () {
      return classBinder(this, {
        mobile: ['font-16'],
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
        title: this.fullName ? `Consult with Dr. ${this.fullName}` : this.windowTitle,
        url: this.doctorLink,
        description: `Book a consultation with ${this.firstName} today!`,
        media: this.picURL,
      };
    },
  },
  methods: {
    onBook () {
      if (this.isPreviewMode) return;
      return this.$emit('book');
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
.img-border {
  border: 8px solid white;
}
</style>
