<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspMetaTitle"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :btnIconLeft="uspContents.btnIconLeft"
      :coverImg="uspContents.coverImg"
      :coverImgWidth="$isMobile ? '276px' : '1150px'"
      :coverImgHeight="$isMobile ? '264.22px' : '283.44px'"
      :customPath="uspContents.customPath"
      @btnClick="watchVideo"
    )
    our-story-video(v-model="videoDialog")
</template>

<script>
// constants
import USP_CONTENTS from './constants.json';
// components
import OurStoryVideo from './our-story-video';
import UspTemplate from '~/components/commons/usp';
// utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: {
    UspTemplate,
    OurStoryVideo,
  },
  data () {
    this.uspContents = USP_CONTENTS;
    return {
      videoDialog: false,
    };
  },
  computed: {
    uspTitle () {
      const title = this.uspContents.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['ends'])
        : parseTextWithNewLine(title, ['starts', 'ends']);
    },
    uspMetaTitle () {
      const metaTitle = this.uspContents.metaTitle;
      return metaTitle;
    },
  },
  methods: {
    watchVideo () {
      this.videoDialog = true;
    },
  },
};
</script>
