<template lang="pug">
  div(v-if="!loading")#top
    v-container(fluid).header
      v-row(justify="center" align="center" :class="headerClasses")
        v-col(cols="12" md="10")
          h1(:class="titleClasses").text-center Complete and affordable practice management system from your first sale to full scale
      v-row(justify="center" no-gutters).mb-n3
        v-col(cols="6" md="4" v-for="(tab, key) in pricingTabs" :key="key")
          a(@click="pricingType = tab.type")
            div(:class="isTabActive(tab.type)").pa-3.text-center
              strong(:class="tabTitleClass") {{ tab.title }}
              br
              span(:class="tabSubtitleClass").font-mc-grey {{ tab.subtitle }}
    //- Tab Content
    div.content
      user-based(v-if="pricingType === 'user-based'")
      unlimited(v-else-if="pricingType === 'unlimited'")
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Unlimited from '~/components/pricing/Unlimited';
import UserBased from '~/components/pricing/UserBased';
export default {
  components: {
    Unlimited,
    UserBased,
  },
  data () {
    this.pricingTabs = [
      {
        type: 'user-based',
        title: 'USER-BASED PRICING',
        subtitle: 'Ideal for Small & Medium Clinics',
      },
      {
        type: 'unlimited',
        title: 'UNLIMITED USERS',
        subtitle: 'Ideal for Large & Multi-branch Clinics',
      },
    ];
    return {
      loading: true,
      pricingType: 'user-based',
    };
  },
  computed: {
    headerClasses () {
      return [{ 'header-container': !this.$isMobile }];
    },
    titleClasses () {
      return [this.$isMobile ? 'font-30' : 'font-40'];
    },
    tabTitleClass () {
      return [this.$isMobile ? 'font-18' : 'font-25'];
    },
    tabSubtitleClass () {
      return [this.$isMobile ? 'font-14' : 'font-18'];
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  methods: {
    isTabActive (tabType) {
      return [this.pricingType === tabType ? 'tabActive' : 'tab'];
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Pricing',
      description: 'MYCURE is a complete and affordable Clinic and Practice Management System that works for healthcare facilities of all shapes and sizes.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Homepage.png'),
    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 70px;
}

.header {
  background-image: url('../../assets/images/mycure-clinic-background-legal.png');
  background-position: center center;
  background-size: cover;
}

.header-container {
  height: 250px;
}

.content {
  padding-top: 50px;
  padding-bottom: 50px;
}

.tab {
  border-radius: 10px 10px 0 0;
  background-color: #BDCCD9;
  opacity: 1;
  height: 100%;
  box-shadow: 0px 0px 10px 2px #f0f0f0 inset;
}
.tabActive {
  border-radius: 10px 10px 0 0;
  background-color: white;
  height: 100%;
}
</style>
