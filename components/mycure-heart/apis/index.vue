<template lang="pug">
  div(:class="{'hearts': !$isMobile}")
    //- WEB
    div(v-if="!isMobile").py-5.mb-3
      v-container
        v-row(justify="center")
          v-col(cols="6" align-self="center").px-3
            h1.panelTitle.font-40.lh-title {{ panelTitle }}
            br
            br
            p(
              v-for="(content, key) in panelContents"
              :key="key"
            ).font-s
              | {{ content }}
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
            img(:src="require(`~/assets/images/mycure-heart/${panelImage}${panelImageExtension}`)" width="80%" :alt="panelImage")
    //- MOBILE
    div(v-else).pt-10
      v-container.text-center
        h1.font-36.lh-title.pb-5 {{ panelTitle }}
        br
        img(width="85%" v-lazy="require(`~/assets/images/mycure-heart/${panelImage}${panelImageExtension}`)" :alt="panelImage").pb-3
        br
        br
        p(
          v-for="(content, key) in panelContents"
          :key="key"
        ).font-s
          | {{ content }}
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
  props: {
    panelImageExtension: {
      type: String,
      default: '.png',
    },
  },
  data () {
    this.panelTitle = 'Think Beyond COVID-19.';
    this.panelContents = [
      'MYCURE Heart has advanced APIs made to augment your IT innovations now and in the future.',
      'We created our APIs to be simple to use, excellent in performance, and boundless in possibilities.',
    ];
    this.checkList = [
      'Integrate with your database systems',
      'Customize the CMS as needed',
      'Complete documentation',
    ];
    this.panelImage = 'mycure-heart-covid-19-image';
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
.hearts {
  background-image: url('../../../assets/images/mycure-heart/heart-decor-right.webp');
  background-position: top right;
}
</style>
