<template lang="pug">
  div
    div(v-if="!$isMobile").transparent#panel5.pt-5
      v-container
        v-layout(column wrap justify-center)
          p.font-45.lh-title.text-xs-center.pb-5 Designed for clinics of all shapes and sizes.
          br
          img(height="100%" width="100%"  src="../../assets/images/mycure-home-web-complete-for-clinics-of-all-sizes-diagram.png" alt="All types of clinics").mb-3
      br
      br
      v-layout(row wrap justify-center)
        v-btn(
          id="cms-signup-btn"
          @click.stop="handleCmsSignupBtn"
          color="#18c551"
          :href="`${signInURL}/signup/multi-specialty/step-1`"
          target="_blank"
        ).mt-3.cta-btn
          strong.font-18.white--text.text-none Get Started Today
      br
      v-layout(row wrap justify-center)
        em.font-18 Have a question? 
          a.font-mc-blue 
            strong(@click="toggleChat") Start a quick chat!
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
                v-for="(product,index) in 6"
                :key="index"
                :data-index="product"
              ).px-2
                img(:src="require(`../../assets/images/mycure-web-clinic-type-0${product}.png`)" alt="Multispecialty Clinic" width="100%")
        br
        v-layout(row justify-center v-for="feature in multiFeatures" :key="feature.title").pt-3
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
        multiFeatures: [
          {
            title: 'Multispecialty Clinics',
            description: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
            icon: 'mycure-web-clinic-type-icon-multispecialty.png'
          },
          {
            title: 'Outpatient Clinics',
            description: 'Hospital-based clinics that provide outpatient consultation services from various specialists',
            icon: 'mycure-web-clinic-type-icon-opd.png'
          },
          {
            title: 'Industrial Clinics',
            description: 'Primary clinics inside companies, schools, BPOs, and other industries covered by OSHS',
            icon: 'mycure-web-clinic-type-icon-industrial.png'
          },
          {
            title: 'Skin & Aesthetics Clinics',
            description: 'Specialized for clinics that offer aesthetic procedures and dermatological services',
            icon: 'mycure-web-clinic-type-icon-skin.png'
          },
          {
            title: 'PME Clinics',
            description: 'Clinics specializing in Physical Medical Exam (PME) Services',
            icon: 'mycure-web-clinic-type-icon-pme.png'
          },
          {
            title: 'Family Clinics',
            description: 'Small to medium clinics that offer family medicine services, laboratory tests, and pharmacy',
            icon: 'mycure-web-clinic-type-icon-family-clinic.png'
          }
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
      handleCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-cms-signup-btn',
          eventLabel: 'cms-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>
