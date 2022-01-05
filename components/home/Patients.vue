<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" md="10").text-center
          h2(:class="headerClasses").mb-5 Patients will love you more
          v-row(justify="center")
            v-col(cols="12" md="6" xl="5").text-center
              p(:class="descriptionClasses").mb-10 You treat your patients with holistic care. Now, make it extra covenient for them to reach you.
        v-col(
          v-for="(feature, key) in features"
          :key="key"
          cols="12"
          md="5"
        ).text-center.ma-2
          v-row(justify='center')
            v-card(flat)
              v-img(
                alt="Mobile health application on Iphone"
                :src="require(`~/assets/images/home/${feature.image}.png`)"
                :width="$isMobile ? '430px' : '588px'"
              )
                //- v-card-title(:class="$isMobile ? 'pb-1' : 'mt-5' ")
                //-   v-spacer
                //-   span(:class="descriptionClasses").white--text.font-open-sans {{ feature.title }}
                //-   v-spacer
                //- v-card-text.text-center.px-8
                //-   strong(:class="appDescriptionClasses").white--text.content-line-spacing {{ feature.description }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import canUseWebp from '~/utils/can-use-webp';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    PictureSource,
  },
  data () {
    this.features = [
      {
        title: 'Online Results',
        description: 'Time to go digital for the new generation.',
        image: 'Online-Results-BG',
      },
      {
        title: 'Online Booking',
        description: 'Help patients find the best schedule for their next visit.',
        image: 'Online-Booking-BG',
      },
    ];
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    return {
      canUseWebp: false,
    };
  },
  computed: {
    appDescriptionClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-24'],
        wide: ['font-l'],
      });
    },
    fileExtension () {
      return this.canUseWebp ? 'webp' : 'png';
    },
  },
  async mounted () {
    this.canUseWebp = await canUseWebp();
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
