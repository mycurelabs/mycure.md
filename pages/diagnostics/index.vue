<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Diagnostics Landing Page"
      background-image-file-extension=".webp"
      title="Your Diagnostic Center Fortified"
      meta-title="MYCURE Diagnostic"
      description="The best tool to create, finalize, and release diagnostic test results is finally here."
      image="Diagnostics Mobile USP"
      image-col-offset="1"
      custom-image-path="diagnostics/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'diagnostic' }})"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Embrace the power to choose"
        description="Don’t settle for anything less. Customize your experience based on the tools you need. MYCURE is designed for diagnostic labs and imaging centers of all sizes."
        :items="features"
        icon-container-col-size="8"
        image-dir="diagnostics/"
        panel-height="70vh"
      )
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :content="info"
      :key="key"
      hide-btn
    )
      //- Check list
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="10" sm="11" md="11")
              span.mc-content-set-1.font-open-sans.font-gray {{ item }}
    //- 5th panel
    div.grey-bg.mx-n3
      generic-media-panel(
        :content="integrationsPanel"
        hide-btn
        align="center"
      )
        template(slot="content")
          v-row(justify="start")
            v-col(
              v-for="(item, key) in integrationsPanel.list"
              :key="key"
              cols="6"
              md="4"
            ).text-center
              picture-source(
                custom-path="diagnostics/"
                image-file-extension=".png"
                extension-exclusive
                :image="item.icon"
                :image-alt="item.title"
                :image-width="!$isMobile ? '100%' : '60%'"
              )
              br
              h3(:class="{'font-s': $isWideScreen}").font-open-sans.font-gray {{ item.title }}
    //- 6th panel
    generic-media-panel(
      :content="expandPanel"
      hide-btn
    )
      div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
        signup-button(
          depressed
          rounded
          color="success"
          event-label="signup"
          :large="!$isWideScreen"
          :x-large="$isWideScreen"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-web
          span Create my website
    v-divider(v-if="$isMobile").divider
    //- 7th panel
    generic-media-panel(
      :content="cmsPanel"
    )
      template(slot="cta-button")
        div(:class="{'text-center': $isMobile}")
          mc-btn(
            depressed
            rounded
            event-label="clinics-info"
            color="success"
            :to="{ name: 'clinics' }"
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="{'font-s': !$isMobile}"
          ).text-none
            v-icon(left :large="$isWideScreen") mdi-information-outline
            span  Learn more
    //- 8th panel
    think-long-term
    //- 9th panel
    call-to-action(:version="2")
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Choose the best plan for your diagnostic center. Only pay for what you need."
      type="diagnostic"
    ).mb-n3
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - constants
import { DIAGNOSTICS_PRICING } from '~/constants/pricing';
// - components
import PictureSource from '~/components/commons/PictureSource';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    PictureSource,
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    SignupButton: () => import('~/components/commons/SignupButton'),
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Laboratory Information System (LIS)',
        icon: 'LIS',
        iconExtension: '.webp',
      },
      {
        title: 'Booking System',
        icon: 'Booking Systems',
        iconExtension: '.webp',
      },
      {
        title: 'Radiology Information System (RIS)',
        icon: 'RIS',
        iconExtension: '.webp',
      },
      {
        title: 'Billing',
        icon: 'Billing',
        iconExtension: '.webp',
      },
      {
        title: 'Online Results',
        icon: 'Online Results',
        iconExtension: '.webp',
      },
    ];
    this.integrationsPanel = {
      contentAlign: 'left',
      title: 'Ready whenever you are',
      superTitle: 'POWERFUL INTEGRATIONS',
      list: [
        {
          title: 'HL7',
          icon: 'HL7',
        },
        {
          title: 'DICOM',
          icon: 'DICOM',
        },
      ],
      imageBindings: {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results.webp',
        imageAlt: 'Diagnostic and x-ray results',
        customPath: 'features/',
      },
    };
    this.infoPanels = [
      {
        title: 'Easy to Integrate. Easy to Use.',
        description: 'Flawlessly incorporate MYCURE into your workflows.',
        list: [
          'Track specimen collection',
          'Produce beautiful reports',
          'Integrate with HL7 and DICOM-ready machines',
          'Send online results to patients',
        ],
        imageBindings: {
          image: 'easy.webp',
          imageAlt: 'Charts and graphs artwork',
          customPath: 'diagnostics/',
        },
        contentAlign: 'left',
      },
      {
        title: 'Send Test Results Instantly',
        description: 'Give your patients quick access to their test results through the MYCURE app for patients.',
        list: [
          'Patient Portal for Diagnostic Tests',
          'Tabulated Cumulative Results',
          'Quick Appointment Booking',
        ],
        imageBindings: {
          image: 'Fast results.webp',
          imageAlt: 'Sending out health results artwork',
          customPath: 'diagnostics/',
        },
        contentAlign: 'right',
      },
    ];
    this.expandPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
      imageBindings: {
        image: 'Expand your reach.webp',
        imageAlt: 'Man browsing a clinic website artwork',
        customPath: 'commons/',
      },
      contentAlign: 'right',
    };
    this.cmsPanel = {
      title: 'Grow into a full service clinic anytime',
      superTitle: 'MYCURE CLINIC MANAGEMENT SYSTEM',
      description: 'Cover all your patient journeys with MYCURE’s most complete clinic management system.',
      imageBindings: {
        image: 'FullService.webp',
        imageAlt: 'Doctor and patient transacting over a counter artwork',
        customPath: 'diagnostics/',
      },
      contentAlign: 'left',
    };
    this.pricingDetails = DIAGNOSTICS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Diagnostics',
      description: 'MYCURE provides the best tool to create, finalize, and release diagnostic test results for diagnostic clinics. Best alternative to laboratory and radiology information systems. ',
      socialBanner: require('~/assets/images/banners/OG Diag.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    getPanelBindings (key) {
      if (key % 2 === 0) {
        return {
          contentAlignLeft: true,
          colsLeft: '4',
          colsRight: '5',
          alignContentRight: 'center',
        };
      }
      return {
        contentAlignRight: true,
        colsLeft: '5',
        colsRight: '4',
        alignContentLeft: 'center',
      };
    },
  },
};
</script>

<style scoped>
.diagnostics-bg {
  width: 100vw;
  background-image: url('../../assets/images/diagnostics/Diagnostics Landing Page.png');
  background-position: center center;
  background-size: contain;
}
.grey-bg {
  background-color: #fafafa;
}
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.button {
  text-decoration: none;
}
</style>
