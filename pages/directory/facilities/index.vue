<template lang="pug">
  v-container
    app-bar

    search-and-sort(:search-string="searchString" @search="searchFacilities").search-panel

    specializations.py-10
    v-divider.divider

    featured-hospitals(v-if="listedHospitals.length !== 0" :hospitals="listedHospitals" :hospitalsLength="listedHospitals.length").py-10
    v-divider.divider

    featured-clinics(:clinics="listedClinics" :clinicsLength="listedClinics.length").py-10
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
            alt="MYCURE"
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
          template(v-for="icon in icons")
            a(
              target="_blank"
              rel="noopener noreferrer"
              :href="icon.link"
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
  middleware: ['disable-route'],
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
        listedHospitals: featuredHospitals?.data || [],
        listedClinics: featuredClinics?.data || [],
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
      listedHospitals: [],
      listedClinics: [],
    };
  },
  methods: {
    searchFacilities (searchObject) {
      const { searchString } = searchObject;
      if (!searchString) {
        this.listedHospitals = [...this.featuredHospitals];
        this.listedClinics = [...this.listedClinics];
        return;
      };
      // TODO: Since there is no $search in organizations, front-end searching will be implemented in the meantime
      this.isLoading = true;
      this.listedHospitals = this.featuredHospitals.filter(hospital => hospital?.name?.toUpperCase().includes(searchString.toUpperCase()));
      this.listedClinics = this.featuredClinics.filter(clinic => clinic?.name?.toUpperCase().includes(searchString.toUpperCase()));
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE - Clinic Directory',
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
