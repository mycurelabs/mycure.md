<template lang="pug">
div
  div(v-if="!$isMobile").whole-page
    v-container(fill-height)
      v-layout(row align-center justify-center)
        div.panel-size.usp-panel
          v-layout(row justify-center)
            v-flex(xs12 md6)
              v-layout(column align-start)
                h1.font-weight-bold.font-18.font-mc-blue.pb-3.uspMetaTitle {{ uspContents.metaTitle }}
                h2.title-line-height.uspTitle.font-weight-regular.pb-4 {{ uspContents.title }}
                //- :href="uspContents.btn"                
                v-btn(
                  v-if="uspContents.btnText"
                  :color="mcGreen"
                  :id="uspContents.btnId"
                  target="_blank"
                  large
                ).text-none.white--text.mt-4.btnHeight
                  strong.font-18 {{ uspContents.btnText }}
            v-flex(xs12 md6 text-xs-right)
              img(
                :src="require(`@/assets/images/${ uspContents.img }.png`)"
                width="90%"
                :alt="uspContents.img"
              )
  div(v-else)
    v-layout(column wrap justify-center).mt-5
      h1.font-weight-bold.font-18.font-mc-blue.pb-2.text-xs-center {{ uspContents.metaTitle }}
      h2.font-40.font-weight-regular.title-line-height.pb-5.text-xs-center.uspTitle {{ uspContents.title }}
      v-layout(row justify-center).mb-5
        img(
          :src="require(`@/assets/images/${ uspContents.img }.png`)"
          height="250"
          :alt="uspContents.img"
        )
      v-layout(row justify-center)
        v-btn(
          v-if="uspContents.btn"
          :href="uspContents.btn"
          :color="mcGreen"
          :id="uspContents.btnId"
          target="_blank"
          large
          block
        ).uspMobileBtn
          strong.font-25.text-none.white--text {{ uspContents.btnText }}
</template>

<script>
export default {
  props: {
    uspContents: {
      type: Object,
      required: true
    },
    someFunctionParent: {
      type: String
    }
  },
  data () {
    return {
      mcGreen: '#18c551',
      mcBlue: '#2e9fdf'
    };
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
  white-space: pre;
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