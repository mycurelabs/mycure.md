<template lang="pug">
  div.white.pt-5
    //- WEB
    div(v-if="!$isMobile").px-5.workflow
      v-container.px-5
        v-layout(row justify-center).text-xs-center
          h1.font-40.text-xs-center.font-work-sans {{ title }}
        v-layout(row wrap justify-center).pt-3
          v-flex(xs12 md5)
            v-list(two-line)
              v-list-tile(v-for="(reason,index) in reasons" :key="index" v-if="index<=2")
                v-list-tile-action
                  img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                  span.font-21 {{ reason }}
          v-flex(xs12 md5)
            v-list(two-line)
              v-list-tile(v-for="(reason,index) in reasons" :key="index" v-if="index>2")
                v-list-tile-action
                  img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon")
                v-list-tile-content
                  span.font-21 {{ reason }}
        br
        v-layout(row wrap justify-center)
          //- TODO: href to where?
          v-btn(
            id="specialized-clinics-workflow-btn"
            href="https://mycurecreatives.typeform.com/to/DiZQQY"
            :color="$mcColors.mcAltGreen"
            target="_blank"
            large
            dark
            :to="{ name: 'signup-multispecialty'}"
            @click.stop="handleWorkflowBtn"
          ).mt-3.font-21.text-none
            strong {{ workflowBtnText }}
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
    //- MOBILE
    div(v-else).pt-3
      v-container
        v-layout(row justify-center)
          h1.font-40.font-work-sans.text-xs-center {{ title }}
      v-container
        v-layout(row justify-center)
          v-list(two-line)
            v-list-tile(v-for="(reason,index) in reasons" :key="index")
              v-list-tile-action
                img(:src="require(`@/assets/images/${checkIcon}.png`)" alt="Check icon") 
              v-list-tile-content
                span.font-21 {{ reason }}
        v-layout(row wrap justify-center)
          v-btn(
            id="mobile-specialized-clinics-workflow-btn"
            href="https://mycurecreatives.typeform.com/to/DiZQQY"
            target="_blank"
            large
            dark
            :color="$mcColors.mcAltGreen"
            @click.stop="handleWorkflowBtn"
          ).mt-5.text-none
            strong.font-18 {{ workflowBtnText }} 
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
</template>

<script>
  export default {
    data () {
      return {
        checkIcon: 'mycure-web-bullet-check',
        title: 'Why do clinics use MYCURE?',
        workflowBtnText: 'Start 14-day Trial',
        reasons: [
          'Compact yet customizable EMR system',
          'Accessible both online and offline!',
          'Feels like having a hands-on IT Team.',
          'Helps a lot with reporting and metrics.',
          'Very easy to use and navigate',
          'Improves overall performance of my clinic.'
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to sign up for MYCURE's Group Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-specialized-chat-btn',
          eventLabel: 'specialized-chat-btn'
        });
      },
      handleWorkflowBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: `click-${this.$isMobile ? 'mobile-' : ''}specialized-workflow-btn`,
          eventLabel: `${this.$isMobile ? 'mobile-' : ''}specialized-workflow-btn`
        });
      }
    },
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
  @media screen and (min-height: 1080px) {
    .workflow {
      padding: 300px 0px 300px 0px !important;
    }
  }
</style>

