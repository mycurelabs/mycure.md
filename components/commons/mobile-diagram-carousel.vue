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
              img(:src="require(`@/assets/images/${customSlidePath}${slide}.png`)" :alt="slide" width="100%")
    br
    v-row(v-for="(item, key) in items" :key="key" align="center" justify="center").pt-3
      v-col(cols="3").text-center
        img(
          v-if="item.icon"
          :src="require(`@/assets/images/${item.customPath ? item.customPath : customItemPath}${item.icon}.png`)"
          :alt="item.title")
      v-col(cols="8" offset="1")
        b {{item.title}}
        p {{item.description}}
</template>

<script>
export default {
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
  },
};
</script>
