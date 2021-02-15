<template lang="pug">
  div
    v-row(v-align="center" justify="center" :class="{ 'mobile-container' : $isMobile }")
      v-col(md="8")
        v-row(align="center" justify="center" :class="{ 'plans-container my-10' : !$isMobile }")
          v-col(cols="10" md="5" :class="{ 'pa-12' : !$isMobile }")
            h1(:class="{ 'font-35 mb-5' : !$isMobile, 'font-32 text-center' : $isMobile }").plan-title.white--text {{title}}
            v-btn(
              v-if="!$isMobile"
              x-large
              rounded
              color="success"
              :to="{ name: 'pricing' }"
            ).text-none #[b See pricing plans]
          v-col(cols="10" md="6" :class="{ 'pa-12' : !$isMobile }").mt-4
            template(v-for="plan in plans")
              h1(:class=" $isMobile ? 'font-20' : 'font-30'").white--text {{plan.name}}
              p.white--text.mb-6 {{plan.description}}
          v-col(v-if="$isMobile" cols="12").text-center
            v-btn(
              large
              rounded
              color="success"
              :to="{ name: 'pricing' }"
            ).text-none #[b See pricing plans]
</template>

<script>
export default {
  data () {
    this.title = 'Start for free, then pay as you grow';
    this.plans = [
      {
        name: 'ALWAYS FREE',
        description: 'All the essential tools you need to run your health facility',
      },
      {
        name: 'PAY AS YOU GROW',
        description: 'Only pay for what you use on top of the free plan',
      },
      {
        name: 'ENTERPRISE',
        description: 'Get a customized suite of healthcare modules to handle cross-functional operations across one or more health facilities that you manage',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.plans-container {
  background-color: #1D6A83;
  border-radius: 10px;
}

.mobile-container {
  background-color: #1D6A83;
}

.plan-title {
  font-size: 70px;
  line-height: 1;
}
</style>
