<template lang="pug">
  div.pt-5.white
    features-diagram(
      :title="title"
      :description="description"
      :customPath="customPath"
    )
      v-container(slot="diagram-content").pa-0
        v-layout(row :wrap="$isMobile")
          v-flex(
            v-for="(diagram, key) in diagrams"
            :key="key"
            xs12
            md6
            :class="key === 0  && !$isMobile? 'text-xs-right' : 'text-xs-left'"
          ).mx-4
            h2 {{ diagram.title }}
              span(v-if="key === 1").font-mc-blue &nbsp;✓
            br
            br
            v-img(
              :src="require(`@/assets/images/multispecialty/${diagram.image}.png`)"
              :alt="diagram.image"
              width="100%"
            )
            div(v-if="$isMobile").text-xs-center
              br
              h2(:class="key === 0 ? 'font-weight-bold' : 'font-weight-light'").pre-white-space {{ diagram.endText }}
              br
        v-layout(row v-if="!$isMobile").pt-4
          v-flex(v-for="(diagram, key) in diagrams" :key="key" xs12 md6).text-xs-center
            h2(:class="key === 0 ? 'font-weight-bold' : 'font-weight-light'").pre-white-space {{ diagram.endText }}

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
      const desc = 'Smoothly integrate your patient records from registration to billing. MYCURE makes record management easier for everyone.';
      return parseTextWithNewLine(desc, ['billing. ']);
    }
  },
  methods: {
    parseEndText (text, indicators) {
      return parseTextWithNewLine(text, indicators);
    }
  }
};
</script>