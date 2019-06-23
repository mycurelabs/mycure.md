<template lang="pug"> 
  div
    div(v-if="!$isMobile").white.py-4
      v-container.px-5
        v-layout(row wrap justify-center)
          span.font-medium.lh-title.pa-5 Why do clinics switch to MYCURE?
        v-layout(row justify-center)
          p.font-small.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing, 
            br
            | simplifying record management for everyone. 
            br
            br
            | Say goodbye to multiple, complicated systems!
        v-layout(row wrap justify-center).py-3 
          v-flex(xs12 md6 style="border-right: 1px solid lightgray").px-5  
            h2.right Other Providers
            br
            img(
              max-width="500px"
              src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png"
              alt="Incomplete Clinic"
              width="100%" ).mb-3
            br
            br
            v-layout(row justify-center)
              span.text-xs-center.font-small Say goodbye to multiple,
                br
                | complicated systems!
          v-flex(xs12 md6).px-5
            h2 With MYCURE 
              span.font-mc-blue &nbsp ✓
              br
            img(
              max-width="500px"
              src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" 
              width="100%"
              alt="Complete Clinic"
            ).mb-3   
            br
            br
            v-layout(row justify-center)
              span.text-xs-center.font-small Say hello to a simplified
                br
                | record-keeping for everyone.
        br
        br
        br
        br
        v-layout(row wrap justify-center)
          v-btn(
            id="cms-signup-btn"
            @click.stop="handleCmsSignupBtn"
            color="#18c551"
            :href="`${signInURL}/signup/multi-specialty/step-1`"
            target="_blank"
            style="height: 60px; width: 250px"
          ).mt-3
            strong.font-small.white--text.text-none Get Started Today
        p.text-xs-center.py-4.font-small Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
    div(v-else).white
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center.lh-title Why do clinics switch to MYCURE?
        br
        v-layout(row justify-center)
          p.font-s.text-xs-center MYCURE smoothly integrates your patient records together from registration to billing, simplifying record management for everyone. 
            br
            | 
            br
            | Say goodbye to multiple, complicated systems!

        br
        br
        v-layout(column)
          h2.text-xs-center Other Providers
          br
          img(
            src="../../assets/images/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" 
            alt="Incomplete Clinic"
            width="100%").mb-3
          br
          span.text-xs-center.font-small Say goodbye to multiple, complicated systems!
          br
          br
          h2.text-xs-center With MYCURE 
              span.font-mc-blue &nbsp ✓
          br
          img(
            src="../../assets/images/mycure-homepage-compare-mycure-complete-clinic-management-system.png" 
            alt="Complete Clinic"
            width="100%").mb-3   
          br
          span.text-xs-center.font-small Say hello to a simplified record-keeping for everyone.
          br
          br
          v-layout(row wrap justify-center)
            v-btn(
              id="cms-signup-btn"
              @click.stop="handleCmsSignupBtn"
              color="#18c551"
              :href="`${signInURL}/signup/multi-specialty/step-1`"
              target="_blank"
              large
            ).mt-3
              strong.font-s.white--text.text-none Get Started Today
          p.text-xs-center.py-4.font-small Have questions? 
            a(@click.stop="toggleChat()")
              strong.font-mc-blue Send us a chat.
</template>

<script>
  export default {
    data () {
      return {
        checkIcon: '../../assets/images/mycure-icon-check.png',
        signInURL: process.env.VUE_APP_SIGNIN_URL
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
  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f6f6f6;
  }

  h2 {
    font-size: 26px;
  }
</style>