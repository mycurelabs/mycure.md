<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    seven-wonders
    care(:class="panelMargins")
    simple(:class="panelMargins")
    patients(:class="panelMargins")
    tools(:class="panelMargins")
    div(:class="panelMargins").primary.pb-3.pt-10
      join-next-generation
    //- usp(@getStarted="goToSignupIndividual")
    //- start-easy
    //- features
    //- syncbase
    //- hipaa
    //- plans
</template>

<script>
// - utils
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
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    panelMargins () {
      return { 'mt-10': this.$isMobile, 'mt-5': !this.$isMobile };
    },
  },
  mounted () {
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
