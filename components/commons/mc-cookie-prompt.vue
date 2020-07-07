<template lang="pug">
  v-container
    client-only
      cookie-law(
        position="bottom"
        transitionName="fade"
        :class="cookieClasses"
      ).Cookie--mcCookie.white--text.px-1
        div(slot-scope="props").width100
          v-container.py-1.width100
            v-row(v-if="!isMobile").px-4
              v-col(cols="11").pt-2.text-justify
                | We use third-party services to understand web traffic data for us and they may collect cookies during the process.
                | By continuing to browse our site, you agree to MYCURE's&nbsp;
                nuxt-link(:to="{name: 'terms'}").policy-links Terms of Use
                | &nbsp;and&nbsp;
                nuxt-link(:to="{name: 'privacy-policy'}").policy-links Privacy Policy
                | . Feel free to check out our policies anytime for more info.
              v-spacer
              v-btn(text icon color="white" @click="onClick(props)").mt-2.mr-5
                v-icon mdi-close
            v-row(v-else).pl-3
              v-col(cols="10").text-justify
                | We use third-party services to understand web traffic data for us and they may collect cookies during the process.
                | By continuing to browse our site, you agree to MYCURE's&nbsp;
                nuxt-link(:to="{name: 'terms'}").policy-links Terms of Use
                | &nbsp;and&nbsp;
                nuxt-link(:to="{name: 'privacy-policy'}").policy-links Privacy Policy
                | . Feel free to check out our policies anytime for more info.
              v-col(cols="1").pl-2
                v-btn(text icon left color="white" @click="props.accept")
                  v-icon mdi-close
</template>

<script>
// components
import CookieLaw from 'vue-cookie-law';
export default {
  components: {
    CookieLaw,
  },
  data () {
    return {
      isMobile: true,
    };
  },
  computed: {
    cookieClasses () {
      const webClasses = ['font-14', 'py-3'];
      const mobileClasses = ['py-1'];
      return this.isMobile
        ? mobileClasses
        : webClasses;
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    onClick (props) {
      props.accept();
      localStorage.setItem('accept-cookie', true);
    },
  },
};
</script>

<style scoped>
.Cookie--mcCookie {
  background-color: #075b76;
}
.width100 {
  width: 100%;
}

.policy-links {
  color: white;
  font-weight: bold
}
</style>
