<template lang="pug">
  div
    generic-media-panel(
      :fluid="fluid"
      v-for="(content, key) in contents"
      :key="key"
      v-bind="getPanelBindings(content)"
      :dummy="!content.webImage"
      :dense="$isMobile"
    )
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericMediaPanel,
  },
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.contents = [
      {
        header: 'Lightning-fast prescriptions',
        descriptions: [
          'Create and print prescriptions and other medical forms in 10 seconds or less.',
        ],
        contentAlign: 'left',
        customImagePath: 'features/',
        webImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription',
        mobileImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription-mobile',
        mobileFileExtension: '.png',
      },
      {
        header: 'Going digital = better medical history',
        descriptions: [
          'Imagine looking back at your charts from 5 or 10 years ago on your mobile device with a quick search. How convenient? S-U-P-E-R.',
        ],
        contentAlign: 'right',
        customImagePath: 'features/',
        webImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting',
        mobileImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting-mobile',
        mobileFileExtension: '.png',
      },
      {
        header: 'Help patients anywhere',
        descriptions: [
          'Reach out to more people who need your expertise without getting limited by time or location.',
        ],
        contentAlign: 'left',
        customImagePath: 'features/',
        webImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth',
      },
    ];
    return {};
  },
  computed: {
    checkListClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
    },
  },
  methods: {
    getPanelBindings (content) {
      const contentLeftBindings = {
        contentAlignLeft: true,
        colsLeft: 4,
        colsRight: 5,
        offsetColsRight: 1,
        alignLeftColumn: 'center',
      };
      const contentRightBindings = {
        contentAlignRight: true,
        colsLeft: 5,
        colsRight: 4,
        offsetColsRight: 1,
      };
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'primary--text',
        'font-weight-semibold',
      ];
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return {
        header: content.header,
        descriptions: content.descriptions,
        customImagePath: content.customImagePath,
        webImage: content.webImage,
        ...content.mobileImage && { mobileImage: content.mobileImage },
        ...content.mobileFileExtension && { extensionExclusive: true, mobileFileExtension: content.mobileFileExtension },
        headerClasses,
        descriptionClasses,
        ...content.contentAlign === 'left' && contentLeftBindings,
        ...content.contentAlign === 'right' && contentRightBindings,
      };
    },
  },
};
</script>
