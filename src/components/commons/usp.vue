<template lang="pug">
  fragment
    v-container(:class="$isMobile ? 'mobile-page-height' : 'whole-page'")
      v-container(fill-height)
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            p.text-xs-center.font-s.font-mc-blue {{ uspMetaTitle }}
            h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.uspTitle.font-xl {{ uspTitle }}
            p(:class="{'pre-white-space': !$isMobile}").text-xs-center.uspDescription.pt-3.font-s {{ uspDescription }}
            div.pt-3
              v-btn(
                :to="{ name: btnRoute }"
                :color="$mcColors.mcAltGreen"
                :id="btnId"
                large
              ).text-none.white--text
                strong.font-s {{ btnText }}     
    div.usp-image-container.text-xs-center
      v-img(
        :src="require(`@/assets/images/${coverImg}.png`)"
        :alt="coverImg"
      )
</template>

<script>
export default {
  props: {
    uspTitle: {
      type: String,
      default: 'MYCURE Health Suites'
    },
    uspMetaTitle: {
      type: String,
      default: ''
    },
    uspDescription: {
      type: String,
      default: ''
    },
    btnRoute: {
      type: String,
      default: 'signup-choose'
    },
    btnId: {
      type: String,
      default: 'usp-signup-choose'
    },
    btnText: {
      type: String,
      default: 'Get Demo'
    },
    coverImg: {
      type: String,
      default: 'mycure-homepage-usp-cover'
    }
  },
};
</script>

<style scoped>
.whole-page {
  height: 70vh;
  padding-top: 15vh;
}
.mobile-page-height {
  height: 80vh;
  padding-top: 15vh;
}
.title-line-height {
  line-height: 1.25em;
}
.uspTitle {
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
  line-height: 1.25em;
  font-weight: 700 !important;
}
.uspDescription {
  font-family: 'Source Sans Pro', 'Poppins', sans-serif !important;
}
.uspMetaTitle {
  white-space: pre;
}
.panel-size {
  width: 1100px;
}
.usp-image-container {
  line-height: 0px;
}
.btnHeight {
  height: 50px;
}
.uspMobileBtn {
  height: 75px;
}
</style>