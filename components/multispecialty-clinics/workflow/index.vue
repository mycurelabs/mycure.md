<template lang="pug">
  div.pt-10.mt-10.white
    features-diagram(
      :title="title"
      :description="description"
      :customPath="customPath"
    )
      v-container(slot="diagram-content").pa-0
        v-row(:class="[{'flex-nowrap': !isMobile}]" justify="center")
          v-col(
            v-for="(diagram, key) in diagrams"
            :key="key"
            cols="11"
            md="5"
            :class="[{ 'text-right' : key === 0  && !isMobile }, {'verticalLine' : key === 0 && !isMobile }]"
          ).mx-1.px-4
            br
            br
            h2(v-if="isMobile") {{ diagram.title }}
              span(v-if="key === 1").primary--text &nbsp;✓
              br
            div(:class="{'pt-3' :$isMobile}")
              img(
                v-lazy="require(`@/assets/images/multispecialty/${diagram.image}.png`)"
                alt="Multispecialty diagram"
                width="100%"
              )
            br
            br
            h2(v-if="!isMobile").pb-3 {{ diagram.title }}
              span(v-if="key === 1").primary--text &nbsp;✓
    v-row(justify="center" align="center").pt-4
      v-col(cols="12").text-center
        v-btn(
          color="accent"
          :id="bookDemoId"
          dark
          large
          :to="{ name: 'signup-multispecialty'}"
          @click.stop="handleBookDemoBtn"
        ).text-none.font-21.font-weight-bold Book A Free Demo
        br
        p.text-center.font-21.py-3 Have questions?&nbsp;
          a(@click.stop="toggleChat()")
            strong.primary--text Send us a chat.
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
import FeaturesDiagram from '~/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram,
  },
  data () {
    this.title = 'Why do multispecialty clinics switch to MYCURE?';
    this.customPath = 'multispecialty/';
    this.bookDemoId = 'multispecialty-workflow-book-demo-btn';
    this.diagrams = [
      {
        title: 'Other Providers',
        image: 'mycure-homepage-compare-other-emr-incomplete-clinic-management-system',
      },
      {
        title: 'With MYCURE',
        image: 'mycure-homepage-compare-mycure-complete-clinic-management-system',
      },
    ];
    return {
      isMobile: true,
    };
  },
  computed: {
    description () {
      const desc = 'MYCURE makes record management much easier for everyone as it can smoothly integrate your patient records from registration to billing. Say goodbye to multiple, complicated systems!';
      return !this.$$isMobile ? parseTextWithNewLine(desc, ['records']) : desc;
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
    parseEndText (text, indicators) {
      return parseTextWithNewLine(text, indicators);
    },
    toggleChat () {
      const message = 'Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-multispecialty-chat-btn',
        eventLabel: 'multispecialty-chat-btn',
      });
    },
    handleBookDemoBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-' : ''}${this.bookDemoId}`,
        eventLabel: this.bookDemoId,
      });
    },
  },
};
</script>

<style scoped>
.verticalLine {
  border-right: 1px solid lightgray;
}
</style>
