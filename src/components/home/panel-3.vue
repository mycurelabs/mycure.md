<template lang="pug">
  div.panel-3.pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          div.row.wrap.align-items-center
            div.col-xs-12.col-md-6
              h2.color-primary Packaged for you clinic type
              br 
              img(src="../../assets/images/v4/mycure-homepage-wireframe-individual-clinic-active.png").pl-1.pr-1
              img(src="../../assets/images/v4/mycure-homepage-wireframe-individual-group.png").pl-1.pr-1
              img(src="../../assets/images/v4/mycure-homepage-wireframe-specialized-clinic-active.png").pl-1.pr-1
              br
              br
              b-button(variant="primary" size="sm") Learn More
            div.col-xs-12.col-md-6
              h2.color-primary Packaged for you clinic type
              br 
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              br
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").pl-2.pr-2
              br
              br
              b-button(variant="outline-primary" size="sm") Explore
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  export default {
    components: {
      mcNavbarHome
    }
  }
</script>

<style scoped>
  .panel-3 {
    /* height: 100vh; */
  }
</style>