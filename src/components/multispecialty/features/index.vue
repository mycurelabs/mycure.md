<template lang="pug">
  div.main-container
    v-layout(row justify-center align-center)
      v-flex(xs12 md12).text-xs-center
          h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-work-sans.lh-title.font-40 {{ title }}
          p(:class="{'pre-white-space': !$isMobile}").font-s.text-xs-center.pt-3 {{ description }}
    v-layout(row justify-center align-center).pt-4
      v-flex(xs12).text-xs-center
        v-btn(
          :color="$mcColors.mcBlue"
          :to="{ name: 'features' }"
          :id="exploreFeaturesId"
          dark
          large
          @click.stop="handleExploreFeaturesBtn"
        ).text-none.font-21.font-weight-bold Explore the Features
</template>

<script>
import { parseTextWithNewLine } from '@/utils';

export default {
  data () {
    return {
      customPath: 'multispecialty/',
      customSlidePath: 'multispecialty/',
      exploreFeaturesId: 'multispecialty-explore-features-btn',
      // image: 'mycure-home-web-complete-for-clinics-of-all-sizes-diagram',
      // slides: [
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-01',
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-02',
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-03',
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-04',
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-05',
      //   'mycure-home-web-complete-for-clinics-of-all-sizes-diagram-mobile-06'
      // ],
      // multiFeatures: [
      //     {
      //       title: 'Multispecialty Clinics',
      //       description: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
      //       icon: 'mycure-web-clinic-type-icon-multispecialty'
      //     },
      //     {
      //       title: 'Outpatient Clinics',
      //       description: 'Hospital-based clinics that provide outpatient consultation services from various specialists',
      //       icon: 'mycure-web-clinic-type-icon-opd'
      //     },
      //     {
      //       title: 'Industrial Clinics',
      //       description: 'Primary clinics inside companies, schools, BPOs, and other industries covered by OSHS',
      //       icon: 'mycure-web-clinic-type-icon-industrial'
      //     },
      //     {
      //       title: 'Skin & Aesthetics Clinics',
      //       description: 'Specialized for clinics that offer aesthetic procedures and dermatological services',
      //       icon: 'mycure-web-clinic-type-icon-skin'
      //     },
      //     {
      //       title: 'PME Clinics',
      //       description: 'Clinics specializing in Physical Medical Exam (PME) Services',
      //       icon: 'mycure-web-clinic-type-icon-pme'
      //     },
      //     {
      //       title: 'Family Clinics',
      //       description: 'Small to medium clinics that offer family medicine services, laboratory tests, and pharmacy',
      //       icon: 'mycure-web-clinic-type-icon-family-clinic'
      //     }
      //   ]
    };
  },
  computed: {
    title () {
      const title = 'Provide the best service to your patients';
      return parseTextWithNewLine(title, ['service']);
    },
    description () {
      const description = 'Your multispecialty clinic is everything your patients need. We help you make it extra easier to manage so you can focus more on patient care.';
      return parseTextWithNewLine(description, ['need.']);
    }
  },
  methods: {
    handleExploreFeaturesBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-': ''}${this.exploreFeaturesId}`,
        eventLabel: this.exploreFeaturesId
      });
    }
  }
};
</script>

<style scoped>
.main-container {
  height: 90vh;
  padding-top: 20vh;
  background-color: #f0f0f0;
}
</style>