<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Telehealth Landing Page"
      background-image-file-extension=".webp"
      title="Everything you need to build your virtual practice"
      meta-title="MYCURE Telehealth"
      description="Starting a virtual practice has never been easier. Give your patients the quality care they deserve."
      btn-text="Get Started Free"
      image="Telehealth Mobile USP"
      image-width="90%"
      image-align="right"
      custom-image-path="telehealth/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'doctor-telehealth' }})"
    )
    //- 2nd panel
    virtual-clinic
    //- 3rd panel
    telehealth-video
    //- 4th to 5th panel
    template(v-for="info in infoPanels")
      generic-media-panel(
        :content="info"
        hide-btn
      )
        //- Check list
        template(slot="additional-content" v-if="info.list")
          template(v-for="(item, i) in info.list")
            v-row(dense)
              v-col(cols="2" sm="1" md="1").pr-2.pt-2
                img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
              v-col(cols="10" sm="5" md="7")
                span(:class="descriptionClasses") {{ item }}
      v-divider(v-if="$isMobile").divider
    //- 6th panel
    pricing(
      title="Start free and only pay as you grow."
      type="doctor"
      :column-bindings="{ cols: '12', md: '4', xl: '3'}"
    )
    //- 7th panel
    call-to-action
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    TelehealthVideo: () => import('~/components/telehealth/TelehealthVideo'),
    Usp,
    VirtualClinic: () => import('~/components/telehealth/VirtualClinic'),
  },
  data () {
    this.pricingDetails = DOCTORS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
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
    infoPanels () {
      return [
        {
          title: 'Safekeep your important medical data',
          description: 'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
          imageBindings: {
            image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp',
            imageAlt: 'Securing of medical records',
            customPath: 'telehealth/',
            width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
            height: this.$isMobile ? '197.52px' : (this.$isRegularScreen ? '354.9px' : '547.78px'),
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
            image: 'Practice.png',
            imageAlt: 'Physicians and medical workers',
            customPath: 'doctors-clinics/',
            extensionExclusive: true,
            width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
            height: this.$isMobile ? '280px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
          },
          contentAlign: 'left',
        },
      ];
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
