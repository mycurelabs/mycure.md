<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Advanced Patient-centric hospital software"
      meta-title="MYCURE Hospital Information System"
      description="MYCURE smoothly handles the critical process flows inside hospitals that enables healthcare professionals to focus more on patient care."
      has-custom-background
      background-image="cookie"
      background-image-file-extension=".png"
      image="cookie"
      extension-exclusive
      custom-image-path="hospitals/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      btn-text="Get exclusive access"
    )
    //- 2nd panel
    features(
      title="Easy to implement. Easy to maintain"
      description="Work seamlessly from one station to another.  With its open APIs, MYCURE can integrate with your other existing systems."
      :items="features"
      image-dir="hospitals/"
      extension-exclusive
    )
    //- 3rd panel
    syncbase
    //- 4th panel
    mycure-csi
    //- 5th panel
    generic-media-panel(
      :content="directoryPanel"
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" sm="5" md="7" lg="6" xl="5")
            mc-btn(
              color="success"
              href="https://calendly.com/mycure/demo"
              target="_blank"
              rel="noopener noreferrer"
              depressed
              rounded
              block
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
            ).text-none Create my Website
          v-col(cols="10" sm="5" md="7" lg="6" xl="7")
            signup-button(
              depressed
              rounded
              outlined
              block
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              :class="btnClasses"
              color="success"
            ).text-none
              span Get Started
    //- 7th panel
    call-to-action(:version="2" contentAlignProp="left")
    //- 8th panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-row(justify="center")
              v-col(cols="12" sm="6").white--text.text-center
                h2(:class="headerClasses").mb-5 Book a Demo today
                p(:class="['white--text', ...descriptionClasses]").ma-0 Know how MYCURE works straight from the experts. The newest technologies are just within your reach.
            v-row(justify="center").gutterless
              v-col(cols="8" sm="3")
                signup-button(
                  depressed
                  rounded
                  block
                  :x-large="$isWideScreen"
                  :large="!$isWideScreen"
                  :class="btnClasses"
                  color="success"
                ).text-none
                  span Book Free Demo
              v-col(cols="8" sm="3")
                mc-btn(
                  color="white"
                  href="https://calendly.com/mycure/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  outlined
                  depressed
                  rounded
                  block
                  :large="!$isWideScreen"
                  :x-large="$isWideScreen"
                  :class="btnClasses"
                ).text-none Talk to Us
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import Syncbase from '~/components/commons/panels/Syncbase';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    MycureCsi,
    Syncbase,
    Usp,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Ward Management',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
      {
        title: 'Kitchen Management',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
      {
        title: 'Emergency Room',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
      {
        title: 'Nursing Services',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
      {
        title: 'Philhealth',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
      {
        title: 'Ancillary Services',
        icon: 'cookie',
        iconExtension: '.png',
        alt: 'cookie',
      },
    ];
    this.infoPanels = [
      {
        header: 'Patients and You. Perfect Match.',
        descriptions: [
          'MYCURE Hospital works ideally with MYCURE PRM (Patient Relationship Management System). Communication is easier, booking is a breeze, sharing campaigns is fun.',
        ],
      },
      {
        header: 'Expand your Reach',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        ],
      },
    ];
    this.bookDemoPanel = {
      header: 'Book a Demo Today',
      descriptions: [
        'Know how MYCURE works straight from the experts. The newest technologies are just within your reach.',
      ],
    };
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Hospitals',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    directoryPanel () {
      return {
        title: 'Get more eyes on your brand',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'commons/',
          image: 'Expand your reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
      };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
