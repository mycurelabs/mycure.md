<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" md="10").text-center
          h1(:class="headerClasses").font-weight-medium.primary--text.mb-10 Patients will love you even more.
          v-row(justify="center")
            v-col(cols="12" md="8").text-center
              p(:class="descriptionClasses").grey--text.font-open-sans.mb-10 You treat your patients with holistic care. Now, make it extra covenient for them to reach you.
        v-col(cols="12" md="10")
          picture-source(
            image="Patients will love you more"
            image-file-extension=".png"
            extension-exclusive
            custom-path="home/"
            image-alt="Online booking"
          )
        //- v-col(
        //-   v-for="(app, key) in apps"
        //-   :key="key"
        //-   cols="12"
        //-   md="5"
        //- ).text-center
        //-   v-card(flat)
        //-     v-img(
        //-       :src="require(`~/assets/images/home/${app.image}.png`)"
        //-     )
        //-       v-card-title
        //-         v-spacer
        //-         span(:class="descriptionClasses").white--text {{ app.name }}
        //-         v-spacer
        //-       v-card-text.text-center
        //-         strong(:class="appDescriptionClasses").white--text.content-line-spacing {{ app.description }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
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
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
    appDescriptionClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-m'],
        wide: ['font-l'],
      });
    },
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
  height: 600px;
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
