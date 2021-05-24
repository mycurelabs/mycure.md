<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(align="center" justify="center").my-6
            v-col(cols="10" md="4").text-center
              img(
                :width="$isMobile ? '100%' : '80%'"
                src="../../assets/images/HIPAA Badge.png"
              )
            v-col(cols="12" md="8")
              h1(:class="[{ 'text-center' : $isMobile }, ...headerClasses]") MYCURE is HIPAA Compliant
              br
              p(:class="[{ 'text-center' : $isMobile }, ...descriptionClasses]") MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
              div(:class="{'text-center': $isMobile}")
                a(
                  href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
                  target="_blank"
                  rel="noreferrer noopener"
                  :class="{'d-flex': !$isMobile}"
                ).learn-more
                  v-icon(left color="primary") mdi-information-outline
                  span(:class="descriptionClasses").primary--text Learn more
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
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
</style>
