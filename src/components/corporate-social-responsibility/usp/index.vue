<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspMetaTitle"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
      @btnClick="toggleChat"
    )
</template>

<script>
// utils
import { parseTextWithNewLine } from '@/utils';
// constants
import USP_CONTENTS from './constants.json';
// components
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
      return !this.$isMobile ? parseTextWithNewLine(title, ['cares for people']) : title ;
    },
    uspMetaTitle () {
      const metaTitle = this.uspContents.metaTitle;
      return metaTitle;
    }
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    }
  }
};
</script>