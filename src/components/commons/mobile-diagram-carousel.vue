<template lang="pug">
  div
    v-layout(row justify-center)
      div
        //- https://ssense.github.io/vue-carousel/
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
            img(:src="require(`@/assets/images/${customSlidePath}${slide}.png`)" :alt="slide" width="100%")
    br
    v-layout(row justify-center align-center v-for="(item, key) in items" :key="key").pt-3
      v-flex(xs3).text-xs-center
        img(v-if="item.icon" :src="require(`@/assets/images/${customItemPath}${item.icon}.png`)" :alt="item.title")
      v-flex(xs8 offset-xs1)
        b {{ item.title }}
        p {{ item.description}}
</template>

<script>
export default {
  props: {
    customSlidePath: {
      type: String,
      default: ''
    },
    slides: {
      type: Array,
      default: () => []
    },
    customItemPath: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>