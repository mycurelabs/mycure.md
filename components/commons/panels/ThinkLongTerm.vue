<template lang="pug">
  div
    v-container(:fluid="fluid")
      v-row(justify="center").pb-5
        v-col(cols="12" md="6").text-center
          strong(:class="metaTitleClasses").primary--text Why MYCURE?
          h1(:class="panelHeaderClasses").font-weight-medium Think Long-Term
    generic-media-panel(
      :fluid="fluid"
      v-for="(panel, key) in panels"
      :key="key"
      offset-cols-right="1"
      :header="panel.header"
      :descriptions="panel.descriptions"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      :dense='$isMobile'
      v-bind="getPanelBindings(key)"
      extension-exclusive
      custom-image-path="commons/"
      file-extension=".png"
      :web-image="panel.image"
    )
    //- v-row(justify="center")
    //-   v-col(
    //-     cols="12"
    //-     md="4"
    //-     v-for="(panel, key) in panels"
    //-     :key="key"
    //-   )
    //-     v-card(flat color="#fafafa" height="100%")
    //-       v-card-text
    //-         div.text-center
    //-           picture-source(
    //-             extension-exclusive
    //-             custom-path="commons/"
    //-             image-file-extension=".png"
    //-             :image="panel.image"
    //-             :image-alt="panel.header"
    //-             image-width="90%"
    //-           )
    //-         br
    //-         br
    //-         h2(:class="headerClasses") {{ panel.header }}
    //-         br
    //-         p(:class="descriptionClasses") {{ panel.descriptions }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericMediaPanel,
    PictureSource,
  },
  props: {
    // - Make container fluid
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.panels = [
      {
        header: 'MYCURE is not just your ordinary medical app.',
        descriptions: ['It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network. MYCURE has open APIs to give you more flexibility in integrating with other systems.'],
        image: 'Prevent Failures',
        imageWidth: '80%',
      },
      {
        header: 'As your practice grows, your tech tools need to upgrade too.',
        descriptions: ['The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.'],
        image: 'Success',
        imageWidth: '80%',
      },
    ];
    return {};
  },
  computed: {
    panelHeaderClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    metaTitleClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s'],
          regular: ['font-m'],
          wide: ['font-l'],
        }),
        'text-justify',
        'primary--text',
        'font-weight-medium',
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
        'text-justify',
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
