<template lang="pug">
  div
    main-toolbar
    div#panel1
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5
            h1.panel-title.display-3 Secure Your Patient 
              br
              | Medical Data
            h4.headline – With a powerful –
              br
              | Clinic Management System
            v-btn(color="white" :to="{name: 'join-today-doctors'}").pl-4.pr-4.btn-larger.success--text 
              strong Start now 
    div#panel2
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5.pb-5
            h4.headline The Data Privacy Act of 2012
            h1.panel-title.display-1 Protecting your Patients' Health Records is a law.
            v-btn(color="success" :to="{name: 'npc-website'}").pl-4.pr-4.btn-larger {{'Learn more about DPA or Physicians'.toUpperCase()}} 
    div#panel3
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5.pb-5
            h1.panel-title.display-1 We'll help you take care of your patients' records.

        //- EMR
        v-layout(v-bind="binding").pt-5.pb-5
          v-flex(xs12 md4)
            v-btn(icon color="success" large) 
              strong A.
            v-layout(row)
              v-flex(xs2).xs-text-left.pa-2
                img(width="45" src="../assets/images/mycure-homepage-secure-your-patient-medical-data-clinic-management-system-private-clinic-thumb.png")
              v-flex.xs-text-left.pl-2
                ul(style="list-style-type: none;")
                  li 
                    h2 Designed for individual or Group Practice
                  li
                    p Premium digital medical record system for all your private clinics.
                v-btn(color="primary").btn-larger 
                  strong {{'Learn more'.toUpperCase()}}
          v-flex(xs12 md8).xs-text-center
            img(width="100%" src="../assets/images/mycure-homepage-secure-your-patient-medical-data-clinic-management-system-individual-clinic.jpg")
        
        //- CMS
        v-layout(v-bind="binding").pt-5.pb-5
          v-flex(xs12 md4)
            v-btn(icon color="success" large) 
              strong B.
            v-layout(row)
              v-flex(xs2).xs-text-left.pa-2
                img(width="45" src="../assets/images/mycure-homepage-secure-your-patient-medical-data-clinic-management-system-multi-specialty-clinic-thumb.png")
              v-flex.xs-text-left.pl-2
                ul(style="list-style-type: none;")
                  li 
                    h2 Designed for Health Facilities
                  li
                    p Total Clinic Management System from patient registration to billing.
                v-btn(dark).bg-cms.btn-larger 
                  strong {{'Learn more'.toUpperCase()}}
          v-flex(xs12 md8).xs-text-center
            img(width="100%" src="../assets/images/mycure-homepage-secure-your-patient-medical-data-clinic-management-system-multi-specialty-clinic.jpg")
      
    div#panel4
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5.pb-5
            h1.panel-title.display-1 Reliable technology that best suits your practice.
        v-layout(v-bind="binding")
          v-flex(xs12 md4).text-xs-center.pa-5
            img(width="120" src="../assets/images/mycure-homepage-npc-icon-better-patient-care.png")
            h2 Business-friendly
            p Proven to double clinic efficiency, staff productivity, and lower administrative costs
          v-flex(xs12 md4).text-xs-center.pa-5
            img(width="120" src="../assets/images/mycure-homepage-npc-icon-secure-medical-data.png")
            h2 Flexible Technology
            p Get access anywhere, with painless upgrades, and hands-on support
          v-flex(xs12 md4).text-xs-center.pa-5
            img(width="120" src="../assets/images/mycure-homepage-npc-icon-uptodate-info.png")
            h2 Patient-focused
            p Secure digital records, reduced paperwork, more time for patient care

    div#panel5
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5.pb-5
            h1.panel-title.display-1 Are you a practicing physician
              br
              | with more than 1000 patient records?
            v-btn(color="primary" :to="{name: 'npc-website'}").btn-larger 
              strong Yes, I Am.
    
    div#panel6
      v-container
        v-layout(column).pt-5.pb-5
          v-flex(xs12 md10 offset-md1).text-xs-center
            h1.panel-title.display-1 Because you have an important job to do, Doctor.
            p.title.mt-3 Manage clinical work anywhere—in your clinic, 
              br
              | at home, even while on vacation, while building patient relations.s
          emr-showcase
          v-flex(xs md10 offset-md1).text-xs-center
            v-btn(color="primary" :to="{name: 'request-demo-link'}").btn-larger 
              strong Request a Demo
    main-footer

</template>

<script>
  import MainToolbar from './commons/main-toolbar';
  import EmrShowcase from './commons/emr-showcase';
  import MainFooter from './commons/footer';
  export default {
    components: {
      MainToolbar, 
      EmrShowcase,
      MainFooter
    },
    computed: {
      binding () {
        const binding = {};
        const name = this.$vuetify.breakpoint.name;
        if (name === 'xs' || name === 'sm') binding.column = true;
        if (this.$vuetify.breakpoint.mdAndUp) binding.row = true;
        return binding;
      }
    }
  }
</script>

<style scoped>

  #panel1 {
    height: 100vh;
    background-image: url('../assets/images/mycure-homepage-doctor-talking-to-mom-and-kid-dpa-emr-his-ehr-philippines-mobile-web-app.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #panel2 {
    background-color: lightgray;
  }

  #panel3 {
    background-color: white;
  }

  #panel4 {
    background-color: white;
  }

  #panel5 {
    height: 420px;
    background-image: url('../assets/images/mycure-homepage-breaker-doctors-medical-clinic-background-with-pattern.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
