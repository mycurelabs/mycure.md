<template lang="pug">
  fragment
    v-layout(
      fluid
      fill-height
      style="height: 100vh"
      :class="[backgroundClasses, backgroundImages]"
    )
      v-container
        v-layout(style="height: 100%" fluid)
          v-row(align="start" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }")
              h3(:class="titleHeaderClasses").font-poppins.lh-title {{ panelTitleHeader }}
              h1(:class="titleClasses").font-poppins.lh-title {{ uspTitle }}
              p(:class="[centerText, subtitleClasses]").font-italic {{ uspSubtitle }}
              div(v-if="!$isMobile").text-field-container.mr-3.mt-n1
                v-text-field(
                  elevation="2"
                  background-color="white"
                  v-model="email"
                  placeholder="myname@email.com"
                  outlined
                  dense
                  height="50"
                ).text-field-input
              v-btn(
                elevation="2"
                v-if="!$isMobile"
                color="accent"
                large
                width="160"
                height="50"
                @click="onGetStarted"
              ).text-none.font-16.p-7.py-4 Get Started
    template(v-if="$isMobile")
      v-layout(fluid).mobile-form
        v-row.px-6
          v-text-field(
            background-color="white"
            v-model="email"
            outlined
            placeholder="myname@email.com"
          ).text-field-input
          v-btn(
            block
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16 Get Started
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
import canUseWebp from '~/utils/can-use-webp';
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.panelTitleHeader = 'For Modern Doctors:';
    this.panelTitleMain = 'Virtual is the new normal.';
    this.uspSubtitle = 'Build your virtual clinic today.';
    return {
      email: '',
      canUseWebp: false,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleHeaderClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-36'];
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-50']
        : ['pre-white-space', 'font-60'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-21']
        : ['pre-white-space', 'font-24'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitleMain
        : parseTextWithNewLine(this.panelTitleMain, ['the ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
    backgroundImages () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  mounted () {
    canUseWebp().then((result) => {
      this.canUseWebp = result;
    });
  },
  methods: {
    onGetStarted () {
      if (!this.email) {
        return;
      }
      this.$emit('getStarted', this.email);
    },
  },
};
</script>

<style scoped>
.bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-webp {
  background-image: url('../../../assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover.webp');
}
.bg-png {
  background-image: url('../../../assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover.png');
}
.bg-mobile {
  background-image: url('../../../assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover-mobile.png');
  background-position: 0 275px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.usp-content {
  margin-top: 150px;
}
.text-field-container {
  height: 50px;
  border-radius: 2px;
  display: inline-block;
}
.text-field-container .text-field-input {
  top: 1px;
  width: 295px;
  opacity: 0.9;
}
.mobile-form {
  margin-top: -100px;
}
.mobile-form .text-field-input {
  height: 56px;
}
.mobile-form .text-field-input >>> input {
  text-align: center
}
</style>
