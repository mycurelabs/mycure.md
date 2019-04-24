<template lang="pug">
  div.home
    mcNavbarHome
    HelloWorld
    mcFooter
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import mcNavbarHome from '../components/commons/mc-navbar-home';
  import mcFooter from '../components/commons/mc-footer';

  export default {
    components: {
      HelloWorld,
      mcNavbarHome,
      mcFooter
    }
  };
</script>
