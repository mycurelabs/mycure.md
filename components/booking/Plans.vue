<template lang="pug">
  v-container(fluid)
    v-row(align="center" justify="center" :class="{ 'mobile-container' : $isMobile }")
      v-col(md="10")
        v-row(align="center" justify="center" :class="{ 'plans-container my-10' : !$isMobile }")
          v-col(cols="10" md="5" :class="{ 'pa-12' : !$isMobile }")
            h1(:class="[{ 'mb-5' : !$isMobile, 'text-center' : $isMobile }, ...headerClasses]").white--text.font-weight-medium {{title}}
            get-started-btn(
              v-if="!$isMobile"
              color="success"
              rounded
              depressed
              :large="$isRegularScreen"
              :x-large="$isWideScreen"
            ).font-s
          v-col(cols="10" md="6" :class="{ 'pa-12' : !$isMobile }").mt-4
            template(v-for="plan in plans")
              h1(:class="planTitleClasses").white--text.font-weight-medium {{plan.name}}
              p.white--text.mb-6.font-open-sans {{plan.description}}
          v-col(v-if="$isMobile" cols="12").text-center
            get-started-btn(
              rounded
              depressed
              block
              color="success"
            ).font-s
</template>

<script>
import GetStartedBtn from './GetStartedButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GetStartedBtn,
  },
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
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    planTitleClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s', 'text-center'],
          regular: ['font-m'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
  },
};
</script>

<style scoped>
.plans-container {
  background-color: #0174BB;
  border-radius: 10px;
}

.mobile-container {
  background-color: #0174BB;
}
</style>
