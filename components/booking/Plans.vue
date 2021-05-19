<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(align="center" justify="center")
            v-col(cols="12" md="5")
              h1(:class="headerClasses").font-weight-medium.mb-10 {{ title }}
              p(:class="descriptionClasses").mb-10.font-open-sans.font-gray {{ description }}
              signup-button(
                v-if="!$isMobile"
                depressed
                rounded
                color="success"
                event-label="signup"
                :large="$isRegularScreen"
                :x-large="$isWideScreen"
              ).text-none.font-s
                span Get Started Free
            v-col(cols="12" md="6" offset-md="1")
              template(v-for="plan in plans")
                h1(:class="planTitleClasses").font-weight-medium {{plan.name}}
                p.mb-6.font-open-sans {{plan.description}}
            v-col(v-if="$isMobile" cols="12").text-center
               signup-button(
                depressed
                rounded
                block
                color="success"
                event-label="signup"
              ).text-none.font-s
                span Get Started Free
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    SignupButton,
  },
  data () {
    this.title = 'Get started free and pay as you grow';
    this.description = 'All essential features to help start up your digital booking journey';
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
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
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
