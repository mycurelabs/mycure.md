<template lang="pug">
  v-container.py-12.specialized-plans-contents
    v-row(justify="center")
      v-col(cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light.text-center {{ panelContent.header }}
    v-row(justify="center" align="start")
      v-col(
        cols="10"
        md="3"
        v-for="(data, key) in plans"
        :key="key"
        :class="mobileClasses"
        :offset-md-="key === 3 ? '1' : '0'"
      ).mr-9.ml-9
        img(v-lazy="require(`~/assets/images/doctors-clinics/${data.images}`)" :alt="data.header")
        h1.font-22.lh-title.pb-3.font-weight-medium {{ data.header }}
        p(:class="{'pre-white-space': $isRegularScreen && key === 3}").text-justify.font-16.mt-3.font-gray {{ data.description }}
    v-row(justify="center").pt-12
      v-col(cols="12" md="5")
        h1.font-16.font-weight-light.text-center.font-italic {{ panelContent.description }}
</template>

<script>
import { SPECIALIZED_PLANS, LISTS_OF_PLANS } from '../doctors-clinics-content';
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    this.panelContent = SPECIALIZED_PLANS;
    return {
      plans: LISTS_OF_PLANS.map((plan, key) => ({
        ...plan,
        ...plan.parseDescriptionFields && { description: parseTextWithNewLine(plan.description, plan.parseDescriptionFields) },
      })),
    };
  },
  computed: {
    mobileClasses () {
      return this.$isMobile ? ['text-center', 'py-3'] : [];
    },
  },
};
</script>

<style scoped>
@media screen and (device-width: 1024px) {
  .specialized-plans-contents {
    position: relative;
    z-index: 2;
  }
}
</style>
