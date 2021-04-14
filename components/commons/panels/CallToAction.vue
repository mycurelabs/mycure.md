<template lang="pug">
  generic-media-panel(
    :center-media="!$isMobile"
    :content-align-left="$isMobile"
    :header="callToActionPanel.header"
    :header-classes="headerClasses"
    :descriptions="callToActionPanel.descriptions"
    :descriptionClasses="descriptionClasses"
    :dense="$isMobile"
  )
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.callToActionPanel = {
      header: 'Learn the basics with ease',
      descriptions: [
        'Worrying about the shift to digital records? We got you covered. ',
        'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
    };
    return {};
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
  },
};
</script>
