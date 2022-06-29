<template lang="pug">

generic-panel(:panel-classes="['items-center']")#what-is-hippocrades
  div.row.items-center.justify-center
    div.col-xs-12
      q-card(flat bordered)
        q-card-section
          h2.text-h3.text-primary.text-center Integrated Healthcare Solutions for Every Provider
          div.row.justify-center
            div.col-xs-12.col-md-10
              div.row.items-center.justify-center
                div.col-xs-12.text-center.q-pa-sm
                  //- h2.text-h4 Healthcare #[span.text-primary Access to All]
                  p.text-subtitle1 MYCURE is a modern practice management system tailor-made for doctors, clinics, diagnostic centers, and hospitals—all at a fraction of the cost.
</template>

<script>
import { ref, inject, computed } from 'vue';
import { useBuildMeta } from '@/composables/meta';
import { useMeta, useQuasar } from 'quasar';
import GenericPanel from '@/components/commons/GenericPanel.vue';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    useMeta(useBuildMeta({ page: 'Home' }));
    const smoothScroll = inject('smoothScroll');
    const affiliationSlide = ref('style');
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);
    function onGoToPanel (card) {
      const panelId = card.panelId;
      if (card.panelId) {
        smoothScroll({
          scrollTo: document.getElementById(panelId),
          updateHistory: false,
        });
      }

      if (card.link) {
        window.open(card.link, '_blank').focus();
      }
    }

    return {
      affiliationSlide,
      isMobile,
      onGoToPanel,
    };
  },
};
</script>

<style scoped>
.custom-q-card {
  border: 2px solid black;
}

.grey-panel {
  background-color: #fefefe;
}

.white-panel {
  background-color: #fff;
}

.custom-q-card:hover {
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.3) !important;
  color: #0099cc !important;
}

/* .panel-1 {
  background-image: url('../assets/images/background-globe.gif');
  background-repeat: no-repeat;
  background-position:bottom center;
  background-size: auto;
} */

.panel-1-desktop {
  background-image: url('../assets/images/hippocrades-mesh-left.webp'),
    url('../assets/images/hippocrades-mesh-right.webp'),
    url('../assets/images/hippocrades-globe.webp');
  background-repeat: repeat-y, repeat-y, no-repeat;
  background-position: left top, right top, bottom center;
  background-size: 300px, 300px, 700px;
}

.panel-1-mobile {
  background-image: url('../assets/images/hippocrades-globe.webp');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 700px;
  height: 100vh;
}

#lobby {
  background-image: url('../assets/images/lobby.png');
  height: 678px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  /* box-shadow: 0px -15px 14px -16px rgba(115,115,115,0.75);
  -webkit-box-shadow: 0px -15px 14px -16px rgba(115,115,115,0.75);
  -moz-box-shadow: 0px -15px 14px -16px rgba(115,115,115,0.75); */
}

a {
  text-decoration: none;
}
</style>
