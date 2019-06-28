<template lang="pug">
  v-dialog(
    v-model="dialog" 
    width="675"
  )
    v-card
      v-img(:src="require('@/assets/images/mycure-cms-web-solo-comparison-diagram.png')") 
</template>

<script>
  export default {
    props: {
      dialog: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        //
      };
    },
    watch: {
      dialog (val) {
        this.$emit('close',val);
      }
    }
  };
</script>

<style scoped>
  .roundedCard {
    border-radius: 20px;
  }
</style>


