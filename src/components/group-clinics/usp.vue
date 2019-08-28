<template lang="pug">
div
  div(v-if="!$isMobile").whole-page
    v-container(fill-height)
      v-layout(row align-center justify-center)
        div.panel-size.usp-panel
          v-layout(row justify-center)
            v-flex(xs12 md6)
              v-layout(column align-start)
                h1.font-weight-bold.font-18.font-mc-blue.pb-3.uspMetaTitle MYCURE for Group Clinics
                h2.title-line-height.uspTitle.font-weight-regular.pb-4 The perfect clinic system setup designed for doctors who are practicing in groups.
                v-btn(
                  :color="mcGreen"
                  href="https://mycurecreatives.typeform.com/to/DiZQQY"
                  target="_blank"
                  large
                ).text-none.white--text.mt-4.btnHeight
                  strong.font-18 Sign Up Now
            v-flex(xs12 md6 text-xs-right)
              img(
                :src="require(`@/assets/images/mycure-group-web-banner-first-panel-doctor-frontdesk.png`)"
                width="90%"
                alt="mycure-group-web-banner-first-panel-doctor-frontdesk"
              )
  div(v-else)
    v-layout(column wrap justify-center).mt-5
      h1.font-weight-bold.font-18.font-mc-blue.pb-2.text-xs-center MYCURE for Group Clinics
      h2.font-40.font-weight-regular.title-line-height.pb-5.text-xs-center.uspTitle The perfect clinic system setup designed for doctors who are practicing in groups.
      v-layout(row justify-center).mb-5
        img(
          :src="require(`@/assets/images/mycure-group-web-banner-first-panel-doctor-frontdesk.png`)"
          height="250"
          alt="mycure-group-web-banner-first-panel-doctor-frontdesk"
        )
      v-layout(row justify-center)
        v-btn(
          :color="mcGreen"
          href="https://mycurecreatives.typeform.com/to/DiZQQY"
          target="_blank"
          large
          block
        ).uspMobileBtn
          strong.font-25.text-none.white--text Sign Up Now
</template>

<script>
export default {
  data () {
    return {
      mcGreen: '#18c551',
      mcBlue: '#2e9fdf'
    };
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
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