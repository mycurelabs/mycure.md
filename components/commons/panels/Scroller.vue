<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(column="12")
        v-col(cols="12")
          v-row
            h2.mc.h2 {{ title }}
            v-spacer
            v-btn(icon :disabled="false")
              v-icon(color="primary" @click="showNext") {{ mdiArrowLeftThinCircleOutline }}
            v-btn(icon :disabled="false")
              v-icon(color="primary" @click="showPrev") {{ mdiArrowRightThinCircleOutline }}
        v-col(cols="12")
          vue-slick-carousel(
            ref="carousel"
            draggable
            :dots="false"
            :arrows="false"
            :slidesToShow="3",
          )
            div(v-for="(item,key) in items" :key="key")
              v-col(cols="12")
              picture-source(v-bind="getImageBindings(item.imageBindings)")
              h3.mc-h3 {{ item.title }}
              p.mc-b3 {{ item.description }}
</template>

<script>
import { mdiArrowLeftThinCircleOutline, mdiArrowRightThinCircleOutline } from '@mdi/js';
import VueSlickCarousel from 'vue-slick-carousel';
import GenericPanel from '~/components/generic/GenericPanel';
import PricingCard from '~/components/commons/PricingCard';
import SignupButton from '~/components/commons/SignupButton';
// import canUseWebp from '~/utils/can-use-webp';
export default {
  components: {
    VueSlickCarousel,
    GenericPanel,
    PricingCard,
    SignupButton,
  },
  props: {
    hasTrialOption: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  data () {
    this.titleClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.metaTitleClasses = ['mc-h7'];
    return {
      mdiArrowLeftThinCircleOutline,
      mdiArrowRightThinCircleOutline,
    };
  },
  computed: {
  },
  methods: {
    showNext () {
      this.$refs.carousel.next();
    },
    showPrev () {
      this.$refs.carousel.prev();
    },
    getImageBindings (imageBindings) {
      const [image, extension] = imageBindings.mobileImage && this.$isMobile
        ? imageBindings.mobileImage.split('.')
        : imageBindings.image.split('.');
      const bindings = {
        ...imageBindings,
        image,
        imageFileExtension: `.${extension}`,
        imageAlt: imageBindings.imageAlt || imageBindings.alt || this.content.title,
        extensionExclusive: imageBindings.extensionExclusive || (imageBindings.mobileImage && this.$isMobile),
        imageWidth: imageBindings.width,
        imageHeight: imageBindings.height,
      };
      return bindings;
    },
  },
};
</script>
