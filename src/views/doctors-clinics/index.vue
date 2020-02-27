<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- 4th panel
    pricing
    //- 5th panel
    faqs
    //- CTA
    mc-cta-bottom(
      parse-text
      :parseIndicators="['when']"
      :ctaContent="ctaContent"
      :btnColor="$mcColors.mcAltGreen"
    )

</template>

<script>
import Usp from '@/components/doctors-clinics/usp';
import Workflow from '@/components/doctors-clinics/workflow';
import Features from '@/components/doctors-clinics/features';
import Pricing from '@/components/doctors-clinics/pricing';
import Faqs from '@/components/doctors-clinics/faqs';
import McCtaBottom from '@/components/commons/mc-cta-bottom';
import VueScrollTo from 'vue-scrollto';
export default {
  components: {
    Usp,
    Workflow,
    Features,
    Pricing,
    Faqs,
    McCtaBottom
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  data () {
    return {
      ctaContent: {
        text: 'It\'s always better when we work together',
        subtext: 'Experience what more you can do with MYCURE technology by your side.',
        btnText: 'Start Free',
        btnLink: 'signup-individual'
      }
    };
  }
};
</script>