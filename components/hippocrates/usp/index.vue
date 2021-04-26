<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspMetaTitle="uspContents.metaTitle"
      :uspDescription="uspDescription"
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
import USP_CONTENTS from './hippocrates-constants.json';
import HOME_USP_CONTENTS from './home-constants.json';
// components
import UspTemplate from '~/components/commons/usp';
// utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  components: {
    UspTemplate,
  },
  data () {
    return {};
  },
  computed: {
    uspContents () {
      return this.route === 'hippocrates' ? USP_CONTENTS : HOME_USP_CONTENTS;
    },
    uspTitle () {
      const title = this.uspContents.title;
      if (this.route === 'hippocrates') {
        return !this.$isMobile
          ? parseTextWithNewLine(title, ['and', 'take'])
          : parseTextWithNewLine(title, ['and', 'way', 'care of']);
      } else {
        return !this.$isMobile
          ? parseTextWithNewLine(title, ['Arts'])
          : parseTextWithNewLine(title, ['Medical']);
      }
    },
    uspDescription () {
      const description = this.uspContents.description || '';
      if (description && this.route === 'index') {
        return !this.$isMobile
          ? parseTextWithNewLine(description, ['compromising'])
          : description;
      } else if (description && this.route === 'hippocrates') {
        return description;
      } else {
        return '';
      }
    },
    route () {
      return this.$nuxt.$route.name;
    },
  },
};
</script>
