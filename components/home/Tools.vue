<template lang="pug">
  v-container.usp-container
    v-row(justify="center" align="center" :style="{ height: panelHeight }")
      v-col(cols="12" md="10")
        v-row(
          justify="center"
          align="center"
        )
          v-col(cols="12" md="12").text-center
            h1(:class="headerClasses").font-weight-medium Flexible. Scalable.
          v-col(cols="12" md="12").text-center
            p(:class="subheaderClasses").primary--text Customizable based on what you need
          v-col(cols="12" md="12" lg="8" xl="6").text-center
            p(:class="descriptionClasses").font-open-sans.grey--text MYCURE is modularized and provides APIs for each so you are able to build from scratch, add missing modules while making your system secure and compliant.
        v-row(justify="center").pt-5
          v-col(cols="12" md="8")
            v-row(justify="center" dense)
              v-col(
                v-for="(tool, key) in items"
                :key="key"
                cols="6"
                md="4"
              ).text-center
                picture-source(
                  extension-exclusive
                  :custom-path="version === 1? 'home/' : 'clinics/module-icons/'"
                  :image="tool.icon"
                  :image-alt="tool.name"
                  :image-width="toolWidth"
                  image-file-extension=".png"
                )
                br
                h3.font-xs.font-open-sans.grey--text {{ tool.name }}
                br
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
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
        name: 'Queueing',
        icon: 'Queueing',
      },
      {
        name: 'Appointments',
        icon: 'Appointment',
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
        wide: ['font-xl'],
      });
    },
    subheaderClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
    },
    panelHeight () {
      if (this.$isMobile) return 'auto';
      if (this.version === 1 && this.$isRegularScreen) return '475px';
      if (this.version === 1 && this.$isWideScreen) return '800px';
      if (this.version === 2 && this.$isRegularScreen) return '1000px';
      if (this.version === 2 && this.$isWideScreen) return '1300px';
      return '850px';
    },
    toolWidth () {
      if (this.version === 1) {
        return this.$isMobile ? '65%' : '60%';
      }
      return '30%';
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .usp-container {
    padding-top: 100px;
  }
}
</style>
