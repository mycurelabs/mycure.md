<template lang="pug">
  v-container
    v-row
      v-col.text-center
        label
          v-icon(style="font-size: 75px; color: red;") mdi-close
        h1.mb-5.text--black Payment Error
        p There was an error!
        p You may now close this window.
</template>

<script>
export default {
  layout: 'empty',
  mounted () {
    this.close();
  },
  methods: {
    close () {
      window.close();
    },
  },
};
</script>
