<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Most Complete Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-meta-title="mobile"
      :parse-meta-title-fields="['Complete ']"
    )
    //- 2nd panel
    features(
      title="Why do clinics switch to MYCURE?"
      description="MYCURE integrates critical clinic operations into a clean, simple interface to make record management much easier for everyone. Say goodbye to multiple, complicated systems."
    )
    //- 3rd panel
    multiple-branches
    //- 4th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="infoPanels[1].header"
      :descriptions="infoPanels[1].descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
    //- 5th panel
    flexibility
    //- 6th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="infoPanels[0].header"
      :descriptions="infoPanels[0].descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
    //- 7th panel
    features(
      title="Customized for Your Specialty"
      description="MYCURE has already built in workflows and processes for different setups."
      :items="features"
    ).mt-10
    //- 8th panel
    think-long-term(extended)
    //- 9th panel
    call-to-action
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
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
      },
      {
        title: 'Skin & Aesthetics',
      },
      {
        title: 'Maternity Care',
      },
      {
        title: 'Pediatric Care',
      },
      {
        title: 'Dentistry',
      },
      {
        title: 'Diagnostics',
      },
      {
        title: 'Corporate',
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
          mobile: ['font-m'],
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
  },
  mounted () {
    this.loading = false;
  },
};
</script>
