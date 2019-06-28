<template lang="pug">
  div.pt-5
    v-container.pt-5
      v-layout(justify-center).text-xs-center
        slot(name="question")
      v-layout(justify-center).text-xs-center
        slot(name="chatWindow")
    v-layout(row justify-center)
        img(v-if="!$isMobile" width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
        img(v-else width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
</template>
