<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Corporate Clinics Full"
      background-image-file-extension=".webp"
      title="Organize your employee health records like a breeze"
      meta-title="MYCURE for Corporate Clinics"
      description="Get the most affordable software for corporate clinics today."
      btn-text="Start Free"
      image="Corporate Clinics Mobile"
      custom-image-path="clinics/corporate/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )

    pricing(
      type="doctor"
      title="Start free and only pay as you grow."
    )
    call-to-action(:version="4")
    //- 9th panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").white--text.text-center
              h2(:class="['white--text', ...headerClasses]").mb-5 Start easy. Take the first step today
              signup-button(
                depressed
                rounded
                :x-large="$isWideScreen"
                :large="!$isWideScreen"
                :class="btnClasses"
                color="success"
              ).text-none
                span Start Free
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
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ProblemStatement: () => import('~/components/dental-clinics/ProblemStatement'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Straightforward: () => import('~/components/dental-clinics/Straightforward'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
  data () {
    this.features = [
      {
        title: 'Online Health Records',
      },
      {
        title: 'Medical Certificates',
      },
      {
        title: 'Annual Checkups',
      },
      {
        title: 'COVID-19 Test and Vaccine Tracker',
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
