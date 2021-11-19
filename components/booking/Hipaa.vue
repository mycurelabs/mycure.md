<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(align="center" justify="center")
            v-col(cols="10" md="4" :class="{ 'text-center': !$isMobile }")
              div.text-center
                picture-source(
                  image="mycure-hipaa-badge"
                  :image-width="$vuetify.breakpoint.width > 1919 ? '465px' : ($isRegularScreen ? '266.66px' : '226px')"
                  :image-height="$vuetify.breakpoint.width > 1919 ? '449.41px' : ($isRegularScreen ? '257.7px' : '218.42px')"
                  :image-file-extension="$useWebp? '.webp' : '.png'"
                  image-alt="HIPAA Compliance Seal"
                )
            v-col(cols="12" md="8")
              h2(:class="headerClasses") MYCURE is HIPAA Compliant
              br
              p(:class="descriptionClasses") MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
              div.text-center
                a(
                  href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
                  target="_blank"
                  rel="noreferrer noopener"
                  :class="{'d-flex': !$isMobile}"
                ).learn-more
                  span.mc-hyp1.primary--text Read more about MYCURE's Privacy Standards
                  v-icon(right color="primary") mdi-chevron-right
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
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
