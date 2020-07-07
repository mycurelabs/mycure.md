<template lang="pug">
  v-container.py-12
    //- WEB
    v-row(v-if="!$isMobile" justify="center" align="center" no-gutters)
      v-col(justify="start" align-self="center" md="5").ml-2.mr-n2
        h1.text-justify.font-30.lh-title.font-weight-light {{ panelTitle }}
        br
        p.font-16.font-gray.text-justify {{ panelContent }}
        v-list(dense).ml-n5
          v-list-item(
            v-for="(item, key) in checkList"
            :key="key"
          )
            v-list-item-action
              img(v-lazy="require('~/assets/images/mycure-web-bullet-check.png')" alt="Check icon")
            v-list-item-content
              span.font-16.font-gray {{ item }}
      v-col(md="5" align="center")
        img(v-lazy="panelImageSrc" width="75%" :alt="panelImage").panel-image
    //- MOBILE
    v-row(v-if="$isMobile").pt-5
      v-col(cols="12").text-center
        h1.font-30.lh-title.pb-5 {{ panelTitle }}
        br
        img(width="85%" v-lazy="panelImageSrc" :alt="panelImage").pb-3
        br
        p.font-16.font-gray.text-justify.mt-3 {{ panelContent }}
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in checkList"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span.font-16.font-gray {{ item }}
        br
</template>

<script>
export default {
  data () {
    this.panelTitle = 'APIs built to make your existing health systems more powerful.';
    this.panelContent = 'MYCURE is made to augment your IT innovations. We created our APIs to be simple to use, excellent in performance, and boundless in possibilities.';
    this.checkList = [
      'Integrate with your database systems',
      'Customize the CMS as needed',
      'Complete documentation',
    ];
    this.panelImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-F-features-02-api';
    return {
    };
  },
  computed: {
    panelImageSrc () {
      return require(`~/assets/images/virtual-clinic-home/${this.panelImage}.png`);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .panel-image{
    margin-right: -25%;
  }
}
</style>
