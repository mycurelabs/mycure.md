<template lang="pug">
  div.pt-5.white
    features-diagram(
      :title="title"
      :customPath="customPath"
      :image="image"
    )
    v-layout(row justify-center align-center).pt-4
      v-flex(xs12).text-xs-center
        v-btn(
          :color="$mcColors.mcBlue"
          :to="{ name: 'features' }"
          dark
          large
        ).text-none.font-18.font-weight-bold Explore the Features
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
      customPath: 'multispecialty/',
      image: 'mycure-home-web-complete-for-clinics-of-all-sizes-diagram'
    };
  },
  computed: {
    title () {
      const title = 'Provide the best service to your patients.';
      return parseTextWithNewLine(title, ['service']);
    }
  }
};
</script>