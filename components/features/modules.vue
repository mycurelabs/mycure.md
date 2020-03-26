<template lang="pug">
  div(:class="$isMobile ? 'pt-5' : ''")
    v-container(v-for="(panel,key) in moduleList" :key="key")
      v-row(justify="center")
        v-col(cols="10").text-center
          strong(:class="$isMobile ? 'font-30' : 'font-40'").font-work-sans {{ panel.type }}
          br
          span(:class="$isMobile ? 'font-18' : 'font-21'") {{ panel.description }}
      br
      br
      v-row(:class="panel.isCenter ? 'justify-center' : ''").fill-height
        v-col(
          v-for="(moduleItem, index) in panel.modules"
          :key="index"
          cols="12"
          :md="!panel.doubleCol ? '4' : '5'"
        ).pa-2
          v-card(height="100%").pa-1.module-card
            v-card-text(v-if="!$isMobile").black--text
              v-row.flex-nowrap
                img(:src="require(`~/assets/images/module-icons/${ moduleItem.icon }`)" width="10%" height="10%" :alt="moduleItem.title")
                span(:class="panel.doubleCol ? 'pt-2' : 'pt-1'").font-21.font-work-sans &nbsp; {{ moduleItem.title }}
              br
              i(v-if="panel.hasSubtext") {{ moduleItem.subtext}}
                br
                br
              span {{ moduleItem.description }}
            v-card-text(v-else).pa-1
              v-row
                v-col(cols="4" align-self="center").pr-3
                  img(:src="require(`~/assets/images/module-icons/${ moduleItem.icon }`)" width="80" :alt="moduleItem.title")
                v-col(cols="8")
                  strong.font-14 {{ moduleItem.title}}
                  br
                  i(v-if="panel.hasSubtext").font-12 {{ moduleItem.subtext}}
                  p.font-12.pt-3 {{ moduleItem.description }}
</template>

<script>
export default {
  data () {
    this.moduleList = [
      {
        type: 'Core Modules',
        description: 'Professional systems that are essential for your clinic.',
        isCenter: true,
        doubleCol: true,
        hasSubtext: true,
        modules: [
          {
            icon: 'mycure-web-clinic-feature-icon-core-emr.png',
            title: 'Medical Records',
            subtext: 'Premium EMR designed for and by doctors',
            description: 'An easy-to-use Electronic Medical Records (EMR) System for printing Prescriptions, creating Charts, Lab Orders, and other medical forms.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-core-registration.png',
            title: 'Registration',
            subtext: 'Streamlined registration process from start to finish',
            description: 'A Registration & Queuing System designed to reduce patient journey turnaround time and medical record filing errors.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-core-billing.png',
            title: 'Billing',
            subtext: 'Simplified billing with beautiful reports',
            description: 'A Billing Management System that can integrate all clinic private and HMO transactions into a single database.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-core-administrative.png',
            title: 'Administrative',
            subtext: 'Better operations with data-driven business decisions.',
            description: 'A business tool to measure your day-to-day clinic performance with sales reports, daily census, and sophisticated user access control.',
          },
        ],
      },
      {
        type: 'Premium Modules',
        description: 'Add these on top of the core modules to boost your digital clinic experience.',
        isCenter: false,
        doubleCol: false,
        hasSubtext: true,
        modules: [
          {
            icon: 'mycure-web-clinic-feature-icon-premium-laboratory.png',
            title: 'Laboratory',
            subtext: 'Record and retrieve results when you need them.',
            description: 'A Laboratory Information System that communicates with modern diagnostic machines through HL7 interfacing.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-premium-imaging.png',
            title: 'Imaging',
            subtext: 'Interpret imaging results in an instant.',
            description: 'An Imaging Information System that allows doctors to view DICOM images remotely, and patients to view imaging results online.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-premium-materials-management.png',
            title: 'Materials Management',
            subtext: 'Your medical supplies at a glance.',
            description: 'A Materials Management System built for healthcare facilities to monitor in-house supplies and over-the-counter products.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-premium-pme.png',
            title: 'Physical Medical Exam',
            subtext: 'Monitor groups of PME patients effectively.',
            description: 'Manage corporate and private Annual Physical Exams, Pre-employment Medical Exams, Executive Checkups, and Full Medical Exams.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-premium-pharmacy.png',
            title: 'Pharmacy',
            subtext: 'Sell medicines in a very efficient way.',
            description: 'A Pharmacy Management System with Point-of-Sales functions, Rx access, inventory management, and reports in one place.',
          },
          {
            icon: 'mycure-web-clinic-feature-icon-premium-syncbase-technology.png',
            title: 'Syncbase Technology',
            subtext: 'Use MYCURE even if your internet connection is down.',
            description: 'Work within your local network using multiple devices even if the internet goes down and just sync data when back online.',
          },
        ],
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.module-card {
  background-color: #fafafa;
}
</style>
