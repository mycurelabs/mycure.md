<template lang="pug">
  services(read-only)
</template>

<script>
import Services from '~/components/services';
export default {
  layout: 'home',
  middleware: ['disable-route'],
  components: {
    Services,
  },
};
</script>
