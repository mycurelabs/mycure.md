<template lang="pug">
  div.panel-3
    pre(v-if="!$isProduction()").panel-number 3
    b-container
      b-row
        div.col-xs-12.col-md-10.offset-md-1
          b-row.row-container.align-items-center
            div.col-xs-12.col-md-8
              div.hr-blue
              br
              h1 Our Purpose
              br
              p Like you, MYCURE is 
                strong committed to saving lives too, 
                | by building well-equipped and well-designed apps so healthcare practitioners are in the most ideal work environment to fulfill their purpose.
            div.col-xs-12.col-md-4
              img(width="100%" src="../../assets/images/v4/mycure-ourstory-purpose.png")
          img(src="../../assets/images/v4/mycure-modules-pen-and-pad.png" :class="{'animate': scrollTop > 1000}").notepad
</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-3 {
    min-height: 100vh;
    background-color: white;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .notepad {
    display: none;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .notepad {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      min-height: 100vh;
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }

    .notepad {
      display: inline;
      position: absolute;
      right: -1000px;
      bottom: -300px;
      -webkit-transition: right 500ms;
      transition: right 500ms;
    }

    .notepad.animate {
      right: -450px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>