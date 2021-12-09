<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row.pa-3
            h2.mc.h2.mb-5 {{ title }}
            v-spacer
            //- v-btn(v-if="items.length > 3" icon)
            //-   v-icon(color="primary" @click="showPrev()") {{ mdiArrowLeftThinCircleOutline }}
            //- v-btn(v-if="items.length > 3" icon)
            //-   v-icon(color="primary" @click="showNext()") {{ mdiArrowRightThinCircleOutline }}
        v-col(cols="12")
          v-row(justify="center")
            v-col(:cols="$isMobile || noOfItems > 2 ? '12' : '8'" )
              vue-slick-carousel(
                ref="carousel"
                :dots="true"
                draggable
                :slidesToShow="$isMobile ? 1 : noOfItems",
                @afterChange="(slideIndex) => currentSlide = slideIndex"
              )
                template(slot="prevArrow")
                  v-btn(icon).ml-n4.custom-btn
                    v-icon(:large="!$isWideScreen" :x-large="$isWideScreen") {{ mdiChevronLeft }}
                template(slot="nextArrow")
                  v-btn(icon).mr-n4.custom-btn
                    v-icon(:large="!$isWideScreen" :x-large="$isWideScreen") {{ mdiChevronRight }}
                template(#customPaging="page")
                  v-icon(color="primary" small) {{ (page === currentSlide) ? mdiCircle : mdiCircleOutline }}
                div(v-for="(item,key) in items" :key="key")
                  v-col(cols="12").pa-0
                    v-row(justify="center")
                      v-col(cols="10" :class="{'text-center': $isMobile}")
                        picture-source(v-bind="getImageBindings(item.imageBindings)")
                        h3.mc-h3.mb-4 {{ item.title }}
                        p.mc-b3 {{ item.description }}
</template>

<script>
import { mdiChevronRight, mdiChevronLeft, mdiCircle, mdiCircleOutline } from '@mdi/js';
import VueSlickCarousel from 'vue-slick-carousel';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
// import canUseWebp from '~/utils/can-use-webp';
export default {
  components: {
    VueSlickCarousel,
    GenericPanel,
    PictureSource,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
    noOfItems: {
      type: Number,
      default: 3,
    },
  },
  data () {
    this.titleClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.metaTitleClasses = ['mc-h7'];
    return {
      // mdiArrowLeftThinCircleOutline,
      // mdiArrowRightThinCircleOutline,
      mdiChevronRight,
      mdiChevronLeft,
      mdiCircle,
      mdiCircleOutline,
      currentSlide: 0,
    };
  },
  methods: {
    // showNext () {
    //   this.$refs.carousel.next();
    // },
    // showPrev () {
    //   this.$refs.carousel.prev();
    // },
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
