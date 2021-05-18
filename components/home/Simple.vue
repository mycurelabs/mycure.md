<template lang="pug">
  v-row(justify="center").simple-container
    generic-sub-page-panel(
      center-panel-title="Simple and powerful"
      super-title="Say goodbye to paperwork and hello to an easy, compact database."
      content="MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow to another — you probably won't even consider using pen and paper ever again."
      :content-column-bindings="contentColumnBindings"
      :media-column-bindings="mediaColumnBindings"
      :center-panel-title-classes="headerClasses"
      :super-title-classes="subheaderClasses"
      :content-classes="descriptionClasses"
    )
      template(slot="image")
        picture-source( v-bind="imageBindings")
      v-row(slot="cta-button" justify="$isMobile ? 'center': null")
        v-col(v-for="(service, key) in services" :key="key").shrink
          v-hover(
            v-slot="{ hover }"
            open-delay="100"
          )
            mc-btn(
              :block="$isMobile"
              :large="$isWideScreen"
              :small="!$isWideScreen"
              depressed
              :outlined="!hover"
              :to="{ name: service.route }"
              color="white"
            ).text-none.info--text
              v-icon(left) {{ service.icon }}
              strong {{ service.text }}
    //- v-row(
    //-   justify="center"
    //-   align="center"
    //-   no-gutters
    //-   :style="{ height: $isMobile ? 'auto' : '90vh' }"
    //- )
    //-   v-col(cols="11").text-center.mt-10
    //-     h1(:class="headerClasses").white--text.font-weight-medium Simple and powerful
    //-   v-col(cols="8" md="6" offset-md="1" :class="{ 'order-last' : !$isMobile }")
    //-     picture-source(
    //-       image="MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr"
    //-       image-file-extension=".webp"
    //-       image-alt="Patient List"
    //-       custom-path="features/"
    //-     )
    //-   v-col(cols="11" md="4" :class="{ 'text-center' : $isMobile }")
    //-     p(:class="h").white--text.font-open-sans.font-weight-bold Say goodbye to paperwork and hello to an easy, compact database.
    //-     p(:class="descriptionClasses").font-open-sans.white--text MYCURE is infused with advanced user experience that you can never compare with another medical software. Experience smooth transitions from one workflow
    //-       | &nbsp;to another — you probably won't even consider using pen and paper ever again.
    //-     br
    //-     v-row(:dense="!$isWideScreen" :justify="$isMobile ? 'center': null")
    //-       v-col(v-for="(service, key) in services" :key="key").shrink
    //-         v-hover(
    //-           v-slot="{ hover }"
    //-           open-delay="100"
    //-         )
    //-           mc-btn(
    //-             :block="$isMobile"
    //-             :large="$isWideScreen"
    //-             :small="!$isWideScreen"
    //-             depressed
    //-             :outlined="!hover"
    //-             :to="{ name: service.route }"
    //-             color="white"
    //-           ).text-none.info--text
    //-             v-icon(left) {{ service.icon }}
    //-             strong {{ service.text }}
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
          mobile: ['font-m', 'mb-6'],
          regular: ['font-l', 'mb-8'],
          wide: ['font-xl', 'mb-8'],
        }),
        'white--text',
        'font-weight-medium',
      ];
    },
    subheaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-l'],
        }),
        'white--text',
        'font-open-sans',
      ];
    },
    descriptionClasses () {
      return [
        classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-m'],
        }),
        'white--text',
        'font-open-sans',
      ];
    },
    imageBindings () {
      return {
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-01-emr',
        imageFileExtension: '.webp',
        imageAlt: 'Patient List',
        imageWidth: '100%',
        customPath: 'features/',
      };
    },
    contentColumnBindings () {
      return {
        md: 5,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        sm: 8,
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
