<template lang="pug">
  generic-media-panel(
    content-align-left
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    align-conten-left="center"
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
    template(slot="additional-content" v-if="version === 1")
      v-row(justify="center")
        v-col(cols="12")
          mc-btn(
            depressed
            small
            tile
            color="primary"
            :block="$isMobile"
            :href="'https://calendly.com/mycure/demo'"
          ).text-none Book a full training
      v-row(justify="center").mb-10
        v-col(cols="12")
          mc-btn(
            depressed
            small
            tile
            color="success"
            :block="$isMobile"
            event-label="signup"
            :to="{ name: 'signup-health-facilities' }"
          ).text-none Get Started Free
    template(slot="additional-content" v-if="version === 2")
      v-row(justify="center")
        v-col(cols="12")
          mc-btn(
            depressed
            small
            tile
            color="success"
            event-label="signup"
            :to="{ name: 'signup-health-facilities' }"
          ).text-none Start Now
      //- TODO: Bring back once available
      //- v-row(justify="center").mb-10
      //-   v-col(cols="12")
      //-     mc-btn(
      //-       depressed
      //-       text
      //-       x-large
      //-       color="primary"
      //-     ).text-none
      //-       span Download MYCURE's implementation workflow
      //-       v-icon(right) mdi-download
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
          mobile: ['font-s', 'text-center'],
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
