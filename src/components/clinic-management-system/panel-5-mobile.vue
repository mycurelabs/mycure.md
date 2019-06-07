<template lang="pug">
  div.pa-5.mc-light-grey
    v-container
      v-layout(row justify-center)
        span.font-l.text-xs-center.lh-title Designed for clinics of all shapes and sizes.
      br
      v-layout(row justify-center)
        img(src="../../assets/images/mycure-web-clinic-room-01.png" width="100%" height="100%")
      br
      v-layout(row justify-center v-for="feature in multiFeatures" :key="feature.title").pt-3
        v-flex(xs3).text-xs-center
          img(v-if="feature.icon" :src="require(`../../assets/images/${feature.icon}`)")
        v-flex(xs8 offset-xs1)
          b {{ feature.title }}
          p {{ feature.description}}
  //- div.pa-5.mc-light-grey
    v-container
      p.font-l.text-xs-center.lh-title Designed for clinics of all shapes and sizes.
    v-layout(justify-center)
      table
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-m Multispecialty Clinics
        tr
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Skin &amp Aesthetic Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Outpatient Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Family Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3 
            span.font-m Industrial Clinics
        tr 
          div.pl-3.py-3
            img(src="../../assets/images/mycure-icon-check.png").mr-3
            span.font-m PME Clinics
    br
    br
    br
    v-layout(row wrap justify-center)
      em.font-s.text-xs-center Not too complicated, 
          br  
          | not too basic.
          br
          | MYCURE is just right for your clinic.
    br
    br
    v-layout(row wrap justify-center)
      v-btn(
        :href="`${siginURL}/signup/private/step-1`"
        color="#18c551" large) 
        strong.text-none.white--text Sign Up Now
    br
    v-layout(row wrap justify-center)
      em.font-xs Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
  
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        multiFeatures: [
          {
            title: 'Multispecialty Clinics',
            description: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
            icon: 'mycure-web-clinic-type-icon-multispecialty.png'
          },
          {
            title: 'Outpatient Clinics',
            description: 'Hospital-based clinics that provide outpatient consultation services from various specialists',
            icon: 'mycure-web-clinic-type-icon-opd.png.png'
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
      }
    }
  };
</script>

<style scoped>
  table {
    border-collapse: collapse;
    border-radius:6px;
    width: 100%;
  }

  table tr {
    border: 1px solid #bbb;
    padding: 15px;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  
  table tr:first-child {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  } 

  table tr:last-child {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  } 
  
  a {
    text-decoration: none;
  }
</style>
