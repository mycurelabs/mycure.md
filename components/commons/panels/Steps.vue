<template lang="pug">
  div.mx-n3.main-container
    div
      img(
        src="~/assets/images/commons/blue-gradient-bg.png"
        alt="blue gradient background"
        :style="backgroundStyle"
      )
      img(
        src="~/assets/images/commons/dots-left.png"
        alt="dots gradient"
      ).left-center
      img(
        src="~/assets/images/commons/dots-right.png"
        alt="dots gradient"
      ).right-center
    v-container.white--text.content
      v-row(justify="center").pa-5.py-16
        v-col(cols="12")
          v-row(justify="center")
            h1.mc-h2 All these in 3 Simple Steps!
          v-row
            v-col.py-10
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
import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    PictureSource,
  },
  props: {
    steps: {
      type: Array,
      default: undefined,
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
    backgroundStyle () {
      return {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
        objectFit: 'cover',
      };
    },
  },
};
</script>

<style scoped>
.main-container {
  position: relative;
}
.content {
  position: relative;
  z-index: 3;
}
.left-center {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -125px;
  z-index: 2;
}
.right-center {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -125px;
  z-index: 2;
}
</style>
