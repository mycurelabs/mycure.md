<template lang="pug">
  v-app#body
    v-content
      router-view
</template>


<script>

export default {
  name: 'App',
  data () {
    return {
      //
    };
  }
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Poppins');

  #body {
    max-width: 100% !important;
    overflow-x: hidden !important;
    font-family: 'Poppins', sans-serif !important;
  };

  .mc-blue {
    background-color: #2e9fdf
  }

  .mc-dark-grey {
    background-color: #343a40
  }

  .mc-grey {
    background-color: #616161
  }

  .mc-light-grey {
    background-color: #f6f6f6
  }

  .mc-yellow {
    background-color: #ffff33
  }

  .font-mc-blue {
    color: #2e9fdf
  }
  
  .font-mc-dark-grey{
    color: #343a40
  }

  .font-mc-grey {
    color: #616161
  }

  .font-mc-light-grey {
    color: #f6f6f6
  }

  .font-mc-white {
    color: #ffffff
  }

  .font-xl {
    font-size: 40px
  }

  .font-l {
    font-size: 24px
  }

  .font-m {
    font-size: 18px
  }

  .font-s {
    font-size: 16px;
  }

  .font-xs {
    font-size: 12px
  }

  .hr-blue {
  height: 2px;
  width: 150px;
  background-color: #0099cc;
  padding: 1px;
  margin: 0 auto;
}

</style>
