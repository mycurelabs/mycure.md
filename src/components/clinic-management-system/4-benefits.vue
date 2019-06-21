<template lang="pug">
  div
    div.pt-4
      storyflow(:storyflow="storyflowItems")
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
            title: 'Syncbase',
            text: 'This technology allows the program to be used even when the internet is down.',
            image: 'mycure-web-banner-circles-multispecialty-01-syncbase.png'
          },
          {
            title: 'Data Collection Analysis',
            text: 'It allows the facility to collect data about certain disease trend and business statistics. It can help in the research and development of a facility.',
            image: 'mycure-web-banner-circles-multispecialty-02-stats.png'
          },
          {
            title: 'Affordability',
            text: 'The system is cost-efficient. For the features, it has been set in an affordable cost so that it can be accessed by many.',
            image: 'mycure-web-banner-circles-multispecialty-03-affordability.png'
          }
        ] 
      };
    }
  };
</script>

<style scoped>

</style>

