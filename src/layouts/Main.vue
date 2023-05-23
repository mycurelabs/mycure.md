<template>
  <div class="h-screen font-primary text-gray-500">
    <app-navbar/>
    <slot/>
    <app-footer/>
  </div>
</template>

<script>
import AppNavbar from '../components/commons/Navbar.vue';
import AppFooter from '../components/commons/Footer.vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
  setup () {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>
