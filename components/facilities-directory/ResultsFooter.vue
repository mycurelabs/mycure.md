<template lang="pug">
  v-footer(
    color="#343a40"
    height="auto"
    :absolute="absolute"
  )
    v-container
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-container.my-6
            v-row(align="start" no-gutters)
              v-col(
                :class="{ 'text-center' : $isMobile }"
                cols="12"
                md="4"
              )
                v-row.pl-3.py-5
                  v-row(align="center" :justify="$isMobile ? 'center' : 'start' ").call-number.white--text Powered by
                    img(
                      src="~/assets/images/MYCURE Logo - white.png"
                      width="120px"
                      height="34.46px"
                      alt="MYCURE logo"
                    ).ml-3.mt-1
                v-row(v-if="!$isMobile").font-weight-light
                  span.call-number.white--text &copy; 2016 - {{ new Date().getFullYear() }}
                  span.call-number.white--text #[br(v-if="$isMobile")] &nbsp;All Rights Reserved.
              v-spacer
              v-col(:class="{'mt-8': $isMobile}" cols="12" sm="7")
                v-row(justify="end")
                  v-btn(
                    to="/terms"
                    color="white"
                    text
                    :block="$isMobile"
                  ).text-none.font-16.letter-spacing-normal Terms of Use
                  v-btn(
                    to="/privacy-policy"
                    color="white"
                    text
                    :block="$isMobile"

                  ).text-none.font-16.letter-spacing-normal Privacy Policy
                  v-btn(
                    color="white"
                    text
                    :block="$isMobile"
                    @click="toggleChat"
                  ).text-none.font-16.letter-spacing-normal Send us your feedback
                v-row(justify="end" align="center")
                  v-col(
                    :class="{ 'order-first text-center ' : $isMobile, 'text-right' : !$isMobile }"
                    cols="12"
                    md="4"
                  )
                    template(v-for="(account, key) in socMed")
                      a(:href="account.link" target="_blank" rel="noopener noreferrer")
                        img(:src="require(`~/assets/images/${ account.icon }`)" width="20" height="20" :alt="account.name").ma-4
              v-col(v-if="$isMobile")
                v-row(align="end" justify="center").font-weight-light
                  span.call-number.white--text &copy; 2016 - {{ new Date().getFullYear() }}
                  span.call-number.white--text #[br(v-if="$isMobile")] &nbsp;All Rights Reserved.
</template>

<script>
export default {
  components: {
    GenericPanel: () => import('~/components/generic/GenericPanel'),
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      socMed: [
        {
          name: 'MYCURE - Facebook',
          link: 'https://www.facebook.com/mycure.md',
          icon: 'Fb - white.png',
          id: 'footer-fb-btn',
        },
        {
          name: 'MYCURE - Instagram',
          link: 'https://www.instagram.com/mycure.md/',
          icon: 'Instagram - white.png',
          id: 'footer-ig-btn',
        },
        {
          name: 'MYCURE - Twitter',
          link: 'https://twitter.com/mycureapp',
          icon: 'Twitter - white.png',
          id: 'footer-twitter-btn',
        },
      ],
    };
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #343a40 !important;
  bottom: 0;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none !important;
}
</style>
