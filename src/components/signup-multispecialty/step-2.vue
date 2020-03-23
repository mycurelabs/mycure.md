<template lang="pug">
  v-layout(row justify-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md10).pa-1.mb-3
          img(
            src=`../../assets/images/mycure-${dayOrNight === 'day' ? 'header' : 'footer'}-logo.png`
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          br
          h2.primary--text Multispecialty Clinic: Sign Up (Step 2 of 3)
          h1 Choose modules that you will need.
          p Core modules are already included by default.
        
        v-flex(xs12 md10).pa-1
          h4 Core modules
        v-flex(xs12 md5 v-for="(module, key) in coreModules" :key="module.id").pa-1
          v-card(hover).disable-hover.elevation-1
            v-card-text.pa-0
              v-layout(row align-center)
                v-flex(shrink).pa-1
                  img(v-if="module.selected" height="90px" src="../../assets/images/mycure-onboarding-icon-selected.png").mt-1.ml-1
                  img(v-else height="90px" :src="module.icon").mt-1.ml-1
                v-flex.pa-1
                  h3 {{module.name}}
                  p {{module.description}}

        v-flex(xs12 md10).pa-1.mt-5
          h4 Premium modules
        v-flex(xs12 md5 v-for="(module, key) in premiumModules" :key="module.id").pa-1
          v-card(hover @click="module.selected = !module.selected; toggleModule(module)").elevation-1
            v-card-text.pa-0
              v-layout(row align-center)
                v-flex(shrink).pa-1
                  img(v-if="module.selected" height="90px" src="../../assets/images/mycure-onboarding-icon-selected.png").mt-1.ml-1
                  img(v-else height="90px" :src="module.icon").mt-1.ml-1
                v-flex.pa-1
                  h3 {{module.name}}
                  p {{module.description}}
        v-flex(xs12 md10).pa-1.mt-3
          v-card(flat)
            v-card-actions(
              :class="dayOrNight === 'day' ? 'day-card-actions' : 'night-card-actions'"
            )
              v-btn(
                :to="{ name: 'signup-multispecialty-step-1' }"
                flat
                large
              ).font-weight-bold Back
              v-spacer
              v-btn(
                color="accent"
                :to="{ name: 'signup-multispecialty-step-3' }"
                large
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
import dayOrNight from '../../utils/day-or-night';
// - constants
import modules from '../../assets/fixtures/modules';

export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {
      selectedModule: {},
      added: false,
      removed: false,
      coreModules: modules
        .filter(m => m.type === 'core')
        .map(m => ({ 
          ...m, icon: require(`../../assets/images/${m.icon}`)
        })),
      premiumModules: modules
        .filter(m => m.type === 'premium')
        .map(m => ({ 
          ...m, icon: require(`../../assets/images/${m.icon}`)
        }))
    };
  },
  methods: {
    toggleModule (module) {
      this.showToast(module);
      this.updateLocalStorage(module);
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
      localStorage.setItem('multi:step2:model', JSON.stringify(this.premiumModules));
    }
  },
  created () {
    if (!localStorage.getItem('multi:step1:model')) 
      this.$router.push({ name: 'signup-multispecialty-step-1' });
    if (localStorage.getItem('multi:step2:model')) {
      this.premiumModules = JSON.parse(localStorage.getItem('multi:step2:model'));
    }
  }
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