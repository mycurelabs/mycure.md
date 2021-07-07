<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Dental Clinics USP - Full Illu"
      background-image-file-extension=".webp"
      title="Easy to setup, affordable"
      meta-title="MYCURE for Dental Clinics"
      description="Start going digital without spending anything."
      btn-text="Start Free"
      image="Dental Clinics USP - Mobile version"
      custom-image-path="clinics/dental/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    //- 3rd to 4th panel
    //- 8th panel
    syncbase(:version="3")
    //- 9th panel
    think-long-term(extended)
    //- 10th panel
    pricing(
      title="Take the first step today"
      type="doctor"
      description="Start free and only pay as you grow."
    )
    //- 11th panel
    call-to-action(:version="3")
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
  data () {
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.directoryPanel = {
      header: 'Get more eyes on the brand',
      descriptions: [
        'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
      ],
      list: [
        'Acquire patients beyond your reach',
        'Hassle-free from booking to billing',
        'Covers virtual to physical accommodation',
      ],
    };
    this.infoPanels = [
      {
        header: 'Always accessible dental charts',
        descriptions: [
          'Never miss an appointment. Never miss a tooth.',
        ],
      },
      {
        header: 'Straightforward and simple.',
        descriptions: [
          'Accurately track baseline and updated dental charts, proposed procedures, and the actual work done.',
        ],
      },
    ];

    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Dental Clinics',
      description: 'Experience the most versatile software for dental clinics that seamlessly manages dental charts, inventory, and billing.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
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
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
