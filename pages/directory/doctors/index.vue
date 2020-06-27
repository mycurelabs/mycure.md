<template lang="pug">
  v-container(fluid)
    app-bar
    //- Usp
    usp(:uspInfo="usp" :specialization-items="specializations")

    //- Sign Up
    sign-me-up(:signUpInfo="signMeUp")

    //- Category
    category(:cardItems="categoryItems")

    //- About panel
    about-clinic(:about="aboutInfo")
    v-divider

    //- Social panel
    social(:social="socialItem")
    v-divider

    //- Cta
    cta
    v-divider

    v-footer(
      height="auto"
      color="white"
    )
      v-row
        v-col.text-center
          span.black--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link.font-weight-bold MYCURE]
    //- pre {{doctor}}
</template>

<script>
import {
  USP,
  SPECIALIZATIONS,
  SIGN_ME_UP,
  CATEGORY,
  ABOUT_INFO,
  SOCIAL_ITEM,
} from './directory-content';

import headMeta from '~/utils/head-meta';
import Usp from '~/components/directory-doctor/usp';
import Category from '~/components/directory-doctor/category';
import SignMeUp from '~/components/directory-doctor/sign-me-up';
import AboutClinic from '~/components/directory-doctor/about-clinic';
import Social from '~/components/directory-doctor/social';
import Cta from '~/components/directory-doctor/final-cta';
export default {
  layout: 'directory-doctor',
  components: {
    Usp,
    SignMeUp,
    Category,
    AboutClinic,
    Social,
    Cta,
  },
  data () {
    this.usp = USP;
    this.specializations = SPECIALIZATIONS;
    this.signMeUp = SIGN_ME_UP;
    this.categoryItems = CATEGORY;
    this.aboutInfo = ABOUT_INFO;
    this.socialItem = SOCIAL_ITEM;
    return {};
  },
  mounted () {
    console.log(this.$route);
  },
  head () {
    // TODO: update meta tags
    return headMeta({
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
</style>
