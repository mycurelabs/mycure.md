<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="OFW Clinics Full"
      background-image-file-extension=".webp"
      title="The first and only medical software for OFW clinics"
      meta-title="MYCURE for OFW Medical Clinics"
      description="MYCURE is an easy to use, secure, cloud-based software where you can conveniently create, finalize, and release medical exam results."
      btn-text="Sign Up"
      image="OFW Clinics Mobile"
      custom-image-path="clinics/ofw/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center'}")
          v-col(cols="12" lg="8").text-center
            h2(:class="headerClasses").mb-5 Create beautiful reports for your clients.
            p(:class="descriptionClasses").mb-10.secondary--text.font-weight-semibold Provide both printed and online copies of their medical exam results without the hassle.
          v-col(cols="12").text-center
            picture-source(
              extension-exclusive
              image-alt="Sample report in MYCURE Clinic Management System"
              image-file-extension=".png"
              custom-path="clinics/ofw/"
              :image="`Beautiful reports${$isMobile ? '-mobile' : ''}`"
            )
    //- 4th panel
    generic-media-panel(
      :content="queuePanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" md="7" lg="6" xl="7")
            signup-button(
              depressed
              rounded
              block
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              :class="btnClasses"
              color="success"
            ).text-none
              span Sign Up
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
      :content="directoryPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" md="7" lg="6" xl="7")
            signup-button(
              depressed
              rounded
              block
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              :class="btnClasses"
              color="success"
            ).text-none
              span Create my website
          //- TODO: Bring back when sample website is available
          //- v-col(cols="12" md="7" lg="6" xl="5")
          //-   mc-btn(
          //-     color="success"
          //-     href="https://calendly.com/mycure/demo"
          //-     target="_blank"
          //-     rel="noopener noreferrer"
          //-     depressed
          //-     rounded
          //-     block
          //-     :large="!$isWideScreen"
          //-     :x-large="$isWideScreen"
          //-     :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
          //-   ).text-none Book a full training
    //- 7th panel
    pricing(
      title="Take the first step today"
      type="clinic"
    )
    //- 8th panel
    call-to-action(:version="2")

</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - constants
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource: () => import('~/components/commons/PictureSource'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
  data () {
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
        imageAlt: 'Diagnostic and x-ray results in MYCURE Clinic Management System',
        customPath: 'features/',
      },
    };
    this.queuePanel = {
      title: 'Value everyone’s time more effectively.',
      description: 'Handle group registrations like a breeze. Your clients can now easily register themselves via kiosks. Display multiple queues through auxiliary monitors or smart TVs. Incoming doctors even get notified in their devices for every new patient in line.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'clinics/ofw/',
        image: 'Queue.png',
        mobileImage: 'Queue-mobile.png',
        imageAlt: 'Registration kiosk in MYCURE Clinic Management System',
        extensionExclusive: true,
      },
    };
    this.directoryPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'commons/',
        image: 'Expand your reach.webp',
        imageAlt: 'Man browsing a clinic website',
      },
    };
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for OFW Medical Clinics',
      description: 'MYCURE provides a specialized tool to create, finalize, and release medical exam results designed for OFW clinics. Book a demo today.',
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
          wide: ['font-m'],
        }),
      ];
      return descriptionClasses;
    },
    btnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
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
