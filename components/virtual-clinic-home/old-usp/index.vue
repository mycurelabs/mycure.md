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
import { parseTextWithNewLine } from '~/utils/newline';
import UspTemplate from '~/components/commons/usp';
export default {
  components: {
    UspTemplate,
  },
  data () {
    return {
      uspContents: {
        metaTitle: 'MYCURE Complete Clinic Practice Management System',
        title: 'Optimize your clinic workflows and maximize its potential',
        description: 'Manage and monitor your daily operations using MYCURE, an advanced clinic management system that gives real-time medical and business insights.',
        btnId: 'home-usp-btn',
        btnText: 'Get Started',
        coverImg: 'mycure-homepage-usp-cover',
      },
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
