<template lang="pug">
  div
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs4)
          v-container(align-center)
            div.sample-avatar.blue
            p.text-xs-center.text-xs-center "Yes, MYCURE made my clinic process flow better and quicker. A testimonial with 153 characters long that is explaining about how the prodct made his business better."
            p.text-xs-center.text-xs-center Dr. Jean Rivera
            p.text-xs-center.text-xs-center General Physician

        v-flex(xs4)
          v-container(align-center)
            div.sample-avatar.blue
            p.text-xs-center "MYCRUE really works offline. I don't have to think of slow net connection here. Thanks to the team! I will really recomment it to my fellow doctors. A testimonial with 153 characters long."
            p.text-xs-center Dr. Carly Mae Siamson
            p.text-xs-center Pediatrician

        v-flex(xs4)
          v-container(align-center)
            div.sample-avatar.blue
            p.text-xs-center "A testimonial with 153 characters long that is explaining about how the product made his business better and now he is recommending it to other people."
            p.text-xs-center Dr. Arnold Galves
            p.text-xs-center OBGYNE



</template>

<script>
export default {
  
};
</script>

<style scoped>

.sample-avatar {
  margin: auto;
  height: 50px;
  width: 50px;
}

</style>