<template lang="pug">
  v-layout(row justify-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md10).pa-1.mb-3
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          br
          h1 What type of services does your clinic provide?
      v-layout(
        row
        wrap
        align-center
        justify-center
      )
        v-flex(
          xs12 
          md2
          align-center
          v-for="(type, key) in specializedTypes" 
          :key="key"
        ).pa-2
          v-card(
            hover
            @click="toggleType(type)"
            :class="[{'grey-panel': type.selected}]"
            width="100%"
          )
            div.check-container.text-xs-right
              img(
                v-if="type.selected"
                src="../../assets/images/mycure-web-bullet-check.png"
                width="15%"
                alt="Check"
              ).mt-1.mr-1
            v-card-text
              div.text-xs-center
                img(
                  :src="require(`@/assets/images/specialized/${type.image}.png`)"
                  :alt="type.image"
                  width="100%"
                )
            v-card-text.text-xs-center
              h2(:class="[$isMobile ? 'font-m' : 'font-16']") {{ type.title }}
        v-flex(xs12 md10).pa-1.mt-3
          v-card
            v-card-actions
              v-btn(flat :to="{ name: 'signup-specialized-step-1' }") Back
              v-spacer
              v-btn(color="accent" :to="{ name: 'signup-specialized-step-3' }") Proceed
    v-snackbar(
      color="accent"
      v-model="added"
      :timeout="1000"
    ) {{toggledType}} Selected!
    
    v-snackbar(
      v-model="removed"
      :timeout="1000"
    ) {{toggledType}} Removed!
</template>

<script>
export default {
  data () {
    return {
      added: false,
      removed: false,
      // - models
      toggledType: {},
      selectedType: {},
      // - enum
      specializedTypes: [
        {
          title: 'Skin and Aesthetic',
          features: [
            'Image Uploads',
            'Medical Drawings',
            'Point-of-Sales',
            'Inventory Management',
            'Staff Commissions'
          ],
          image: 'mycure-specialized-clinic-feature-skin',
          selected: false,
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
          image: 'mycure-specialized-clinic-feature-pedia',
          selected: false,
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
          image: 'mycure-specialized-clinic-feature-maternity',
          selected: false,
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
          image: 'mycure-specialized-clinic-feature-dentist',
          selected: false,
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
          image: 'mycure-specialized-clinic-feature-diagnostics',
          selected: false
        }
      ]
    };
  },
  methods: {
    toggleType (type) {
      type.selected = !type.selected;
      if (type.selected) {
        this.selectedType = type;
        this.specializedTypes = this.specializedTypes
          .map(item => {
            if (item.title !== type.title ) item.selected = false;
            return item;
          });
      } else {
        this.selectedType = {};
      }
      this.showToast(type);
    },
    showToast (type) {
      this.toggledType = type.title;
      type.selected ? this.added = true : this.removed = true;
    }
  }
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}
.grey-card {
  background-color: #f0f0f0 !important;
}
.check-container {
  min-height: 40px;
}

@media screen and (min-height: 1080px) {
  .check-container {
    min-height: 60px !important;
  }
}
</style>