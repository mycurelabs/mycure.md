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
      :title-mobile-size="29"
    )
</template>

<script>
// constants
import USP_CONTENTS from './constants.json';
// components
import UspTemplate from '~/components/commons/usp';
// utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: {
    UspTemplate,
  },
  data () {
    this.uspContents = USP_CONTENTS;
    return {};
  },
  computed: {
    uspTitle () {
      const title = USP_CONTENTS.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['faster'])
        : parseTextWithNewLine(title, ['workflows,', 'results,']);
    },
  },
};
</script>
