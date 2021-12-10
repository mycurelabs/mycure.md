<template lang="pug">
  v-speed-dial(v-model="shareBtn" x-large direction="bottom" transition="slide-y-reverse-transition")
    template(v-slot:activator)
      v-btn(icon v-model="shareBtn" color="primary")
        v-icon(v-if="shareBtn" color="white") mdi-close
        v-icon(v-else color="white") mdi-share-variant
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab small color="#4267B2" v-bind="attrs" v-on="on")
          v-icon(color="white") mdi-facebook
      span Share to Facebook
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab small color="#4267B2" v-bind="attrs" v-on="on")
          v-icon(color="white") mdi-facebook
      span Share to Twitter
    //- v-tooltip(right)
    //-   template( v-slot:activator="{ on, attrs }")
    //-     v-btn(fab small v-bind="attrs" v-on="on").instag
    //-       v-icon(color="white") mdi-instagram
    //-   span Share to Instagram
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab small color="#0E76A8" v-bind="attrs" v-on="on")
          v-icon(color="white") mdi-linkedin
      span Share to LinkedIn
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab small color="success" v-bind="attrs" v-on="on" @click="getShareLink")
          v-icon(color="white") mdi-link-variant
      span Copy Link to Clipboard
</template>

<script>
// import {
//   mdiShareVariant,
//   mdiClose,
//   mdiF
// } from '@mdi/js';
export default {
  props: {
    url: {
      type: String,
      default: undefined,
    },
  },
  data () {
    return {
      shareBtn: null,
    };
  },
  methods: {
    getShareLink () {
      navigator.clipboard.writeText(window.location.href);
      this.clipSuccess = true;
    },
  },
};
</script>
