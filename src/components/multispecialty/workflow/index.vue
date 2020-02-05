<template lang="pug">
  div.pt-5.white
    features-diagram(
      :title="title"
      :description="description"
      :customPath="customPath"
    )
      strong(slot="add-content").font-16.text-xs-center 
        br
        | {{ boldDescription }}
      v-container(slot="diagram-content").pa-0
        v-layout(row :wrap="$isMobile" justify-center)
          v-flex(
            v-for="(diagram, key) in diagrams"
            :key="key"
            xs12
            md5
            :class="[{ 'text-xs-right' : key === 0  && !$isMobile }, {'verticalLine' : key === 0 && !$isMobile }]"
          ).mx-2.px-4
            h2 {{ diagram.title }}
              span(v-if="key === 1").font-mc-blue &nbsp;✓
            br
            br
            v-img(
              :src="require(`@/assets/images/multispecialty/${diagram.image}.png`)"
              :alt="diagram.image"
              width="100%"
            )
            div.text-xs-center
              br
              h2(:class="key === 0 ? 'font-weight-bold' : 'font-weight-light'").font-s.pre-white-space {{ diagram.endText }}
              br
    v-layout(row justify-center align-center).pt-4
      v-flex(xs12).text-xs-center
        v-btn(
          :color="$mcColors.mcAltGreen"
          dark
          large
        ).text-none.font-18.font-weight-bold Book A Free Demo
        br
        p.text-xs-center.font-18.py-3 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
import FeaturesDiagram from '@/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram
  },
  data () {
    return {
      title: 'Why do clinics switch to MYCURE?',
      customPath: 'multispecialty/',
      boldDescription: 'MYCURE makes record management easier for everyone.',
      diagrams: [
        {
          title: 'Other Providers',
          endText: this.parseEndText('Say goodbye to multiple, complicated systems', ['multiple,']),
          image: 'mycure-homepage-compare-other-emr-incomplete-clinic-management-system',
        },
        {
          title: 'With MYCURE',
          endText: this.parseEndText('Say hello to a simplified record-keeping for everyone', ['simplified']),
          image: 'mycure-homepage-compare-mycure-complete-clinic-management-system'
        }
      ]
    };
  },
  computed: {
    description () {
      const desc = 'Smoothly integrate your patient records from registration to billing.';
      return desc;
    }
  },
  methods: {
    parseEndText (text, indicators) {
      return parseTextWithNewLine(text, indicators);
    },
    toggleChat () {
      let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
  }
};
</script>

<style scoped>
.verticalLine {
  border-right: 1px solid lightgray;
}
</style>