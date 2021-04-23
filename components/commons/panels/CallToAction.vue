<template lang="pug">
  generic-media-panel(
    :center-media="!$isMobile"
    :content-align-left="$isMobile"
    :header="callToActionPanel.header"
    :header-classes="headerClasses"
    :descriptions="callToActionPanel.descriptions"
    :descriptionClasses="descriptionClasses"
    :dense="$isMobile"
    dummy
  )
    template(slot="additional-content")
      v-row(justify="center").mb-10
        v-col(cols="12" md="3")
          mc-btn(depressed x-large block color="success").text-none Book a full training
        v-col(cols="12" md="3")
          mc-btn(
            depressed
            x-large
            block
            color="primary"
            event-label="signup"
            :to="{ name: 'signup-health-facilities' }"
          ).text-none Get Started Free
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  props: {
    version: {
      type: Number,
      default: 1,
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
};
</script>
