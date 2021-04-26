<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="The simplest LIS for Mobile Labs"
      meta-title="MYCURE LIS for Mobile Labs"
      description="MYCURE is an easy to use, secure, cloud-based laboratory information software (LIS) that you can easily setup anywhere your medical team is."
      btn-text="Sign Up"
    )
    //- 2nd - 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="info.header"
      :header-classes="headerClasses"
      :descriptions="info.descriptions"
      :description-classes="descriptionClasses"
      dummy
    )
      //- List
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              span(:class="descriptionClasses") {{ i + 1 }}.
            v-col
              span(:class="descriptionClasses") {{ item }}

    //- 5th panel
    call-to-action

    //- 6th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      header="Take the first step today"
      :header-classes="headerClasses"
      :descriptions="['Start now and get all your questions answered']"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
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
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    GenericMediaPanel,
    Usp,
  },
  data () {
    this.infoPanels = [
      {
        header: 'Seamless workflows anywhere you go',
        descriptions: [
          'Value everyone\'s time more effectively. Handle location-based registrations like a breeze.',
        ],
        list: [
          'Book appointments',
          'Register via kiosk',
          'Specimen collection queuing',
          'Online and printed results',
        ],
      },
      {
        header: 'Create beautiful reports',
        descriptions: [
          'Provide both printed and online copies of medical exam results without the hassle.',
        ],
      },
      {
        header: 'Expand Your Reach',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        ],
      },
    ];

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
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE LIS for Mobile Labs',
      description: 'Discover the simplest and most affordable laboratory information software designed for mobile labs. It’s cloud-based and works offline.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
