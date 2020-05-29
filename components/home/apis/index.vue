<template lang="pug">
  div
    //- WEB
    div(v-if="!isMobile").py-5.mb-3
      v-container
        v-row(justify="center")
          v-col(cols="6" align-self="center").px-3
            h1.panelTitle.font-40.lh-title {{ webTitle }}
            br
            br
            p.font-s {{ panelContent }}
            v-list(dense)
              v-list-item(
                v-for="(item, key) in checkList"
                :key="key"
              )
                v-list-item-action
                  img(v-lazy="require('~/assets/images/mycure-web-bullet-check.png')" alt="Check icon")
                v-list-item-content
                  span.font-s {{ item }}
          v-col(cols="6" align-self="center").px-3.text-center
            img(:src="require(`~/assets/images/${panelImage}.png`)" width="80%" :alt="panelImage")
    //- MOBILE
    div(v-else).pt-5
      v-container.text-center
        h1.font-36.lh-title.pb-5 {{ panelTitle }}
        br
        img(width="85%" v-lazy="require(`~/assets/images/${panelImage}.png`)" :alt="panelImage").pb-3
        br
        p.font-s {{ panelContent }}
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in checkList"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span.font-s {{ item }}
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
      isMobile: true,
    };
  },
  computed: {
    webTitle () {
      return parseTextWithNewLine(this.panelTitle, ['your ', 'systems ']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
.panelTitle {
  white-space: pre;
}
</style>
