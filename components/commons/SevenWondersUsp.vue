<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '400px' : '520px' }"
    )
      v-col(cols="8" md="5" :class="{ 'order-last' : !$isMobile }")
        //- v-img(
        //-   :src="require('~/assets/images/patients/usp-patients.png')"
        //-   width="100%"
        //-   alt="patients-usp"
        //- )
      v-col(cols="12" md="7" :class="{ 'text-center' : $isMobile }")
        p(:class="metaTitleClasses").font-weight-bold {{ uspMetaTitle }}
        h1(:class="titleClasses") {{ uspTitle  }}
        p(:class="descriptionClasses").grey--text {{ uspDescription }}
        v-btn(
          depressed
          color="primary"
          x-large
        ).text-none.letter-spacing-normal.font-xs Talk to Us
</template>

<script>
import classBinder from '~/utils/class-binder';

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
  },
  computed: {
    // NOTE: For customizations
    uspTitle () {
      return this.title;
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
        mobile: ['font-xl'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
      return ['mb-8', classes];
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
