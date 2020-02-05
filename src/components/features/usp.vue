<template lang="pug">
div
  div(v-if="!$isMobile").whole-page
    v-container(fill-height)
      v-layout(row align-center justify-center)
        div.panel-size.usp-panel
          v-layout(row justify-center)
            v-flex(xs12 md6)
              v-layout(column align-start)
                h1.font-weight-bold.font-18.font-mc-blue.pb-3.uspMetaTitle {{ metaTitle }}
                h2.title-line-height.font-work-sans.uspTitle.font-weight-bold.pb-4.pre-white-space {{ parseTitle(title) }}
                v-btn(
                  :color="$mcColors.mcAltGreen"
                  large
                  :to="{name: 'signup-choose'}"
                ).text-none.white--text.mt-4.btnHeight
                  strong.font-18 {{ btnText }}
            v-flex(xs12 md6 text-xs-right)
              img(
                :src="require(`@/assets/images/mycure-cms-web-banner-first-panel-features.png`)"
                width="90%"
                alt="mycure-cms-web-banner-first-panel-features"
              )
  div(v-else)
    v-layout(column wrap justify-center).mt-5
      h1.font-weight-bold.font-18.font-mc-blue.pb-2.text-xs-center {{ metaTitle }}
      h2.font-40.font-weight-bold.font-work-sans.title-line-height.pb-5.text-xs-center.uspTitle {{ title }}
      v-layout(row justify-center).mb-5
        img(
          :src="require(`@/assets/images/mycure-cms-web-banner-first-panel-features.png`)"
          height="250"
          alt="mycure-cms-web-banner-first-panel-features"
        )
      v-layout(row justify-center)
        v-btn(
          :color="$mcColors.mcAltGreen"
          large
          block
          :to="{name: 'signup-choose'}"
        ).uspMobileBtn
          strong.font-25.text-none.white--text {{ btnText }}
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      mcGreen: '#18c551',
      mcBlue: '#2e9fdf',
      metaTitle: 'MYCURE Features',
      title: 'User-friendly and time efficient features for a more patient-centric care.',
      btnText: 'Sign Up Now'
    };
  },
  methods: {
    parseTitle (title) {
      return parseTextWithNewLine(title, ['User-friendly ', 'efficient ', 'more ']);
    }
  }
};
</script>

<style scoped>
.whole-page {
  height: 100vh;
}
.font-xxs {
  font-size: 11px;
}
.uspBtn-padding {
  padding-bottom: 20px;
}
.title-line-height {
  line-height: 1.25em;
}
.uspTitle {
  font-size: 45px;
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