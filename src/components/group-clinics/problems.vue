<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.transparent
      v-container.px-5
        v-layout(row justify-center).text-xs-center
          p.font-45.pa-5.text-xs-center Why should doctors practicing in groups use MYCURE in their clinics?
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            v-list(two-line).check-list.transparent
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index<=2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-18 {{ problem }}
          v-flex(xs12 md4)
            v-list(two-line).check-list.transparent
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index>2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-18 {{ problem }}
        br
        v-layout(row wrap justify-center)
          //- TODO: href to where?
          v-btn(
            id="group-clinics-signup-btn"
            href="https://mycurecreatives.typeform.com/to/DiZQQY"
            color="#18c551"
            target="_blank"
            large
          ).mt-3
            strong.font-18.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
    div(v-else).transparent.pt-5
      v-container
        v-layout(row justify-center)
          span.font-40.text-xs-center Why should doctors practicing in groups use 
            br 
            | MYCURE in their clinics?
      v-container
        v-layout(row justify-center)
          v-list(two-line).transparent
            v-list-tile(v-for="(problem,index) in clinicProblems" :key="index")
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon") 
              v-list-tile-content
                span.font-18 {{ problem }}
        v-layout(row wrap justify-center)
          //- TODO: href to where?
          v-btn(
            id="group-signup-btn"
            href="https://mycurecreatives.typeform.com/to/DiZQQY"
            target="_blank"
            color="#18c551" large).mt-5 
            strong.font-16.text-none.white--text Sign Up Now
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
</template>

<script>
  export default {
    data () {
      return {
        checkIcon: '../../assets/images/mycure-web-bullet-check.png',
        signInURL: process.env.VUE_APP_SIGNIN_URL,

        clinicProblems: [
          'We can share the same list of patients.',
          'Our secretary gets piled up with paperwork.',
          'We have a patient queueing issues.',
          'Paper charts are very difficult to search & filter.',
          'We have no idea how much HMOs owe us.',
          'Our previous system is old and not user-friendly.'
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to sign up for MYCURE's Group Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
      handleGroupSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-group-signup-btn',
          eventLabel: 'group-signup-btn'
        });
      }
    },
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

