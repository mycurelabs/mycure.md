<template lang="pug">
  v-container
    v-row(align="center")
      v-col(cols="12").text-center
        h1.font-36.text-center.pre-white-space {{ panelTitle }}
        br
        p.font-s.text-center {{ panelSubtitle }}
    v-row(
      v-for="(suite, key) in healthSuites"
      :key="key"
    ).pt-5
      v-col(cols="12")
        v-card.roundedCard
          v-card-text.black--text
            strong.font-s {{ suite.header }}
            p.font-14 {{ suite.subheader }}
            v-row
              v-col(cols="4")
                img(
                  v-lazy="require(`~/assets/images/${suite.image}.png`)"
                  :alt="suite.header"
                  width="90%"
                )
              v-col(cols="8").pl-1
                ul
                  li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
                  br(v-if="key === 1")
            v-row.py-2
              v-col(cols="6")
                v-btn(
                  color="primary"
                  right
                  dark
                  block
                  :to="{ name: suite.btnLink }"
                  :id="suite.btnId"
                  @click.stop="handleStartFreeBtn(suite.btnId)"
                ).text-none.font-weight-bold {{ suite.btnText }}
              v-col(cols="6")
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
// - constants
import { HEALTH_SUITES_HEADERS, HEALTH_SUITES_ITEMS } from './constants';
// - utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    return {
      healthSuites: HEALTH_SUITES_ITEMS,
    };
  },
  computed: {
    panelTitle () {
      const title = HEALTH_SUITES_HEADERS.title;
      return parseTextWithNewLine(title, ['MYCURE']);
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
.roundedCard {
  border-radius: 10px;
  background-color: #f0f0f0;
}
</style>
