<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.health-suites
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h2.text-xs-center.panelTitle.font-48.white--text {{ panelTitle }}
            p.font-18.text-xs-center.white--text {{ panelSubtitle }}
        v-layout(row align-center fill-height).pt-5
          v-flex(
            v-for="(suite, key) in healthSuites"
            :key="key"
            xs12
            md4
          ).mx-1
            v-card.roundedCard
              v-card-text
                strong.font-16 {{ suite.header }}
                p.font-14 {{ suite.subheader }}
                v-layout(row wrap)
                  v-flex(xs12 md4)
                    //- TODO: Replace logos
                    v-img(
                      :src="require('@/assets/images/logo-placeholder.svg')"
                    )
                  v-flex(xs12 md8).pl-1
                    ul
                      li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
                v-layout(row wrap)
                  v-flex(xs12 md4)
                    v-btn(
                      :color="$mcColors.mcBlue"
                      dark
                    ).text-none.font-weight-bold Start Free
                  v-flex(xs12 md8).pl-1
                    v-btn(
                      left
                      flat
                      :color="$mcColors.mcBlue"
                    ).text-none.font-weight-bold Learn More >



</template>

<script>
import { HEALTH_SUITES_HEADERS, HEALTH_SUITES_ITEMS } from './constants';
export default {
  data () {
    return {
      healthSuites: HEALTH_SUITES_ITEMS
    };
  },
  computed: {
    panelTitle () {
      return HEALTH_SUITES_HEADERS.title;
    },
    panelSubtitle () {
      return HEALTH_SUITES_HEADERS.subtitle;
    }
  }
};
</script>

<style scoped>
.health-suites {
  background-color: #7892a2;
}
.panelTitle {
  white-space: pre;
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
}
.roundedCard {
  border-radius: 10px;
}
</style>