<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.pt-5.white
      v-container
        v-layout(column justify-center)
          p.font-45.lh-title.br-5.text-xs-center Your buddy from medical school to private practice
          br
          img(height="100%" width="100%" src="../../assets/images/mycure-home-web-individual-clinic-diagram-banner.png" alt="Individual clinic")
    div(v-else).pt-5
      v-container
        v-layout(row justify-center)
          span.font-45.text-xs-center.lh-title Your buddy from medical school to private practice
        br
        v-layout(row justify-center)
          img(src="../../assets/images/mycure-web-clinic-room-01.png" width="100%" height="100%" alt="Clinic room")
        br
        v-layout(row justify-center v-for="feature in privateFeatures" :key="feature.title").pt-3
          v-flex(xs3).text-xs-center
            img(v-if="feature.icon" :src="require(`../../assets/images/${feature.icon}`)" :alt="feature.title")
          v-flex(xs8 offset-xs1)
            b {{ feature.title }}
            p {{ feature.description}}
</template>

<script>
  export default {
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,

        clinicProblems: [
          'I\'ve no secretary to help with record keeping',
          'My patients can\'t read my scribbly handwriting!',
          'Paper charts are very difficult to search & filter',
          'Cloud is a much safer place to backup my charts',
          'I have no idea how much HMOs owe me',
          'My previous system is old and not user-friendly'
        ],
        privateFeatures: [
          {
            title: 'SOAP Charting',
            description: 'Quickly store and retrieve your charts anytime, anywhere',
            icon: 'mycure-web-clinic-feature-icon-soap-charting.png'
          },
          {
            title: 'Prescription',
            description: 'Printable medical orders for you and your patients',
            icon: 'mycure-web-clinic-feature-icon-prescription.png'
          },
          {
            title: 'Diagnostic Orders',
            description: 'Laboratory and Imaging test requests in a few clicks',
            icon: 'mycure-web-clinic-feature-icon-lab.png'
          },
          {
            title: 'Custom Forms',
            description: 'Create medical certificates, questionnaires, and waivers',
            icon: 'mycure-web-clinic-feature-icon-forms.png'
          },
          {
            title: 'Daily Census',
            description: 'Manage your daily performance and income with ease',
            icon: 'mycure-web-clinic-feature-icon-census.png'
          },
        ]

      };
    },
    methods: {
       toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    }   
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f6f6f6;
  }
</style>