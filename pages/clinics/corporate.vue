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
    //- 2nd panel
    div.grey-bg.mx-n3
    features(
      extension-exclusive
      image-dir="clinics/corporate/"
      icon-container-col-size="6"
      description="Everyone in your workplace is online. MYCURE helps you monitor their health and safety conveniently through the cloud."
      :icon-column-bindings="{ cols: 5 }"
      :items="features"
    )
      template(slot="title")
        h2(:class="headerClasses").primary--text Newest tools for the newest generation.
    //- 3rd panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" lg="8" xl="6").white--text
              h2(:class="headerClasses").mb-10.text-center.white--text Know the health status of your employees stat.
              h3.mc-content-set-1.mb-10.font-weight-semibold.white--text.text-center Easily access and share medical records with them through the MYCURE health portal.
    //- 4th panel
    generic-media-panel(
      align="center"
      hide-btn
      :content="multiplePanel"
      :title-classes="headerClasses"
    )
    //- 5th panel
    pricing(
      type="clinic"
      title="Take the first step today."
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
                width="228px"
                height="59px"
                color="success"
              ).text-none
                span.generic-button-text Count me in
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    this.features = [
      {
        title: 'Online Health Records',
        icon: 'Online Health Records',
        iconExtension: '.png',
      },
      {
        title: 'Medical Certificates',
        icon: 'Certificate',
        iconExtension: '.png',
      },
      {
        title: 'Annual Checkups',
        icon: 'Annual',
        iconExtension: '.png',
      },
      {
        title: 'COVID-19 Test and Vaccine Tracker',
        icon: 'Covid vaccine tracker',
        iconExtension: '.png',
      },
    ];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for Corporate Clinics',
      description: 'Get the most affordable software for corporate clinics today.',
      socialBanner: require('~/assets/images/banners/MYCURE - Corporate Clinic OG BANNER.png'),
    });
  },
  computed: {
    multiplePanel () {
      return {
        superTitle: 'FOR MULTI-BRANCH FACILITIES',
        title: 'One view for multiple locations',
        description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'clinics/skin/',
          image: 'Multiple locations.png',
          mobileImage: 'Multiple locations mobile.png',
          extensionExclusive: true,
          imageAlt: 'Charts and graphs',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '156.16px' : (this.$isRegularScreen ? '260.07px' : '401.41px'),
        },
      };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
</style>
