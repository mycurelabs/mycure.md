<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Corporate Clinics Full"
      :background-image-file-extension="$useWebp? '.webp' : '.png'"
      title="Manage your Company Clinic with Ease"
      meta-title="MYCURE for Corporate Clinics"
      description="Custom built for corporate clinics, this management system provides useful analytics while being compliant on employees’ data privacy."
      btn-text="Get Started"
      image="Corporate Clinics Mobile"
      custom-image-path="clinics/corporate/"
      parse-title
      parse-meta-title
      :parse-title-fields="['your ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    stakes(
      :version="4"
      panelTitle="Problems of Not Using a Clinic Management System"
      :contents="stakesContent"
      not-free
    )
    //- 2nd panel
    div.grey-bg.mx-n3
    features(
      extension-exclusive
      image-dir="clinics/corporate/"
      icon-container-col-size="10"
      description="Everyone in your workplace is online. MYCURE helps you monitor their health and safety conveniently through the cloud."
      :icon-column-bindings="{ cols: 6, sm: 3 }"
      :items="features"
    )
      template(slot="title")
        h2(:class="headerClasses").primary--text Newest tools for the newest generation.
    //- 3rd panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" lg="8").white--text
              h2(:class="headerClasses").mb-8.text-center.white--text Know the health status of your employees, stat!
              div.text-center
                span.mc-content-set-1.mb-10.white--text Easily access and share medical records with them through the MYCURE health portal.
    //- 4th panel
    generic-media-panel(
      align="center"
      hide-btn
      :content="multiplePanel"
      :title-classes="headerClasses"
      :super-title-classes="['mc-content-set-1', 'font-open-sans', 'font-weight-semibold', 'primary--text']"
    )
    care(:metrics-data="metricsData")
    steps(:steps="stepsContent" not-free)
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 9th panel
    //- div.info.mx-n3
    //-   v-container
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }")
    //-         v-col(cols="12").white--text.text-center
    //-           h2(:class="['white--text', ...headerClasses]").mb-5 Start easy. Take the first step today.
    //-           signup-button(
    //-             depressed
    //-             class="rounded-pill"
    //-             :width="!$isWideScreen ? '228px' : '300'"
    //-             :height="!$isWideScreen ? '59px' : '73.68'"
    //-             color="success"
    //-           ).text-none
    //-             span.generic-button-text Count me in
    //- 5th panel
    pricing(
      type="clinic"
      title="Take the first step today."
    )
    call-to-action(:version="4" not-free)
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
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
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
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
    this.stakesContent = [
      {
        title: 'Non-Compliance',
        description: 'With strict laws and heavy penalties on data privacy and security, storing and management of employee health records have to be compliant.',
        imageBindings: {
          image: 'Non-Compliance.png',
          mobileImage: 'Non-Compliance.png',
          imageAlt: 'Data privacy breach',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
      {
        title: 'Low Safety Monitoring',
        description: 'With the ‘new normal’ due to the pandemic, a robust health system would greatly complement HR’s processes on vaccine and testing tracking.',
        imageBindings: {
          image: 'Low Safety Monitoring.png',
          mobileImage: 'Low Safety Monitoring.png',
          imageAlt: 'Woman confused at list',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
      {
        title: 'Low Productivity',
        description: 'Having a health platform with analytics could provide helpful insights that can help in creating activities to boost productivity.',
        imageBindings: {
          image: 'Low Productivity.png',
          mobileImage: 'Low Productivity.png',
          imageAlt: 'Man sleeping on the job due to slow software',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
    ];
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your Corporate Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account based on your clinic’s needs.',
      },
      {
        title: 'Serve and Save More',
        description: 'Start using the system to serve your employees better.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know that corporate clinics have their own special needs and requirements.  You know that having a customized system to properly organize and secure employees’ health records is a high priority.',
      'The problem is it’s hard to find such a clinic system that is specifically designed for companies.  We believe that clinics like yours should never have to deal with this.',
      'That’s why we\'ve built MYCURE Corporate Clinic Management System so that you can focus more on your core business.',
    ];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for Corporate Clinics',
      description: 'Organize your employee health records like a breeze. Get the most affordable software for corporate clinics today.',
      socialBanner: require('~/assets/images/banners/corporate-clinic-og-banner.png'),
    });
  },
  computed: {
    multiplePanel () {
      return {
        superTitle: 'For Multi-Branch Facilities',
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
