<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Everything you need to build your virtual practice"
      meta-title="MYCURE Telehealth"
      description="Starting a virtual practice has never been easier. Give your patients the quality care they deserve."
      btn-text="Get Started Free"
      regular-height="600px"
      wide-height="1000px"
      image="Telehealth USP"
      image-width="108%"
      custom-image-path="telehealth/"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', params: { type: 'doctor-telehealth' }})"
    )
    //- 2nd panel
    div.mb-12.pb-12
      generic-media-panel(
        center-media
        header="Your New Virtual Clinic"
        :fluid="!$isMobile"
        :descriptions="['Use the tools that work best for you. Everything you need is here. It’s FREE.']"
        :header-classes="headerClasses"
        :description-classes="descriptionClasses"
        web-image="MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult"
        custom-image-path="telehealth/"
      )

      increase-revenue(:fluid="!$isMobile")
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :fluid="!$isMobile"
      :key="key"
      offset-cols-right="1"
      :header="info.header"
      :descriptions="info.descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      :web-image="info.image"
      :custom-image-path="info.customImagePath"
      v-bind="getPanelBindings(key)"
    )
      //- Check list
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="descriptionClasses") {{ item }}
    //- 5th panel
    pricing(
      :fluid="!$isMobile"
      title="Start free and only pay as you grow."
      :class="panelMargins"
      :pricing-details="pricingDetails"
    )
    //- 6th panel
    call-to-action(
      :fluid="!$isMobile"
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
import IncreaseRevenue from '~/components/telehealth/IncreaseRevenue';
import Pricing from '~/components/commons/panels/Pricing';
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    IncreaseRevenue,
    Pricing,
    Usp,
  },
  data () {
    this.features = [
      {
        title: 'Built-In EME',
      },
      {
        title: 'Video Calls',
      },
      {
        title: 'Chat Function',
      },
      {
        title: 'Screen Sharing',
      },
      {
        title: 'Smart Queuing',
      },
      {
        title: 'Online Payments',
      },
    ];
    this.infoPanels = [
      {
        header: 'Safekeep your important medical data',
        descriptions: [
          'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
        ],
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data',
        customImagePath: 'telehealth/',
      },
      {
        header: 'Works for group practice',
        descriptions: [
          'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        ],
        list: [
          'Conference Calls',
          'Collated Medical Records',
          'Optimized Patient Queuing',
          'Booking Website',
        ],
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice',
        customImagePath: 'doctors-clinics/',
      },
    ];
    this.pricingDetails = DOCTORS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Telehealth',
      description: 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve wherever they are.',
      socialBanner: require('~/assets/images/banners/OG Telehealth.png'),
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
      return { 'mt-10': this.$isMobile, 'mt-8': !this.$isMobile };
    },
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    getPanelBindings (key) {
      if (key % 2 === 0) {
        return {
          contentAlignRight: true,
          alignContentLeft: 'center',
          colsLeft: 5,
          colsRight: 4,
        };
      }
      return {
        contentAlignLeft: true,
        alignContentRight: 'center',
        colsLeft: 4,
        colsRight: 5,
      };
    },
  },
};
</script>
