<template lang="pug">
  div
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

.hr-blue {
  height: 2px;
  width: 150px;
  background-color: #0099cc;
}
</style>
