<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '500px' : '650px' }"
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
        template(v-if="slotted-btn")
          slot(name="usp btn")
        mc-btn(
          v-else
          depressed
          color="primary"
          x-large
          @click="$emit('click')"
        ).text-none.letter-spacing-normal.font-xs {{ btnText }}
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
      type: [Boolean, String],
      default: false,
    },
    parseTitleFields: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Meta title
     * @type {Boolean | String}
     * 'mobile | regular | wide'
     */
    parseMetaTitle: {
      type: [Boolean, String],
      default: false,
    },
    parseMetaTitleFields: {
      type: Array,
      default: () => ([]),
    },
    btnText: {
      type: String,
      default: 'Get Started',
    },
    // - If custom btn
    slottedBtn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // NOTE: For customizations
    uspTitle () {
      if (!this.toParse(this.parseTitle)) return this.title;
      return parseTextWithNewLine(this.title, this.parseTitleFields);
    },
    uspMetaTitle () {
      if (!this.toParse(this.parseMetaTitle)) return this.metaTitle;
      return parseTextWithNewLine(this.metaTitle, this.parseMetaTitleFields);
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
        { 'pre-white-space': this.toParse(this.parseTitle) },
        classes,
      ];
    },
    metaTitleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
      return [
        'font-open-sans',
        { 'pre-white-space': this.toParse(this.parseMetaTitle) },
        classes,
      ];
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
  methods: {
    toParse (parseFlag) {
      if (typeof (parseFlag) === 'string') {
        switch (parseFlag) {
          case 'mobile': return this.$isMobile;
          case 'regular': return this.$isRegularScreen;
          case 'wide': return this.$isWideScreen;
          default: return !this.$isMobile;
        }
      }
      return parseFlag && !this.$isMobile;
    },
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
