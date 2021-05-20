<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(align="center" justify="center")
            v-col(cols="12" md="5")
              h1(:class="headerClasses").font-weight-semibold.mb-10 {{ title }}
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
            v-col(cols="12" md="5" offset-md="2")
              v-card(flat height="100%" width="100%").pricing-card.rounded-xl
                v-card-title
                  v-spacer
                  h2(:class="headerClasses").font-weight-semibold.mb-10 Start Free
                  v-spacer
                v-card-text.text-center
                  picture-source(
                    extension-exclusive
                    custom-path="pricing/"
                    image="Essentials"
                    image-file-extension=".png"
                    image-alt="Booking Essentials"
                    :image-width="!$isMobile ? '50%' : '40%'"
                  )
                v-card-text
                  v-row(justify="center")
                    v-col(cols="10")
                      div(v-for="(inclusion, key) in inclusions" :key="key").d-flex
                        v-icon(color="info" left) mdi-check
                        span.info--text {{ inclusion }}
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
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  data () {
    this.title = 'Get started free and pay as you grow';
    this.description = 'All essential features to help start up your digital booking journey';
    this.inclusions = [
      'Up to 1 user',
      'Up to 200 MB',
      'Classic Booking Website',
      'Fast appointments',
      'Online payments',
      'Patient Registration',
      'Medical Records',
      'Daily Census',
      'Sales Reports',
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
.pricing-card {
  border: 2px solid #0174BB;
}
</style>
