<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-sub-page-panel(
        content-left
        title="MYCURE is a PhilHealth Certified Service Provider"
        content="MYCURE partnered with the Philippine Health Insurance Corporation (PhilHealth) to help simplify the claims processing of the PhilHealth eClaims and eKonsulta packages in health facilites nationwide."
        :content-column-bindings="contentColumnBindings"
        :media-column-bindings="mediaColumnBindings"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
      )
        div(slot="super-title")
          p.mc-h7.font-open-sans.mt-5 ACCREDITATION
        template(slot="image")
          div(:class="{'text-center': $isMobile}")
            picture-source(v-bind="imageBindings" :class="{'ml-n10': wMD }")
            //- pre
        template(slot="cta-button")
          div
            a(
              href="https://blog.mycure.md/mycure-is-philhealth-e-claims-certified/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              :class="{'d-flex': !$isMobile}"
            ).learn-more
              span.mc-hyp1.primary--text Learn More
              v-icon(left color="primary" :small="!$isWideScreen" :style="`margin-top: ${$isWideScreen ? '5' : $isRegularScreen ? '3' : '-1'}px;`") {{ mdiChevronRight }}
</template>

<script>
import { mdiChevronRight } from '@mdi/js';
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericSubPagePanel,
    PictureSource,
  },
  props: {
    headerClasses: {
      type: Array,
      default: () => ([]),
    },
    descriptionClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  data () { return { mdiChevronRight }; },
  computed: {
    imageBindings () {
      return {
        image: 'mycure-philhealth-logo',
        // imageFileExtension: this.$useWebp ? '.webp' : '.png',
        imageSources: ['png'],
        imageFileExtension: 'png',
        imageAlt: 'Philhealth Logo',
        imageWidth: this.$vuetify.breakpoint.width > 1919 ? '465px' : (this.$isRegularScreen ? '266.66px' : '226px'),
        imageHeight: this.$vuetify.breakpoint.width > 1919 ? '449.41px' : (this.$isRegularScreen ? '257.7px' : '218.42px'),
      };
    },
    contentColumnBindings () {
      return {
        cols: 12,
        md: 5,
        offsetMd: 1,
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
.learn-more {
  text-decoration: none;
}
.philhealth-logo {
  background-position: center bottom;
}
</style>
