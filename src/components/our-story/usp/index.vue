<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspMetaTitle"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
      @btnClick="watchVideo"
    )
    our-story-video(v-model="videoDialog")
</template>

<script>
// utils
import { parseTextWithNewLine } from '@/utils';
// constants
import USP_CONTENTS from './constants.json';
// components
import UspTemplate from '../../commons/usp';
import OurStoryVideo from './our-story-video';

export default {
  components: {
    UspTemplate,
    OurStoryVideo
  },
  data () {
    return {
      uspContents: USP_CONTENTS,
      videoDialog: false
    };
  },
  computed: {
    uspTitle () {
      const title = this.uspContents.title;
      return !this.$isMobile ? parseTextWithNewLine(title, ['ends']) : title ;
    },
    uspMetaTitle () {
      const metaTitle = this.uspContents.metaTitle;
      return metaTitle;
    }
  },
  methods: {
    watchVideo () {
      this.videoDialog = true;
    }
  }
};
</script>