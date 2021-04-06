<template lang="pug">
  generic-media-panel(
    align-right-column="center"
    cols-left="6"
    cols-right="6"
    custom-image-path="clinics/"
    file-extension=".webp"
    web-image-width="100%"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    content-align-right
    with-subheader
    :header="panelContents.title"
    :header-classes="headerClasses"
    :sub-header="panelContents.subHeader"
    :sub-header-classes="subHeaderClasses"
    :descriptions="[panelContents.description]"
    :description-classes="descriptionClasses"
    :web-image="panelContents.image"
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
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-E-multiple-branches',
      subHeader: 'FOR MULTI-BRANCH FACILITIES',
      title: 'One view for multiple locations.',
      description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
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
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
  },
  methods: {
    onGetStarted () {
      window.open('https://calendly.com/mycure/demo', '_blank');
    },
  },
};
</script>
