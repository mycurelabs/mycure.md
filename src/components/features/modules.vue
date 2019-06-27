<template lang="pug">
  div(:class="$isMobile ? 'pt-5' : ''")
    v-container(v-for="(panel,key) in moduleList" :key="key")
      v-layout(row justify-center)
        v-flex(xs10).text-xs-center
          span.font-48 {{ panel.type }}
          br
          span.font-18 {{ panel.description }}
      br
      br
      v-layout(row wrap fill-height :class="panel.isCenter ? 'justify-center' : ''")
        v-flex(
          xs12
          :md4="!panel.doubleCol"
          :md5="panel.doubleCol"
          v-for="(moduleItem, index) in panel.modules" 
          :key="index"
        ).px-1.py-2
          v-card(height="100%").pa-1
            v-card-text(v-if="!$isMobile")
              v-layout(row)
                img(:src="require(`@/assets/images/${ moduleItem.icon }`)" width="10%" height="10%" :alt="moduleItem.title") 
                span(:class="panel.doubleCol ? 'pt-3' : 'pt-1'").font-18 &nbsp; {{ moduleItem.title }}
              br
              i(v-if="panel.hasSubtext") {{ moduleItem.subtext}}
                br
                br
              span {{ moduleItem.description }}
            v-card-text(v-else)
              v-layout(row wrap)
                v-flex(xs4 align-self-center).pr-3
                  img(:src="require(`@/assets/images/${ moduleItem.icon }`)" width="80" :alt="moduleItem.title")
                v-flex(xs8)
                  strong(style="font-size: 14px")  {{ moduleItem.title}}
                  br
                  i(v-if="panel.hasSubtext" style="font-size: 12px") {{ moduleItem.subtext}}
                  p(style="font-size: 12px").pt-3 {{ moduleItem.description }}
</template>

<script>
  export default {
    data () {
      return {
        moduleList: [
          {
            type: 'Core Modules',
            description: 'Professional systems that are essential for your clinic.',
            isCenter: true,
            doubleCol: true,
            hasSubtext: true,
            modules: [
              {
                icon: 'mycure-web-clinic-feature-icon-emr.png',
                title: 'Medical Records',
                subtext: 'Premium EMR designed for and by doctors',
                description: 'An easy-to-use Electronic Medical Records (EMR) System for printing Prescriptions, creating Charts, Lab Orders, and other medical forms.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-pme.png',
                title: 'Registration',
                subtext: 'Streamlined registration process from start to finish',
                description: 'A Registration & Queuing System designed to reduce patient journey turnaround time and medical record filing errors.'
              },
              {
                icon: 'mycure-icon-billing-basic-active.png',
                title: 'Billing',
                subtext: 'Simplified billing with beautiful reports',
                description: 'A Billing Management System that can integrate all clinic private and HMO transactions into a single database.'
              },
              {
                icon: 'mycure-icon-report-active.png',
                title: 'Administrative',
                subtext: 'Better operations with data-driven business decisions.',
                description: 'A business tool to measure your day-to-day clinic performance with sales reports, daily census, and sophisticated user access control.'
              }
            ]
          },
          {
            type: 'Premium Modules',
            description: 'Add these on top of the core modules to boost your digital clinic experience.',
            isCenter: false,
            doubleCol: false,
            hasSubtext: true,
            modules: [
              {
                icon: 'mycure-web-clinic-feature-icon-lab.png',
                title: 'Laboratory',
                subtext: 'Record and retrieve results when you need them.',
                description: 'A Laboratory Information System that communicates with modern diagnostic machines through HL7 interfacing.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-imaging.png',
                title: 'Imaging',
                subtext: 'Interpret imaging results in an instant.',
                description: 'An Imaging Information System that allows doctors to view DICOM images remotely, and patients to view imaging results online.'
              },
              {
                icon: 'mycure-icon-inventory-active.png',
                title: 'Materials Management',
                subtext: 'Your medical supplies at a glance.',
                description: 'A Materials Management System built for healthcare facilities to monitor in-house supplies and over-the-counter products.'
              },
              {
                icon: 'mycure-icon-pmeepe-active.png',
                title: 'Physical Medical Exam',
                subtext: 'Monitor groups of PME patients effectively.',
                description: 'Manage corporate and private Annual Physical Exams, Pre-employment Medical Exams, Executive Checkups, and Full Medical Exams.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-billing.png',
                title: 'Pharmacy',
                subtext: 'Sell medicines in a very efficient way.',
                description: 'A Pharmacy Management System with Point-of-Sales functions, Rx access, inventory management, and reports in one place.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-syncbase.png',
                title: 'Syncbase Technology',
                subtext: 'Use MYCURE even if your internet connection is down.',
                description: 'Work within your local network using multiple devices even if the internet goes down and just sync data when back online.'
              } 
            ]
          }
        ]
      };
    }
  };
</script>

