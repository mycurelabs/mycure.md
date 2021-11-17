<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="Mobile-Clinics-Full"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="The simplest LIS for Mobile Labs"
        meta-title="MYCURE LIS for Mobile Labs"
        description="MYCURE is an easy to use, secure, cloud-based laboratory information software (LIS) that you can easily setup anywhere your medical team is."
        btn-text="Get Started"
        image="Mobile-Clinics-Mobile-Version"
        custom-image-path="diagnostics/mobile-labs/"
        parse-title
        parse-meta-title
        :parse-title-fields="['LIS ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )

    //- 2nd panel
    lazy-hydrate(when-visible)
      workflow

    //- 3rd panel
    v-container
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" md="8").text-center
              h2(:class="headerClasses").font-weight-semibold.mb-5 Create beautiful reports for your clients.
              p(:class="descriptionClasses").mb-10.font-open-sans.font-gray Provide both printed and online copies of their medical exam results without the hassle.
            v-col(cols="12").text-center
              v-row.justify-center.gutterless
                v-col(cols="6" md="3").pa-0
                  v-btn(
                    color="primary"
                    depressed
                    tile
                    block
                    :height="$isMobile ? '36' : $isRegularScreen ? '52' : '75'"
                    :outlined="reportType !== 'imaging'"
                    @click="reportType = 'imaging'"
                  ).text-none
                    span.mc-button-set-1 Imaging
                v-col(cols="6" md="3").pa-0
                  v-btn(
                    color="primary"
                    depressed
                    tile
                    block
                    :height="$isMobile ? '36' : $isRegularScreen ? '52' : '75'"
                    :outlined="reportType !== 'lab'"
                    @click="reportType = 'lab'"
                  ).text-none
                    span.mc-button-set-1 Laboratory
              br
              br
              v-tabs-items(v-model="reportType")
                v-tab-item(v-for="(mockup, key) in reportMockups" :key="key" :value="mockup.value")
                  picture-source(
                    image-file-extension=".png"
                    custom-path="diagnostics/mobile-labs/"
                    extensionExclusive
                    :image="`${mockup.image}${$isMobile ? '-mobile' : ''}`"
                    :image-alt="`A ${reportType} sample report from MYCURE Clinic Management System on laptop screen`"
                    :image-width="$isMobile ? '276px' : ($isRegularScreen ? '945px' : '1445px')"
                    :image-height="reportsPanelImgHeight"
                  )

    //- 4th panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="directoryPanel"
        :title-classes="[...headerClasses, 'primary--text']"
      )
        template(slot="cta-button")
          v-row(:justify="$isMobile ? 'center' : 'start'")
            v-col(cols="10" md="7" lg="6" xl="7" :align="$isMobile ? 'center' : 'start'")
              signup-button(
                depressed
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                color="success"
              ).text-none
                v-icon(left) mdi-web
                span.generic-button-text Create my website
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
    lazy-hydrate(when-visible)
      storybrand(
        title="Using Modern Tools to Boost Your Practice"
        :content="storybrandContent"
      )
    //- 5th panel
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="Take the first step today."
          type="diagnostic"
        )

    //- 6th panel
    lazy-hydrate(when-visible)
      call-to-action(:version="4")
        template(slot="cta-button")
          v-col(cols="12" md="7" lg="6" xl="5")
            div(:class="{'text-center': $isMobile}")
              signup-button(
                event-label="signup"
                color="success"
                depressed
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
              ).text-none
                span.generic-button-text Get Started

    //- 7th panel
    //- div.info.mx-n3
    //-   v-container
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }")
    //-         v-col(cols="12").white--text.text-center
    //-           h2(:class="['white--text', ...headerClasses]").mb-5 Take the first step today
    //-           p(:class="descriptionClasses").white--text.mb-5 Start now and get all your questions answered.
    //-           signup-button(
    //-             depressed
    //-             class="rounded-pill"
    //-             :width="!$isWideScreen ? '228px' : '300'"
    //-             :height="!$isWideScreen ? '59px' : '73.68'"
    //-             color="success"
    //-           ).text-none
    //-             span.generic-button-text Start Now
</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource: () => import('~/components/commons/PictureSource'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Workflow: () => import('~/components/mobile-labs/Workflow'),
    Usp,
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  data () {
    this.reportMockups = [
      {
        image: 'Imaging-Report',
        value: 'imaging',
      },
      {
        image: 'Mobile-Labs-Laboratory',
        value: 'lab',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of diagnostic center that prioritizes using modern tools to optimize efficiency and improve operations. In order to be that way, you need a solution that can automate routine tasks that will result in reducing costly errors.',
      'The problem is it’s hard to find such a system that is easy to use, affordable and interoperable with other systems, which is lacking from your current provider.  We believe that diagnostic centers like yours should never have to deal with this. We’ve talked to dozens of labs and understand that there is a need for this.',
      'That’s why we\'ve built MYCURE Diagnostics with powerful LIS and RIS modules to specifically address this need.',
    ];
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
      title: 'MYCURE\'s Simplest LIS for Mobile Labs | Secure & Easy to Use',
      description: 'MYCURE\'s LIS provides the easiest way to manage your mobile lab. Its simple, intuitive interface allows you to get started right. Get more details here.',
      socialBanner: require('~/assets/images/banners/mobile-clinic-og-banner.png'),
    });
  },
  computed: {
    directoryPanel () {
      return {
        title: 'Expand your Reach',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        contentAlign: 'right',
        imageBindings: {
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          customPath: 'commons/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
      };
    },
    reportsPanelImgHeight () {
      if (this.reportType === 'imaging') {
        if (this.$isMobile) return '147.06px';
        if (this.$isRegularScreen) return '502.89px';
        return '768.96px';
      } else {
        if (this.$isMobile) return '181.77px';
        if (this.$isRegularScreen) return '621.8px';
        return '950.79px';
      }
    },
  },
  created () {
    this.loading = false;
  },
};
</script>
