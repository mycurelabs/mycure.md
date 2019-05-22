<template lang="pug">
  div.pa-5
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs12 md6).px-3
          font.font-l What makes MYCURE so different?
          br
          br
          font.font-s {{ different1 }}
          br
          br
          font.font-s {{ different2 }}
          br
          br
          a(href="googl.com" style="text-decoration: none")
            em.font-mc-blue Watch how it works &#62
        v-flex(xs12 md6).px-3
          center
            iframe(
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/siFBgZMt26k" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen)
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