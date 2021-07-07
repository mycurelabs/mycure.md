<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row(align="center" justify="center").my-6
            v-col(cols="10" md="4" :class="{ 'text-center': !$isMobile }")
              img(
                :width="$isMobile ? '100%' : '80%'"
                src="../../assets/images/HIPAA Badge.png"
                alt="HIPAA Compliance Seal"
              )
            v-col(cols="12" md="8")
              h2(:class="headerClasses") MYCURE is HIPAA Compliant
              br
              p(:class="descriptionClasses") MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
              div
                a(
                  href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
                  target="_blank"
                  rel="noreferrer noopener"
                  :class="{'d-flex': !$isMobile}"
                ).learn-more
                  span(:class="descriptionClasses").primary--text Learn more
                  v-icon(right color="primary") mdi-chevron-right
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
