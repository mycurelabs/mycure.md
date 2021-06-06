<template lang="pug">
  div.pricing-bg.mx-n3
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12")
            v-row(align="center" justify="center")
              v-col(cols="12").text-center
                h1(:class="headerClasses").font-weight-semibold.mb-5 {{ title }}
                p(:class="descriptionClasses").mb-5.font-open-sans.font-gray {{ description }}
              v-col(cols="12" md="4")
                v-card(height="100%" width="100%").pricing-card.rounded-xl.elevation-3
                  v-card-text.text-center
                    picture-source(
                      extension-exclusive
                      custom-path="pricing/"
                      image="Essentials"
                      image-file-extension=".png"
                      image-alt="Booking Essentials"
                      image-width="200"
                    )
                  v-card-title
                    v-spacer
                    h2(:class="headerClasses").font-weight-bold Start Free
                    v-spacer
                  v-divider.divider.mx-5
                  v-card-text
                    v-row(justify="center")
                      v-col(cols="10")
                        div(v-for="(inclusion, key) in inclusions" :key="key").d-flex
                          v-icon(color="primary" left) mdi-checkbox-marked-circle
                          span.font-10.black--text {{ inclusion }}
                        signup-button(
                          depressed
                          rounded
                          block
                          color="primary"
                          event-label="signup"
                          :large="$isRegularScreen"
                          :x-large="$isWideScreen"
                        ).text-none.font-14.my-5
                          span Try Free
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
    this.description = 'All essential features to help start up your digital booking journey.';
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
        mobile: ['text-center'],
        regular: ['font-20'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs', 'text-center'],
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
/* .pricing-card {
  border: 2px solid #0174BB;
} */
.pricing-bg {
  width: 100vw;
  background-image: url('../../assets/images/pricing/Pricing BG.png');
  background-position: center center;
  background-size: 100% 100%;
}
.divider {
  border-bottom: 1px solid black;
}
</style>
