<template lang="pug">
  div
    img(
      :src="src"
      :style="style"
      ref="imgRef"
    ).mc-animate-img
    pre {{style}}
</template>

<script>
  export default {
    props: [
      'src', 
      'scrollTop',
      'topStart', 'topEnd', 
      'bottomStart', 'bottomEnd', 
      'leftStart', 'leftEnd', 
      'rightStart', 'rightEnd'
    ],
    created() {
      this.$scrollspy().subscribe({
        next: (scroll) => this.scroll = scroll
      });
    },
    data() {
      return {
        scroll: 0,
        style: {
          top: this.topStart,
          bottom: this.bottomStart,
          left: this.leftStart,
          right: this.rightStart
        }
      }
    },
    watch: {
      scroll(val) {
        if(val > this.scrollTop) {
          this.style = {
            top: this.topEnd,
            bottom: this.bottomEnd,
            left: this.leftEnd,
            right: this.rightEnd
          }

        } else {
          this.style = {
            top: this.topStart,
            bottom: this.bottomStart,
            left: this.leftStart,
            right: this.rightStart
          }
        }
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style>
  .mc-animate-img {
    position: absolute;
    -webkit-transition: top 500ms; /* Safari */
    transition: top 500ms;
    -webkit-transition: bottom 500ms; /* Safari */
    transition: bottom 500ms;
    -webkit-transition: left 500ms; /* Safari */
    transition: left 500ms;
    -webkit-transition: right 500ms; /* Safari */
    transition: right 500ms;
  }
</style>

