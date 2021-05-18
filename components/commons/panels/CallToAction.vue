<template lang="pug">
  generic-media-panel(
    :fluid="fluid"
    content-align-right
    cols-left="5"
    cols-right="4"
    offset-cols-right="1"
    align-conten-right="center"
    :header="callToActionPanel.header"
    :header-classes="headerClasses"
    :descriptions="callToActionPanel.descriptions"
    :descriptionClasses="descriptionClasses"
    :dense="$isMobile"
    web-image="Let us do the work"
    file-extension=".png"
    extension-exclusive
    custom-image-path="commons/"
  )
    template(slot="additional-content")
      v-row(dense)
        v-col(cols="12" md="7" xl="5")
          mc-btn(
            depressed
            rounded
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
            :color="version === 1 ? 'primary' : 'success'"
            block
            :href="'https://calendly.com/mycure/demo'"
          ).text-none.font-s {{ version === 1 ? 'Book a full training' : 'Start Now' }}
      v-row(dense v-if="version === 1").mb-10
        v-col(cols="12" md="7" xl="5")
          signup-button(
            depressed
            rounded
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
            color="success"
            block
            event-label="signup"
          ).text-none.font-s Get Started Free
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericMediaPanel,
    SignupButton,
  },
  props: {
    version: {
      type: Number,
      default: 1,
    },
    // - Make container fluid
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.versionOne = {
      header: 'Learn the basics with ease',
      descriptions: [
        'Worrying about the shift to digital records? We got you covered.',
        'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
    };
    this.versionTwo = {
      header: 'Let us do the work for you',
      descriptions: [
        'Worrying about the shift to digital records? We got you covered.',
        'We know it’s challenging to shift your entire operations into a new system. Our lean implementation process ensures that you get what you need—customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you from training to winning.',
      ],
    };
    return {};
  },
  computed: {
    callToActionPanel () {
      switch (this.version) {
        case 1: return this.versionOne;
        case 2: return this.versionTwo;
        default: return this.versionOne;
      }
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'font-weight-medium',
        'primary--text',
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
    signUpRoute () {
      let preset = '';
      switch (this.$nuxt.$route.name) {
        case 'doctors-clinics':
          preset = 'doctors';
          break;
        case 'clinics':
          preset = 'clinic';
          break;
        case 'diagnostics':
          preset = 'clinic-diagnostic';
          break;
        case 'telehealth':
          preset = 'doctor-telehealth';
          break;
        default:
          preset = '';
      }
      const route = {
        name: 'signup-health-facilities',
        params: { type: preset },
      };
      return route;
    },
  },
};
</script>
