<template lang="pug">
  v-container
    v-row(justify="center" no-gutters)
      v-col(cols="12" md="10")
        v-row(align="center" justify="center").my-6
          v-col(cols="10" md="6" :class="{'text-center': $isMobile}")
            img(
              :width="$isMobile ? '100%' : '80%'"
              src="../../assets/images/HIPAA Badge.png"
            )
          v-col(cols="10" md="6")
            h1(:class="[{ 'text-center' : $isMobile }, ...headerClasses]") MYCURE is HIPAA Compliant
            br
            p(:class="descriptionClasses").text-justify MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
            br
            mc-btn(
              href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
              target="_blank"
              rel="noreferrer noopener"
              tile
              depressed
              small
              color="primary"
              :block="$isMobile"
            ).text-none
              v-icon(small left) mdi-information-outline
              | Learn more
</template>

<script>
export default {
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
