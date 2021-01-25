<template lang="pug">
  div(:class="{ 'need-more-container' : !$isMobile, 'mobile-container' : $isMobile }")
    v-row(align="center" justify="center")
      v-col(cols="6" md="8").pa-md-8.grow
        h1(:class="{ 'font-22' : $isMobile }").white--text Need more?
        p(:class="{ 'font-12' : $isMobile }").white--text.mb-0.mt-2 Need more? Enhance your facility’s capabilities with MYCURE’s full suite of modules!
      v-col.pa-md-8.shrink.text-center
        v-btn(
          rounded
          color="primary"
          target="_blank"
          :x-large="!$isMobile"
          :to="{ name: 'features' }"
        ).font-weight-bold.text-none Learn more
</template>

<style scoped>
.need-more-container {
  background-color: #085B77;
  border-radius: 10px;
}
.mobile-container{
  background-color: #085B77;
}
</style>
