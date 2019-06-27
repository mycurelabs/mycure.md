<template lang="pug">
  div
    div(v-if="!$isMobile").pt-4
      filler
        p(slot="question").font-40 Does your clinic have more than 3 branches? 
        p(slot="chatWindow" @click="toggleChat").pointer.font-40.font-mc-blue Talk to us for custom pricing.
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else)
</template>

<script>
  import filler from '../commons/filler';

  export default {
    components: {
      filler
    },
    data () {
      return {
        // 
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
    },
  };
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>

