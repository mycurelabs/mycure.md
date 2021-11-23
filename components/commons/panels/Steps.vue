<template lang="pug">
  generic-blue-bg
    v-container.white--text
      v-row(justify="center").pa-5.py-16
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" sm="6").text-center
              h1.mc-h2 {{ title || 'All these in 3 Simple Steps!' }}
          v-row
            v-col.py-8
          v-row(justify="center")
            v-col(:cols="$isMobile ? 12 : 4" v-for="(step, index) in steps" :key="index" align="center")
              picture-source(
                extension-exclusive
                custom-path="commons/"
                :image="(index + 1).toString()"
                image-alt="Steps number"
                image-file-extension=".png"
                :image-width="$isWideScreen ? '100' : '80'"
                :image-height="$isWideScreen ? '100' : '80'"
              ).mr-3.ml-2
              v-col(cols="8")
                p.mc-h3 {{ step.title }}
                p.mc-b3.font-open-sans.white--text {{ step.description }}
          div(v-if="!hideBtn")
            v-row
              v-col.py-5
            v-row(justify="center")
              signup-button(
                depressed
                color="success"
                class="rounded-lg"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
              ).text-none
                span.generic-button-text {{ notFree ? 'Get Started' : 'Get Started Free' }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    GenericBlueBg,
    PictureSource,
  },
  props: {
    steps: {
      type: Array,
      default: undefined,
    },
    title: {
      type: String,
      default: null,
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
    notFree: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    numberSize () {
      const numberSize = [
        classBinder(this, {
          mobile: ['font-l'],
          regular: ['font-xl'],
          wide: ['font-2xl'],
        }),
        'font-weight-bold',
        'primary--text',
      ];
      return numberSize;
    },
  },
};
</script>
