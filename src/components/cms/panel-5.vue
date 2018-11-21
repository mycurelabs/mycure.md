<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 4
    div.panel-4.pb-5.pt-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center.pb-4
            center  
              div.hr-blue
            br
            h1 Premium Modules
            p Add these on top of the core modules to boost your digital clinic experience.
          div.col-xs-12.col-md-7
            img(width="100%" :src="parseImage(selectedModule.banner)")
          div.col-xs-12.col-md-5
            div.row
              div(v-for="(module, key) in premiumModules").col-xs-6.col-md-3
                div(
                  :id="'premiumModule_'+key"
                  :class="{'shadow-5': module.isSelected}" 
                  @mouseover="mouseHover(key, module)" 
                  @mouseout="mouseOut(key, module)" 
                  @click="selectModule(key, module)"
                ).module-container.text-center
                  img(width="45" :src="parseImage(module.icon)")
                  br
                  p(style="line-height: 13px;")
                    small {{ module.name }}
            div.row.mt-3
              div.col-xs-12.col-md-12
                img(width="45" :src="parseImage(selectedModule.icon)")
                span
                  strong {{ selectedModule.name }}
                br
                div(style="height: 85px;")
                  p {{ selectedModule.description }}
                b-button(variant="primary" size="sm" :to="{name: 'signup', query: {id: 'top'}}") SIGN UP NOW!
</template>

<script>
  import modules from '../../assets/modules';
  export default {
    created() {
      this.premiumModules = modules.filter(module => {
        if(module.type === 'premium') {
          module.isSelected = false;
          return module;
        }
      });
      this.premiumModules[0].isSelected = true;
      this.selectedModule = this.premiumModules[0];
    },
    data() {
      return {
        premiumModules: [],
        selectedModule: {}
      }
    },
    methods: {
      mouseHover(key, m) {
        if(!m.isSelected) {
          this.$addClass(`premiumModule_${key}`, 'shadow-5');
          this.$addClass(`premiumModule_${key}`, 'bg-white');
        }
      },
      mouseOut(key, m) {
        if(!m.isSelected) {
          this.$removeClass(`premiumModule_${key}`, 'shadow-5');
          this.$removeClass(`premiumModule_${key}`, 'bg-white');
        }
      },
      selectModule(key, m) {
        const modules = [];
        this.premiumModules.forEach((m, i) => {
          m.isSelected = false;
          modules.push(m);
        });
        modules[key].isSelected = true;
        this.selectedModule = m;
        this.premiumModules = modules;
      },
      parseImage(img) {
        return require('../../assets/images/v4/'+img)
      }
    }
  }
</script>

<style scoped>
  .panel-4 {
    /* min-height: 100vh; */
    background-color: white;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .module-container {
    /* background-color: white; */
    padding: 10px;
    margin: 0px;
    border-radius: 5px;
  }

  .module-container:hover {
    cursor: pointer;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-4 {
      /* min-height: 100vh; */
      /* background-color: white; */
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>