<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      title="Everything you need to build your virtual practice"
      meta-title="MYCURE Telehealth"
      description="Starting a virtual practice has never been easier. Give your patients the quality care they deserve."
      btn-text="Get Started Free"
      regular-height="650px"
      image="Telehealth USP"
      image-width="90%"
      image-align="right"
      custom-image-path="telehealth/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'doctor-telehealth' }})"
    )
    //- 2nd panel
    virtual-clinic
    //- 3rd to 4th panel
    template(v-for="info in infoPanels")
      generic-media-panel(
        :content="info"
        hide-btn
      )
        //- Check list
        template(slot="additional-content" v-if="info.list")
          template(v-for="(item, i) in info.list")
            v-row(dense :justify="$isMobile ? 'center' : 'start'")
              v-col(cols="2" sm="1" md="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col(cols="7" sm="5" md="7")
                span(:class="descriptionClasses") {{ item }}
      v-divider(v-if="$isMobile").divider
    //- 5th panel
    pricing(
      title="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
      :column-size="4"
    )
    //- 6th panel
    call-to-action
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import Pricing from '~/components/commons/panels/Pricing';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import VirtualClinic from '~/components/telehealth/VirtualClinic';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Pricing,
    Usp,
    VirtualClinic,
  },
  data () {
    this.infoPanels = [
      {
        title: 'Safekeep your important medical data',
        description: 'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp',
          customPath: 'telehealth/',
        },
        contentAlign: 'right',
      },
      {
        title: 'Works for group practice',
        description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        list: [
          'Conference Calls',
          'Collated Medical Records',
          'Optimized Patient Queuing',
          'Booking Website',
        ],
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice.webp',
          customPath: 'doctors-clinics/',
        },
        contentAlign: 'left',
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
};
</script>

<style scoped>
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
</style>
