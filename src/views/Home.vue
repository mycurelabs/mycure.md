<template lang="pug">
  div
    mc-home
</template>

<script>
  document.title = "MYCURE - Easy, Secure, Medical Records and Cilinic Management System";

  import mcHome from '../components/home/index';

  export default {
    components: {
      mcHome
    }
  };
</script>


<style>

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

  .font-mc-dark-grey{
    /* color: #343a40 */
    color: #2b2d3a 
  }

  .font-mc-light-grey {
    color: #f6f6f6
  }

  .font-mc-white {
    color: #ffffff
  }

  .font-xl {
    font-size: 60px
  }

  .font-large {
    font-size: 40px
  }

  .font-medium {
    font-size: 18px
  }

  .font-small {
    font-size: 16px;
  }

  .font-xs {
    font-size: 12px
  }

</style>

