<template lang="pug">
  //- TODO: Mobile view
  div.gradient-bg-color
    v-container(v-if="!$isMobile").whole-page
      v-container(fill-height)
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h2.text-xs-center.uspTitle.font-xl {{ uspTitle }}
            p.text-xs-center.uspDescription.pt-3.font-s {{ uspDescription }}
            div.pt-5
              v-btn(
                :href="uspContents.btn"
                :color="$mcColors.mcAltGreen"
                :id="uspContents.btnId"
                large
              ).text-none.white--text
                strong.font-s {{ uspContents.btnText }}     
    div
      v-img(
        :src="require(`@/assets/images/${uspContents.coverImg}.png`)"
        :alt="uspContents.coverImg"
      )
</template>

<script>
import { USP_CONTENTS } from './constants';
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      uspContents: USP_CONTENTS,
      signInURL: process.env.VUE_APP_SIGNIN_URL
    };
  },
  computed: {
    mcGreen () {
      return this.$mcColors.mcGreen;
    },
    mcBlue () {
      return this.$mcColors.mcBlue;
    },
    uspTitle () {
      const title = this.uspContents.title; 
      return parseTextWithNewLine(title, ['workflows']);
    },
    uspDescription () {
      const description = this.uspContents.description;
      return parseTextWithNewLine(description, ['system']);
    }
  }
};
</script>

<style scoped>
.gradient-bg-color {
  background-color: #f0f0f0
}
.whole-page {
  height: 75vh;
  padding-top: 15vh;
}
.title-line-height {
  line-height: 1.25em;
}
.uspTitle {
  white-space: pre;
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
  line-height: 1.25em;
}
.uspDescription {
  white-space: pre;
  font-family: 'Source Sans Pro', 'Poppins', sans-serif !important;
}
.uspMetaTitle {
  white-space: pre;
}
.panel-size {
  width: 1100px;
}
.btnHeight {
  height: 50px;
}
.uspMobileBtn {
  height: 75px;
}
</style>