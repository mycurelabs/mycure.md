<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspMetaTitle"
      :btnRoute="uspContents.btnRoute"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
    )
</template>

<script>
import USP_CONTENTS from './constants.json';
import { parseTextWithNewLine } from '@/utils';
import VueScrollTo from 'vue-scrollto';
import UspTemplate from '../../commons/usp';
export default {
  components: {
    UspTemplate
  },
  data () {
    return {
      uspContents: USP_CONTENTS,
    };
  },
  computed: {
    uspTitle () {
      const title = this.uspContents.title;
      return !this.$isMobile ? parseTextWithNewLine(title, ['time', 'more']) : title ;
    },
    uspMetaTitle () {
      const metaTitle = this.uspContents.metaTitle;
      return metaTitle;
    }
  }
};
</script>