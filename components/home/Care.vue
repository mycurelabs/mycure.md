<template lang="pug">
  div.mx-n3.main-container
    div
      img(
        src="~/assets/images/commons/blue-gradient-bg.png"
        alt="blue gradient background"
        :style="backgroundStyle"
      )
      img(
        src="~/assets/images/commons/dots-left.png"
        alt="dots gradient"
      ).left-center
      img(
        src="~/assets/images/commons/dots-right.png"
        alt="dots gradient"
      ).right-center
    v-container.py-16.my-5.content
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12").text-center.pa-0
            h2(:class="headerClasses").font-weight-semibold.white--text Caring for people who care for people
            p(:class="descriptionClasses").white--text.font-open-sans MYCURE is dedicated to help healthcare providers save lives every day.
            v-card.rounded-xl.pa-5
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
    this.headerClasses = ['mc-h2', 'mb-5'];
    this.descriptionClasses = this.$isMobile ? ['mc-b2', 'mb-6'] : ['mc-b2', 'mb-12'];
    this.btnClasses = ['mc-btn1'];
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
    backgroundStyle () {
      return {
        width: '100%',
        height: '65%',
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '1',
        objectFit: 'cover',
      };
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

<style scoped>
.main-container {
  position: relative;
}
.content {
  position: relative;
  z-index: 3;
}
.left-center {
  position: absolute;
  top: 10%;
  left: 0;
  width: 8%;
  z-index: 2;
}
.right-center {
  position: absolute;
  top: 10%;
  right: 0;
  width: 8%;
  z-index: 2;
}
</style>
