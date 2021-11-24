<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-sub-page-panel(
        content-right
        title="Say goodbye to a mess of paperwork and hello to an easy, compact database of electronic medical records."
        content="MYCURE features an advanced user experience that stands out from the competition. With smooth transitions that help you streamline your workflow you won’t miss pen and paper forms."
        :content-column-bindings="contentColumnBindings"
        :media-column-bindings="mediaColumnBindings"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
      )
        div(slot="super-title")
          p(:class="{ 'text-center' : $isMobile }").mc-h7.font-open-sans.font-weight-semibold SIMPLE AND POWERFUL
        template(slot="image")
          div(:class="{'text-center': $isMobile}")
            picture-source(v-bind="imageBindings" :class="{'ml-n10': wMD }")
        template(slot="cta-button")
          div(:class="{'text-center ml-4': $isMobile}")
            nuxt-link(:to="{ name: 'features' }" :class="{'d-flex': !$isMobile}").button
              span.mc-hyp1.primary--text Explore the Features
              v-icon(left color="primary" :large="$isWideScreen") {{ mdiChevronRight }}
</template>

<script>
import { mdiChevronRight } from '@mdi/js';
import PictureSource from '~/components/commons/PictureSource';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
export default {
  components: {
    PictureSource,
    GenericSubPagePanel,
  },
  data () {
    this.headerClasses = ['mc-h3'];
    this.descriptionClasses = ['mc-b2', 'font-open-sans'];
    return {
      mdiChevronRight,
    };
  },
  computed: {
    imageBindings () {
      return {
        image: 'simple-and-powerful',
        imageFileExtension: '.webp',
        imageAlt: 'Health application in Macbook laptop',
        imageWidth: this.$vuetify.breakpoint.width > 1919 ? '750px' : (this.$isRegularScreen ? '485px' : '250px'),
        imageHeight: this.$vuetify.breakpoint.width > 1919 ? '414.68px' : (this.$isRegularScreen ? '268.18px' : '138.23px'),
        customPath: 'home/',
      };
    },
    contentColumnBindings () {
      return {
        cols: 12,
        md: 6,
        alignSelf: 'center',
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 6,
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
.button {
  text-decoration: none;
}
</style>
