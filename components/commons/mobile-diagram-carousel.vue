<template lang="pug">
  v-container
    v-row(justify="center")
      div
        client-only
          carousel(
            :per-page="1"
            :autoplay="true"
            :loop="true"
            :navigationEnabled="true"
            :adjustableHeight="true"
            :paginationEnabled="false"
            :navigationClickTargetSize="50"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          )
            slide(
              v-for="(slide,index) in slides"
              :key="index"
              :data-index="index+1"
            ).px-2
              picture-source(
                :customPath="customSlidePath"
                :image="slide"
                :imageAlt="slide"
                :imageFileExtension="slideImageExtension"
                :extension-exclusive="extensionExclusive"
              )
    br
    v-row(v-for="(item, key) in items" :key="key" align="center" justify="center").pt-3
      v-col(cols="3").text-center
        img(
          v-if="item.icon"
          v-lazy="require(`@/assets/images/${item.customPath ? item.customPath : customItemPath}${item.icon}${itemImageExtension}`)"
          width="80%"
          :alt="item.title"
        )
      v-col(cols="8" offset="1")
        b {{item.title}}
        p {{item.description}}
</template>

<script>
import PictureSource from './PictureSource';

export default {
  components: { PictureSource },
  props: {
    customSlidePath: {
      type: String,
      default: '',
    },
    slides: {
      type: Array,
      default: () => [],
    },
    customItemPath: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    slideImageExtension: {
      type: String,
      default: '.png',
    },
    itemImageExtension: {
      type: String,
      default: '.png',
    },
    extensionExclusive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
