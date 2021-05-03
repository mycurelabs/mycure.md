<template lang="pug">
  v-content
    v-container(:class="{'usp-container' : !$isMobile, 'usp-mobile' : $isMobile }")
      v-row(
        align="center"
        justify="center"
        :style="{ height: $isMobile ? 'auto' : '520px' }"
        no-gutters
      )
        v-col(cols="8" md="5" :class="{ 'order-last' : !$isMobile }")
          v-img(
            :src="require('../../assets/images/providers/website-image-providers.png')"
            width="100%"
            alt="homepage image"
          )
        v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
          h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }").primary--text Grow your #[br]
            vue-typer(
              :text="['Practice', 'Clinic', 'Diagnostic Center', 'Hospital']"
              :repeat="Infinity"
              :erase-delay="100"
              :class="{ 'font-50' : !$isMobile, 'font-35' : $isMobile }"
              erase-style="backspace"
            ).typer
            span(:class="{ 'font-50' : !$isMobile, 'font-35' : $isMobile }").primary--text #[br] Safely
          p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }").gray--text Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use.
          v-col(cols="10" md="12" :class="{ 'd-flex' : !$isMobile, 'text-center mx-auto' : $isMobile }").pl-0
            v-text-field(
              v-model="email"
              outlined
              rounded
              large
              hide-details
              placeholder="Enter your email address"
            ).bg-white
            get-started-button(
              :class="{ 'mt-2' : $isMobile }"
              :x-large="!$isMobile"
              :large="$isMobile"
              :email="email"
            ).ml-2
</template>

<script>
import GetStartedButton from './GetStartedButton';
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: {
    GetStartedButton,
  },
  data () {
    return {
      email: '',
    };
  },
  computed: {
    uspTitle () {
      const title = this.uspContents.title;
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['workflows'])
        : parseTextWithNewLine(title, ['your', 'workflows', 'maximize']);
    },
    uspDescription () {
      const description = this.uspContents.description;
      return !this.$isMobile ? parseTextWithNewLine(description, ['system']) : description;
    },
  },
  methods: {
    getStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.vue-typer >>> .custom.char.typed  {
  color: #2E9FDF;
}

.vue-typer >>> .custom.caret {
  width: 5px;
  background-color: #FFFFFF;
}

.vue-typer >>> .custom.caret.typing {
  background-color: #2E9FDF;
}

.usp-container {
  margin-top: 60px;
}

.usp-mobile {
  margin-top: 38px;
}
</style>
