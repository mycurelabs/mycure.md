<template lang="pug">
  v-dialog(v-model="dialog" width="600" persistent)
    v-card
      v-card-title This dialog is in preparation for Jem's idea of a comparison pop up.
      v-divider
      v-card-actions
        v-btn(flat color="error" @click="close") Close  
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
    methods: {
      close () {
        this.$emit('close', false);
      }
    }
  };
</script>

