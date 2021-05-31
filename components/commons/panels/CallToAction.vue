<template lang="pug">
  generic-media-panel(
    :content="callToActionPanel"
    :center-panel-title-classes="headerClasses"
    :content-classes="descriptionClasses"
    :super-title-classes="subheaderClasses"
    hide-btn
  )
    template(slot="content")
      p(v-for="(desc, key) in callToActionPanel.description" :key="key" :class="descriptionClasses") {{ desc }}
    template(slot="additional-content")
      v-row.mt-10
        v-col(v-if="version === 1" cols="12" md="6" xl="5")
          signup-button(
            event-label="signup"
            color="success"
            depressed
            rounded
            block
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="buttonClasses"
          ).text-none Get Started Free
        v-col(cols="12" md="6" xl="7")
          mc-btn(
            color="success"
            depressed
            rounded
            block
            :outlined="version === 1"
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
            :href="'https://calendly.com/mycure/demo'"
          ).text-none {{ version === 1 ? 'Book a full training' : 'Start Now' }}
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
      centerPanelTitle: 'Learn the basics with ease',
      superTitle: 'Worrying about the shift to digital records? We got you covered.',
      description: [
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
      centerPanelTitle: 'Let us do the work for you',
      superTitle: 'Worrying about the shift to digital records? We got you covered.',
      description: [
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
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    subheaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-25'],
          wide: ['font-40'],
        }),
        'primary--text',
        'font-open-sans',
      ];
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    buttonClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
    },
  },
};
</script>
