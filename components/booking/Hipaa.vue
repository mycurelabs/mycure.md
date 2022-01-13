<template lang="pug">
  v-container.my-8
    v-row(justify="center")
      generic-sub-page-panel(
        content-right
        title="MYCURE is HIPAA Compliant"
        content="MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA."
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
      )
        div(slot="super-title")
          p(:class="{ 'text-center' : $isMobile }").mc-h7.font-open-sans.font-weight-semibold SECURED & SAFE
        template(slot="image")
          div(:class="{'text-center': $isMobile}")
            picture-source(v-bind="imageBindings" :class="{'ml-n10': wMD }")
        template(slot="cta-button")
          div(:class="{'text-center ml-4': $isMobile}")
            a(
              href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              :class="{'d-flex': !$isMobile}"
            ).learn-more
              span.mc-hyp1.primary--text Read more about MYCURE's Privacy Standards
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
        image: 'mycure-hipaa-badge',
        imageFileExtension: this.$useWebp ? '.webp' : '.png',
        imageAlt: 'HIPAA Compliance Seal',
        imageWidth: this.$vuetify.breakpoint.width > 1919 ? '465px' : (this.$isRegularScreen ? '266.66px' : '226px'),
        imageHeight: this.$vuetify.breakpoint.width > 1919 ? '449.41px' : (this.$isRegularScreen ? '257.7px' : '218.42px'),
      };
    },
  },
};
</script>

<style scoped>
.learn-more {
  text-decoration: none;
}
.hipaa-logo {
  background-position: center bottom;
}
</style>
