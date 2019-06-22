<template lang="pug">
  div
    div.pt-4
      v-layout(row justify-center align-center)
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
            title: 'Work Offline',
            text: 'MYCURE is cloud-based clinic management system that can be used within your local network even if the internet goes down.',
            image: 'mycure-web-banner-circles-multispecialty-01-syncbase.png'
          },
          {
            title: 'Data Collection Analysis',
            text: 'MYCURE allows clinics to collect significant data in real-time that can help optimize business operations.',
            image: 'mycure-web-banner-circles-multispecialty-02-stats.png'
          },
          {
            title: 'Affordability',
            text: 'With the reliability of an in-house system and affordability of the cloud, MYCURE is a great investment for your clinic.',
            image: 'mycure-web-banner-circles-multispecialty-03-affordability.png'
          }
        ] 
      };
    }
  };
</script>

<style scoped>

</style>

