<template lang="pug">
  generic-media-panel(
    :fluid="!$isMobile"
    align-left-column="center"
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="doctors-clinics/"
    file-extension=".webp"
    web-image-width="104%"
    mobile-image-width="95%"
    web-image-class="ml-n3"
    mobile-image-class="text-center"
    :content-align-left="true"
    :header="panelContents.title"
    :header-classes="headerClasses"
    :descriptions="[panelContents.description]"
    :descriptionClasses="descriptionClasses"
    :web-image="panelContents.image"
  )
    template(slot="additional-content")
      template(v-for="(item, i) in panelContents.list")
        v-row(:align="i === 2 ? 'center' : 'start'" dense)
          v-col(cols="1").pr-2.pt-2
            v-icon(color="white") mdi-chevron-right
          v-col
            span(:class="checkListClasses") {{ item }}
</template>

<script>
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelContents = {
      image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-C-group-practice',
      title: 'Practice as a Group',
      description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
      list: [
        'Collated Medical Records',
        'Optimized Patient Queuing',
        'Group Clinic Chatbox',
        'Shared Secretary Account',
        'Booking Website',
      ],
    };
    return {};
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'white--text',
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
        'white--text',
      ];
      return descriptionClasses;
    },
    checkListClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'white--text',
      ];
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>
