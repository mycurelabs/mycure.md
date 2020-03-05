<template lang="pug">
  div
    //- WEB
    div(v-if="!$isMobile").py-5.mb-3
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            h1.panelTitle.font-40.font-work-sans.lh-title {{ webTitle }}
            br
            br
            p.font-s {{ panelContent }}
            br
            v-list(dense)
              v-list-tile(
                v-for="(item, key) in checkList"
                :key="key"
              )
                v-list-tile-action
                  img(src="../../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-s {{ item }}
          v-flex(xs6 align-self-center).px-3.text-xs-center
            img(:src="require(`@/assets/images/${panelImage}.png`)" width="80%" :alt="panelImage")
    //- MOBILE
    div(v-else).pt-5
      v-container.text-xs-center
        h1.font-40.lh-title.font-work-sans {{ panelTitle }}
        br
        img(width="85%" :src="require(`@/assets/images/${panelImage}.png`)" :alt="panelImage").pb-3
        p.font-s {{ panelContent }}
        v-list(two-line)
          v-list-tile(
            v-for="(item, key) in checkList"
            :key="key"
          )
            v-list-tile-action
              img(src="../../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-tile-content
              span.font-s {{ item }}
        br
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      panelTitle: 'APIs built to make your existing health systems more powerful.',
      panelContent: 'MYCURE is made to augment your IT innovations. We created our\
       APIs to be simple to use, excellent in performance, and boundless in possibilities.',
      checkList: [
        'Integrate with your database systems',
        'Customize the CMS as needed',
        'Complete documentation'
      ],
      panelImage: 'mycure-web-banner-api',
      btnData: {
        id: 'home-syncbase-video-btn',
        text: 'Watch How It Works'
      },
      videoDialog: false,
      videoPlay: false
    };
  },
  computed: {
    webTitle () {
      return parseTextWithNewLine(this.panelTitle, ['your ', 'systems ']);
    }
  },
  methods: {
    handleVideoBtn () {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: `play-${this.btnData.id}`,
        eventLabel: this.btnData.id
      });
      if (!this.$isMobile) this.videoDialog = true;
    }
  }
};
</script>

<style scoped>
.panelTitle {
  white-space: pre;
}
</style>
