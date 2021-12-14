<template lang="pug">
  v-speed-dial(v-model="shareBtn" x-large :direction="direction" transition="slide-y-reverse-transition")
    template(v-slot:activator)
      v-btn(icon v-model="shareBtn" color="primary")
        v-icon(v-if="shareBtn" color="white") {{ mdiClose }}
        v-icon(v-else :color="color") {{ mdiShareVariant }}
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(
          fab
          small
          rel="noopener noreferrer"
          :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
          color="#4267B2"
          v-bind="attrs"
          v-on="on"
          @click="getLink"
        )
          v-icon(color="white") {{ mdiFacebook }}
          //- https://www.facebook.com/sharer/sharer.php?u=
      span Share to Facebook
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(
          fab
          small
          rel="noopener noreferrer"
          :href="`https://twitter.com/intent/tweet?url=${url}`"
          color="#00ACEE"
          v-bind="attrs"
          v-on="on"
          @click="getLink"
        )
          v-icon(color="white") {{ mdiTwitter }}
          //- https://twitter.com/intent/tweet?url=
      span Share to Twitter
    //- v-tooltip(right)
    //-   template( v-slot:activator="{ on, attrs }")
    //-     v-btn(fab small v-bind="attrs" v-on="on").instag
    //-       v-icon(color="white") mdi-instagram
    //-   span Share to Instagram
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(
          fab
          small
          rel="noopener noreferrer"
          :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`"
          color="#0E76A8"
          v-bind="attrs"
          v-on="on"
          @click="getLink"
        )
          v-icon(color="white") {{ mdiLinkedin }}
          //- https://www.linkedin.com/sharing/share-offsite/?url=
      span Share to LinkedIn
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab small color="success" v-bind="attrs" v-on="on" @click="getShareLink")
          v-icon(color="white") {{ mdiLinkVariant }}
      span Copy Link to Clipboard
</template>

<script>
import {
  mdiShareVariant,
  mdiClose,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiLinkVariant,
} from '@mdi/js';
export default {
  props: {
    color: {
      type: String,
      default: 'white',
    },
    direction: {
      type: String,
      default: 'bottom',
    },
  },
  data () {
    return {
      shareBtn: null,
      mdiShareVariant,
      mdiClose,
      mdiFacebook,
      mdiTwitter,
      mdiLinkedin,
      mdiLinkVariant,
      url: null,
    };
  },
  methods: {
    getShareLink () {
      navigator.clipboard.writeText(window.location.href);
      this.clipSuccess = true;
    },
    getLink () {
      this.url = window.location.href;
    },
  },
};
</script>
