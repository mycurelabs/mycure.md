<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- 4th panel
    storyflow(
      :storyflow="storyflowItems"
      horizontal
      :customPath="storyflowCustomPath"
      white-bg
    )

</template>

<script>
import Usp from '@/components/multispecialty/usp';
import Workflow from '@/components/multispecialty/workflow';
import Features from '@/components/multispecialty/features';
import Storyflow from '../../components/commons/storyflow';
import VueScrollTo from 'vue-scrollto';
import STORYFLOW_ITEMS from './storyflow-items.json';

export default {
  components: {
    Usp,
    Workflow,
    Features,
    Storyflow
  },
  data () {
    return {
      storyflowItems: STORYFLOW_ITEMS,
      storyflowCustomPath: 'multispecialty/'
    };
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>