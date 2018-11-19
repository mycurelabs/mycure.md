<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 8
    div.panel-8.pt-5.pb-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center
            center
              div.hr-blue
            br
            h1 Caring the extra mile is kinda our thing.
            br  
            p More than a business, 
              strong we are a community.
            p(style="line-height:.4em;") More than a product, 
              strong MYCURE is an advocacy.
            br
            b-button(style="margin-top: .8em;" variant="primary" size="sm" :to="{name: 'our-story'}") READ OUR STORY
</template>

<script>
</script>

<style scoped>
  .panel-8 {
    /* height: 100vh; */
    /* background-color: white; */
  }
</style>