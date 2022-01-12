<template lang="pug">
  generic-blue-bg.mb-16
    v-container.py-8.my-5
      v-row(justify="center").mb-n16
        generic-panel(:row-bindings="{ justify: 'center' }").mb-n16
          v-col(cols="12").text-center.pa-0
            h2(:class="headerClasses").font-weight-semibold.white--text Built With Care for People Who Care
            p(:class="descriptionClasses").white--text.font-open-sans MYCURE is dedicated to help healthcare providers save lives every day.
            v-card.rounded-md.pa-5
              v-row(
                justify="center"
              ).stat-container
                v-col(
                  v-for="(stat, key) in stats"
                  :key="key"
                  cols="12"
                  md="4"
                  v-observe-visibility="{ callback: onVisibilityChange, intersection: { threshold: 1 } }"
                ).text-center
                  h3.mc-h2.primary--text {{ statData[stat.amountKey].toLocaleString() }}
                  h3.mc-h7.black--text {{ stat.title }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
import GenericPanel from '~/components/generic/GenericPanel';
import GenericBlueBg from '~/components/generic/GenericBlueBg';
// import { fetchWebsiteMetrics } from '~/utils/axios';
export default {
  components: {
    GenericPanel,
    PictureSource,
    GenericBlueBg,
  },
  props: {
    metricsData: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    this.headerClasses = ['mc-h2', 'mb-5'];
    this.descriptionClasses = this.$isMobile ? ['mc-b2', 'mb-6'] : ['mc-b2', 'mb-12'];
    this.btnClasses = ['mc-btn1'];
    return {
      statData: {
        'medical-records': 1700000,
        lives: 1450000,
        providers: 780,
      },
      stats: [
        {
          title: 'MEDICAL RECORDS',
          amountKey: 'medical-records',
        },
        {
          title: 'LIVES SAVED',
          amountKey: 'lives',
        },
        {
          title: 'PARTNER PROVIDERS',
          amountKey: 'providers',
        },
      ],
      isVisible: false,
      hasAnimated: false,
      // Realtime data
      medicalRecordsData: 1700000,
      patientsData: 1450000,
      providersData: 780,
    };
  },
  computed: {
    hasFetched () {
      return this.medicalRecordsData && this.patientsData && this.providersData;
    },
  },
  watch: {
    isVisible (val) {
      this.animate();
    },
    medicalRecordsData (val) {
      if (val && this.isVisible) this.animate();
    },
    patientsData (val) {
      if (val && this.isVisible) this.animate();
    },
    providersData (val) {
      if (val && this.isVisible) this.animate();
    },
  },
  mounted () {
    try {
      // const data = await fetchWebsiteMetrics();
      this.medicalRecordsData = this.metricsData?.medicalRecordsData || 1700000;
      this.patientsData = this.metricsData?.patientsData || 1450000;
      this.providersData = this.metricsData?.providersData || 780;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    onVisibilityChange (isVisible) {
      this.isVisible = isVisible;
    },
    animate () {
      if ((!this.isVisible || this.hasAnimated) && !this.hasFetched) return;
      this.$anime({
        targets: this.statData,
        'medical-records': this.medicalRecordsData,
        lives: this.patientsData,
        providers: this.providersData,
        easing: 'linear',
        round: 1,
        duration: 2500,
      });
      this.hasAnimated = true;
    },
  },
};
</script>
