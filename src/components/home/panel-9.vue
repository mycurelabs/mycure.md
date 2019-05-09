<template lang="pug">
  //- Section 9 of Home Page
  div
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs3 offset-xs1)
          b.font-l What if you have a clinic system that works offline?
          p.font-xs.mt-3 Get seamless process flows without the hassle of slow internet connection. Introducing MYCURE's proprietary feature! The Syncbase Technology. 
          v-btn(
            color="#2e9fdf"
            large
            ).text-capitalize.white--text 
            h4.strong I want this
        v-flex(xs6).mx-5
          div.sample-vid.mc-blue    
            v-layout(justify-center)
              v-icon(size="80" color="white").mt-5.py-5 play_circle_filled
           

</template>

<script>

export default {
  
};

</script>

<style scoped>
.i-want-this {
  padding: 20px
}

.sample-vid {
  height: 300px;
}

.video {
  margin-top: 0;
  margin-bottom: 0;
}

</style>

