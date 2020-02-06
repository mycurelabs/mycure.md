<template lang="pug">
  v-container.py-5
    v-layout(row align-center)
      v-flex(xs12 md12).text-xs-center
        h2.text-xs-center.font-work-sans.font-xl.white--text {{ panelTitle }}
        p.font-s.text-xs-center.white--text {{ panelSubtitle }}
    v-layout(row fill-height).pt-5
      v-flex(
        v-for="(suite, key) in healthSuites"
        :key="key"
        xs12
        md4
      ).mx-1
        v-card(height="100%").roundedCard
          v-card-text
            strong.font-s {{ suite.header }}
            p.font-14 {{ suite.subheader }}
            v-layout(row wrap)
              v-flex(xs12 md4)
                v-img(
                  :src="require(`@/assets/images/${suite.image}.png`)"
                  width="90%"
                )
              v-flex(xs12 md8).pl-1
                ul
                  li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
            v-layout(row wrap).mx-2
              v-flex(xs12 md6)
                v-btn(
                  :color="$mcColors.mcBlue"
                  :to="{ name: 'signup-choose'}"
                  dark
                  block
                  :id="suite.btnId"
                  @click.stop="handleStartFreeBtn(suite.btnId)"
                ).text-none.font-weight-bold Start Free
              v-flex(xs12 md6).pl-1.text-xs-right
                v-btn(
                  outline
                  block
                  :color="$mcColors.mcBlue"
                  :id="suite.learnId"
                  :to="{ name: suite.learnLink }"
                  @click.stop="handleLearnMoreBtn(suite.learnId)"
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
  },
  methods: {
    handleStartFreeBtn (btnId) {
      this.$emit('startFree', btnId);
    },
    handleLearnMoreBtn (learnId) {
      this.$emit('learnMore', learnId);
    }
  }
};
</script>

<style scoped>
.roundedCard {
  border-radius: 10px;
}
</style>