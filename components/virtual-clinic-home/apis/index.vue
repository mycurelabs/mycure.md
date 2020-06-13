<template lang="pug">
  div.api-content.py-10.mt-n1.mb-n6
    //- WEB
    div(v-if="!$isMobile")
      v-container
        v-row(justify="center")
          v-col(cols="5" align-self="center").px-3
            h1.panelTitle.font-36.lh-title.font-weight-light {{ webTitle }}
            br
            p.font-16.font-gray.text-justify {{ panelContent }}
            v-list(dense)
              v-list-item(
                v-for="(item, key) in checkList"
                :key="key"
              )
                v-list-item-action
                  img(v-lazy="require('~/assets/images/mycure-web-bullet-check.png')" alt="Check icon")
                v-list-item-content
                  span.font-16.font-gray {{ item }}
          v-col(cols="4" offset="1" align-self="center").px-3.text-center
            img(v-lazy="panelImageSrc" width="80%" :alt="panelImage")
    //- MOBILE
    div(v-else).pt-5
      v-container.text-center
        h1.font-36.lh-title.pb-5 {{ panelTitle }}
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
import { parseTextWithNewLine } from '~/utils/newline';
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
    webTitle () {
      return parseTextWithNewLine(this.panelTitle, ['your ', 'systems ']);
    },
    panelImageSrc () {
      return require(`~/assets/images/virtual-clinic-home/${this.panelImage}.png`);
    },
  },
};
</script>

<style scoped>
.api-content {
  position: relative;
  z-index: 3;
}
.panelTitle {
  white-space: pre;
}
</style>
