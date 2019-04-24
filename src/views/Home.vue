<template lang="pug">
  div.home
    mcNavbarHome
    HelloWorld
</template>

<script>
  import HelloWorld from '../components/HelloWorld';
  import mcNavbarHome from '../components/commons/mc-navbar-home';

  export default {
    components: {
      HelloWorld,
      mcNavbarHome
    }
  };
</script>
