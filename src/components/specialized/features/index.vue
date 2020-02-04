<template lang="pug">
  div.white
    v-container.pt-5
      v-layout(row align-center)
        v-flex(xs12 md12).text-xs-center
          h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-work-sans.lh-title.font-xl {{ title }}
      v-container.px-5
        v-layout(
          row
          :wrap="$isMobile"
          align-center 
          justify-center 
          v-for="(expert, key) in expertise" 
          :key="key"
          :class="(key+1)%2 === 0 ? 'grey-panel' : 'white-panel'"
        ).my-3.mx-5
          v-flex(xs4 md6 align-center).text-xs-center
            img(
              :src="require(`@/assets/images/specialized/${expert.image}.png`)"
              :alt="expert.image"
            )
          v-flex(xs8 md6)
            h2.font-m.pb-3 {{ expert.title }}
            strong.font-s.font-mc-blue TOP FEATURES
            ul.no-list-style
              li(v-for="(feature,key) in expert.features") ✓&nbsp;{{ feature }}
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      expertise: [
        {
          title: 'Skin and Aesthetic',
          features: [
            'Image Uploads',
            'Medical Drawings',
            'Point-of-Sales',
            'Inventory Management',
            'Staff Commissions'
          ],
          image: 'mycure-web-specialized-icon-skin'
        },
        {
          title: 'Pediatrics',
          features: [
            'Complete Medical History',
            'Growth Charts',
            'Vaccination Tracker',
            'Developmental Milestones',
            'Pedia Store'
          ],
          image: 'mycure-web-specialized-icon-pedia'
        },
        {
          title: 'Maternity Care',
          features: [
            'Appointment Calendar',
            'Lab & Ultrasound Results',
            'Physician Referrals',
            'AOG & EDD Calculators',
            'Advanced Billing'
          ],
          image: 'mycure-web-specialized-icon-maternity'
        },
        {
          title: 'Dental',
          features: [
            'Baseline Dental Charting',
            'Proposed Work Documentation',
            'Patient Consent Forms',
            'Custom Dental Statuses',
            'Discounting and Promos'
          ],
          image: 'mycure-web-specialized-icon-dental'
        },
        {
          title: 'Diagnostic',
          features: [
            'Advanced Queuing',
            'Laboratory & Imaging Results',
            'Send Outs & Specimen Tracking',
            'HL7 Machine Integrations',
            'Online Results Portal for Patients'
          ],
          image: 'mycure-web-specialized-icon-diagx'
        },
      ]
    };
  },
  computed: {
    title () {
      const title = 'Same robust technology that powers various areas of expertise';
      if (this.$isMobile) return title;
      return parseTextWithNewLine(title, ['that']);
    }
  }
};
</script>

<style scoped>
.expertise-container {
  width: 100%
}
.no-list-style {
  list-style-type: none;
  padding-left: 0;
}
.grey-panel {
  background-color: #f0f0f0;
}
</style>