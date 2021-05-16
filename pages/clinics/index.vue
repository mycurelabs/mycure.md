<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Most Complete Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-meta-title="wide"
      parse-title="regular"
      :parse-title-fields="['workflows, ', 'results, ']"
      btn-text="Get Started"
      btn-color="success"
      :parse-meta-title-fields="['Complete ']"
      regular-height="650px"
      image-col="7"
      text-col="4"
      image="Clinics USP"
      custom-image-path="clinics/"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', params: { type: 'clinic' }})"
    )
    //- 2nd panel
    div.grey-bg.pt-12
      workflow.pt-12
    //- 3rd panel
    mycure-csi
    //- 4th panel
    generic-media-panel(
      :fluid="!$isMobile"
      content-align-right
      align-right-column="center"
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      :header="infoPanels[0].header"
      :descriptions="infoPanels[0].descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
      template(slot="custom-left")
        video(v-if="!$isMobile" :width="wXL ? '1175' : '820'" playsinline autoplay muted loop).syncbase-animate
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.webm" type="video/webm")
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.mp4" type="video/mp4")
          | Your browser does not support the video tag.

      div(slot="additional-content" :class="{'text-center': $isMobile}")
        mc-btn(
          depressed
          rounded
          color="primary"
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          :block="$isMobile"
          :to="{ name: 'syncbase' }"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-information-outline
          span Learn about MYCURE Syncbase
    //- 5th panel
    generic-media-panel(
      :fluid="!$isMobile"
      content-align-left
      align-left-column="center"
      cols-left="4"
      cols-right="5"
      offset-cols-right="1"
      :header="infoPanels[1].header"
      :descriptions="infoPanels[1].descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      custom-image-path="commons/"
      extension-exclusive
      :web-image="infoPanels[1].image"
      file-extension=".png"
    )
      div(slot="additional-content" :class="{'text-center': $isMobile}")
        mc-btn(
          depressed
          rounded
          color="primary"
          event-label="signup"
          :block="$isMobile"
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          :to="{ name: 'signup-health-facilities', params: { type: 'clinic' } }"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-web
          span Create my website
        //- TODO: Need sample clinic
        //- v-row
        //-   v-btn(
        //-     text
        //-     color="primary"
        //-     :block="$isMobile"
        //-   ).text-none.font-xs
        //-     span View a sample website
        //-     v-icon(right) mdi-chevron-right
    //- 6th panel
    div.grey-bg.pt-12
      features(
        title="Customized for Your Specialty"
        description="MYCURE has already built in workflows and processes for different setups."
        :items="features"
        :class="panelMargins"
        image-dir="clinics/"
        icon-container-col-size="10"
        icon-col-size="3"
        extension-exclusive
        panel-height="70vh"
      ).mt-10.mb-10
        template(slot="additional-content")
          v-row(justify="center").mt-10
            v-col(cols="12" md="4" xl="3")
              mc-btn(
                color="primary"
                block
                depressed
                rounded
                :x-large="$isWideScreen"
                :to="{ name: 'doctors-clinics' }"
                :class="{'font-s': $isWideScreen }"
              ).text-none Practicing solo? Click here.
    //- 7th panel
    think-long-term(:fluid="!$isMobile" :class="panelMargins").mb-12
    //- 8th panel
    call-to-action(:fluid="!$isMobile" :class="panelMargins" :version="2")
    //- 9th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :fluid="!$isMobile"
      :pricing-details="pricingDetails"
      :class="panelMargins"
    )
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import Workflow from '~/components/outpatient-clinics/Workflow';
// - constants
import { ENTERPRISE_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    GenericMediaPanel,
    Features,
    MultipleBranches,
    MycureCsi,
    Pricing,
    ThinkLongTerm,
    Usp,
    Workflow,
  },
  data () {
    this.features = [
      {
        title: 'Multispecialty',
        icon: 'Multispecialty',
        iconExtension: '.png',
      },
      {
        title: 'Skin & Aesthetics',
        icon: 'Skin',
        iconExtension: '.png',
      },
      {
        title: 'Maternity Care',
        icon: 'Maternity Care',
        iconExtension: '.png',
      },
      {
        title: 'Pediatric Care',
        icon: 'Pedia',
        iconExtension: '.png',
      },
      {
        title: 'Dentistry',
        icon: 'Dentistry',
        iconExtension: '.png',
      },
      {
        title: 'Diagnostics',
        icon: 'Diagnostics',
        iconExtension: '.png',
      },
      {
        title: 'Corporate',
        icon: 'Corporate',
        iconExtension: '.png',
      },
    ];
    this.infoPanels = [
      {
        header: 'Internet connection won’t be a problem',
        descriptions: [
          'With MYCURE Syncbase, work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.',
        ],
      },
      {
        header: 'Expand your Reach',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
        ],
        image: 'Expand your reach',
      },
    ];
    this.pricingDetails = ENTERPRISE_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System',
      description: 'MYCURE enables clinics with complex operations to have simplified workflows to be much more efficient, increase in revenue, and build.',
      socialBanner: require('~/assets/images/banners/OG Clinics.png'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-medium',
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
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    panelMargins () {
      return { 'mt-10': this.$isMobile, 'mt-5': !this.$isMobile };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.syncbase-animate {
  margin-left: -18vw;
}
.grey-bg {
  background-color: #fafafa;
}
</style>
