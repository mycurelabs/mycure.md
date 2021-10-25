<template lang="pug">
  v-container(fluid).pt-12.fill-height
    template(v-if="error.statusCode === 404")
      v-container(fluid align="start").my-3.white
        v-row(align="center" justify="center")
          v-col
            v-row(justify="center")
              img(:width="$isMobile ? '90%' : 'auto'" src="~/assets/images/mycure-error-404-image.png" alt="Error 404")
            br
            v-row(justify="center").text-center
              v-col(v-if="error.message === 'doctor-not-found'")
                h2 Doctor who?
                p.pb-2.font-16 The doctor with username '{{$route.params.id}}' is not yet using MYCURE.
              v-col(v-else-if="error.message === 'clinic-not-found'")
                h2 Sorry!
                p.pb-2.font-16 The health facility '{{$route.params.id}}' does not exist in our directory.
              v-col(v-else)
                strong.pb-2.font-18 Oh snap!
                h2 The page you’re looking for can’t be found.
              v-col(cols="12")
                nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
                  p.font-16 Back to Home
    template(v-else).my-10
      v-container(fluid align="start")
        v-row(align="center" justify="center")
          v-col(cols="12").text-center
            h1.font-40 {{ otherError }}
            br
            nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
                p.font-16 Back to Home >
</template>

<script>
import Vue from 'vue';
import ResponsiveMixins from '~/mixins/responsiveMixins';
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';

Vue.mixin(ResponsiveMixins);

export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head () {
    if (this.error.statusCode === 404) {
      return headMeta({
        title: 'MYCURE - Page Not Found',
        description: 'Aw snap! The page you are looking for does not exist.',
        socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-404.png?alt=media&token=5181853e-9176-44d6-b8ef-87fcb84b36a2',
      });
    } else {
      return {
        title: `MYCURE - ${this.otherError}`,
        description: this.otherError,
      };
    }
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
