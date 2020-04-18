<template lang="pug">
  v-row(justify="center")
    v-col(cols="12" md="10")
      v-row(justify="center")
        v-col(cols="12" md="10").pa-1.mb-3
          img(
            src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
            @click="$router.push({ name: 'home' })"
            alt="MYCURE Logo"
          ).link-to-home.mb-3
          br
          h2.font-18.primary--text Multispecialty Clinic: Sign Up (Step 2 of 3)
          h1 Choose modules that you will need.
          p Core modules are already included by default.

        v-col(cols="12" md="10").pa-1
          h4 Core modules
        v-col(v-for="(module, key) in coreModules" :key="module.id" cols="12" md="5").pa-1
          v-card(hover).disable-hover.elevation-1
            v-card-text.pa-0
              v-row(align="center" no-gutters)
                v-col.shrink.pa-1
                  img(v-if="module.selected" height="90px" src="~/assets/images/mycure-onboarding-icon-selected.png").mt-1.ml-1
                  img(v-else height="90px" :src="module.icon").mt-1.ml-1
                v-col.pa-1
                  h3 {{module.name}}
                  p {{module.description}}

        v-col(cols="12" md="10").pa-1.mt-5
          h4 Premium modules
        v-col(cols="12" md="5" v-for="(module, key) in premiumModules" :key="module.id").pa-1
          v-card(hover @click="module.selected = !module.selected; toggleModule(module)").elevation-1
            v-card-text.pa-0
              v-row(align="center" no-gutters)
                v-col.shrink.pa-1
                  img(v-if="module.selected" height="90px" src="~/assets/images/mycure-onboarding-icon-selected.png").mt-1.ml-1
                  img(v-else height="90px" :src="module.icon").mt-1.ml-1
                v-col.pa-1
                  h3 {{module.name}}
                  p {{module.description}}
        v-col(cols="12" md="10" :class="[{'mb-10': $isMobile}]").pa-1.mt-3
          v-card(flat)
            v-card-actions(
              :class="dayOrNight === 'day' ? 'day-card-actions' : 'night-card-actions'"
            )
              v-btn(
                text
                large
                @click="onBack"
              ).font-weight-bold Back
              v-spacer
              v-btn(
                color="accent"
                large
                @click="next"
              ).font-weight-bold Next

    v-snackbar(
      color="accent"
      v-model="added"
      :timeout="1000"
    ) {{selectedModule}} Selected!

    v-snackbar(
      v-model="removed"
      :timeout="1000"
    ) {{selectedModule}} Removed!

</template>

<script>
// - utils
import dayOrNight from '~/utils/day-or-night';
import headMeta from '~/utils/head-meta';
// - constants
import modules from '~/assets/fixtures/modules';

export default {
  layout: 'user',
  data () {
    this.dayOrNight = dayOrNight();
    return {
      selectedModule: {},
      added: false,
      removed: false,
      coreModules: modules
        .filter(m => m.type === 'core')
        .map(m => ({
          ...m, icon: require(`~/assets/images/${m.icon}`),
        })),
      premiumModules: modules
        .filter(m => m.type === 'premium')
        .map(m => ({
          ...m, icon: require(`~/assets/images/${m.icon}`),
        })),
    };
  },
  created () {
    if (process.browser) {
      if (!localStorage.getItem('multi:step1:model')) {
        this.$router.push({ name: 'signup-multispecialty-step-1' });
      }
      if (localStorage.getItem('multi:step2:model')) {
        this.premiumModules = JSON.parse(localStorage.getItem('multi:step2:model'));
      }
    }
  },
  methods: {
    next () {
      this.updateLocalStorage();
      this.$nuxt.$router.push({ name: 'signup-multispecialty-step-3' });
    },
    toggleModule (module) {
      this.showToast(module);
    },
    showToast (module) {
      this.selectedModule = module.name;
      if (module.selected) {
        this.added = true;
      } else {
        this.removed = true;
      }
    },
    updateLocalStorage () {
      if (process.browser) {
        localStorage.setItem('multi:step2:model', JSON.stringify(this.premiumModules));
      }
    },
    onBack () {
      if (process.browser) {
        localStorage.removeItem('multi:step2:model');
      }
      this.$nuxt.$router.push({ name: 'signup-multispecialty-step-1' });
    },
  },
  head () {
    return headMeta({
      title: 'Book a Free Demo for MYCURE Clinic Management System',
      description: 'Book a free demo with MYCURE Specialists to learn more how the clinic management system can help boost your clinic performance',
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
.disable-hover:hover {
  cursor: not-allowed;
}

.link-to-home:hover {
  cursor: pointer;
}

.day-card-actions {
  background-color: #fafafa;
}
.night-card-actions {
  background-color:  rgb(28,28,28);
}
</style>
