<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-3
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).px-3
            strong.font-48.font-mc-blue MYCURE for 
              br
              | Multispecialty Clinics
            br
            br
            span.font-18.font-mc-grey An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.
            br
            br
            div.pl-1
              v-btn(
                :to="{ name: 'signup-multispecialty' }"
                color="#18c551" 
                large 
                right
              )
                strong.text-none.white--text Sign Up Now
          v-flex(xs12 md6).px-3
            img(width="100%" src="../../assets/images/mycure-pricing-cms.png" alt="CMS Pricing")
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-18.font-mc-grey 
              strong MADE FOR
        br
        v-layout(row wrap align-items-center)
          p  
          v-flex(xs6 md4 v-for="(card, key) in cards" :key="key").text-center.align-self-center
            vue-flip(:active-hover="true" width="100%" class="simple-test").flipMargin.font-18
              div(slot="front" ref="frontCard").flip-card.align-items-center.pa-3
                v-layout(row justify-center)
                  img(width="80" :src="card.image" :alt="card.text")
                br
                v-layout(row justify-center)
                  label {{card.text}}
              div(slot="back" ref="backCard" ).flip-card.flip-card-back.align-items-center.py-2.px-5
                v-layout(row justify-center) 
                  strong.font-mc-blue {{card.text}}
                br
                p.font-16(v-html="card.content").text-xs-center
                v-layout(row justify-center)
                  v-btn(
                    id="pricing-multispecialty-signup-btn" 
                    @click.stop="handlePricingMultispecialtySignupBtn"
                    color="#18c551" 
                    :to="{ name: 'signup-chose' }"
                    v-if="!card.isMoreButton").white--text 
                    strong {{card.buttonText}}
                  v-btn(color="#2e9fdf" @click="toggleChat" v-else) 
                    strong.white--text {{card.buttonText}}
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-22
              strong Frequently Asked Questions
        br
        br
        v-layout(row)
          v-flex(xs12 md4).px-3 
            span.font-18 
              strong  What happens when I book a demo?
              br
              br
              | 
              span.font-mc-grey We’ll contact you within 24 hours to schedule the best time to meet you. Then during the demo, you will learn more about the features that will be useful for your clinic. You will also get expert recommendations from MYCURE specialists to to ease the transition.
            br
            br
            br
            span.font-18 
              strong How secure is MYCURE?
              br
              br
              | 
              span.font-mc-grey MYCURE is DPA-compliant and follows international standards in data security. We use advanced encryption protocols to keep your patient records unreadable to anyone, except you. While we aren’t promising a 100% hack-proof system (since no such system exists yet!), we follow international standards that highly value confidentiality, integrity, and availability.
            br
            br
            br
            span.font-18 
              strong  Do I need to buy onboarding services?
              br
              br
              | 
              span.font-mc-grey Onboarding services are essential to clinic management implementations, especially when you don’t have IT people to handle technical stuff for you.
            br
            br
            br
          v-flex(xs12 md4).px-3
            span.font-18 
              strong Do I need to pay for a year upfront for Multispecialty Clinic plan?
              br
              br
              | 
              span.font-mc-grey Multispecialty Clinic plans are billed annually by default. We’ve learned that clinics have more successful system implementations when they commit to using the system for at least a year.
              br
              br
              br
              span.font-18 
              strong  Does my MYCURE account also come with a free device?
              br
              br
              | 
              span.font-mc-grey No. MYCURE only provides the web-based application. 
                br
                | That’s actually more practical (and less spending) for you! Most software that come with devices require you to be locked up to their expensive subscription plans for a certain period of time. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.
              br
              br
              br
              span.font-18 
              strong Is MYCURE cloud-based?
              br
              br
              | 
              span.font-mc-grey Yes. All your medical records are backed up in the cloud.
          v-flex(xs12 md4).px-3
            span.font-18 
              strong What level of support is given to MYCURE Multispecialty Clinic users?
              br
              br
              | 
              span.font-mc-grey All users of MYCURE clinic management system (individual practice or multispecialty clinics) are given free access to its tutorial articles once inside the system. On top of that, MYCURE provides online chat support for clinic administrators from 9:00AM - 8:00PM GMT +8:00.
    div(v-else).white
      div.pt-3.px-3
        img(width="100%" src="../../assets/images/mycure-pricing-cms.png" alt="CMS Pricing")
        br
        br
        p.font-18.text-xs-center An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.
        br
      div
        center
            strong.gray MADE FOR
        br
        v-layout(v-for="(card, key) in cards" :key="key" column wrap).pb-4
          v-layout(row wrap).px-1
            v-flex(xs4).pr-3
              img(width="80" :src="card.image" :alt="card.text")
            v-flex(xs8).pt-1
              strong.font-14  {{ card.text }}
              p.font-12.pt-1 {{ card.content }}
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-22
              strong Frequently Asked Questions
        br
        br
        v-layout(row)
          v-flex(xs12 md12).px-2 
            span.font-18 
              strong  What happens when I book a demo?
              br
              br
              | 
              span.font-mc-grey We’ll contact you within 24 hours to schedule the best time to meet you. Then during the demo, you will learn more about the features that will be useful for your clinic. You will also get expert recommendations from MYCURE specialists to to ease the transition.
            br
            br
            br
            span.font-18 
              strong How secure is MYCURE?
              br
              br
              | 
              span.font-mc-grey MYCURE is DPA-compliant and follows international standards in data security. We use advanced encryption protocols to keep your patient records unreadable to anyone, except you. While we aren’t promising a 100% hack-proof system (since no such system exists yet!), we follow international standards that highly value confidentiality, integrity, and availability.
            br
            br
            br
            span.font-18 
              strong  Do I need to buy onboarding services?
              br
              br
              | 
              span.font-mc-grey Onboarding services are essential to clinic management implementations, especially when you don’t have IT people to handle technical stuff for you.
            br
            br
            br
            span.font-18 
              strong Do I need to pay for a year upfront for Multispecialty Clinic plan?
              br
              br
              | 
              span.font-mc-grey Multispecialty Clinic plans are billed annually by default. We’ve learned that clinics have more successful system implementations when they commit to using the system for at least a year.
              br
              br
              br
              span.font-18 
              strong  Does my MYCURE account also come with a free device?
              br
              br
              | 
              span.font-mc-grey No. MYCURE only provides the web-based application. 
                br
                | That’s actually more practical (and less spending) for you! Most software that come with devices require you to be locked up to their expensive subscription plans for a certain period of time. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.
              br
              br
              br
              span.font-18 
              strong Is MYCURE cloud-based?
              br
              br
              | 
              span.font-mc-grey Yes. All your medical records are backed up in the cloud.
              br
              br
              br
              span.font-18 
                strong What level of support is given to MYCURE Multispecialty Clinic users?
                br
                br
                | 
                span.font-mc-grey All users of MYCURE clinic management system (individual practice or multispecialty clinics) are given free access to its tutorial articles once inside the system. On top of that, MYCURE provides online chat support for clinic administrators from 9:00AM - 8:00PM GMT +8:00.
</template>
  
<script>
  import VueFlip from 'vue-flip';
  export default {
    components: {
      VueFlip
    },
    data () {
      return {
        cards: [
          {
            image: require('../../assets/images/mycure-home-products-icon-multispecialty-clinics.png'),
            text: 'Multispecialty Clinics',
            content: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
            buttonText: 'Sign Up',
            link: ''
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
            text: 'Family Clinics',
            content: 'Small to medium clinics that offer family medicine services, laboratory tests, and pharmacy.',
            buttonText: 'Sign Up',
            link: ''
          }
        ]
      };
    },
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      },
      handlePricingMultispecialtySignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-pricing-multispecialty-signup-btn',
          eventLabel: 'pricing-multispecialty-signup-btn'
        });
      }
    },
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
    padding: 5px;
    width: 100%;
    height: 225px;
  }

  .flip-card:hover, .flip-card-back {
    -webkit-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    -moz-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
  }
  
  a {
    text-decoration: none
  }

  .flipMargin{
    margin-bottom: 250px;
  }
</style>
