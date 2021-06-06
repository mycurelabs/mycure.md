<template lang="pug">
  generic-panel(
    :column="containerColumn"
    :row-bindings="genericPanelBindings"
    :disable-parent-padding="disableParentPadding"
  )
    v-col(v-if="centerPanelTitle" cols="12").text-center
      div.mb-10
        slot(name="center-panel-title")
          h2(:class="defaultCenterPanelTitleClasses") {{ centerPanelTitle }}
    v-col(v-bind="mediaColumnBindings" :class=" { 'order-last': contentAlignment, 'text-center': !$isMobile }")
      slot(name="image")
        img(:width="width" :src="image")
    v-col(v-bind="contentColumnBindings")
      div(:class="defaultSuperTitleClasses").mb-3
        slot(name="super-title")
          h3 {{superTitle}}
      div.mb-10
        slot(name="title")
          h2(v-if="title" :class="defaultTitleClasses") {{ title }}
      div.mb-10
        slot(name="content")
          p(v-if="content" :class="defaultContentClasses") {{ content }}
      div(v-if="!hideBtn")
        slot(name="cta-button")
          v-btn {{ ctaButtonText }}
    slot(name="additional-content")
</template>

<script>
import GenericPanel from './GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  props: {
    centerPanelTitle: {
      type: String,
      default: undefined,
    },
    superTitle: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    content: {
      type: String,
      default: undefined,
    },
    ctaButtonText: {
      type: String,
      default: 'Get Started',
    },
    contentRight: {
      type: Boolean,
      default: false,
    },
    containerColumn: {
      type: [Number, String],
      default: '10',
    },
    contentColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 6,
      }),
    },
    mediaColumnBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        md: 6,
      }),
    },
    genericPanelBindings: {
      type: Object,
      default: () => ({
        justify: 'center',
      }),
    },
    image: {
      type: String,
      default: undefined,
    },
    width: {
      type: String,
      default: '100%',
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
    disableParentPadding: {
      type: Boolean,
      default: false,
    },
    superTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    titleClasses: {
      type: [Array, Object],
      default: undefined,
    },
    contentClasses: {
      type: [Array, Object],
      default: undefined,
    },
    centerPanelTitleClasses: {
      type: [Array, Object],
      default: undefined,
    },
  },
  computed: {
    defaultSuperTitleClasses () {
      return this.superTitleClasses
        ? this.superTitleClasses
        : classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        });
    },
    defaultTitleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-2xl'],
        }),
        'font-weight-semibold',
      ];
      return this.titleClasses
        ? this.titleClasses
        : titleClasses;
    },
    defaultCenterPanelTitleClasses () {
      const centerPanelTitleClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
      ];
      return this.centerPanelTitleClasses
        ? this.centerPanelTitleClasses
        : centerPanelTitleClasses;
    },
    defaultContentClasses () {
      const contentClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return this.contentClasses
        ? this.contentClasses
        : contentClasses;
    },
    contentAlignment () {
      if (this.$isMobile) return false;
      return !this.contentRight;
    },
  },
};
</script>
