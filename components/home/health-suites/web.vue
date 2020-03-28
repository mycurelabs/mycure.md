<template lang="pug">
  v-container.main-container
    v-row(align="center")
      v-col(cols="12").text-center
        h1.text-center.font-work-sans.font-40 {{ panelTitle }}
        p.font-s.text-center {{ panelSubtitle }}
    v-row.pt-5
      v-col(
        v-for="(suite, key) in healthSuites"
        :key="key"
        cols="12"
        md="4"
      )
        v-card(height="100%").roundedCard
          v-card-text.black--text
            strong.font-s {{ suite.header }}
            p.font-16 {{ suite.subheader }}
            v-row
              v-col(cols="12" md="4").text-center.pt-1
                img(
                  v-lazy="require(`~/assets/images/${suite.image}.png`)"
                  width="100%"
                  :alt="suite.header"
                )
              v-col(cols="12" md="8").pl-1
                ul
                  li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
            v-row.py-2
              v-col(cols="12" md="6")
                v-btn(
                  color="primary"
                  :to="{ name: suite.btnLink }"
                  dark
                  block
                  :id="suite.btnId"
                  @click.stop="handleStartFreeBtn(suite.btnId)"
                ).text-none.font-weight-bold {{ suite.btnText }}
              v-col(cols="12" md="6").pl-1.text-xs-right
                v-btn(
                  outlined
                  block
                  color="primary"
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
      healthSuites: HEALTH_SUITES_ITEMS,
    };
  },
  computed: {
    panelTitle () {
      return HEALTH_SUITES_HEADERS.title;
    },
    panelSubtitle () {
      return HEALTH_SUITES_HEADERS.subtitle;
    },
  },
  methods: {
    handleStartFreeBtn (btnId) {
      this.$emit('startFree', btnId);
    },
    handleLearnMoreBtn (learnId) {
      this.$emit('learnMore', learnId);
    },
  },
};
</script>

<style scoped>
.main-container {
  height: 600px;
  padding-top: 100px;
}
.roundedCard {
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>
