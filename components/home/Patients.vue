<template lang="pug">
  v-container.usp-container
    v-row(justify="center" align="center" :style="{ height: $isMobile ? 'auto' : '700px' }")
      v-col(cols="12" md="10")
        v-row(
          justify="center"
          align="center"
        )
          v-col(cols="12" md="10").text-center
            h1(:class="{ 'font-l' : !$isMobile, 'font-m' : $isMobile }").lh-title Patients will love you even more.
          v-col(cols="12" md="10").text-center
            p(:class="{ 'font-s' : !$isMobile, 'font-xs' : $isMobile }").grey--text.font-open-sans You treat your patients with holistic care. Now, make it extra covenient for them to reach you.
        v-row(justify="center")
          v-col(
            v-for="(app, key) in apps"
            :key="key"
            cols="12"
            md="5"
            :class="{ 'pt-10': $isMobile }"
          ).text-center.app-container
            //- strong.font-m.primary--text {{ app.name }}
            //- br
            //- br
            //- v-row(justify="center")
            //-   v-col(cols="10" md="6")
            //-     span.font-s.content-line-spacing.grey--text.font-open-sans {{ app.description }}
            //- br
            //- div.image-container
            //-   picture-source(
            //-     extension-exclusive
            //-     custom-path="home/"
            //-     image-file-extension=".png"
            //-     :image-alt="app.name"
            //-     :image="app.image"
            //-     image-width="50%"
            //-   )
            v-card(flat)
              v-img(
                :src="require(`~/assets/images/home/${app.image}.png`)"
                height="100%"
              )
                v-card-title
                  v-spacer
                  span.font-s.white--text {{ app.name }}
                  v-spacer
                v-card-text.text-center
                  strong.font-m.white--text.content-line-spacing {{ app.description }}
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
        image: 'homepage-online-booking-2',
      },
      {
        name: 'Online Results',
        description: 'Time to go digital for the new generation.',
        image: 'homepage-online-results-2',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 80px;
}

.content-line-spacing {
  line-height: 1.5em;
}

.app-container {
  height: 450px;
  position: relative;
}

.image-container {
  position: absolute;
  bottom: 0;
}

@media screen and (min-width: 1024px) {
  .app-container {
    height: 450px;
  }
}
@media screen and (min-width: 1920px) {
  .usp-container {
    padding-top: 50px;
  }
  .app-container {
    height: 600px;
  }
}
</style>
