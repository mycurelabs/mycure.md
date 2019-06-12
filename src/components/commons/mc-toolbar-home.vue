<template lang="pug">
  div
    template(v-if="!$isMobile" style="position: fixed; width: 100%; z-index: 9999;" :class="shadow").white
      v-container(style="height: 70px !important").white.py-0
        v-layout(row wrap justify-center)
          v-flex(xs12 md12 style="margin-top: 3px;")
            v-toolbar(flat).white
              router-link(:to="{ name: 'home' }").mr-3.mt-2
                img(src="../../assets/images/mycure-header-logo.png" width="140")
              v-btn(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }" flat)
                strong(style="font-size: 14px").tab.text-none {{link.meta.pageName}}
              v-spacer
              v-btn(
                flat
                :href="`${siginURL}?target=${cmsURL}/authenticate`"
              )
                strong(style="font-size: 14px").tab LOGIN
              v-btn(
                color="#2e9fdf"
                :href="`${siginURL}/signup/choose`"
              )
                strong(style="font-size: 14px").white--text.tab SIGN UP
    template(v-else)
      v-toolbar(app flat fixed :class="shadow").white
        router-link(:to="{ name: 'home' }").logo-a
          img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
        v-spacer
        v-btn(icon large @click="drawer = !drawer")
          v-icon(style="font-size: 35px;") menu
      v-navigation-drawer(app v-model="drawer" right width="500")
        v-toolbar(app flat fixed :class="shadow").white
          router-link(:to="{ name: 'home' }").logo-a
            img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon(style="font-size: 35px;") close
        v-content
          v-layout(row wrap)
            v-flex(xs12 md12)
              v-list(two-line)
                v-list-tile(v-for="(link, key) in $mainLinks" :key="key" :to="{ name: link.name }")
                  v-list-tile-content
                    v-list-tile-title 
                      b {{link.meta.pageName}}
              v-divider
            v-flex(xs12 md12 dark)
              h1 TODO: Add footer links here. Use list with section
              p See this https://vuetifyjs.com/en/components/lists#subheadings-and-dividers
            
    //- div(v-else)
    //-   v-toolbar(app flat fixed :class="shadow").white
    //-     router-link(:to="{ name: 'home' }").logo-a
    //-       img(src="../../assets/images/mycure-header-logo.png" width="130").mt-1
    //-     v-spacer
    //-     v-btn(icon large @click="drawer = !drawer")
    //-       v-icon(style="font-size: 35px;") menu
    //-   v-navigation-drawer(app v-model="drawer" right)
    //-     center.py-5
    //-       a(href="/")
    //-         img(src="../../assets/images/mycure-header-logo.png" height="50px")
    //-     br(style="line-height: 25px")
    //-     div.sideNavBtn
    //-       a(href="/electronic-medical-records" flat)
    //-         v-layout(row center)
    //-           v-icon person
    //-           strong.black--text &nbsp; &nbsp; Private Practice 
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     div.sideNavBtn
    //-       a(href="/clinic-management-system" flat)
    //-         v-layout(row center)
    //-           v-icon group
    //-           strong.black--text &nbsp; &nbsp; Multispecialty Clinics
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     br
    //-     br
    //-     br
    //-     br
    //-     br
    //-     center
    //-       div.login
    //-         a(:href="`${siginURL}?target=${cmsURL}/authenticate`" flat)
    //-           strong.black--text LOGIN
    //-     center
    //-       hr(style="width: 80%; border-color: #f5f5f5")
    //-     br
    //-     center
    //-       div.signup
    //-         a(:href="`${siginURL}/signup/choose`" flat)
    //-           strong.white--text SIGNUP
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        cmsURL: process.env.VUE_APP_CMS_URL,
        drawer: false,
        scrollPosition: null,
        shadow: ''
      };
    },
    methods: {
      updateScroll () {
        this.scrollPosition = window.scrollY;
      },
      showShadow () {
        this.scrollPosition !== 0 ? this.shadow = 'elevation-4' : this.shadow = '';
      }
    },
    mounted () {
      window.addEventListener('scroll', this.updateScroll);
    },
    watch: {
      'scrollPosition': 'showShadow'
    }
  };
</script>

<style scoped>
  .tab {
    letter-spacing: 0.5px;
  }

  .sideMenu {
    background-color: #f5f5f5; 
    border-style: solid; 
    border-color: gray; 
    border-width: 1px;
    border-radius: 7px;
  }
  
  .sideNavBtn {
    padding: 20px 15px 20px 25px; 
  }

  a {
    text-decoration: none
  }

  .login {
    padding: 10px 15px 10px 15px;
  }

  .signup {
    padding: 10px 15px 10px 15px;
    border-radius: 20px;
    background-color: #2e9fdf;
    width: 60%
  }
</style>
