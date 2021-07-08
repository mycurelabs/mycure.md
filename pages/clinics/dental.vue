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
    div.grey-bg.mx-n3
      problem-statement
    //- 3rd panel
    generic-media-panel(
      :content="thirdPanel" align="center"
    )
      template(slot="content")
        h2(:class="headerClasses") Always accesible dental charts.
        br
        h2(:class="subHeaderClasses") Never miss an appointment.
          br
          span Never miss a tooth.
      template(slot="cta-button")
        signup-button(
          depressed
          rounded
          :x-large="$isWideScreen"
          :large="!$isWideScreen"
          color="success"
        ).text-none.font-s
          span Get Started
    //- 4th panel
    straightforward
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
    ProblemStatement: () => import('~/components/dental-clinics/ProblemStatement'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Straightforward: () => import('~/components/dental-clinics/Straightforward'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
  data () {
    this.thirdPanel = {
      contentAlign: 'left',
      imageBindings: {
        image: 'Dental charts.png',
        mobileImage: 'Dental charts mobile.png',
        imageAlt: 'Dental charts in a tablet',
        customPath: 'clinics/dental/',
        extensionExclusive: true,
        imageWidth: '80%',
      },
    };
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
          wide: ['font-xl'],
        }),
        'lh-title',
        'font-weight-semibold',
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
          mobile: ['font-s'],
          regular: ['font-25'],
          wide: ['font-l'],
        }),
        'lh-title',
        'font-weight-semibold',
        'secondary--text',
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
</style>
