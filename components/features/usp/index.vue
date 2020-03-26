<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspMetaTitle"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :btnIconLeft="uspContents.btnIconLeft"
      :coverImg="uspContents.coverImg"
      @btnClick="showVideo"
      :title-mobile-size="28"
    )

    //- Video
    v-dialog(v-model="videoDialog" max-width="600px")
      v-layout(row justify-center)
        v-card(width="600")
          v-card-text
            iframe(
              align="middle"
              :height="!$isMobile ? '400' : '175'"
              :width="!$isMobile ? '570' : '300'"
              src="https://www.youtube.com/embed/YjymFVmKX_U"
              frameborder="0"
              allowfullscreen
            )
</template>

<script>
// constants
import USP_CONTENTS from './constants.json';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import UspTemplate from '~/components/commons/usp';

export default {
  components: {
    UspTemplate,
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
        ? parseTextWithNewLine(title, ['time', 'more'])
        : parseTextWithNewLine(title, ['friendly', 'time', 'features', 'more']);
    },
    uspMetaTitle () {
      const metaTitle = this.uspContents.metaTitle;
      return metaTitle;
    },
  },
  methods: {
    showVideo () {
      this.videoDialog = true;
    },
  },
};
</script>
