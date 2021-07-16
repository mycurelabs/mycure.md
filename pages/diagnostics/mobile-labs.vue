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
      btn-text="Start Free"
      image="Mobile Clinics Mobile Version"
      custom-image-path="diagnostics/mobile-labs/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )

    //- 2nd panel
    workflow

    //- 3rd panel
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" md="8").text-center
            h2(:class="headerClasses").font-weight-semibold.mb-5 Create beautiful reports for your clients.
            p(:class="descriptionClasses").mb-10.font-weight-semibold.secondary--text Provide both printed and online copies of their medical exam results without the hassle.
          v-col(cols="12").text-center
            v-row.justify-center.gutterless
              v-col(cols="6" md="3").pa-0
                v-btn(
                  color="primary"
                  depressed
                  tile
                  block
                  :x-large="!$isMobile"
                  :outlined="reportType !== 'imaging'"
                  @click="reportType = 'imaging'"
                ).text-none Imaging
              v-col(cols="6" md="3").pa-0
                v-btn(
                  color="primary"
                  depressed
                  tile
                  block
                  :x-large="!$isMobile"
                  :outlined="reportType !== 'lab'"
                  @click="reportType = 'lab'"
                ).text-none Laboratory
            br
            br
            v-tabs-items(v-model="reportType")
              v-tab-item(v-for="(mockup, key) in reportMockups" :key="key" :value="mockup.value")
                picture-source(
                  image-width="100%"
                  image-file-extension=".png"
                  custom-path="diagnostics/mobile-labs/"
                  extensionExclusive
                  :image="`${mockup.image}${$isMobile ? '-mobile' : ''}`"
                  :image-alt="`A ${reportType} sample report from MYCURE Clinic Management System on laptop screen`"
                )

    //- 4th panel
    generic-media-panel(
      :content="directoryPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" md="7" lg="6" xl="7")
            signup-button(
              depressed
              rounded
              block
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              :class="btnClasses"
              color="success"
            ).text-none
              span Create my website
          //- TODO: Bring back when sample website is available
          //- v-col(cols="12" md="7" lg="6" xl="5")
          //-   mc-btn(
          //-     color="success"
          //-     href="https://calendly.com/mycure/demo"
          //-     target="_blank"
          //-     rel="noopener noreferrer"
          //-     depressed
          //-     rounded
          //-     block
          //-     :large="!$isWideScreen"
          //-     :x-large="$isWideScreen"
          //-     :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
          //-   ).text-none Book a full training

    //- 5th panel
    pricing(
      title="Take the first step today."
      type="diagnostic"
    )

    //- 6th panel
    call-to-action(:version="4")
      template(slot="cta-button")
        v-col(cols="12" md="7" lg="6" xl="5")
          div(:class="{'text-center': $isMobile}")
            signup-button(
              event-label="signup"
              color="success"
              depressed
              rounded
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="btnClasses"
            ).text-none Start Now

    //- 7th panel
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
                span Start Now
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource: () => import('~/components/commons/PictureSource'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Workflow: () => import('~/components/mobile-labs/Workflow'),
    Usp,
  },
  data () {
    this.reportMockups = [
      {
        image: 'Imaging Report',
        value: 'imaging',
      },
      {
        image: 'Mobile Labs Laboratory',
        value: 'lab',
      },
    ];
    this.directoryPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'commons/',
        image: 'Expand your reach.webp',
        imageAlt: 'Man browsing a clinic website',
      },
    };
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      reportType: 'imaging',
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE LIS for Mobile Labs',
      description: 'Discover the simplest and most affordable laboratory information software designed for mobile labs. It’s cloud-based and works offline.',
      socialBanner: require('~/assets/images/banners/MYCURE - Mobile Clinic OG BANNER.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
};
</script>
