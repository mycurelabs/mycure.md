<template>
<div data-theme="light">
  <div data-theme="mycure">
    <app-navbar/>
      <slot/>
    <app-footer/>
  </div>
</div>
</template>

<script>
import AppNavbar from '../components/commons/Navbar.vue';
import AppFooter from '../components/commons/Footer.vue';

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>
