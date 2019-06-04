<template lang="pug">
  div.mc-light-grey
    div.pa-4
      v-container
        span.font-l What makes MYCURE so different?
        br
        br
        span.font-s {{ different }}
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
        different: "In Southeast Asian regions where internet coverage is limited, MYCURE made it possible for clinics to use a cloud-based system in their local network even if the internet goes down and just syncs data when back online.",
        
      };
    }
  };
</script>

<style scoped>

</style>