<template lang="pug">
  div#panel4
    //- WEB
    div(v-if="!$isMobile").py-5
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            h2.panelTitle.font-40 {{ webTitle }}
            br
            br
            p.font-18 {{ panelContent }}
          v-flex(xs6 align-self-center).px-3.text-xs-center
            img(src="../../../assets/images/mycure-homepage-syncbase.png" width="80%" alt="MYCURE Syncbase")
    //- MOBILE
    div(v-else).pt-5
      v-container.text-xs-center
        p.font-40.lh-title.text-xs-center {{ panelTitle }}
        br
        p.font-18.text-xs-center {{ panelContent }}
        br
        img(src="../../../assets/images/mycure-homepage-syncbase.png" width="80%" alt="MYCURE Syncbase")
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      panelTitle: 'MYCURE Health Suites work online and offline',
      panelContent: 'Work as if you have an in-house server, with the convenience of the cloud.\
       Create your medical records locally using multiple devices even if the internet is down!\
       Once back online, it instantly syncs your data into the cloud.',
      panelImage: 'mycure-homepage-syncbase'
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
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
  white-space: pre;
}
</style>

