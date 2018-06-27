<template lang="pug">
  div
    search(:completed.sync="searchResults")
    results(:data="searchResults")
    pre {{searchResults}}
</template>

<script>
  import search from './search';
  import results from './results';
  export default {
    components: {
      search,
      results
    },
    data() {
      return {
        searchResults: []
      }
    }
  }
</script>