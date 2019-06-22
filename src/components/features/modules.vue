<template lang="pug">
  div()
    v-container(v-for="(panel,key) in moduleList" :key="key")
      v-layout(row justify-center)
        v-flex(xs10).text-xs-center
          span.font-medium {{ panel.type }}
          br
          span.font-small {{ panel.description }}
      br
      br
      v-layout(row wrap fill-height :class="panel.isCenter ? 'justify-center' : ''")
        v-flex(
          xs12 md4 
          v-for="(moduleItem, index) in panel.modules" 
          :key="index"
        ).px-1.py-2
          v-card(height="100%").pa-1
            v-card-text(v-if="!$isMobile")
              v-layout(row)
                img(:src="require(`@/assets/images/${ moduleItem.icon }`)" width="10%" height="10%" :alt="moduleItem.title") 
                span.font-small.pt-1 &nbsp; {{ moduleItem.title }}
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
            description: 'Professional systems that are essential for your clinic',
            isCenter: true,
            hasSubtext: true,
            modules: [
              {
                icon: 'mycure-web-clinic-feature-icon-emr.png',
                title: 'EMR',
                subtext: 'Premium EMR designed for and by doctors',
                description: 'Create SOAP Charting, digital prescriptions, med certs, lab orders, and compare lab results anytime, anywhere.'
              },
              {
                icon: 'mycure-icon-billing-basic-active.png',
                title: 'Billing',
                subtext: 'Simplified billing with beautiful reports',
                description: 'A billing management system that can integrate all clinic transactions into a single database.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-lab.png',
                title: 'Laboratory',
                subtext: 'Record and retrieve results when you need them.',
                description: 'A laboratory information system that communicates with your modern diagnostic machines through  HL7 interfacing and PACS configurations.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-imaging.png',
                title: 'Imaging',
                subtext: 'Interpret imaging results in an instant.',
                description: 'An imaging information system that allows doctors to view DICOM images remotely, and patients to view their ' +
                  'lab & imaging results online.'
              },
              {
                icon: 'mycure-icon-inventory-active.png',
                title: 'Inventory',
                subtext: 'Your medical supplies at a glance.',
                description: 'An inventory management system built for healthcare facilities to monitor in-house supplies and' +
                  'over-the-counter products.'
              }  
            ]
          },
          {
            type: 'Premium Modules',
            description: 'Add these on top of the core modules to boost your digital clinic experience.',
            isCenter: false,
            hasSubtext: false,
            modules: [
              {
                icon: 'mycure-web-clinic-feature-icon-billing.png',
                title: 'Point-of-Sales',
                subtext: '',
                description: 'Complements the Inventory and Billing Module.'
              },
              {
                icon: 'mycure-icon-chat-active.png',
                title: 'Staff Chatbox',
                subtext: '',
                description: 'Virtually communicate with your clinic staff'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-syncbase.png',
                title: 'Syncbase Technology',
                subtext: '',
                description: 'The system works even offline.'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-census.png',
                title: 'Reports and Analytics',
                subtext: '',
                description: 'Measure your clinic\'s performance'
              },
              {
                icon: 'mycure-web-clinic-feature-icon-pme.png',
                title: 'Physical Medical Exam',
                subtext: '',
                description: 'Manage corporate and private APE, PEME, and FME.'
              }  
            ]
          }
        ]
      };
    }
  };
</script>

