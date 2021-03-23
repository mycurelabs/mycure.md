<template lang="pug">
  fragment
    generic-media-panel(
      v-for="(content, key) in contents"
      :key="key"
      offset-cols-right="1"
      v-bind="getPanelBindings(content)"
    )
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.contents = [
      {
        header: 'Lightning-fast prescriptions',
        descriptions: [
          'Create and print prescriptions and other medical forms in 10 seconds or less.',
        ],
        contentAlign: 'left',
      },
      {
        header: 'Going digital = better medical history',
        descriptions: [
          'Imagine looking back at your charts from 5 or 10 years ago on your mobile device with a quick search. How convenient? S-U-P-E-R.',
        ],
        contentAlign: 'right',
      },
      {
        header: 'Help patients anywhere',
        descriptions: [
          'Reach out to more people who need your expertise without getting limited by time or location.',
        ],
        contentAlign: 'left',
      },
      {
        header: 'Expand Your Reach',
        descriptions: [
          'Opt in to MYCURE ONE, a global online directory of modern healthcare practitioners and facilities',
        ],
        contentAlign: 'right',
      },
    ];
    return {};
  },
  methods: {
    getPanelBindings (content) {
      const contentLeftBindings = {
        contentAlignLeft: true,
        colsLeft: 4,
        colsRight: 5,
      };
      const contentRightBindings = {
        contentAlignRight: true,
        colsLeft: 5,
        colsRight: 4,
      };
      return {
        header: content.header,
        descriptions: content.descriptions,
        ...content.contentAlign === 'left' && contentLeftBindings,
        ...content.contentAlign === 'right' && contentRightBindings,
      };
    },
  },
};
</script>
