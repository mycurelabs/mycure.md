<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspContents.metaTitle"
      :btnRoute="uspContents.btnRoute"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
      :customPath="uspContents.customPath"
      :title-mobile-size="30"
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
    return {
      uspContents: USP_CONTENTS,
    };
  },
  computed: {
    uspTitle () {
      const title = USP_CONTENTS.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['clinic', 'tailored'])
        : parseTextWithNewLine(title, ['Customizable', 'management', 'tailored', 'your']);
    },
  },
};
</script>
