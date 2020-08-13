<template lang="pug">
  fragment
    v-container(
      fluid
      style="height: 100vh"
      :class="[backgroundClasses]"
    )
      v-container
        v-container(style="height: 100%" fluid)
          v-row(align="start" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }")
              p(:class="[centerText, subtitleClasses]") {{ uspPreSubtitle }}
              h1(:class="titleClasses").font-poppins.lh-title {{ uspTitle }}
              p(v-show="!$isMobile" :class="subtitleClasses").pt-5 {{ uspSubtitle }}
              div(v-if="$isMobile").text-center
                v-btn(text).align-center
                  v-icon(large) mdi-arrow-down
              div(v-if="!$isMobile").text-field-container.mr-3
                v-text-field(
                  background-color="white"
                  v-model="email"
                  placeholder="myname@email.com"
                  outlined
                  dense
                  height="50"
                ).text-field-input
              v-btn(
                v-if="!$isMobile"
                color="accent"
                @click="onGetStarted"
                height="50"
                width="160"
              ).text-none.font-16.p-7 Book A Demo
    template(v-if="$isMobile")
      v-container(fluid).mobile-form
        v-row.px-6
          v-text-field(
            background-color="white"
            v-model="email"
            outlined
            placeholder="myname@email.com"
          ).text-field-input
        v-row.px-6.pt-3
          v-btn(
            color="accent"
            @click="onGetStarted"
            large
            block
          ).text-none.font-16 Get Started
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    this.uspPreSubtitle = 'For Medical Enterprise';
    this.panelTitle = 'Take your healthcare enterprise to a broader audience';
    this.panelTitleMobile = 'Taking your\nentire clinic\nenterprise online\nis possible with\nMYCURE';
    this.panelSubtitle = 'Build an online brand for your health facility and MYCURE will do the rest.';
    return {
      email: '',
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-48'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-18']
        : ['pre-white-space', 'font-24'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitleMobile
        : parseTextWithNewLine(this.panelTitle, ['healthcare ', 'to a ']);
    },
    uspSubtitle () {
      return this.$isMobile
        ? this.panelSubtitle
        : parseTextWithNewLine(this.panelSubtitle, ['health ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
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
  background-image: url('../../../assets/images/enterprise/MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-mobile {
  background-image: url('../../../assets/images/enterprise/MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover-mobile.png');
  background-position: 0 402px;
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
  margin-top: -125px;
}
.mobile-form .text-field-input {
  height: 56px;
}
.mobile-form .text-field-input >>> input {
  text-align: center
}
</style>
