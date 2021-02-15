<template lang="pug">
  div(:class="{ 'bg' : !$isMobile, 'bg-mobile' : $isMobile }")
    v-container
      v-row(
        :align="{ 'top' : $isMobile }"
        :style="{ height: $isMobile ? 'auto' : '626px' }"
        :class=" !$isMobile ? 'pt-10' : 'pt-2' "
        no-gutters
      ).justify-center
        v-col(cols="12" md="7").white--text.text-center
          h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }") Grow your #[br]
            vue-typer(
              :text="['Practice', 'Clinic', 'Diagnostic Center', 'Hospital']"
              :repeat="Infinity"
              :erase-delay="100"
              :class="{ 'font-50' : !$isMobile, 'font-35' : $isMobile }"
              erase-style="backspace"
            ).typer
            span(:class="{ 'font-50' : !$isMobile, 'font-35' : $isMobile }") #[br] safely
          p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }") Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use.
          v-col(cols="12" :class="{ 'd-flex' : !$isMobile, 'pt-6' : $isMobile }")
            v-text-field(
              v-model="email"
              outlined
              rounded
              large
              hide-details
              placeholder="Enter your email address"
            ).mr-2.bg-white
            get-started-button(
              :class="{ 'mt-2' : $isMobile }"
              :x-large="!$isMobile"
              :large="$isMobile"
              :email="email"
            )
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
import GetStartedButton from '~/components/providers/GetStartedButton';
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

.bg {
  background-image: url('../../assets/images/providers/USP-image-3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  height: 100vh;
}

.bg-mobile {
  background-image: url('../../assets/images/providers/USP-image-mobile.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  height: 454px;
  color: white;
}

.bg-white {
  background-color: white;
}

.usp-image {
  position: absolute;
  /* margin-right: -100px !important; */
  right: 0px;
  top: 0px;
  width: 800px;
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
}

.vue-typer >>> .custom.char.typed  {
  color: #FFFFFF;
}

.vue-typer >>> .custom.caret {
  width: 5px;
  background-color: #FFFFFF;
}

.vue-typer >>> .custom.caret.typing {
  background-color: #FFFFFF;
}
</style>
