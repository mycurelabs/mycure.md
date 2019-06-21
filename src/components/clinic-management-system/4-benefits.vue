<template lang="pug">
  div
    div(v-if="!$isMobile").pt-4
      storyflow(:storyflow="storyflowItems")
    div(v-else)
</template>

<script>
  import storyflow from '@/components/commons/storyflow';

  export default {
    components: {
      storyflow
    },
    data () {
      return {
        storyflowItems: [
          {
            title: 'Characters',
            text: 'Doctors - MYCURE | Complete Clinic Management System wants to ease the mission of Medical Practitioners: Our unsung Heroes.',
            image: 'mycure-web-banner-circles-multispecialty-01-syncbase.png'
          },
          {
            title: 'Challenges',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'mycure-web-banner-circles-multispecialty-02-stats.png'
          },
          {
            title: 'Plans',
            text: 'The plan was to create a complete integrated, accessible, clinic management system to help direct the flow in the facility, process, store, and secure data.',
            image: 'mycure-web-banner-circles-multispecialty-03-affordability.png'
          }
        ] 
      };
    }
  };
</script>

<style scoped>

</style>

