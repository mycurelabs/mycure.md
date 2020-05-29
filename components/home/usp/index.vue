<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :class="{'mt-10': isMobile}"
    )
      v-row(slot="content").row-content
        v-col(cols="12" md="6" lg="5" :class="[{'web-content-margin': !isMobile}]")
          h1(:class="[centerText]").font-poppins.font-xl.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18 {{ uspSubtitle }}
          div(v-if="!isMobile").text-field-container.white
            v-text-field(
              v-model="email"
              outlined
              placeholder="myname@email.com"
            )
          v-btn(
            v-if="!isMobile"
            block
            color="accent"
            large
            @click="getStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
    template(v-if="isMobile")
      div.text-field-container.white
        v-text-field(
          v-model="email"
          outlined
          placeholder="myname@email.com"
        )
      v-btn(
        block
        color="accent"
        large
      ).text-none.font-weight-bold.font-18.mt-5 Get Started
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover-mobile.png';
    this.imagePath = '../../../assets/images';
    this.uspTitle = 'Build your virtual clinic today.';
    this.uspSubtitle = 'For Modern Doctors, Virtual is the new normal.';
    return {
      email: '',
      isMobile: true,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.isMobile };
    },
    backgroundImageMobileConfigs () {
      return {
        'background-size': '100%',
        'background-position': '0px 200px',
      };
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    getStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.text-field-container {
  height: 52px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}
</style>
