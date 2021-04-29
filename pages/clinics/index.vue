<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Most Complete Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-meta-title="mobile"
      parse-title="regular"
      :parse-title-fields="['workflows, ', 'results, ']"
      btn-text="Watch How It Works"
      :parse-meta-title-fields="['Complete ']"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', params: { type: 'clinic' }})"
      web-height="720px"
      image="Clinics Landing Page USP"
      custom-image-path="clinics/"
    )
    //- 2nd panel
    features(
      title="Why do clinics switch to MYCURE?"
      description="MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems."
      :class="panelMargins"
    )
    //- 3rd panel
    multiple-branches(:class="panelMargins")
    //- 4th panel
    generic-media-panel(
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
      :class="panelMargins"
      custom-image-path="commons/"
      extension-exclusive
      :web-image="infoPanels[1].image"
      file-extension=".png"
    )
      template(slot="additional-content")
        v-row
         mc-btn(
           text
           color="primary"
           :block="$isMobile"
           event-label="signup"
           :to="{ name: 'signup-health-facilities' }"
         ).text-none.font-xs
          span Create my website
          v-icon(right) mdi-chevron-right
        //- TODO: Need sample clinic
        //- v-row
        //-   v-btn(
        //-     text
        //-     color="primary"
        //-     :block="$isMobile"
        //-   ).text-none.font-xs
        //-     span View a sample website
        //-     v-icon(right) mdi-chevron-right
    //- 5th panel
    flexibility(:class="panelMargins")
    //- 6th panel
    generic-media-panel(
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
      :class="panelMargins"
    )
      template(slot="custom-left")
        video(v-if="!$isMobile" :width="wXL ? '1100' : '820'" playsinline autoplay muted loop).syncbase-animate
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.webm" type="video/webm")
          source(src="~/assets/videos/mycure-syncbase-diagram-animate.mp4" type="video/mp4")
          | Your browser does not support the video tag.

      template(slot="additional-content")
        v-row
         v-btn(
           text
           color="primary"
           :block="$isMobile"
           :to="{ name: 'syncbase' }"
         ).text-none.font-xs
          span Learn about MYCURE Syncbase
          v-icon(right) mdi-chevron-right
    //- 7th panel
    features(
      title="Customized for Your Specialty"
      description="MYCURE has already built in workflows and processes for different setups."
      :items="features"
      :class="panelMargins"
      image-dir="clinics/"
      icon-container-col-size="10"
      icon-col-size="3"
      extension-exclusive
    ).mt-10.mb-10
      template(slot="additional-content")
        v-row(justify="center").mt-10
          v-col(cols="12" md="4")
            v-btn(color="primary" block text :to="{ name: 'doctors-clinics' }").text-none.font-xs Practicing solo? Click here.
    //- 8th panel
    think-long-term(extended :class="panelMargins")
    //- 9th panel
    call-to-action(:class="panelMargins" :version="2")
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
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
import Flexibility from '~/components/outpatient-clinics/Flexibility';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { ENTERPRISE_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    Features,
    Flexibility,
    GenericMediaPanel,
    MultipleBranches,
    Pricing,
    ThinkLongTerm,
    Usp,
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
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Clinic Management System',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
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
</style>
