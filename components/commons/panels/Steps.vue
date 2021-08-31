<template lang="pug">
  v-container
    v-row(justify="center").pa-5.py-16
      v-col(cols="12")
        v-row(justify="center")
          h1.mc-title-set-1 All these in 3 Simple Steps!
        v-row
          v-col.py-10
        v-row(justify="center")
          v-col(cols="4" v-for="(step, index) in steps" :key="index")
            v-row
              v-col(cols="2")
                span(:class="numberSize") {{ index + 1 }}
              v-col
                p.font-weight-semibold.mc-content-set-1 {{ step.title }}
                p.mc-content-set-1 {{ step.description }}
        v-row(justify="center")
          signup-button(
            depressed
            rounded
            color="primary"
            facility-type="clinic"
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started Now
</template>

<script>
// import PictureSource from '~/components/commons/PictureSource';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    //     PictureSource,
  },
  props: {
    steps: {
      type: Array,
      default: undefined,
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
