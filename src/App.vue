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

p {
  font-size: 16px;
}

.btn-larger {
  height: 55px;
}

.bg-cms {
  background-color: #9c27b0 !important;
}

.custom-router-link {
  text-decoration: none;
}

.font-weight-normal {
  font-weight: normal;
}

.panel-title {
  font-weight: bold;
}
</style>
