<template lang="pug">
  div#panel4
    //- WEB
    div(v-if="!$isMobile").py-4
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            h1.panelTitle.font-40.font-work-sans.lh-title {{ webTitle }}
            br
            br
            p.font-s {{ panelContent }}
          v-flex(xs6 align-self-center).px-3.text-xs-center
            img(:src="require(`@/assets/images/${panelImage}.gif`)" width="100%" alt="MYCURE Syncbase")
    //- MOBILE
    div(v-else).pt-5
      v-container.text-xs-center
        h1.font-40.lh-title.text-xs-center.font-work-sans {{ panelTitle }}
        br
        p.font-s.text-xs-center {{ panelContent }}
        br
        img(:src="require(`@/assets/images/${panelImage}.gif`)" width="80%" alt="MYCURE Syncbase")
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      panelTitle: 'MYCURE Health Suites work online and offline.',
      panelContent: 'Work as if you have an in-house server, with the convenience of the cloud.\
       Create your medical records locally using multiple devices even if the internet is down!\
       Once back online, it instantly syncs your data into the cloud.',
      panelImage: 'mycure-syncbase-animate-small'
    };
  },
  computed: {
    webTitle () {
      return parseTextWithNewLine(this.panelTitle, ['Health ', 'online ']);
    }
  }
};
</script>

<style scoped>
.panelTitle {
  white-space: pre;
}
</style>

