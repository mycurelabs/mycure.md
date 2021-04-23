<template lang="pug">
  fragment
    generic-media-panel(
      v-for="(content, key) in contents"
      :key="key"
      v-bind="getPanelBindings(content)"
      dummy
    )
      //- Check list
      template(slot="additional-content")
        div(v-if="content.list").mb-5
          v-row(
            v-for="(item, i) in content.list"
            :align="i === 2 ? 'center' : 'start'"
            :key="i"
            dense
          )
            v-col(cols="1").pr-2.pt-2
              v-icon(color="black") mdi-arrow-right
            v-col
              span(:class="checkListClasses") {{ item }}
        mc-btn(
          depressed
          large
          color="primary"
          event-label="signup"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none.font-xs Get Started Free
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import classBinder from '~/utils/class-binder';
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
        list: [
          'Patients can easily find you',
          'Get more organized appointments',
          'Comes with a Professional Website',
        ],
        contentAlign: 'right',
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
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return {
        header: content.header,
        descriptions: content.descriptions,
        headerClasses,
        descriptionClasses,
        ...content.contentAlign === 'left' && contentLeftBindings,
        ...content.contentAlign === 'right' && contentRightBindings,
      };
    },
  },
};
</script>
