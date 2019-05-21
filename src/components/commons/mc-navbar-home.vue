<template lang="pug">
  div
    v-toolbar(flat fixed).white.px-3
      a(href="/")
        img(src="../../assets/images/mycure-header-logo.png" height="35")
      v-spacer
      v-btn(href="/electronic-medical-records" flat)
        strong.font-xs.tab FOR PRIVATE PRACTICE
      v-btn(href="/clinic-management-system" flat)
        strong.font-xs.tab FOR MULTISPECIALTY CLINICS
      v-btn(flat)
        strong.font-xs.tab LOGIN
      v-btn(
        color="info"
      )
        strong.font-xs.tab SIGN UP
</template>

<script>
  export default {};
</script>

<style scoped>
  .tab {
    letter-spacing: 0.5px;
  }
</style>
