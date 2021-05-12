<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="The first and only medical software for OFW clinics"
      meta-title="MYCURE for OFW Medical Clinics"
      description="MYCURE is an easy to use, secure, cloud-based software where you can conveniently create, finalize, and release medical exam results."
      btn-text="Sign Up"
    )
    //- 2nd panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="infoPanels[0].header"
      :header-classes="headerClasses"
      :descriptions="infoPanels[0].descriptions"
      :description-classes="descriptionClasses"
    )

    //- 3rd panel
    features(
      title="Design your own packages"
      description="Easily create and customize pre-employment packages based on your client requirements. "
      :items="features"
    )
    //- 4th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="infoPanels[1].header"
      :header-classes="headerClasses"
      :descriptions="infoPanels[1].descriptions"
      :description-classes="descriptionClasses"
    )
    //- 5th panel
    features(
      title="Ready whenever you are"
      meta-title="POWERFUL INTEGRATIONS"
      :items="integrations"
      hide-learn-more
    )
    //- 6th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="infoPanels[2].header"
      :header-classes="headerClasses"
      :descriptions="infoPanels[2].descriptions"
      :description-classes="descriptionClasses"
    )
    //- 7th panel
    call-to-action(:version="2")

    //- 8th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Take the first step today"
      :header-classes="headerClasses"
      :descriptions="['Start now and get all your questions answered']"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
      template(slot="additional-content")
        v-row(justify="center")
          v-col(cols="4").text-center
            mc-btn(
              color="primary"
              large
              depressed
            ).text-none.font-xs Start Now
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - constants
import { ENTERPRISE_PRICING } from '~/constants/pricing';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Laboratory',
      },
      {
        title: 'Imaging',
      },
      {
        title: 'Ancillary',
      },
      {
        title: 'Dental',
      },
      {
        title: 'Physical Exam',
      },
    ];
    this.integrations = [
      {
        title: 'HL7',
      },
      {
        title: 'DICOM',
      },
    ];
    this.infoPanels = [
      {
        header: 'Create beautiful reports for your clients',
        descriptions: [
          'Provide both printed and online copies of their medical exam results without the hassle.',
        ],
      },
      {
        header: 'Value everyone\'s time more effectively',
        descriptions: [
          'Handle group registrations like a breeze. Your clients can now easily register themselves via kiosks. Display multiple queues through auxiliary monitors or smart TVs. Incoming doctors even get notified in their devices for every new patient in line.',
        ],
      },
      {
        header: 'Expand Your Reach',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
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
