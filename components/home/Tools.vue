<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="8").text-center
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Flexible. Scalable.
        p.font-s.grey--text Customizable based on what you need
        p.font-xs.font-open-sans MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
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
            h3(:class="{'font-m': !$isMobile, 'font-s': $isMobile}") {{ tool.name }}
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
