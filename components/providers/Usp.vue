<template lang="pug">
  div(:class="{ bg: !$isMobile }")
    v-container
      v-row(
        :align="$isMobile ? 'top' : 'center'"
        :style="{ height: $isMobile ? 'auto' : '626px' }"
      )
        v-col(cols="12" md="5" :class="{ 'text-center': $isMobile }")
          h1 Grow your practice safely
          p Using MYCURE today helps keep COVID away through its powerful online booking and clinic management system.
          v-text-field(
            outlined
            rounded
            large
            hide-details
            label="Enter your email address"
          ).mb-4
          get-started-button(
            x-large
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
.bg {
  background-image: url('../../assets/images/providers/iPad-Mockup-rounded-shape.png');
  background-size: 800px;
  background-position: right;
  background-repeat: no-repeat;
  border: none;
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
</style>
