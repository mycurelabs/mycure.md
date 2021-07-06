<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" md="12").text-center
          h2(:class="headerClasses").font-weight-semibold.mb-3.title-line-spacing Flexible. Scalable.
          p(:class="subheaderClasses").primary--text.font-open-sans.font-weight-bold Customizable based on what you need
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
              :image-width="toolWidth"
              image-file-extension=".webp"
            )
            br
            h3.font-xs.font-open-sans.font-gray {{ tool.name }}
            br
</template>

<script>
import classBinder from '~/utils/class-binder';
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
      { name: 'Privacy Standards', icon: 'Privacy Standards' },
      { name: 'Interoperable Systems', icon: 'Interoperable' },
      { name: 'Customizable Features', icon: 'Customizable Features' },
    ];
    this.modules = [
      {
        name: 'Personal Details',
        icon: 'Personal Details',
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
        icon: 'Physical Medical Exam',
      },
      {
        name: 'Inventory',
        icon: 'Inventory',
      },
      {
        name: 'Ward Management',
        icon: 'Ward Management',
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
    return {};
  },
  computed: {
    items () {
      return this.version === 1 ? this.defaultTools : this.modules;
    },
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-2xl'],
      });
    },
    subheaderClasses () {
      return classBinder(this, {
        mobile: ['font-14'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-m'],
      });
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
