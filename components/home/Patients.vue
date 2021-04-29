<template lang="pug">
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
    )
      v-col(cols="12" md="6").text-center
        h1(:class="{ 'font-l mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").lh-title Patients will love you even more.
    v-row(justify="center" align="center")
      v-col(cols="12" md="6").text-center
        p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").grey--text.font-open-sans You treat your patients with holistic care. Now, make it extra covenient for them to reach you.
    v-row(justify="center")
      v-col(
        v-for="(app, key) in apps"
        :key="key"
        cols="12"
        md="5"
      )
        v-card(flat color="#f0f0f0")
          v-card-text.text-center
            h3.primary--text {{ app.name }}
            br
            v-row(justify="center")
              v-col(cols="10" md="6")
                h1.content-line-spacing {{ app.description }}
            br
          picture-source(
            extension-exclusive
            custom-path="home/"
            image-file-extension=".png"
            :image-alt="app.name"
            :image="app.image"
          )
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.apps = [
      {
        name: 'Online Booking',
        description: 'Help patients find the best schedule for their next visit.',
        image: 'online_booking',
      },
      {
        name: 'Online Results',
        description: 'Time to go digital for the new generation.',
        image: 'online_result',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 70px;
}

.content-line-spacing {
  line-height: 1em;
}
</style>
