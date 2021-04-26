<template lang="pug">
  div(:class="{'main-container' : !$isMobile, 'mobile-container' : $isMobile}")
    v-container
      v-row(align="center" justify="center")
        v-col(cols="12").mt-12.text-center.pb-0
          search-bar(:allServices="allServicesList")
        v-col(:class="{ 'text-center pt-0' : $isMobile }").mt-md-8
          h1(:class="{ 'font-72' : !$isMobile }") Instantly Book #[br] Healthcare #[br] Services
          v-btn(
            large
            depressed
            color="success"
            rounded
            @click="openPxPortalSignUp"
          ).mt-2 #[b Get Started]
    div(v-if="!$isMobile").icon.d-flex.justify-center
      v-btn(
        large
        icon
        @click="scrollToHowItWorks"
      )
        v-icon(large) mdi-chevron-down
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import SearchBar from '~/components/commons/SearchBar';
export default {
  components: {
    SearchBar,
  },
  props: {
    renderDropdown: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      allServicesList: [],
    };
  },
  computed: {
    pxPortalSignUp () {
      return `${process.env.PX_PORTAL_URL}/signup`;
    },
  },
  mounted () {
    if (this.renderDropdown) {
      this.fetchAllServicesNotPaginated();
    }
  },
  methods: {
    scrollToHowItWorks () {
      VueScrollTo.scrollTo('#howItWorks', 500, { offset: -100, easing: 'ease' });
    },
    openPxPortalSignUp () {
      window.open(this.pxPortalSignUp);
    },
    async fetchAllServicesNotPaginated () {
      this.allServicesList = [];
      const { items } = await this.$sdk.service('services').find();
      const allServices = items;
      if (!allServices?.length) return allServices;
      this.allServicesList = allServices;
    },
  },
};
</script>

<style scoped>
.main-container {
  background-image: url('../../assets/images/home/MYCURE-For-Patients-Homepage-USP.png');
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100vh;
}
.mobile-container{
  background-image: url('../../assets/images/home/mycure-homepage-cover-01-mobile.png');
  background-size: cover;
  background-position: center;
  width: 100%;
}
.font-72 {
  font-size: 72px;
}
.icon {
    position: absolute;
    left: 50%;
    top: 19%;

}
</style>
