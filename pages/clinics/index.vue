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
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(panel, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="panel.header"
      :descriptions="panel.descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
    //- 5th panel
    mycure-csi
    //- 6th panel
    multiple-branches
    //- 7th panel
    features(
      title="Customized for Your Specialty"
      description="MYCURE has already built in workflows and processes for different setups."
      :items="features"
    ).mt-10
    //- 8th panel
    think-long-term(extended)
    //- 9th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header="ninthPanel.header"
      :header-classes="headerClasses"
      :descriptions="ninthPanel.descriptions"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
    //- 10th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Take the first step today"
      :header-classes="headerClasses"
      :descriptions="['Start now and get all your questions answered.']"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import MycureCsi from '~/components/commons/MycureCsi';
import ThinkLongTerm from '~/components/commons/ThinkLongTerm';
import Usp from '~/components/commons/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
    MultipleBranches,
    MycureCsi,
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
    this.ninthPanel = {
      header: 'Let us do the work for you',
      descriptions: [
        'Worrying about upgrading your system? We got you covered.',
        'We know it’s challenging to shift your entire operations into a new system. Our lean implementation process ensures that you get what you need—customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you from training to winning.',
      ],
    };
    return {
      loading: true,
    };
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
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Clinic Management System',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
