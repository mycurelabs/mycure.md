<template lang="pug">
  div
    div.pt-3
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h2(:class="{'pre-white-space': !$isMobile}").text-xs-center.font-work-sans.lh-title.font-xl {{ panelTitle }}
            p.font-16.text-xs-center.pt-3 {{ panelContent.description }}
        div.pt-5
          v-img(
            :src="require(`@/assets/images/${panelContent.image}.png`)"
            :alt="panelContent.image"
          )
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
import { CONTENT } from './constants';
export default {
  data () {
    return {
      panelContent: CONTENT,
    };
  },
  computed: {
    panelTitle () {
      const title = CONTENT.title;
      return !this.$isMobile ? parseTextWithNewLine(title, ['better']) : title;
    }
  }
};
</script>