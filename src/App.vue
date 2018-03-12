<template lang="pug">
  v-app#app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn-larger {
  height: 55px;
}

.bg-cms {
  background-color: #9c27b0 !important;
}
</style>
