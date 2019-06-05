<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").white.py-5
      v-container
        v-layout(row justify-center)
          span.font-medium MYCURE is complete - everything your clinic needs.
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-complete-clinic-management-system-diagram.png")
    div(v-else)
      v-container.pt-5
        v-layout(row justify-center)
          span.font-l.lh-title.text-xs-center MYCURE is complete - everything your clinic needs.
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
                v-for="(product,index) in 6"
                :key="index"
                :data-index="product"
              ).px-2
                img(:src="require(`../../assets/images/mycure-web-clinic-room-0${product}.png`)" width="100%")
        br
        v-layout(row justify-center v-for="feature in features" :key="feature.title").pt-3
          v-flex(xs3).text-xs-center
            img(:src="require(`../../assets/images/${feature.icon}`)")
          v-flex(xs8 offset-xs1)
            b {{ feature.title }}
            p {{ feature.description}}
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,

        features: [
          {
            title: 'Medical Records',
            description: 'Create printable Prescriptions, Charts, Lab Orders and customizable forms',
            icon: 'mycure-web-clinic-feature-icon-emr.png'
          },
          {
            title: 'Syncbase Technology',
            description: 'Use MYCURE even if your internet connection is down. Work offline and sync data once online',
            icon: 'mycure-web-clinic-feature-icon-syncbase.png'
          },
          {
            title: 'DPA Guide',
            description: 'Step-by-step guide to DPA compliance',
            icon: 'mycure-web-clinic-feature-icon-DPA.png'
          },
          {
            title: 'Billing',
            description: 'Manage patient billing, doctor rebates, and HMO receivables',
            icon: 'mycure-web-clinic-feature-icon-billing.png'
          },
          {
            title: 'Pharmacy',
            description: 'Point-of-Sales functions, Rx access, inventory management and reports',
            icon: 'mycure-web-clinic-feature-icon-prescription.png'
          },
          {
            title: 'Materials Management',
            description: 'Items masterlist, reorder & expiration alerts, and weekly reports',
            icon: 'mycure-web-clinic-feature-icon-materials-management.png'
          },
          {
            title: 'Physical Medical Exam',
            description: 'Auto-balancing queues, PME reports, and group registration',
            icon: 'mycure-web-clinic-feature-icon-pme.png'
          },
          {
            title: 'Imaging',
            description: 'Online & printable imaging results, census, and DICOM/PACS integration',
            icon: 'mycure-web-clinic-feature-icon-imaging.png'
          },
          {
            title: 'Laboratory',
            description: 'Online & printable lab results, census,and  HL7 machine integration',
            icon: 'mycure-web-clinic-feature-icon-lab.png'
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

</style>