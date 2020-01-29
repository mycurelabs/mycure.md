<template lang="pug">
  div
    div(v-if="!$isMobile").pt-3
      v-container
        v-layout(row align-center)
          v-flex(xs12 md12).text-xs-center
            h2.text-xs-center.panelTitle.font-48 {{ panelTitle }}
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
      panelTitle: parseTextWithNewLine(CONTENT.title, ['better']),
    };
  }
};
</script>

<style scoped>
.panelTitle {
  white-space: pre;
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
  line-height: 1.25em;
}
</style>