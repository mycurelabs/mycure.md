<template lang="pug">
  div.white
    v-container.pt-5
      v-row(align="center")
        v-col(cols="12").text-center
          h1(:class="[{'pre-white-space': !isMobile}, isMobile ? 'font-36' : 'font-40']").text-center.lh-title {{ title }}
      v-container(:class="{'px-5' : !$isMobile}")
        v-row(
          align="center"
          justify="center"
          :class="[{'my-4' : !isMobile}, {'mx-5': !isMobile}]"
        ).pb-3
          v-col(
            v-for="(expert, key) in expertise"
            :key="key"
            cols="12"
            md="4"
            align="center"
          ).pa-5
            v-card.grey-panel
              v-card-text
                div.text-center
                  img(
                    v-lazy="require(`@/assets/images/specialized/${expert.image}.png`)"
                    :alt="expert.image"
                  )
                div.px-4.pb-3
                  h2.font-m.pb-5.black--text {{ expert.title }}
                  strong.font-18.primary--text TOP FEATURES
                  ul.no-list-style
                    li(v-for="(feature,key) in expert.features").black--text ✓&nbsp;{{ feature }}
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    this.expertise = [
      {
        title: 'Skin and Aesthetic',
        features: [
          'Image Uploads',
          'Medical Drawings',
          'Point-of-Sales',
          'Inventory Management',
          'Staff Commissions',
        ],
        image: 'mycure-specialized-clinic-feature-skin',
      },
      {
        title: 'Pediatrics',
        features: [
          'Complete Medical History',
          'Growth Charts',
          'Vaccination Tracker',
          'Developmental Milestones',
          'Pedia Store',
        ],
        image: 'mycure-specialized-clinic-feature-pedia',
      },
      {
        title: 'Maternity Care',
        features: [
          'Appointment Calendar',
          'Lab & Ultrasound Results',
          'Physician Referrals',
          'AOG & EDD Calculators',
          'Advanced Billing',
        ],
        image: 'mycure-specialized-clinic-feature-maternity',
      },
      {
        title: 'Dental',
        features: [
          'Baseline Dental Charting',
          'Proposed Work Documentation',
          'Patient Consent Forms',
          'Custom Dental Statuses',
          'Discounting and Promos',
        ],
        image: 'mycure-specialized-clinic-feature-dentist',
      },
      {
        title: 'Diagnostic',
        features: [
          'Advanced Queuing',
          'Laboratory & Imaging Results',
          'Send Outs & Specimen Tracking',
          'HL7 Machine Integrations',
          'Online Results Portal for Patients',
        ],
        image: 'mycure-specialized-clinic-feature-diagnostics',
      },
    ];
    return {
      isMobile: true,
    };
  },
  computed: {
    title () {
      const title = 'Same robust technology that powers various areas of expertise';
      return this.$isMobile ? title : parseTextWithNewLine(title, ['that']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
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
