<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    seven-wonders
    care(:class="panelMargins")
    simple(:class="panelMargins")
    patients(:class="panelMargins")
    tools(:class="panelMargins")
    join-next-generation(:class="panelMargins").mb-8
    //- usp(@getStarted="goToSignupIndividual")
    //- start-easy
    //- features
    //- syncbase
    //- hipaa
    //- plans
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// - components
import Care from '~/components/home/Care';
import JoinNextGeneration from '~/components/home/JoinNextGeneration';
import Patients from '~/components/home/Patients';
import SevenWonders from '~/components/home/SevenWonders';
import Simple from '~/components/home/Simple';
import Tools from '~/components/home/Tools';

export default {
  components: {
    Care,
    JoinNextGeneration,
    Patients,
    SevenWonders,
    Simple,
    Tools,
  },
  layout: 'refactor-default',
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    panelMargins () {
      return { 'mt-10': this.$isMobile };
    },
  },
  mounted () {
    this.loading = false;
    const panel = this.scrollPanel || '#app';
    setTimeout(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset: -100 });
    }, 0);

    this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE | Making Healthcare Accessible to All',
      description: 'MYCURE is a healthcare platform that connects physicians, clinics, hospitals, and medical organizations to anyone in need.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
};
</script>
