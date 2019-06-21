<template lang="pug">
  v-dialog(
    v-model="dialog" 
    width="675" 
    style="border-radius: 20px"
  )
    v-card(style="border-radius: 20px")
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

