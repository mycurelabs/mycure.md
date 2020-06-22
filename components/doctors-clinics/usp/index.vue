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
              p(:class="[centerText, subtitleClasses]").mx-1.usp-subtitle {{ uspSubheader }}
              h1(:class="titleClasses").font-poppins.lh-title.usp-title {{ uspTitle }}
              p(:class="subtitleClasses").mx-1.pt-5 {{ uspSubtitle }}
              div(v-show="$isMobile").text-center
                v-btn(text).align-center
                  v-icon(large) mdi-arrow-down
              v-btn(
                height="54"
                width="160"
                v-if="!$isMobile"
                color="accent"
                @click="onGetStarted"
              ).text-none.font-16.p-7 Get Started
    template(v-if="$isMobile")
      v-layout(fluid)
        v-row
          v-text-field(
            v-model="email"
            placeholder="myname@email.com"
            outlined
          )
          v-btn(
            @click="onGetStarted"
            color="accent"
            block
            x-large
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png';
    this.uspSubheader = 'For Doctors Clinics';
    this.panelTitle = 'Everything you need to build your virtual practice.';
    this.panelSubtitle = 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve.';
    this.customPath = 'doctors-clinics/';
    return {
      email: '',
      canUseWebp: false,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-40'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-18']
        : ['pre-white-space', 'font-24'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitle
        : parseTextWithNewLine(this.panelTitle, ['need ', 'virtual ']);
    },
    uspSubtitle () {
      return this.$isMobile
        ? this.panelSubtitle
        : parseTextWithNewLine(this.panelSubtitle, ['never ', 'the ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
    backgroundImages () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    canUseWebp().then((result) => {
      this.canUseWebp = result;
    });
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
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
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.webp');
}
.bg-png {
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.png');
}
.bg-mobile {
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png');
  background-position: 0 360px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.usp-content{
  margin-top: 150px;
}
@media screen and (device-width: 1920px) {
  .usp-title {
    font-size: 300% !important;
  }
  .usp-subtitle {
    font-size: 150% !important;
  }
  .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  }
}
@media screen and (device-width: 2304px) {
  .usp-title {
    font-size: 350% !important;
  }
  .usp-subtitle {
    font-size: 175% !important;
  }
  .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  }
}
@media screen and (device-width: 2560px) {
  .usp-title {
    font-size: 400% !important;
  }
  .usp-subtitle {
    font-size: 200% !important;
  }
  .btn-book {
    width: 35% !important;
    font-size: 160% !important;
  }
}
</style>
