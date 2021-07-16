<template lang="pug">
  v-container
    v-row(justify="center")
      generic-sub-page-panel(
        center-panel-title="Simple and powerful"
        super-title="Say goodbye to paperwork and hello to an easy, compact database."
        content="MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow to another — you probably won't even consider using pen and paper ever again."
        :content-column-bindings="contentColumnBindings"
        :media-column-bindings="mediaColumnBindings"
        :center-panel-title-classes="headerClasses"
        :super-title-classes="subheaderClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
        template(slot="image")
          div(:class="{ 'text-center': $isMobile }")
            picture-source(v-bind="imageBindings" :class="{'ml-n10': wSM }")
        v-col(slot="additional-content" cols="12").order-last
          v-row(justify="center")
            v-col(v-for="(service, key) in services" :key="key").shrink
              v-hover(
                v-slot="{ hover }"
                open-delay="100"
              )
                mc-btn(
                  :block="$isMobile"
                  :x-large="$isWideScreen"
                  :large="!$isWideScreen"
                  depressed
                  :outlined="!hover"
                  :to="{ name: service.route }"
                  color="white"
                ).text-none.info--text
                  v-icon(left) {{ service.icon }}
                  strong {{ service.text }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    PictureSource,
    GenericSubPagePanel,
  },
  data () {
    this.services = [
      {
        text: 'For Physicians',
        route: 'doctors-clinics',
        icon: 'mdi-stethoscope',
        color: 'primary',
      },
      {
        text: 'For Clinics',
        route: 'clinics',
        icon: 'mdi-hospital-marker',
        color: 'info',
      },
      {
        text: 'For Diagnostics',
        route: 'diagnostics',
        icon: 'mdi-flask',
        color: 'error',
      },
      // - TODO: Bring back when page is visible
      // {
      //   text: 'For Hospitals',
      //   route: 'hospitals',
      // },
    ];
    return {};
  },
  computed: {
    headerClasses () {
      return [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-2xl'],
        }),
        'white--text',
        'font-weight-semibold',
      ];
    },
    subheaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-25'],
          wide: ['font-40'],
        }),
        'white--text',
        'font-open-sans',
      ];
    },
    descriptionClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-m'],
        }),
        'white--text',
        'font-open-sans',
      ];
    },
    imageBindings () {
      return {
        image: 'Simple and Powerful',
        imageFileExtension: '.webp',
        imageAlt: 'Health application in Macbook laptop',
        imageWidth: this.$isMobile ? '250px' : (this.$isRegularScreen ? '485px' : '750px'),
        imageHeight: this.$isMobile ? '138.23px' : (this.$isRegularScreen ? '268.18px' : '414.68px'),
        customPath: 'home/',
      };
    },
    contentColumnBindings () {
      return {
        cols: 12,
        md: 5,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 6,
        offsetMd: 1,
      };
    },
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}

.product-btn {
  width: 175px;
}
</style>
