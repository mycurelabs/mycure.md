<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- cta
    mc-cta-bottom(
      :ctaContent="ctaContent"
      parse-text
      :parseIndicators="['the']"
      :btnColor="$mcColors.mcAltGreen"
    )
</template>

<script>
import Usp from '@/components/specialized/usp';
import Workflow from '@/components/specialized/workflow';
import Features from '@/components/specialized/features';
import McCtaBottom from '@/components/commons/mc-cta-bottom';
import VueScrollTo from 'vue-scrollto';

export default {
  components: {
    Usp,
    Workflow,
    Features,
    McCtaBottom
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      ctaContent: {
        text: 'Grow your practice with the right tools to use',
        subtext: 'Schedule a quick demo with a MYCURE specialist today.',
        btnText: 'Start 14-Day Trial',
        btnLink: 'signup-specialized',
        image: 'mycure-web-footer'
      }
    };
  }
};
</script>