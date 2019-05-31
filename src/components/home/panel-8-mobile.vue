<template lang="pug">
  div.mc-light-grey
    div.pa-4
      v-container
        span.font-l What makes MYCURE so different?
        br
        br
        span.font-s {{ different1 }}
        br
        br
        span.font-s {{ different2 }}
        br
        br
      div
        center
          iframe(
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/siFBgZMt26k?rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture")
</template>

<script>
  export default {
    data () {
      return {
        different1: "You can enjoy the best of both worlds — reliability of an in-house server and affordability of the cloud. Digitally process your medical records in your local network using multiple devices, even if the internet goes down!",
        different2: "Then once back online, it automatically synchronizes data back in the cloud."
      };
    }
  };
</script>

<style scoped>

</style>