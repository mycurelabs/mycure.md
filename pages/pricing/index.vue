<template lang="pug">
  v-container(v-if="!loading").main-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        h1(:class="titleClasses").text-center Complete and affordable&nbsp;
          br(v-if="!$isMobile")
          | practice management system from&nbsp;
          br(v-if="!$isMobile")
          | your first sale to full scale&nbsp;
      v-col(
        cols="11"
        sm="5"
        md="6"
        lg="5"
        xl="4"
        :class="{ 'mt-10': !$isMobile }"
      ).pa-0
        v-card(
          tile
          flat
          :color="userBase ? 'primary' : 'white'"
          @click="toggleUserBase"
        ).user-base
          v-card-title(:class="userBase ? 'white--text' : 'primary--text'").justify-center
            h2(:class="cardTitleClasses") User-based Pricing
            div(:class="cardSubtitleClasses") Ideal for Small & Medium Clinics
      v-col(
        cols="11"
        sm="5"
        md="6"
        lg="5"
        xl="4"
        :class="{ 'mt-10': !$isMobile }"
      ).pa-0
        v-card(
          tile
          flat
          outlined
          :color="unlimitedUser ? 'primary' : 'white'"
          @click="toggleUnlimited"
        ).unlimited-user
          v-card-title(:class="unlimitedUser ? 'white--text' : 'primary--text'").justify-center
            h2(:class="cardTitleClasses") Unlimited Users
            div(:class="cardSubtitleClasses") Ideal for Large & Multi-branch Clinics
      template
        user-based(v-if="userBase")
        unlimited(v-if="unlimitedUser")
</template>

<script>
// utils
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
    return {
      loading: true,
      userBase: true,
      unlimitedUser: false,
    };
  },
  computed: {
    cardTitleClasses () {
      return [{ 'font-25': this.$isMobile }];
    },
    cardSubtitleClasses () {
      return [{ 'font-14': this.$isMobile }];
    },
    titleClasses () {
      return [this.$isMobile ? 'font-30' : ['font-36', 'lh-title']];
    },
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    toggleUserBase () {
      this.userBase = true;
      this.unlimitedUser = false;
    },
    toggleUnlimited () {
      this.userBase = false;
      this.unlimitedUser = true;
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
.main-container{
  margin-top: 100px;
}
.v-card {
  border: 2px solid #1E88E5 !important;
}
.v-card__title {
  word-break: normal;
}
.user-base {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.pricing-active {
  box-shadow: 0px 5px #cecece;
}
.unlimited-user {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
