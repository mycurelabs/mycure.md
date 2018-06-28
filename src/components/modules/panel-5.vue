<template lang="pug">
  div.panel-5.pb-5.pt-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center.pb-4
          center  
            div.hr-blue
          br
          h1 Add-Ons
          p You get these free when you need them.
        div.col-xs-12.col-md-5
          div.row
            div(v-for="(module, key) in adOnsModules").col-xs-6.col-md-3
              div(
                :id="'adOnModule_'+key"
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
              img(width="80" :src="parseImage(selectedModule.icon)")
              span
                strong {{ selectedModule.name }}
              br
              p {{ selectedModule.description }}
              b-button(variant="primary" size="sm" :to="{name: 'join-today'}") SIGN UP NOW!
        div.col-xs-12.col-md-7
          img(width="100%" :src="parseImage(selectedModule.banner)")
</template>

<script>
  import modules from '../../assets/modules';
  export default {
    created() {
      this.adOnsModules = modules.filter(module => {
        if(module.type === 'ad-on') {
          module.isSelected = false;
          return module;
        }
      });
      this.adOnsModules[0].isSelected = true;
      this.selectedModule = this.adOnsModules[0];
    },
    data() {
      return {
        adOnsModules: [],
        selectedModule: {}
      }
    },
    methods: {
      mouseHover(key, m) {
        if(!m.isSelected) {
          this.$addClass(`adOnModule_${key}`, 'shadow-5');
          this.$addClass(`adOnModule_${key}`, 'bg-white');
        }
      },
      mouseOut(key, m) {
        if(!m.isSelected) {
          this.$removeClass(`adOnModule_${key}`, 'shadow-5');
          this.$removeClass(`adOnModule_${key}`, 'bg-white');
        }
      },
      selectModule(key, m) {
        const modules = [];
        this.adOnsModules.forEach((m, i) => {
          m.isSelected = false;
          modules.push(m);
        });
        modules[key].isSelected = true;
        this.selectedModule = m;
        this.adOnsModules = modules;
      },
      parseImage(img) {
        return require('../../assets/images/v4/'+img)
      }
    }
  }
</script>

<style scoped>
  .panel-5 {
    /* min-height: 100vh; */
    /* background-color: red; */
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .module-container {
    /* background-color: white; */
    padding: 10px;
    margin: 5px;
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
    .panel-5 {
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