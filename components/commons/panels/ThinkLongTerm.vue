<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="6").text-center
        strong.font-xs.primary--text Why MYCURE?
        h1(:class="panelHeaderClasses") Think Long-Term
    generic-media-panel(
      v-for="(panel, key) in panels"
      :key="key"
      offset-cols-right="1"
      :header="panel.header"
      :descriptions="panel.descriptions"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      v-bind="getPanelBindings(key)"
      extension-exclusive
      custom-image-path="commons/"
      file-extension=".png"
      :web-image="panel.image"
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
    this.panels = [
      {
        header: 'MYCURE is not just your ordinary medical app.',
        descriptions: ['It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network. MYCURE has open APIs to give you more flexibility in integrating with other systems.'],
        image: 'Preventing Failures',
      },
      {
        header: 'As your practice grows, your tech tools need to upgrade too.',
        descriptions: ['The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.'],
        image: 'Achieving Success',
      },
    ];
    return {};
  },
  computed: {
    panelHeaderClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-l'],
      });
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s', 'text-center'],
          regular: ['font-m'],
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
  methods: {
    getPanelBindings (key) {
      if (key % 2 === 0) {
        return {
          contentAlignRight: true,
          colsLeft: '5',
          colsRight: '4',
          alignContentLeft: 'center',
        };
      }
      return {
        contentAlignLeft: true,
        colsLeft: '4',
        colsRight: '5',
        alignContentRight: 'center',
      };
    },
  },
};
</script>
