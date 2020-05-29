<template lang="pug">
  div.white
    generic-background-panel(
      v-if="!isMobile"
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :class="{'mt-10': isMobile}"
    )
      v-row(slot="content" align="center").row-content.mt-10
        v-col(
          cols="12"
          md="5"
          offset-md="6"
          class="[{'web-content-margin': !isMobile}]"
        ).mt-10
          h1(:class="[centerText]").font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18 {{ uspSubtitle }}
          v-btn(
            v-if="!isMobile"
            color="accent"
            large
            @click="getStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
    //- template(v-if="isMobile")
    //-   div.text-field-container.white
    //-     v-text-field(
    //-       v-model="email"
    //-       outlined
    //-       placeholder="myname@email.com"
    //-     )
    //-   v-btn(
    //-     block
    //-     color="accent"
    //-     large
    //-   ).text-none.font-weight-bold.font-18.mt-5 Get Started
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-final-cta-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-final-cta-cover-mobile.png';
    this.uspTitle = 'Start your modern clinic experience with MYCURE';
    this.uspSubtitle = 'Explore all the tools and services you need to run and grow your clinic online and offline.';
    return {
      email: '',
      isMobile: true,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.isMobile };
    },
    backgroundImageConfigs () {
      return {
        width: '100%',
        position: 'absolute',
        left: '0',
        bottom: '0',
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
