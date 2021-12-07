<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center.mb-4
              v-row(justify="center")
                v-col(cols="10")
                  h2.mc-h2.mb-6 Join the Next Generation of Healthcare IT Solutions: MYCURE
              p.mc-b2 Integrated healthcare solutions for your practice shouldn’t be expensive or complicated. MYCURE’s mission is to create an affordable yet effective patient records system. Featuring a variety of tools, you can customize your experience to fit the needs of your practice perfectly.
        v-col(cols="12" md="4" v-for="(page, key) in pages" :key="key")
          v-card(style="background-color: #fafafa;" height="100%").rounded-lg.pa-5
            v-row(align="start" :justify="$isMobile ? 'center' : 'start' " :class="{'text-center': $isMobile}")
              //- v-skeleton-loader(type="image" width="30%" height="50%").ma-3.
              v-icon(large color="#0099CC").ma-3 {{ page.icon }}
              v-col(:cols="contentColumn")
                p.mc-h4 {{ page.text }}
                p.mc-b4 {{ page.description }}
                nuxt-link(:to="{ name: page.route }" :class="{'d-flex': !$isMobile}").button
                  span.mc-hyp1.primary--text Learn more&nbsp;
                  v-icon(left color="primary" :small="!$isWideScreen" :style="`margin-top: ${$isWideScreen ? '8' : $isRegularScreen ? '3' : '-1'}px;`") {{ mdiChevronRight }}
</template>

<script>
import { mdiDoctor, mdiStethoscope, mdiClipboardListOutline, mdiCalendarClock, mdiLaptop, mdiWifiCheck, mdiChevronRight } from '@mdi/js';
import PictureSource from '~/components/commons/PictureSource';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    PictureSource,
    GenericPanel,
  },
  data () {
    this.pages = [
      {
        text: 'Physicians',
        icon: mdiDoctor,
        route: 'doctors-clinics',
        description: 'Explore a simpler way to create electronic medical records, prescriptions, and diagnostic test orders.',
      },
      {
        text: 'Outpatient Clinics',
        icon: mdiStethoscope,
        route: 'clinics',
        description: 'Experience streamlined workflows and real-time reports for optimized operational efficiency.',
      },
      {
        text: 'Diagnostics',
        icon: mdiClipboardListOutline,
        route: 'diagnostics',
        description: 'Embrace a simplified diagnostic test process from specimen collection to online test results.',
      },
      {
        text: 'Easy Scheduling',
        icon: mdiCalendarClock,
        route: 'booking',
        description: 'Let your patients schedule appointments with ease and cut down on long waiting times.',
      },
      {
        text: 'Telehealth',
        icon: mdiLaptop,
        route: 'telehealth',
        description: 'Try a safe and secure platform to build your virtual practice through video and audio calls.',
      },
      {
        text: 'Work Offline',
        icon: mdiWifiCheck,
        route: 'syncbase',
        description: 'Enjoy the benefits of using a cloud-based medical software even with little to no internet connection.',
      },
      // - TODO: Bring back when page is visible
      // {
      //   text: 'For Hospitals',
      //   route: 'hospitals',
      // },
    ];
    this.headerClasses = ['mc-h3'];
    this.descriptionClasses = ['mc-b2', 'font-open-sans'];
    this.contentColumnBindings = {
      cols: 12,
      md: 6,
      alignSelf: 'center',
    };
    this.mediaColumnBindings = {
      cols: 12,
      md: 6,
    };
    return {
      mdiDoctor,
      mdiStethoscope,
      mdiClipboardListOutline,
      mdiCalendarClock,
      mdiLaptop,
      mdiWifiCheck,
      mdiChevronRight,
    };
  },
  computed: {
    imageBindings () {
      return {
        image: 'simple-and-powerful',
        imageFileExtension: '.webp',
        imageAlt: 'Health application in Macbook laptop',
        imageWidth: this.$vuetify.breakpoint.width > 1919 ? '750px' : (this.$isRegularScreen ? '485px' : '250px'),
        imageHeight: this.$vuetify.breakpoint.width > 1919 ? '414.68px' : (this.$isRegularScreen ? '268.18px' : '138.23px'),
        customPath: 'home/',
      };
    },
    contentColumn () {
      return this.$isMobile ? '12' : null;
    },
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}
.blue-grad {
  background: linear-gradient(180deg, #0099CC 0%, #00397B 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.product-btn {
  width: 175px;
}
.button {
  text-decoration: none;
}
</style>
