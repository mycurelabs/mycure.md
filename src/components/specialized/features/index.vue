<template lang="pug">
  div.white
    v-container.pt-5
      v-layout(row align-center)
        v-flex(xs12 md12).text-xs-center
          h1(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-work-sans.lh-title.font-40 {{ title }}
      v-container(:class="{'px-5' : !$isMobile}")
        v-layout(
          row
          wrap
          align-center 
          justify-center 
          :class="[{'my-4' : !$isMobile}, {'mx-5': !$isMobile}]"
        ).pb-3
          v-flex(
            xs12 
            md4 
            align-center
            v-for="(expert, key) in expertise" 
            :key="key"
          ).pa-3
            v-card.grey-panel.pa-3
              v-card-text
                img(
                  :src="require(`@/assets/images/specialized/${expert.image}.png`)"
                  :alt="expert.image"
                )
                h2.font-m.pb-3 {{ expert.title }}
                strong.font-18.font-mc-blue TOP FEATURES
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
          image: 'mycure-specialized-clinic-feature-skin'
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
          image: 'mycure-specialized-clinic-feature-pedia'
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
          image: 'mycure-specialized-clinic-feature-maternity'
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
          image: 'mycure-specialized-clinic-feature-dentist'
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
          image: 'mycure-specialized-clinic-feature-diagnostics'
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