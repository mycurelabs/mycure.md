<template lang="pug">
  div(v-if="!loading")
    usp(renderDropdown).mb-10#usp
    how-it-works.mb-10#howItWorks
    consult(v-if="!$isMobile").mb-10
    services-section.mb-10
    hipaa.mb-10
    Cta.mb-10
</template>

<script>
import AppBar from '~/components/home/AppBar';
import Usp from '~/components/home/Usp';
import HowItWorks from '~/components/home/HowItWorks';
import Consult from '~/components/home/Consult';
import ServicesSection from '~/components/home/ServicesSection';
import Hipaa from '~/components/home/Hipaa';
import Cta from '~/components/home/Cta';
import MyFooter from '~/components/home/MyFooter';
export default {
  layout: 'pxp',
  components: {
    AppBar,
    Usp,
    HowItWorks,
    Consult,
    ServicesSection,
    Hipaa,
    Cta,
    MyFooter,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
};
</script>
