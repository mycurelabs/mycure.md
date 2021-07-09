<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12" md="10").text-center
              h1(:class="titleClasses").font-weight-semibold.mb-5 Seamless workflows anywhere you go.
              v-row(justify="center")
                v-col(cols="12" md="8" xl="9")
                  p(:class="descriptionClasses").secondary--text.mb-10.font-weight-semibold Value everyone's time more effectively. Handle location-based registrations like a breeze.
              signup-button(
                depressed
                rounded
                :x-large="$isWideScreen"
                :large="!$isWideScreen"
                :class="btnClasses"
                color="success"
              ).text-none
                span Sign Up
            v-col(cols="12")
              v-row(justify="center")
                template(v-if="!$isMobile")
                  v-col(cols="12").text-center
                    picture-source(
                      custom-path="diagnostics/mobile-labs/"
                      image="Mobile Labs Problem Statement"
                      image-alt="Mobile labs workflow"
                      image-file-extension=".webp"
                      image-width="90%"
                    )
                template(v-else)
                  v-col(cols="12" v-for="(item, key) in items" :key="key").text-center
                      picture-source(
                        v-if="item.icon"
                        custom-path="diagnostics/mobile-labs/"
                        :image="item.icon"
                        :image-alt="item.title"
                        image-file-extension=".webp"
                        image-width="40%"
                      )
                      br
                      h3.font-xs.font-open-sans.grey--text {{ item.title }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  data () {
    this.items = [
      {
        title: 'Book Appointments',
        icon: '1-Appointments Mobile',
      },
      {
        title: 'Register via Kiosk',
        icon: '2-Register Mobile',
      },
      {
        title: 'Specimen Collection Queueing',
        icon: '3-Queueing Mobile',
      },
      {
        title: 'Online and Printed Results',
        icon: '4-Results Mobile',
      },
    ];
    return {
      videoDialog: false,
    };
  },
  computed: {
    titleClasses () {
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
    btnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
  },
};
</script>
