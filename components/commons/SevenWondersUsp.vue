<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '400px' : '650px' }"
    )
      v-col(cols="8" md="5" :class="{ 'order-last' : !$isMobile }")
        //- v-img(
        //-   :src="require('~/assets/images/patients/usp-patients.png')"
        //-   width="100%"
        //-   alt="patients-usp"
        //- )
      v-col(cols="12" md="7" :class="{ 'text-center' : $isMobile }")
        p(:class="metaTitleClasses").font-weight-bold {{ uspMetaTitle }}
        h1(:class="titleClasses").lh-title {{ uspTitle }}
        p(:class="descriptionClasses").grey--text {{ uspDescription }}
        v-btn(
          depressed
          color="primary"
          x-large
        ).text-none.letter-spacing-normal.font-xs Talk to Us
</template>

<script>
import classBinder from '~/utils/class-binder';
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    metaTitle: {
      type: String,
      default: '',
    },
    parseTitle: {
      type: Boolean,
      default: false,
    },
    parseTitleFields: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    // NOTE: For customizations
    uspTitle () {
      if (!this.parseTitle) return this.title;
      return parseTextWithNewLine(this.title, this.parseTitleFields);
    },
    uspMetaTitle () {
      return this.metaTitle;
    },
    uspDescription () {
      return this.description;
    },
    // Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-xl'],
      });
      return [
        'mb-8',
        { 'pre-white-space': this.parseTitle && !this.$isMobile },
        classes,
      ];
    },
    metaTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
      return ['font-open-sans', classes];
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
