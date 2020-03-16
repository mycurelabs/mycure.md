import Vue from 'vue';

Vue.mixin({
  computed: {
    $isMobile () {
      return this.$vuetify.breakpoint.smAndDown;
    },
    $isMd () {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    $mainLinks () {
      const links = this.$router.options.routes;
      return links.filter(link => {
        if (link.meta && link.meta.pageType === 'main') {
          return link;
        }
      });
    },
    $mcColors () {
      const colors = {
        mcBlue: '#2e9fdf',
        mcGreen: '#18c551',
        mcAltGreen: '#7fad22'
      };
      return colors;
    }
  }
});