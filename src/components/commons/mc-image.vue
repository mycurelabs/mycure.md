<template>
  <img 
    :src="currentSrc" 
    :id="id" 
    :class="customClass"
    :alt="alt" 
    :crossorigin="crossorigin"
    @mouseover="hover"
    @mouseout="mouseout"
  >
</template>

<script>
  export default {
    props: {
      id: String,
      customClass: String,
      width: Number,
      height: Number,
      src: String,
      errorSrc: String,
      loadingSrc: String,
      hoverSrc: String,
      alt: String,
      crossorigin: String
    },
    created() {
      console.log(this.src)
    },
    data() {
      return {
        currentSrc: this.src
      }
    },
    methods: {
      hover() {
        if(this.hoverSrc)
          this.currentSrc = this.hoverSrc;
      },
      mouseout() {
        this.currentSrc = this.src;
      }
    }
  }
</script>
