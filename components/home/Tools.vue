<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" md="12").text-center
          p.mc-h7.primary--text.font-open-sans.font-weight-semibold FLEXIBLE AND SCALABLE
          h2(:class="headerClasses").font-weight-semibold.mb-3.title-line-spacing Customizable Health Information System
          v-row(justify="center")
            v-col(cols="12" md="6").text-center
              p(:class="descriptionClasses").font-open-sans.font-gray.mb-10 MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
        v-row(:justify="!$isMobile ? 'start' : 'center'")
          v-col(
            v-for="(tool, key) in items"
            :key="key"
            cols="6"
            md="2"
            :offset-md="getCustomOffset(key)"
          ).text-center
            picture-source(
              :custom-path="version === 1? 'home/' : 'clinics/module-icons/'"
              :image="tool.icon"
              :image-alt="tool.name"
              :image-width="$isMobile ? '77px' : ($isRegularScreen ? '90px' : '120px')"
              :image-height="$isMobile ? '77px' : ($isRegularScreen ? '90px' : '120px')"
              :image-file-extension="$useWebp? '.webp' : '.png'"
            )
            br
            h3.mc-b2.font-open-sans.font-gray {{ tool.name }}
            br
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  props: {
    version: {
      type: Number,
      default: 1,
    },
  },
  data () {
    this.defaultTools = [
      { name: 'Privacy Standards', icon: 'Privacy-Standards' },
      { name: 'Interoperable Systems', icon: 'Interoperable' },
      { name: 'Customizable Features', icon: 'Customizable-Features' },
    ];
    this.modules = [
      {
        name: 'Personal Details',
        icon: 'personal-details-icon',
      },
      {
        name: 'Electronic Medical Records (EMR)',
        icon: 'EMR',
      },
      {
        name: 'Queuing',
        icon: 'Queuing',
      },
      {
        name: 'Appointments',
        icon: 'Appointments',
      },
      {
        name: 'Pharmacy',
        icon: 'Pharmacy',
      },
      {
        name: 'Billing',
        icon: 'Billing',
      },
      {
        name: 'Laboratory',
        icon: 'Laboratory',
      },
      {
        name: 'Imaging',
        icon: 'Imaging',
      },
      {
        name: 'Physical Medical Exam',
        icon: 'physical-medical-exam',
      },
      {
        name: 'Inventory',
        icon: 'Inventory',
      },
      {
        name: 'Ward Management',
        icon: 'ward-management',
      },
      {
        name: 'Authentication & Authorization',
        icon: 'Authentication',
      },
      {
        name: 'SMS',
        icon: 'SMS',
      },
      {
        name: 'Chat',
        icon: 'Chat',
      },
      {
        name: 'Notifications',
        icon: 'Notification',
      },
    ];
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    return {};
  },
  computed: {
    items () {
      return this.version === 1 ? this.defaultTools : this.modules;
    },
    panelHeight () {
      if (this.$isMobile) return 'auto';
      if (this.version === 1 && this.$isRegularScreen) return '475px';
      if (this.version === 1 && this.$isWideScreen) return '800px';
      if (this.version === 2 && this.$isRegularScreen) return '950px';
      if (this.version === 2 && this.$isWideScreen) return '110vh';
      return '850px';
    },
    toolWidth () {
      if (this.version === 1) {
        return this.$isMobile ? '65%' : '60%';
      }
      return '50%%';
    },
  },
  methods: {
    // - For making 5 columns
    getCustomOffset (key) {
      if (this.version === 1) return 0;
      if (key % 5 === 0) return 1;
      return 0;
    },
  },
};
</script>

<style scoped>
.title-line-spacing {
  letter-spacing: 1px;
}
@media screen and (min-width: 1024px) {
  .usp-container {
    padding-top: 100px;
  }
}
</style>
