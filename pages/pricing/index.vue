<template lang="pug">
  div(v-if="!loading")#top
    v-container(fluid).header
      v-row(justify="center" align="center" :class="headerClasses")
        v-col(cols="10")
          h1.font-40.text-center Complete and affordable practice management system from your first sale to full scale
      v-row(justify="center" no-gutters).mb-n3
        v-col(cols="4" v-for="(tab, key) in pricingTabs" :key="key")
          a(@click="pricingType = tab.type")
            div(:class="[pricingType === tab.type ? 'tabActive': 'tab']").pa-3.text-center
              strong.font-25 {{ tab.title }}
              br
              span.font-18.font-mc-grey {{ tab.subtitle }}
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
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE Pricing',
      description: 'MYCURE is a complete and affordable Clinic and Practice Management System that works for healthcare facilities of all shapes and sizes.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE_Open_Graph_Images_Privacy_Policy.png?alt=media&token=f68b2956-ed80-421b-bbcd-a7c129f7430c',
    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
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
