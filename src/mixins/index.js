import Vue from 'vue';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    $mainLinks () {
      const links = this.$router.options.routes;
      return links.filter(link => {
        if (link.meta && link.meta.pageType === 'main') {
          return link;
        }
      });
    }
  }
});