<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.pt-5
      v-container
        v-layout(column justify-center)
          p.font-45.lh-title.br-5.text-xs-center Make things easy for you and your secretary.
          br
          img(height="100%" width="100%" src="../../assets/images/mycure-group-clinic-diagram.png" alt="Individual clinic")
    div(v-else).pt-5
      v-container
        v-layout(row justify-center)
          span.font-45.text-xs-center.lh-title Designed for clinics of all shapes and sizes.
        br
        v-layout(row justify-center)
          div
            //- https://ssense.github.io/vue-carousel/
            carousel(
              :per-page="1" 
              :autoplay="true"
              :loop="true"
              :navigationEnabled="true"
              :adjustableHeight="true"
              :paginationEnabled="false"
              :navigationClickTargetSize="50"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            ) 
              slide(
                v-for="(product,index) in 3"
                :key="index"
                :data-index="product"
              ).px-2
                img(:src="require(`../../assets/images/mycure-group-clinic-diagram-mobile-0${product}.png`)" alt="Multispecialty Clinic" width="100%")
        br
        v-layout(row justify-center v-for="feature in groupFeatures" :key="feature.title").pt-3
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
          'I\'ve no secretary to help with record-keeping',
          'My patients can\'t read my scribbly handwriting!',
          'Paper charts are very difficult to search & filter',
          'Cloud is a much safer place to backup my charts',
          'I have no idea how much HMOs owe me',
          'My previous system is old and not user-friendly'
        ],
        groupFeatures: [
          {
            title: 'Daily Census',
            description: 'Manage your group\'s daily performance and income with ease.',
            icon: 'mycure-web-clinic-feature-icon-census.png'
          },
          {
            title: 'Print Records Anytime',
            description: 'Printable medical orders for you and your patients.',
            icon: 'mycure-web-clinic-feature-icon-print.png'
          },
          {
            title: 'Secretary Account',
            description: 'Queueing and billing can be managed by your secretary.',
            icon: 'mycure-web-clinic-feature-icon-secretary.png'
          }
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