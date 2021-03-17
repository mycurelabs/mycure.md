<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }") Your quality healthcare services deserve quality tools
        p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }").grey--text MYCURE ensures that you get the right tools to boost your health tech initiatives.
    v-row(justify="center")
      v-col(cols="12" md="8")
        v-row(justify="center")
          v-col(
            v-for="(tool, key) in tools"
            :key="key"
            cols="12"
            md="4"
          ).text-center
            v-avatar(size="70" color="primary")
            h3 {{ tool.name }}
</template>

<script>
export default {
  data () {
    this.tools = [
      { name: 'Privacy Standards' },
      { name: 'Interoperable Systems' },
      { name: 'Customizable Features' },
      { name: 'Feature 4 (name to be supplied' },
      { name: 'Feature 5 (name to be supplied)' },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}
</style>
