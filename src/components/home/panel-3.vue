<template lang="pug">
  div.panel-3.pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          div.row.wrap.align-items-center
            div.col-xs-12.col-md-12.pb-5
              h2.color-primary Packaged for you clinic type
          mc-radio-group-image(
            @select="itemSelected"
            v-model="items"
          )
          br
          b-button(variant="primary" size="small") Learn more
          div#individual
          div#group
          div#specialized
          div.row.justify-content-md-center.pb-5.pt-5
            div.col-xs-12.col-md-9
              h2.color-primary Complete Clinic Suite
            div(v-if="item1Selected" style="outline: 1px solid red;").col-xs-12.col-md-9.pt-4
              div.row.justify-content-md-center.mb-5
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                  h6 EMR
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                  h6 Foo
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                  h6 Foo
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                  h6 Foo
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                  h6 Foo
              div.row.justify-content-md-center
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
                div.col-xs-3.col-md-2
                  img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
            div(v-if="item2Selected").col-xs-12.col-md-9.pt-4
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png")
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
            div(v-if="item3Selected").col-xs-12.col-md-9.pt-4
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
            div.col-xs-12.col-md-12.pb-5.pt-5
              b-button(variant="outline-primary" size="sm") Explore
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcRadioGroupImage from '../commons/mc-radio-group-image';
  import VueScrollTo from 'vue-scrollto';
  export default {
    components: {
      mcNavbarHome,
      mcRadioGroupImage
    },
    data() {
      return {
        item1Selected: true,
        item2Selected: false,
        item3Selected: false,
        items: [
          {
            id: 'individual',
            name: 'INDIVIDUAL',
            isSelected: true,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-wireframe-individual-clinic-active.png')
          },
          {
            id: 'group',
            name: 'GROUP',
            isSelected: false,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-wireframe-individual-group.png')
          },
          {
            id: 'specialized',
            name: 'MULTI-SPECIALTY',
            isSelected: false,
            hasTooltip: true,
            tooltipMessage: 'This includes aesthetics, etc.',
            src: require('../../assets/images/v4/mycure-homepage-wireframe-specialized-clinic-active.png')
          }
        ]
      }
    },
    methods: {
      itemSelected(item) {
        this.item1Selected = false;
        this.item2Selected = false;
        this.item3Selected = false;
        switch (item.id) {
          case 'individual': this.item1Selected = true; break;
          case 'group': this.item2Selected = true; break;
          case 'specialized': this.item3Selected = true; break;
          default:break;
        }
        setTimeout(() => {
          VueScrollTo.scrollTo(`#${item.id}`, 500, { easing: 'ease' } );
        }, 200)
      }
    }
  }
</script>

<style scoped>
  .panel-3 {
    /* height: 100vh; */
  }
</style>