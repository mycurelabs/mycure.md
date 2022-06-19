<template lang="pug">
q-layout(
  view="hHh lpR fFf"
  @scroll="onScroll"
)
  q-header(
    v-model="header"
    elevated
    :style="{ height: isMobile ? null : '70px' }"
    :dense="isMobile"
  ).bg-white.text-black
    q-toolbar(color="primary")
      h2.text-h2 MYCURE

  q-page-container#top
    router-view

  q-footer(
    v-model="footer"
    style="height: 70px;"
  ).bg-transparent.text-black
    q-toolbar
      q-space
      q-btn(
        color="primary"
        aria-label="Scroll Up"
        fab
        @click="onScrollToTop"
      )
        q-icon(name="expand_less")
</template>

<script>
import { ref, inject, computed } from 'vue';
import { useQuasar } from 'quasar';
export default {
  setup () {
    const smoothScroll = inject('smoothScroll');
    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);
    const header = ref(false);
    const footer = ref(false);
    const drawerRight = ref(false);

    if (isMobile.value) header.value = false;

    function onScroll (info) {
      if (info.position >= 150) {
        footer.value = true;
      } else {
        footer.value = false;
      }
      if (isMobile.value) {
        header.value = true;
        return;
      }
      if (info.position >= 150) {
        header.value = true;
      } else {
        header.value = false;
      }
    }

    function onScrollToTop () {
      smoothScroll({
        scrollTo: document.getElementById('top'),
        updateHistory: false,
      });
    }

    function onGoToPanel (card) {
      const panelId = card.panelId;
      drawerRight.value = false;
      if (card.panelId) {
        smoothScroll({
          scrollTo: document.getElementById(panelId),
          updateHistory: false,
        });
      }
      if (card.link) window.open(card.link, '_blank').focus();
    }

    return {
      drawerRight,
      footer,
      header,
      isMobile,
      onScroll,
      onGoToPanel,
      onScrollToTop,
    };
  },
};
</script>
