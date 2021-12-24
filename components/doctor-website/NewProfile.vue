<template lang="pug">
  v-card(:color="$isMobile ? '#f9f9f9' : 'white'" flat width="100%" :class="$isMobile ? 'px-4' : 'px-12'").py-8.rounded-lg
    v-col
      v-row
        v-col(cols="12" md="6" :class="{'text-center': $isMobile}")
          h3.mc-h3.mb-4 About Me
          p.mc-b3 {{ bio }}
          br
          br
          h4.mc-h3.mb-4.black--text Education
          div(v-for="(educ, key) in education" :key="key").mt-3
            span.mc-b4 {{ educ | format-school }}
            br
            span.mc-b4 {{ educ.from }} - {{ educ.to }}
        v-spacer
        v-divider(vertical).mx-10
        v-col(cols="12" md="4" :class="{'text-center': $isMobile}")
          h4.mc-h3.mb-4.black--text Tags
          v-chip(v-for="(specialty, key) in specialties" :key="key" small color="#ECEDEF").mx-1.mt-1.font-12
            span.mc-b4 {{ specialty }}
        v-spacer
</template>

<script>
export default {
  filters: {
    formatSchool (educ) {
      if (!educ.degree) return educ.school;
      return `${educ.degree} - ${educ.school}`;
    },
    formatPracticingSince (date) {
      if (`${date}`.length > 4) return new Date(date).getFullYear();
      return date;
    },
  },
  props: {
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
      socialMenu: false,
    };
  },
  computed: {
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
