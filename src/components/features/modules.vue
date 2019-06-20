<template lang="pug">
  div
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
            v-card-text
              //- TODO: Add icon here and in data
              p {{ moduleItem.title }}
              i(v-if="panel.hasSubtext") {{ moduleItem.subtext}}
                br
                br
              span {{ moduleItem.description }}
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
                title: 'EMR',
                subtext: 'Premium EMR designed for and by doctors',
                description: 'Create SOAP Charting, digital prescriptions, med certs, lab orders, and compare lab results anytime, anywhere.'
              },
              {
                title: 'Billing',
                subtext: 'Simplified billing with beautiful reports',
                description: 'A billing management system that can integrate all clinic transactions into a single database.'
              },
              {
                title: 'Laboratory',
                subtext: 'Record and retrieve results when you need them.',
                description: 'A laboratory information system that communicates with your modern diagnostic machines through  HL7 interfacing and PACS configurations.'
              },
              {
                title: 'Imaging',
                subtext: 'Interpret imaging results in an instant.',
                description: 'An imaging information system that allows doctors to view DICOM images remotely, and patients to view their ' +
                  'lab & imaging results online.'
              },
              {
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
                title: 'Point-of-Sales',
                subtext: '',
                description: 'Complements the Inventory and Billing Module.'
              },
              {
                title: 'Staff Chatbox',
                subtext: '',
                description: 'Virtually communicate with your clinic staff'
              },
              {
                title: 'Syncbase Technology',
                subtext: '',
                description: 'The system works evene offline.'
              },
              {
                title: 'Reports and Analytics',
                subtext: '',
                description: 'Measure your clinic\'s performance'
              },
              {
                title: 'Physical Medical Exam',
                subtext: '',
                description: 'Manage corporate and private APE, PEME, and FME.'
              }  
            ]
          },
          {
            type: 'Add-Ons',
            description: 'You get these complimentary features when you need them.',
            isCenter: false,
            hasSubtext: false,
            modules: [
              {
                title: 'DPA Registration Guide',
                subtext: '',
                description: 'Step-by-step guide to DPA compliance and clinics.'
              },
              {
                title: 'Awesome Care',
                subtext: '',
                description: 'Get help quickly from our hands-on support team.'
              },
              {
                title: 'Specialty Features',
                subtext: '',
                description: 'Activate premium tools for different doctor specializations.'
              }
            ]
          }
        ]
      };
    }
  };
</script>

