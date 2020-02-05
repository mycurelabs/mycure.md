<template lang="pug">
  v-container
    v-layout(row align-center)
      v-flex(xs12 md12).text-xs-center
        h2.text-xs-center.font-work-sans.font-xl.white--text {{ panelTitle }}
        p.font-s.text-xs-center.white--text {{ panelSubtitle }}
    v-layout(
      row 
      v-for="(suite, key) in healthSuites"
      :key="key"
    ).pt-5
      v-flex(xs12)
        v-card.roundedCard
          v-card-text
            strong.font-s {{ suite.header }}
            p.font-14 {{ suite.subheader }}
            v-layout(row wrap)
              v-flex(xs4 md4)
                v-img(
                  :src="require(`@/assets/images/${suite.image}.png`)"
                )
              v-flex(xs8 md8).pl-1
                ul
                  li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
                  br(v-if="key === 1")
            v-layout(row wrap).pl-3.pt-2
              v-flex(xs4 md4)
                v-btn(
                  :color="$mcColors.mcBlue"
                  right
                  dark
                ).text-none.font-weight-bold Start Free
              v-flex(xs8 md8).pl-1.text-xs-right
                v-btn(
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
.roundedCard {
  border-radius: 10px;
}
</style>