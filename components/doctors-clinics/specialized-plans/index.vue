<template lang="pug">
  v-container.specialized-plans-contents
    v-row(justify="center").py-12
      v-col(cols="12" md="7")
        h1.font-30.lh-title.pb-3.font-weight-light.text-center {{SPECIALIZED_PLANS.header}}
    v-row(justify="center" align="start")
      v-col(
        cols="12"
        md="4"
        v-for="(data, key) in plans"
        :key="key"
        :class="mobileClasses"
      )
        img(v-lazy="require(`~/assets/images/doctors-clinics/${data.images}`)" :alt="data.header")
        h1.font-22.lh-title.pb-3.font-weight-medium {{data.header}}
        span.font-18.mt-3.font-gray {{data.description}}
    v-row(justify="center").py-12
      v-col(cols="12" md="6")
        h1.font-18.font-weight-light.text-center.font-italic {{SPECIALIZED_PLANS.description}}
</template>

<script>
import { SPECIALIZED_PLANS, LISTS_OF_PLANS } from '../doctors-clinics-content';
export default {
  data () {
    this.SPECIALIZED_PLANS = SPECIALIZED_PLANS;
    return {
      plans: LISTS_OF_PLANS,
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
