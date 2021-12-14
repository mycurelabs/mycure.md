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
              @click="onRedirect('Services')"
            ).text-none.mc-h7.white--text.font-weight-light Services
            v-btn(
              text
              @click="onRedirect('Our Doctors')"
            ).text-none.mc-h7.white--text.font-weight-light Our Doctors
            v-btn(
              text
              @click="onRedirect('About Clinic')"
            ).text-none.mc-h7.white--text.font-weight-light About Clinic
            v-btn(
              text
              @click="onRedirect('Contact Us')"
            ).text-none.mc-h7.white--text.font-weight-light Contact Us
            share-button(color="white" @clip-success="$emit('clipSuccess')")
        v-col(v-else cols="10").pt-8
          v-row(align="center")
            nuxt-link(to="/")
              img(
                src="~/assets/images/mycure-logo-white.png"
                width="120"
                alt="MYCURE logo"
              ).mt-1
            v-spacer
            share-button(color="white" is-small @clip-success="$emit('clipSuccess')")
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
            h1.mc-h2 {{ clinicName }}
            br
            p.mc-b2.font-weight-light.white--text.mb-0 {{ formattedAddress }}
            p.mc-b2.font-weight-light.white--text {{ clinicPhone }}
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
            ).text-none.custom-book-btn.white--text.rounded-lg.mc-btn1 {{ !isBookable && !isPreviewMode ? 'This Clinic is Closed' : 'Book an Appointment' }}
</template>

<script>
import {
  mdiShareVariant,
  mdiMenu,
  mdiClose,
} from '@mdi/js';
import ShareButton from '~/components/doctor-website/ShareButton';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
export default {
  components: {
    GenericBlueBg,
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
    clinicName: {
      type: String,
      default: null,
    },
    formattedAddress: {
      type: String,
      default: null,
    },
    clinicPhone: {
      type: String,
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
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.tabs = ['Profile', 'Facilities', 'Services', 'Learning Corner'];
    return {
      mdiShareVariant,
      drawer: false,
      mdiMenu,
      mdiClose,
    };
  },
  methods: {
    onBook () {
      if (this.isPreviewMode) return;
      this.$emit('book');
    },
    onRedirect (type) {
      console.log('success');
      if (this.isPreviewMode) return;
      this.$emit('redirect', type);
    },
  },
};
</script>

<style scoped>

@media screen and (max-width: 700px) {
  .panel-bg {
    height: 1000px;
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
