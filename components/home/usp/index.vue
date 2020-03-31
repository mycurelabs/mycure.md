<template lang="pug">
  div.white
    usp-template(
      :uspTitle="uspTitle"
      :uspDescription="uspDescription"
      :btnRoute="uspContents.route"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
      @btnClick="getStarted"
    )
</template>

<script>
import { USP_CONTENTS } from './constants';
import { parseTextWithNewLine } from '~/utils/newline';
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
      const title = this.uspContents.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['workflows'])
        : parseTextWithNewLine(title, ['your', 'workflows', 'maximize']);
    },
    uspDescription () {
      const description = this.uspContents.description;
      return !this.$isMobile ? parseTextWithNewLine(description, ['system']) : description;
    },
  },
  methods: {
    getStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.gradient-bg-color {
  background-color: #f0f0f0
}
</style>
