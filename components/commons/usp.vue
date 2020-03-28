<template lang="pug">
  fragment
    v-container(
      :class="[isMobile ? 'mobile-page-height' : 'whole-page', {'mt-4': visibleCookie}]"
    )
      v-row(align="center")
        v-col(cols="12").text-center
          strong(v-if="uspMetaTitle" :class="[getMetaFontSize]").text-center.primary--text {{uspMetaTitle}}
          template(v-if="uspMetaTitle && isMobile")
          h1(:class="titleClasses" :style="this.isMobile ? fontStyle : {}").text-center.uspTitle
            | {{uspTitle}}
          p(:class="{'pre-white-space': !isMobile}").text-center.uspDescription.pt-3.font-s {{uspDescription}}
          div.pt-1
            v-btn(
              color="accent"
              :id="btnId"
              large
              @click.stop="handleUspBtnClick"
            ).text-none.white--text
              v-icon(v-if="btnIconLeft" v-text="btnIconLeft")
              strong(:class="{'pl-1' : btnIconLeft}").font-s {{btnText}}
    div.outer-image-container(:class="isMobile ? 'pb-5' : 'web-padding'")
      div.usp-image-container.text-center.justify-center
        img(
          v-show="isImageLoaded"
          :src="require(`~/assets/images/${customPath}${coverImg}${isMobile ? '-mobile' : ''}.png`)"
          :alt="coverImg"
          :width="coverImgWidth"
          @load="loadedImage"
        ).justify-center
        div(v-show="!isImageLoaded").white.empty-image-container
    div.offset-container(v-show="isImageLoaded && !isMobile")
</template>

<script>
export default {
  props: {
    uspTitle: {
      type: String,
      default: 'MYCURE Health Suites',
    },
    uspMetaTitle: {
      type: String,
      default: '',
    },
    titleMobileSize: {
      type: Number,
      default: 36,
    },
    uspDescription: {
      type: String,
      default: '',
    },
    btnRoute: {
      type: String,
      default: undefined,
    },
    btnId: {
      type: String,
      default: 'usp-btn',
    },
    btnText: {
      type: String,
      default: 'Get Started',
    },
    btnIconLeft: {
      type: String,
      default: undefined,
    },
    coverImg: {
      type: String,
      default: 'mycure-homepage-usp-cover',
    },
    coverImgWidth: {
      type: String,
      default: '82%',
    },
    customPath: {
      type: String,
      default: '',
    },
  },
  data () {
    this.fontStyle = {
      'font-size': `${this.titleMobileSize}px`,
    };
    this.webClasses = ['pre-white-space', 'font-xl'];
    this.mobileClasses = ['pt-3', 'pre-white-space'];
    return {
      isImageLoaded: false,
      isMobile: true,
      titleClasses: [],
    };
  },
  computed: {
    // titleClasses () {
    //   const webClasses = ['pre-white-space', 'font-xl'];
    //   const mobileClasses = ['pt-3', 'pre-white-space'];
    //   return this.isMobile ? mobileClasses : webClasses;
    // },
    getMetaFontSize () {
      return this.$route.name === 'multispecialty-clinics'
        ? 'font-18'
        : 'font-s';
    },
    noCookie () {
      return process.browser ? localStorage.getItem('accept-cookie') : false;
    },
    visibleCookie () {
      return !this.noCookie && !this.isMobile;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
    this.titleClasses = this.isMobile ? this.mobileClasses : this.webClasses;
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
        this.titleClasses = val ? this.mobileClasses : this.webClasses;
      },
    },
  },
  methods: {
    loadedImage () {
      this.isImageLoaded = true;
    },
    handleUspBtnClick () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.btnId}`,
        eventLabel: `${this.btnId}`,
      });
      if (this.btnId !== 'home-usp-btn' && this.btnRoute) {
        this.$router.push({
          name: this.btnRoute,
          ...(this.btnRoute === 'home') && { params: { scrollHealthSuites: true } },
        });
      }
      this.$emit('btnClick');
    },
  },
};
</script>

<style scoped>
.whole-page {
  height: 320px;
}
.mobile-page-height {
  padding-top: 4vh;
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
.empty-image-container {
  height: 340px;
}

.outer-image-container {
  margin-bottom: -63.5px;
  padding-top: 4vh;
}
.offset-container {
  height: 15vh;
  background-color: #5AA7C7
}
.usp-offset-grey {
  background-color: #707070 !important;
}
.btnHeight {
  height: 50px;
}
.uspMobileBtn {
  height: 75px;
}
/* .web-padding {
  padding-bottom: 14.80px;
} */
@media screen and (min-height: 1080px) {
  .whole-page {
    height: 30vh !important;
  }
}
</style>
