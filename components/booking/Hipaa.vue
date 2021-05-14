<template lang="pug">
  v-container(fluid)
    v-row(justify="center" no-gutters)
      v-col(cols="12" md="10")
        v-row(align="center" justify="center").my-6
          v-col(cols="10" md="4").text-center
            img(
              :width="$isMobile ? '100%' : '80%'"
              src="../../assets/images/HIPAA Badge.png"
            )
          v-col(cols="10" md="8")
            h1(:class="[{ 'text-center' : $isMobile }, ...headerClasses]") MYCURE is HIPAA Compliant
            br
            p(:class="descriptionClasses").text-justify MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
            br
            mc-btn(
              href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
              target="_blank"
              rel="noreferrer noopener"
              depressed
              rounded
              color="primary"
              :large="$isRegularScreen"
              :x-large="$isWideScreen"
              :block="$isMobile"
            ).text-none.font-s
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
