<template lang="pug">
  generic-media-panel(
    :content="callToActionPanel"
    :title-classes="headerClasses"
    :content-classes="descriptionClasses"
    hide-btn
  )
    template(slot="content")
      p(v-for="(desc, key) in callToActionPanel.description" :key="key" :class="descriptionClasses") {{ desc }}
    template(slot="additional-content")
      v-row(dense).mt-10
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
      v-row(dense v-if="version === 1")
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
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
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
  },
  data () {
    this.versionOne = {
      title: 'Learn the basics with ease',
      description: [
        'Worrying about the shift to digital records? We got you covered.',
        'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
      imageBindings: {
        image: 'Let us do the work.png',
        customPath: 'commons/',
        extensionExclusive: true,
      },
      contentAlign: 'right',
    };
    this.versionTwo = {
      title: 'Let us do the work for you',
      description: [
        'Worrying about the shift to digital records? We got you covered.',
        'We know it’s challenging to shift your entire operations into a new system. Our lean implementation process ensures that you get what you need—customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you from training to winning.',
      ],
      imageBindings: {
        image: 'Let us do the work.png',
        customPath: 'commons/',
        extensionExclusive: true,
      },
      contentAlign: 'right',
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
