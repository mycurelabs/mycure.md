<template lang="pug">
  fragment
    //- WEB
    div(v-if="!isMobile").px-5.workflow.py-10.white
      v-container.px-5
        v-row(justify="center").text-center
          h1.font-40.text-center {{ title }}
        v-row(justify="center").pt-3.mx-3
          v-col(cols="12" md="5")
            v-list(two-line)
              template(v-for="(reason, index) in reasons")
                v-list-item(v-if="index<=2")
                  v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                    span.font-21 {{ reason }}
          v-col(cols="12" md="5")
            v-list(two-line)
              template(v-for="(reason, index) in reasons")
                v-list-item(v-if="index>2")
                  v-list-item-action
                    img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
                  v-list-item-content
                    span.font-21 {{ reason }}
        br
        v-row(justify="center")
          v-btn(
            id="specialized-clinics-workflow-btn"
            color="accent"
            large
            dark
            :to="{ name: 'signup-specialized'}"
            @click.stop="handleWorkflowBtn"
          ).mt-3.font-21.text-none
            strong {{ workflowBtnText }}
        p.text-center.py-4.font-18 Have questions?&nbsp;
          a(@click.stop="toggleChat()")
            strong.primary--text Send us a chat.
    //- MOBILE
    div(v-else).pt-10.mt-10
      v-container
        v-row(justify="center")
          h1.font-36.text-center.pre-white-space {{ mobileTitle }}
      v-container
        v-row(justify="center")
          v-list(two-line)
            v-list-item(v-for="(reason,index) in reasons" :key="index")
              v-list-item-action
                img(:src="require(`~/assets/images/${checkIcon}.png`)" alt="Check icon")
              v-list-item-content
                span.font-21 {{ reason }}
        v-row(justify="center")
          v-btn(
            id="mobile-specialized-clinics-workflow-btn"
            large
            dark
            color="accent"
            :to="{ name: 'signup-specialized'}"
            @click.stop="handleWorkflowBtn"
          ).mt-5.text-none
            strong.font-18 {{ workflowBtnText }}
        p.text-center.py-4.font-18 Have questions?&nbsp;
          a(@click.stop="toggleChat()")
            strong.primary--text Send us a chat.
</template>

<script>
// - utils
import { parseTextWithNewLine } from '~/utils/newline';

export default {
  data () {
    this.checkIcon = 'mycure-web-bullet-check';
    this.title = 'Why do clinics use MYCURE?';
    this.workflowBtnText = 'Start 14-Day Trial';
    this.reasons = [
      'Compact yet customizable EMR system',
      'Accessible both online and offline',
      'Feels like having a hands-on IT Team',
      'Helps a lot with reporting and metrics',
      'Very easy to use and navigate',
      'Improves overall performance of my clinic',
    ];
    return {
      isMobile: true,
    };
  },
  computed: {
    mobileTitle () {
      return parseTextWithNewLine(this.title, ['clinics']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    toggleChat () {
      const message = 'Hi, I have a question about MYCURE\'s EMR Solution for Specialized Clinics.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-specialized-chat-btn',
        eventLabel: 'specialized-chat-btn',
      });
    },
    handleWorkflowBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-' : ''}specialized-workflow-btn`,
        eventLabel: `${this.$isMobile ? 'mobile-' : ''}specialized-workflow-btn`,
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
@media screen and (min-height: 1080px) {
  .workflow {
    padding: 250px 0px 250px 0px !important;
  }
}
</style>
