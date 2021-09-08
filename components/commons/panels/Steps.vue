<template lang="pug">
  v-container
    v-row(justify="center").pa-5.py-16
      v-col(cols="12")
        v-row(justify="center")
          h1.mc-title-set-1 All these in 3 Simple Steps!
        v-row
          v-col.py-10
        v-row(justify="center")
          v-col(cols="12" sm="4" v-for="(step, index) in steps" :key="index")
            v-row.mb-4
              v-col(cols="4" align="center" justify="center").px-0.pb-0
                picture-source(
                  extension-exclusive
                  custom-path="commons/"
                  :image="index + 1"
                  image-alt="Steps number"
                  image-file-extension=".png"
                  :image-width="(index === 0) ? ($isWideScreen ? '66' : '46.52') : ($isWideScreen ? '117' : '82')"
                  :image-height="$isWideScreen ? '170' : '120'"
                ).mr-3.ml-2
              v-col
                p.font-weight-semibold.mc-list-content-set-1 {{ step.title }}
                p.mc-list-content-set-1.font-gray.font-open-sans {{ step.description }}
        div(v-if="!hideBtn")
          v-row
            v-col.py-5
          v-row(justify="center")
            signup-button(
              depressed
              color="success"
              facility-type="clinic"
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.generic-button-text Get Started Now
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
