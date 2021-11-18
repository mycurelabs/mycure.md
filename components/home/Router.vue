<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center
              v-row(justify="center")
                v-col(cols="10" md="10")
                  h2.mc-h2 Join the Next Generation of Healthcare IT Solutions: MYCURE
              p.mc-b2 Integrated healthcare solutions for your practice shouldn’t be expensive or complicated. MYCURE’s mission is to create an affordable yet effective patient records system. Featuring a variety of tools, you can customize your experience to fit the needs of your practice perfectly.
        v-col(cols="12" md="4" v-for="(page, key) in pages" :key="key")
          v-card(style="background-color: #fafafa;" height="100%").rounded-xl.pa-5
            v-row
              v-skeleton-loader(type="image" width="30%" height="50%").ma-3.
              v-col
                p.mc-h4 {{ page.text }}
                p.mc-b4 {{ page.description }}
                mc-btn(
                  text
                  color="grey"
                  :to="{ name: page.route }"
                )
                  p.mc-hyp1.mb-0 Learn more
                  v-icon mdi-arrow-right
        //- v-col(slot="additional-content" cols="12").order-last
        //-   v-row(justify="center")
        //-     v-col(v-for="(service, key) in services" :key="key").shrink
        //-       v-hover(
        //-         v-slot="{ hover }"
        //-         open-delay="100"
        //-       )
        //-         mc-btn(
        //-           depressed
        //-           color="white"
        //-           :block="$isMobile"
        //-           :x-large="$isWideScreen"
        //-           :large="!$isWideScreen"
        //-           :to="{ name: service.route }"
        //-           :outlined="!hover"
        //-           :class="{'white--text': !hover, 'info--text': hover}"
        //-         ).text-none
        //-           v-icon(left) {{ service.icon }}
        //-           strong {{ service.text }}
</template>

<script>
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
        route: 'doctors-clinics',
        description: 'Explore a simpler way to create electronic medical records, prescriptions, and diagnostic test orders.',
      },
      {
        text: 'Outpatient Clinics',
        route: 'clinics',
        description: 'Experience streamlined workflows and real-time reports for optimized operational efficiency.',
      },
      {
        text: 'Diagnostics',
        route: 'diagnostics',
        description: 'Embrace a simplified diagnostic test process from specimen collection to online test results.',
      },
      {
        text: 'Easy Scheduling',
        route: 'booking',
        description: 'Let your patients schedule appointments with ease and cut down on long waiting times.',
      },
      {
        text: 'Telehealth',
        route: 'telehealth',
        description: 'Try a safe and secure platform to build your virtual practice through video and audio calls.',
      },
      {
        text: 'Work Offline',
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
    return {};
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
    contentColumnBindings () {
      return {
        cols: 12,
        md: 6,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 6,
      };
    },
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}

.product-btn {
  width: 175px;
}
.button {
  text-decoration: none;
}
</style>
