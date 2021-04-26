<template lang="pug">
  v-container
    client-only
      cookie-law(
        position="bottom"
        transitionName="fade"
        :class="cookieClasses"
      ).px-1
        div(slot-scope="props")
          v-container.py-0
            v-row(v-if="!$isMobile")
              v-col(cols="2" align-self="center")
                img(src="~/assets/images/mycure-cookie-disclaimer.png" width="100%")
              v-col(cols="9" align-self="center").text-justify
                | We use third-party services to understand web traffic data for us and they may collect cookies during the process. By continuing to browse our site, you agree to MYCURE's&nbsp;
                nuxt-link(:to="{ name: 'terms' }").policy-links Terms of Use
                | &nbsp;and&nbsp;
                nuxt-link(:to="{ name: 'privacy-policy' }").policy-links Privacy Policy
                | . Feel free to check out our policies anytime for more info.
              v-col(cols="1" align-self="start")
                v-btn(text icon color="primary" @click="onClick(props)").mt-n2.mt-xl-0.float-right
                  v-icon mdi-close
            v-row(v-else).pl-3
              v-col(cols="10").text-justify
                | We use third-party services to understand web traffic data for us and they may collect cookies during the process. By continuing to browse our site, you agree to MYCURE's&nbsp;
                nuxt-link(:to="{ name: 'terms' }").policy-links Terms of Use
                | &nbsp;and&nbsp;
                nuxt-link(:to="{ name: 'privacy-policy' }").policy-links Privacy Policy
                | . Feel free to check out our policies anytime for more info.
              v-col(cols="1").mt-n2
                v-btn(text icon left color="primary" @click="props.accept")
                  v-icon mdi-close
</template>

<script>
// components
export default {
  computed: {
    cookieClasses () {
      return [this.$isMobile ? 'mobile' : 'web'];
    },
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
.web {
  width: 40%;
  background-color: white;
  border-radius: 10px;
  margin: 0 0 20px 20px;
  opacity: 0.9;
  font-size: 14px;
}
.mobile {
  width: 100%;
  background-color: white;
  opacity: 0.9;
}
.policy-links {
  text-decoration: none;
  font-weight: bold;
}
</style>
