<template lang="pug">
  v-container
    app-bar

    search-and-sort(:search-string="searchString" @search="searchFromControls").search-panel

    specializations.py-10
    v-divider.divider

    featured-hospitals(v-if="hospitalsLength !== 0" :hospitals="featuredHospitals" :hospitalsLength="hospitalsLength").py-10
    v-divider.divider

    featured-clinics(:clinics="featuredClinics" :clinicsLength="clinicsLength").py-10
    v-divider.divider

    v-footer(color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(
          cols="12"
          md="6"
          lg="5"
          xl="4"
          :align="!$isMobile ? 'start' : 'center'"
          :class="{'d-flex': !$isMobile}"
        )
          img(
            height="45"
            src="~/assets/images/mycure-header-logo.png"
            @click="$nuxt.$router.push({ name: 'index' })"
          )
          p.ml-5.mt-3 &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col(
          cols="12"
          md="6"
          lg="5"
          xl="4"
          :align="!$isMobile ? 'end' : 'center'"
        )
          span Share the love:
          template(v-for="(icon, key) in icons")
            a(
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ).pl-3
              v-icon.font-30 {{ icon.icon }}
</template>

<script>
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-directory/app-bar';
import SearchAndSort from '~/components/clinic-directory/search-and-sort';
import Specializations from '~/components/clinic-directory/specializations';
import FeaturedHospitals from '~/components/clinic-directory/featured-hospitals';
import FeaturedClinics from '~/components/clinic-directory/featured-clinics';
import { getFeaturedHospitals, getFeaturedClinics } from '~/utils/axios';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    SearchAndSort,
    Specializations,
    FeaturedHospitals,
    FeaturedClinics,
  },
  async asyncData () {
    try {
      const featuredHospitals = await getFeaturedHospitals();
      const featuredClinics = await getFeaturedClinics();
      return {
        hospitalsLength: featuredHospitals?.data.length,
        clinicsLength: featuredClinics?.data.length,
        featuredHospitals: featuredHospitals?.data,
        featuredClinics: featuredClinics?.data,
      };
    } catch (e) {
      console.error(e);
    }
  },
  data () {
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    return {
      searchString: '',
      featuredHospitals: [],
      hospitalsLength: 0,
      featuredClinics: [],
      clinicsLength: 0,
    };
  },
  methods: {
    searchFromControls (searchObject) {
      this.isLoading = true;
      this.searchObject = searchObject;
      // ADD SEARCH FUNCTION HERE
      // this.searchDoctors();
      this.isLoading = false;
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE - Hippocrates Directory',
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.search-panel {
  margin-top: 100px;
}
.divider {
  margin: 0% 5% !important;
}
@media screen and (min-width: 1920px) {
  .divider {
    margin: 0% 15% !important;
  }
}
</style>
