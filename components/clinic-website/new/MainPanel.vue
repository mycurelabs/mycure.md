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
              v-for="(tab, key) in tabs"
              :key="key"
              text
              @click="onRedirect(tab.value)"
            ).text-none.mc-h7.white--text.font-weight-light {{ tab.text }}
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
                  v-list-item-title {{ tab.text }}
        generic-panel(:row-bindings="{ justify: 'center' }")
          //- Profile picture and main info
          v-col(cols="12").text-center
            v-avatar(size="200").elevation-5
              img(:src="picUrl").img-border
            br
            br
            h1.mc-h2 {{ clinicName }}
            br
            v-row(justify="center" align="center")
              v-icon(small color="white").mr-1 {{ mdiMapMarker }}
              span.mc-b2.font-weight-light.white--text &nbsp;{{ formattedAddress }}
            v-row(justify="center" align="center")
              v-icon(small color="white").mr-2 {{ mdiPhone }}
              span.mc-b2.font-weight-light.white--text {{ clinicPhone }}
            br
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
  mdiMapMarker,
  mdiPhone,
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
    tabs: {
      type: Array,
      default: () => ([]),
    },
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
    return {
      mdiShareVariant,
      drawer: false,
      mdiMenu,
      mdiClose,
      mdiMapMarker,
      mdiPhone,
    };
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

.img-border {
  border: 8px solid white;
}
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
