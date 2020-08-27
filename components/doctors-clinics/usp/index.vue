<template lang="pug">
  fragment
    v-container(
      style="height: 100vh"
      fluid
      :class="[backgroundClasses, backgroundImages]"
    )
      v-container
        v-container(style="height: 100%" fluid)
          v-row(align="start" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }")
              p(:class="[centerText, subtitleClasses]") {{ uspSubheader }}
              h1(:class="titleClasses").font-poppins.lh-title {{ uspTitle }}
              p(:class="subtitleClasses").pt-5 {{ uspSubtitle }}
              div(v-show="$isMobile").text-center
                v-btn(text icon @click="startNow").align-center
                  v-icon(large) mdi-arrow-down
              v-btn(
                v-if="!$isMobile"
                height="54"
                color="accent"
                @click="onGetStarted"
              ).text-none.font-16.p-7 Request an Invite
    template(v-if="$isMobile")
      v-container(fluid).mobile-form
        v-row.px-6.mt-n3
          v-text-field(
            v-model="email"
            background-color="white"
            placeholder="johndoe@gmail.com"
            outlined
            :error-messages="emailErrorMessage"
          ).text-field-input
        v-row.px-6.pt-6
          v-btn(
            @click="onGetStarted"
            color="accent"
            block
            large
          ).text-none.font-16 Request an Invite
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
import canUseWebp from '~/utils/can-use-webp';
export default {
  data () {
    this.uspSubheader = 'For Doctors Clinics';
    this.panelTitle = 'Everything you need to build your virtual practice.';
    this.panelSubtitle = 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve.';
    return {
      email: '',
      canUseWebp: false,
      emailErrorMessage: '',
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
  async mounted () {
    this.canUseWebp = await canUseWebp();
  },
  methods: {
    onGetStarted () {
      if (this.$isMobile && !this.email) {
        this.emailErrorMessage = 'Please enter your email';
        return;
      }
      this.$emit('getStarted', this.email);
    },
    startNow () {
      this.$emit('startNow');
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
  background-position: 0 400px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.usp-content {
  margin-top: 150px;
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
