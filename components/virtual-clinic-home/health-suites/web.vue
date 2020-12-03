<template lang="pug">
  v-container.main-container
    v-row(align="center")
      v-col(cols="12").text-center
        h1.text-center.font-40 {{ panelTitle }}
        p.font-s.text-center {{ panelSubtitle }}
    v-row(justify="center").pt-5
      v-col(
        v-for="(suite, key) in healthSuites"
        :key="key"
        cols="12"
        md="4"
      )
        v-card(
          height="100%"
          :color="hoveredClinic === suite.learnId ? '#fafafa' : '#f0f0f0'"
          @mouseover="hoveredClinic = suite.learnId"
          @mouseout="hoveredClinic = ''"
        ).health-suites-card
          v-card-text.black--text
            strong.font-s {{ suite.header }}
            p.font-16 {{ suite.subheader }}
            v-row
              v-col(cols="12" md="4").text-center.pt-1
                img(
                  :src="require(`~/assets/images/${suite.image}${hoveredClinic === suite.learnId ? '-active' : ''}.png`)"
                  width="100%"
                  :alt="suite.header"
                  @click="$nuxt.$router.push({ name: suite.learnLink })"
                )
              v-col(cols="12" md="8").pl-1
                ul
                  li(v-for="(feat, key) in suite.features" :key="key") {{ feat }}
            v-row.py-2.health-suites-card-actions
              v-col(cols="12" md="6")
                v-btn(
                  color="primary"
                  :to="{ name: suite.btnLink, ...suite.learnLink === 'hippocrates' && { params: { route: suite.learnLink } } }"
                  dark
                  block
                  :id="suite.btnId"
                  @click.stop="handleStartFreeBtn(suite.btnId)"
                ).text-none.font-weight-bold {{ suite.btnText }}
              v-col(cols="12" md="6").pl-1.pr-5.text-xs-right
                v-btn(
                  v-if="suite.learnId !== 'home-specialized-clinics-learn-more'"
                  outlined
                  block
                  color="primary"
                  :id="suite.learnId"
                  :to="{ name: suite.learnLink}"
                  @click.stop="handleLearnMoreBtn(suite.learnId)"
                ).text-none.font-weight-bold Learn More >
                v-btn(
                  v-else="suite.learnId === 'home-specialized-clinics-learn-more'"
                  outlined
                  block
                  color="primary"
                  :id="suite.learnId"
                  :to="{ name: suite.learnLink, query: { scrollToSpecializedClinics: 'true' } }"
                  @click.stop="handleLearnMoreBtn(suite.learnId)"
                ).text-none.font-weight-bold Learn More >
</template>

<script>
import { HEALTH_SUITES_HEADERS, HEALTH_SUITES_ITEMS } from './constants';
export default {
  data () {
    return {
      healthSuites: HEALTH_SUITES_ITEMS,
      hoveredClinic: '',
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
/* For Hippocrates */
/* .main-container {
  height: 900px;
  padding-top: 80px;
} */
.main-container {
  height: 600px;
  padding-top: 110px;
}
.health-suites-card {
  border-radius: 10px;
  background-color: #f0f0f0;
  position: relative;
  padding-bottom: 50px;
}
.health-suites-card-actions {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
