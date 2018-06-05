<template lang="pug">
  div.white
    main-toolbar
    div#panel1
      v-container
        v-layout(column)
          v-flex(xs12 md10 offset-md1).text-xs-center.pt-5
            h1.panel-title.display-1 Our Story
            p.title.mt-3 The creators of MYCURE are guided by the vision of creating something 
              br
              | that does not only save time but also saves lives.
          v-flex(xs12 md8 offset-md2).text-xs-left.pt-5
            //- COFFEE
            v-layout(v-bind="binding").pa-3
              v-flex(xs12 md3)
                img(width="100%" src="../assets/images/mycure-emr-philippines-web-mobile-ourstory-coffee.png")
              v-flex(xs12 md9)
                h4.headline.mt-3 Coffee
                p 
                  strong It started with coffee
                  |—a late night coffee break between college friends, Dale and Joel, who just came from a wake. A realization set in: life is short and the fact that they were a couple of years away from turning 40 made it much shorter (this explains the coffee and not the beer).
            //- 2ND
            v-layout(v-bind="binding").well.pa-3
              v-flex(xs12 md3)
                img(width="100%" src="../assets/images/mycure-emr-philippines-web-mobile-ourstory-future.png")
              v-flex(xs12 md9)
                h4.headline.mt-3 What’s going to come?
                p If they were going to eventually leave this life, what else could they do more? Naturally, these people wanted to do something meaningful, something that’s not just for them but something that can contribute to the society at large. They were reminded that life is not just about you. 
                  strong They started conceptualizing on a startup that is now called MYCURE.
            //- SURVIVOR
            v-layout(v-bind="binding").pa-3
              v-flex(xs12 md3)
                img(width="100%" src="../assets/images/mycure-emr-philippines-web-mobile-ourstory-paulette.png")
              v-flex(xs12 md9)
                h4.headline.mt-3 Survivor
                p Dale’s mom, Paulette became a young widow at 30 years old with two kids (4 yo and 6 yo) in tow. Despite limited resources, she worked hard and managed to give her kids a good foundation. Paulette is also a proud cancer warrior and survivor. For about a decade and a half now, it was all about doctor's visits, having regular checkups, and staying healthy. Years of medical files were definitely taking up a lot of space in their home. As she was shuttling between Guam (where she is based) and the Philippines, carrying medical files to different doctors and pharmacies was becoming cumbersome, inconvenient, and costly. Replenishing medications became a guessing game as she would have to try to recall different medications, especially if she forgot her prescriptions at home. Dale was witness to all of this.
    
    main-footer
</template>

<script>
  import MainToolbar from './commons/main-toolbar';
  import MainFooter from './commons/footer';
  export default {
    components: {
      MainToolbar,
      MainFooter
    },
    data() {
      return {
        screenSize: null,
        isMobile: null,
        isDesktop: null
      }
    },
    computed: {
      binding () {
        const binding = {};
        const name = this.$vuetify.breakpoint.name;
        this.screenSize = name;
        this.isMobile = name === 'xs' || name === 'sm';
        this.isDesktop = name === 'md' || name === 'lg';
        if (name === 'xs' || name === 'sm') binding.column = true;
        if (this.$vuetify.breakpoint.mdAndUp) binding.row = true;
        return binding;
      }
    }
  }
</script>

<style scoped>
  .well {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
</style>
