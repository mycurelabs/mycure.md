<template lang="pug">
  v-container
    v-row
      v-col.text-center
        label
          v-icon(style="font-size: 75px; color: green;") {{ mdiCheck }}
        h1.mb-5.text--black Payment Success
        p You may now close this window.
</template>

<script>
import { mdiCheck } from '@mdi/js';
export default {
  layout: 'empty',
  data () {
    return {
      mdiCheck,
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
