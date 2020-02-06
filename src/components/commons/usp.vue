<template lang="pug">
  fragment
    v-container(:class="$isMobile ? 'mobile-page-height' : 'whole-page'")
      v-container(fill-height)
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            strong(v-if="uspMetaTitle").text-xs-center.font-s.font-mc-blue {{ uspMetaTitle }}
            h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.uspTitle.font-xl {{ uspTitle }}
            p(:class="{'pre-white-space': !$isMobile}").text-xs-center.uspDescription.pt-3.font-s {{ uspDescription }}
            div.pt-3
              v-btn(
                :color="$mcColors.mcAltGreen"
                :id="btnId"
                large
                @click.stop="handleUspBtnClick"
              ).text-none.white--text
                strong.font-s {{ btnText }}    
    div.outer-image-container
      div.usp-image-container.text-xs-center.justify-center
        img(
          :src="require(`@/assets/images/${customPath}${coverImg}.png`)"
          :alt="coverImg"
          :width="coverImgWidth"
        ).justify-center
    div.offset-container
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
      default: 'Get Started'
    },
    coverImg: {
      type: String,
      default: 'mycure-homepage-usp-cover'
    },
    coverImgWidth: {
      type: String,
      default: '100%'
    },
    customPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleUspBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.btnId}`,
        eventLabel: `${this.btnId}`
      });
      if (this.btnId === 'home-usp-btn') {
        this.$emit('getStarted');
      } else {
        this.$router.push({ name: this.btnRoute });
      }
    }
  }
};
</script>

<style scoped>
.whole-page {
  height: 65vh;
  padding-top: 15vh;
}
.mobile-page-height {
  padding-top: 10vh;
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
  max-width: 1400px;
  margin: 0 auto;
}

.outer-image-container {
  margin-bottom: -76.65px;
}
.offset-container {
  height: 15vh;
  background-color: #707070;
}
.btnHeight {
  height: 50px;
}
.uspMobileBtn {
  height: 75px;
}

@media screen and (min-height: 1080px) {
  .whole-page {
    height: 55vh !important;
  }
}
</style>