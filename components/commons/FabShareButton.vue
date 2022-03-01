<template lang="pug">
  v-speed-dial(v-model="shareBtn" direction="top" fixed left bottom transition="slide-y-reverse-transition")
    template(v-slot:activator)
      v-btn(v-model="shareBtn" fab :x-large="!$isMobile" color="primary")
        v-icon(:small="isSmall" v-if="shareBtn" color="white") {{ mdiClose }}
        v-icon(:small="isSmall" v-else :color="color") {{ mdiShareVariant }}
    div(v-for="(item, key) in socials" :key="key")
      v-tooltip(right)
        template( v-slot:activator="{ on, attrs }")
          v-btn(
            fab
            :small="$isMobile"
            rel="noopener noreferrer"
            :href="item.href"
            target="_blank"
            :color="item.color"
            v-bind="attrs"
            v-on="on"
            @click="getLink"
          )
            v-icon(color="white" :large="!$isMobile") {{ item.icon }}
        span {{ item.tooltip }}
    v-tooltip(right)
      template( v-slot:activator="{ on, attrs }")
        v-btn(fab :small="$isMobile" color="success" v-bind="attrs" v-on="on" @click="getShareLink")
          v-icon(color="white" :large="!$isMobile") {{ mdiLinkVariant }}
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
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.socials = [
      {
        href: `https://www.facebook.com/sharer/sharer.php?u=${this.url}`,
        color: '#4267B2',
        icon: mdiFacebook,
        tooltip: 'Share to Facebook',
      },
      {
        href: `https://twitter.com/intent/tweet?url=${this.url}`,
        color: '#00ACEE',
        icon: mdiTwitter,
        tooltip: 'Share to Twitter',
      },
      {
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`,
        color: '#0E76A8',
        icon: mdiLinkedin,
        tooltip: 'Share to LinkedIn',
      },
    ];
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
  watch: {
    shareBtn () {
      this.$emit('clicked');
    },
  },
  methods: {
    getShareLink () {
      navigator.clipboard.writeText(window.location.href);
      this.$emit('clipSuccess');
    },
    getLink () {
      this.url = window.location.href;
    },
  },
};
</script>
