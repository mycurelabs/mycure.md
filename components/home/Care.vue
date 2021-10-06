<template lang="pug">
  v-container.py-16.my-5
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12").text-center.pa-0
          h2(:class="headerClasses").font-weight-semibold.primary--text Caring for people who care for people
          p(:class="descriptionClasses").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day.
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
              h3(:class="{ 'font-xl': $isWideScreen, 'font-l': $isRegularScreen, 'font-m' : $isMobile }").primary--text.font-weight-semibold {{ statData[stat.amountKey].toLocaleString() }}
              h3(:class="{ 'font-m': $isWideScreen, 'font-s' : $isRegularScreen, 'font-xs' : $isMobile }").font-weight-regular.grey--text {{ stat.title }}
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
// import { fetchWebsiteMetrics } from '~/utils/axios';
export default {
  components: {
    GenericPanel,
  },
  props: {
    metricsData: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    this.headerClasses = ['mc-title-set-1', 'mb-5'];
    this.descriptionClasses = this.$isMobile ? ['mc-content-set-1', 'mb-6'] : ['mc-content-set-1', 'mb-12'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      statData: {
        'medical-records': 0,
        lives: 0,
        providers: 0,
      },
      stats: [
        {
          title: 'Medical Records',
          amountKey: 'medical-records',
        },
        {
          title: 'Lives Saved',
          amountKey: 'lives',
        },
        {
          title: 'Partner Providers',
          amountKey: 'providers',
        },
      ],
      isVisible: false,
      hasAnimated: false,
      // Realtime data
      medicalRecordsData: 0,
      patientsData: 0,
      providersData: 0,
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
  created () {
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
