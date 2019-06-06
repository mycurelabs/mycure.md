<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-3
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).px-3
            strong.font-medium.font-mc-blue MYCURE for 
              br
              | Multispecialty Clinics
            br
            br
            span.font-small.font-mc-grey An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.
            br
            br
            v-btn(:href="`${siginURL}/signup/private/step-1`" color="#18c551" large) 
              strong.text-none.white--text Sign Up Now
          v-flex(xs12 md6).px-3
            img(width="100%" src="../../assets/images/mycure-pricing-cms.png")
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-small.font-mc-grey 
              strong FEATURES INCLUDED
        br
        v-layout(row wrap align-items-center)
          p  
          v-flex(xs6 md3 v-for="(card, key) in cards" :key="key").text-center.align-self-center
            vue-flip(:active-hover="true" width="100%" class="simple-test" style="margin-bottom: 250px;")
              div(slot="front" ref="frontCard").flip-card.align-items-center.pa-3
                center
                  img(width="80" :src="card.image")
                br
                center
                  label {{card.text}}
              div(slot="back" ref="backCard" ).flip-card.flip-card-back.align-items-center
                center 
                  strong(style="color:#0099cc;") {{card.text}}
                br
                p.font-xs(v-html="card.content").text-xs-center
                center
                  v-btn(:href="card.link" target="_blank" v-if="!card.isMoreButton") {{card.buttonText}}
                  v-btn(@click="toggleChat" v-else) {{card.buttonText}}
    div(v-else)
      div.pt-3.px-3
        img(width="100%" src="../../assets/images/mycure-pricing-cms.png")
        br
        br
        p.font-small.text-xs-center An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.
        br
      div
        center
            strong.gray FEATURES INCLUDED
        br
        v-layout(v-for="(card, key) in cards" :key="key" column wrap).pb-4
          v-layout(row wrap).px-1
            v-flex(xs4).pr-3
              img(width="80" :src="card.image")
            v-flex(xs8) 
              strong(style="font-size: 14px")  {{ card.text }}
              p(style="font-size: 12px").pt-1 {{ card.content }}
              //- a(:href="card.link" )
              strong(v-html="" style="font-size: 12px").font-mc-blue.pb-2 {{ card.buttonText }}
</template>
  
<script>
  import VueFlip from 'vue-flip';
  export default {
    components: {
      VueFlip
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        cards: [
          {
            image: require('../../assets/images/mycure-home-products-icon-multispecialty-clinics.png'),
            text: 'Multispecialty Clinics',
            content: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
            buttonText: 'Sign Up',
            link: "`${siginURL}/signup/private/step-1`"
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-outpatient-clinics.png'),
            text: 'Outpatient Clinics',
            content: 'Hospital-based clinics that provide outpatient consultation services from various specialists',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-industrial-clinics.png'),
            text: 'Industrial Clinics',
            content: 'Primary clinics inside companies, schools, BPOs, and other industries covered by OSHS',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-aesthetic-clinics.png'),
            text: 'Skin & Aesthetic Clinics',
            content: 'Specialized for clinics that offer aesthetic procedures and dermatological services',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-pme-clinics.png'),
            text: 'PME Clinics',
            content: 'Clinics specializing in Physical Medical Exam (PME) services.',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-group-clinics.png'),
            text: 'Group Clinics',
            content: 'Managed by a group of physicians practicing together and assisted by one or more secretaries',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            image: require('../../assets/images/mycure-home-products-icon-individual-clinics.png'),
            text: 'Individual Clinics',
            content: 'Physicians practicing independently in one or more clinic locations',
            buttonText: 'Sign Up',
            link: ''
          },
          {
            isMoreButton: true,
            image: require('../../assets/images/mycure-home-products-icon-more.png'),
            text: 'More coming!',
            content: `
              Rehab Clinics,
              Maternity Clincis,
              Diagnostic Clinics,
              Pharmacies and more!
            `,
            buttonText: 'Contact Us'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  br{
    line-height: 150%;
  }

  .flip-panel {
    /* height: 100vh; */
    background-color: white;
  }

  .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #673AB7;
    color: white;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC107;
    color: white
  }

  .flip-card {
    background-color: initial;
    border-radius: 10px;
  }

  .flip-card, .flip-card-back {
    padding: 15px;
    width: 100%;
    height: 200px;
  }

  .flip-card:hover, .flip-card-back {
    -webkit-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    -moz-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
  }
  
  a {
    text-decoration: none
  }

</style>
