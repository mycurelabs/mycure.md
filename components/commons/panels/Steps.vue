<template lang="pug">
  generic-blue-bg
    v-container.white--text
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify:'center' }")
          v-col(cols="12")
            v-row(justify="center")
              v-col(cols="12" sm="6").text-center
                h1.mc-h2 {{ title || 'All these in 3 Simple Steps!' }}
                p.mc-b2.white--text.mb-0 {{ description }}
            v-row
              v-col.py-7
            v-row(v-if="$isMobile" justify="center")
              v-col(cols="12" v-for="(step, index) in steps" :key="index" align="center")
                picture-source(
                  extension-exclusive
                  custom-path="commons/"
                  :image="(index + 1).toString()"
                  image-alt="Steps number"
                  image-file-extension=".png"
                  :image-width="$isWideScreen ? '100' : '80'"
                  :image-height="$isWideScreen ? '100' : '80'"
                ).mr-3.ml-2
                v-col(:cols="stepColSize")
                  p.mc-h3 {{ step.title }}
                  p.mc-b3.font-open-sans.white--text {{ step.description }}
            v-row(v-else justify="center")
              v-col(cols="12").pa-0
                v-row(justify="center")
                  v-col(cols="4" v-for="(step, index, key) in steps" :key="key" align="center")
                    picture-source(
                      extension-exclusive
                      custom-path="commons/"
                      :image="(index + 1).toString()"
                      image-alt="Steps number"
                      image-file-extension=".png"
                      :image-width="$isWideScreen ? '100' : '80'"
                      :image-height="$isWideScreen ? '100' : '80'"
                    )
                  template
                    v-col(cols="4" v-for="(step, index, key) in steps" :key="key" align="center")
                      v-col(:cols="stepColSize").py-0
                        p.mc-h3.mb-0 {{ step.title }}
                  template
                    v-col(cols="4" v-for="(step, index, key) in steps" :key="key" align="center")
                      v-col(:cols="stepColSize")
                        p.mc-b3.font-open-sans.white--text {{ step.description }}
            div(v-if="!hideBtn")
              v-row
                v-col.py-3
              v-row(justify="center")
                signup-button(
                  depressed
                  color="success"
                  class="rounded-md"
                  :width="!$isWideScreen ? '228px' : '300'"
                  :height="!$isWideScreen ? '59px' : '73.68'"
                ).text-none
                  span.mc-btn1 {{ notFree ? 'Get Started' : 'Get Started Free' }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    GenericBlueBg,
    GenericPanel,
    PictureSource,
  },
  props: {
    steps: {
      type: Array,
      default: undefined,
    },
    stepColSize: {
      type: [Number, String],
      default: '9',
    },
    title: {
      type: String,
      default: null,
    },
    description: {
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
};
</script>
