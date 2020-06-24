<template lang="pug">
  v-container.py12
    //- WEB
    v-row(v-if="!$isMobile" justify="center").panel-content
      v-col(cols="6" lg="4" align-self="center").first-column
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
      v-col(cols="6" align-self="center").second-column.text-center
        img(v-lazy="panelImageSrc" width="80%" :alt="panelImage").column-image
    //- MOBILE
    v-row(v-else).pt-5
      v-col(cols="12").text-center
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
@media screen and (min-width: 1280px) {
  .first-column {
    padding-left: 3%;
  }
  .second-column {
    padding-left: 9%;
  }
  .column-image {
    width: 80%;
  }
}
@media screen and (min-width: 1280px) {
  .second-column {
    padding-left: 9%;
  }
}
@media screen and (min-width: 1920px) {
  .panel-content {
    margin-left: -2%;
  }
}
@media screen and (min-width: 2304px) {
  .first-column {
    margin-left: -2%;
  }
  .second-column {
    padding-left: 7%;
  }
}
</style>
