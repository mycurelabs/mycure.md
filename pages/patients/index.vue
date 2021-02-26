<template lang="pug">
  div
    | Usp here
    services(:fixed-search-bar="false")
</template>

<script>
import Services from '~/components/services';
export default {
  layout: 'home',
  components: {
    Services,
  },
};
</script>
