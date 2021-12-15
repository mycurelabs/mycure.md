<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" :md="titleColSize" :xl="titleColSizeXl").text-center
          span(v-if="metaTitle" :class="{'white--text': hasBlueBg}").mc-h7 {{ metaTitle }}
          slot(name="title")
            h2(:class="{'white--text': hasBlueBg}").mc-h2 {{ title }}
        v-col(cols="12" :md="contentColSize" :xl="contentColSizeXl").text-center.py-3
          div
            slot(name="description")
              p(:class="{'white--text': hasBlueBg}").mc-b2 {{ description }}
        v-col(cols="12").pt-10
          v-row(justify="center")
            v-col(cols="12" :sm="iconContainerColSize ? iconContainerColSize : '10'")
              v-row(justify="center")
                slot(name="items")
                  v-col(v-bind="iconColumnBindings" v-for="(item, key) in items" :key="key").text-center
                    v-row(justify="center")
                      v-col(v-bind="eachIconCol" :class="{'py-1': !$isMobile}")
                        picture-source(
                          v-if="item.icon"
                          :extension-exclusive="extensionExclusive"
                          :custom-path="imageDir"
                          :image="item.icon"
                          :image-alt="item.alt || item.title"
                          image-file-extension=".png"
                          :image-width="imageWidth ? imageWidth : defaultImageSize"
                          :image-height="imageHeight ? imageHeight : defaultImageSize"
                        )
                        br
                        h3(:class="{'white--text': hasBlueBg}").mc-h4 {{ item.title }}
                        p(v-if="item.description" :class="{'white--text': hasBlueBg}").mc-b4 {{ item.description }}
                        nuxt-link(v-if="!hideLearnMore && item.route" :to="{ name: item.route }" :class="{'white--text': hasBlueBg}").learnLink.mc-hyp1 Learn more
        slot(name="additional-content")
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
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
    items: {
      type: Array,
      default: () => ([]),
    },
    imageDir: {
      type: String,
      default: '',
    },
    imageWidth: {
      type: [String, Number],
      default: undefined,
    },
    imageHeight: {
      type: [String, Number],
      default: undefined,
    },
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
    hideLearnMore: {
      type: Boolean,
      default: false,
    },
    // - Space for title
    titleColSize: {
      type: [Number, String],
      default: '8',
    },
    // - Space for title
    titleColSizeXl: {
      type: [Number, String],
      default: '8',
    },
    // - Space for description
    contentColSize: {
      type: [Number, String],
      default: '8',
    },
    // - Space for description
    contentColSizeXl: {
      type: [Number, String],
      default: '8',
    },
    // - Space for icons container
    iconContainerColSize: {
      type: [Number, String],
      default: undefined,
    },
    // - Space for each icon
    iconColumnBindings: {
      type: Object,
      default: () => ({
        cols: 6,
        md: 4,
      }),
    },
    // - Height of panel
    panelHeight: {
      type: String,
      default: '50vh',
    },
    // - Space to occupy for each icon given the available space
    eachIconCol: {
      type: Object,
      default: () => ({
        cols: 10,
      }),
    },
    hasBlueBg: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {};
  },
  computed: {
    itemTextClasses () {
      return [
        classBinder(this, {
          mobile: ['font-14'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
    defaultImageSize () {
      return this.$isMobile ? '77px' : (this.$isRegularScreen ? '90px' : '120px');
    },
  },
};
</script>

<style scoped>
.learnLink {
  text-decoration: none;
}
</style>
