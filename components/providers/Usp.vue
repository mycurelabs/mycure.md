<template lang="pug">
  div.bg.bg-mobile
    v-container
      v-row(
        :align="$isMobile ? 'top' : 'center'"
        :style="{ height: $isMobile ? 'auto' : '626px' }"
        :class="{ 'justify-center ' : $isMobile }"
      )
        v-col(
          v-if="!$isMobile"
          cols="12"
          md="5"
        ).header-gray
          h1.font-65.mb-8 Grow your Clinic
          p Bring in more patients using a powerful booking and health management system.
          v-text-field(
            outlined
            rounded
            large
            hide-details
            label="Enter your email address"
          ).mb-4
          get-started-button(x-large)
        v-col(
          v-else
          cols="12"
          md="5"
        ).text-center
          h1.font-30.mb-6 Grow your Clinic, Hospital or Diagnostic Center safely
          p Bring in more patients using a powerful booking and health management system.
          v-text-field(
            outlined
            rounded
            large
            hide-details
            color="white"
            label="Enter your email address"
          ).text-field.mt-8
          get-started-button(large).mt-2

</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
import GetStartedButton from '~/components/providers/GetStartedButton';
export default {
  components: {
    GetStartedButton,
  },
  data () {
    return {};
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

@media screen and (min-width: 1344px) {
  .bg {
    background-image: url('../../assets/images/providers/USP Image.png');
    background-size: 800px;
    background-position: right;
    background-repeat: no-repeat;
    border: none;
  }

}

@media screen and (max-width: 1343px) {
  .bg-mobile {
  background-image: url('../../assets/images/providers/USP Image Mobile.png');
  background-size: 438px;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  height: 454px;
  color: white;
}
  .text-field {
    background-color: white;
  }
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

.font-65 {
  font-size: 65px;
}
</style>
