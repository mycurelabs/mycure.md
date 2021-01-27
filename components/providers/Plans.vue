<template lang="pug">
  div
    v-row(v-if="!$isMobile" align="center" justify="center")
      v-col(md="8")
        v-row(align="center" justify="center").my-10.plans-container
          v-col(cols="5").pa-12
            h1.font-45.mb-5.plan-title.white--text {{title}}
            v-btn(
              x-large
              rounded
              color="success"
              :to="{ name: 'pricing' }"
            ) #[b Learn More]
          v-col(cols="12" md="6").pa-12
            template(v-for="plan in plans")
              h1.white--text {{plan.name}}
              p.white--text {{plan.description}}
    v-row(v-else align="center" justify="center").mobile-container
      v-col(cols="10").mt-8
        h1.text-center.font-30.plan-title.white--text {{title}}
      v-col(cols="10")
        template(v-for="plan in plans")
          h1.font-24.white--text.mt-4 {{plan.name}}
          p.font-20.white--text {{plan.description}}
      v-col(cols="12").text-center.mb-8
          v-btn(
            large
            rounded
            color="success"
            :to="{ name: 'pricing' }"
          ) #[b Learn More]
</template>

<script>
export default {
  data () {
    this.title = 'Start for free, then pay as you grow';
    this.plans = [
      {
        name: 'FREE',
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
