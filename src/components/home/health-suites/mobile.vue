<template lang="pug">
  v-container
    v-layout(row align-center)
      v-flex(xs12 md12).text-xs-center
        h2.text-xs-center.font-work-sans.font-xl {{ panelTitle }}
        p.font-s.text-xs-center {{ panelSubtitle }}
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
            v-layout(row wrap).mx-2.py-2
              v-flex(xs6 md6)
                v-btn(
                  :color="$mcColors.mcBlue"
                  right
                  dark
                  block
                  :to="{ name: suite.btnLink }"
                  :id="suite.btnId"
                  @click.stop="handleStartFreeBtn(suite.btnId)"
                ).text-none.font-weight-bold {{ suite.btnText }}
              v-flex(xs6 md6)
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
  background-color: #f0f0f0;
}
</style>