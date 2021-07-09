<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Mobile Clinics Full"
      background-image-file-extension=".webp"
      title="The simplest LIS for Mobile Labs"
      meta-title="MYCURE LIS for Mobile Labs"
      description="MYCURE is an easy to use, secure, cloud-based laboratory information software (LIS) that you can easily setup anywhere your medical team is."
      btn-text="Sign Up"
      image="Mobile Clinics Mobile Version"
      custom-image-path="diagnostics/mobile-labs/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    pricing(
      title="Start free and only pay as you grow"
      type="diagnostic"
    )
    //- 5th panel
    call-to-action(:version="4")
      template(slot="cta-button")
        v-col(cols="12" md="7" lg="6" xl="5")
          signup-button(
            event-label="signup"
            color="success"
            depressed
            rounded
            block
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="btnClasses"
          ).text-none Get Started

    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").white--text.text-center
              h2(:class="['white--text', ...headerClasses]").mb-5 Take the first step today
              p(:class="descriptionClasses").white--text.font-weight-bold.mb-5 Start now and get all your questions answered.
              signup-button(
                depressed
                rounded
                :x-large="$isWideScreen"
                :large="!$isWideScreen"
                :class="btnClasses"
                color="success"
              ).text-none
                span Get Started
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Usp,
  },
  data () {
    this.infoPanels = [
      {
        header: 'Seamless workflows anywhere you go',
        descriptions: [
          'Value everyone\'s time more effectively. Handle location-based registrations like a breeze.',
        ],
        list: [
          'Book appointments',
          'Register via kiosk',
          'Specimen collection queuing',
          'Online and printed results',
        ],
      },
      {
        header: 'Create beautiful reports',
        descriptions: [
          'Provide both printed and online copies of medical exam results without the hassle.',
        ],
      },
      {
        header: 'Expand Your Reach',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        ],
      },
    ];

    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE LIS for Mobile Labs',
      description: 'Discover the simplest and most affordable laboratory information software designed for mobile labs. It’s cloud-based and works offline.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
      ];
      return descriptionClasses;
    },
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
    btnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
