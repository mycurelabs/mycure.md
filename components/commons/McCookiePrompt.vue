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
                img(src="~/assets/images/mycure-cookie-disclaimer.png" width="100%" alt="Cookie icon")
              v-col(cols="9" align-self="center").text-justify
                | MYCURE respects your privacy so we have set up technical security measures to protect personal and sensitive information provided to us. All information collected will be used to uniquely identify you to enhance your experience within our web and mobile applications. We encourage you to read our &nbsp;
                nuxt-link(:to="{ name: 'privacy-policy' }").policy-links Privacy Policy
                | &nbsp;&&nbsp;
                nuxt-link(:to="{ name: 'terms' }").policy-links Terms of Use
                | &nbsp;in full. By continuing to browse our website, you are agreeing to our use of cookies as stated in the MYCURE Privacy Policy.
              v-col(cols="1" align-self="start")
                v-btn(text icon color="primary" @click="onClick(props)").mt-n2.mt-xl-0.float-right
                  v-icon {{ mdiClose }}
            v-row(v-else).pl-3
              v-col(cols="10").text-justify
                | MYCURE respects your privacy so we have set up technical security measures to protect personal and sensitive information provided to us. All information collected will be used to uniquely identify you to enhance your experience within our web and mobile applications. We encourage you to read our &nbsp;
                nuxt-link(:to="{ name: 'privacy-policy' }").policy-links Privacy Policy
                | &nbsp;&&nbsp;
                nuxt-link(:to="{ name: 'terms' }").policy-links Terms of Use
                | &nbsp;in full. By continuing to browse our website, you are agreeing to our use of cookies as stated in the MYCURE Privacy Policy.
              v-col(cols="1").mt-n2
                v-btn(text icon left color="primary" @click="props.accept")
                  v-icon {{ mdiClose }}
</template>

<script>
import { mdiClose } from '@mdi/js';
export default {
  data () {
    return {
      mdiClose,
    };
  },
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
  width: 45%;
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
