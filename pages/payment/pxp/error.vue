<template lang="pug">
  v-container
    v-row
      v-col.text-center
        label
          v-icon(style="font-size: 75px; color: red;") {{ mdiClose }}
        h1.mb-5.text--black Payment Error
        p There was an error!
        p You may now close this window.
</template>

<script>
import { mdiClose } from '@mdi/js';
export default {
  layout: 'empty',
  data () {
    return {
      mdiClose,
    };
  },
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
