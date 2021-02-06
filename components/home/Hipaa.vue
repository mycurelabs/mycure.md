<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(v-if="!$isMobile" cols="12")
        hr(color="#E7E7E7" height="6")
      v-col(cols="10" md="6").mt-10.mb-6
        v-img(
          :src="require('~/assets/images/HIPAA Badge.png')"
          alt="Hipaa Badge"
          width="100%"
        )
      v-col(cols="11" md="6")
        h1(:class="{ 'font-40' : !$isMobile, 'font-25' :$isMobile }") Protecting your medical records with confidence
        p.mt-6 You'll never have to worry about data privacy concerns. Keeping them secure is our priority. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information. #[a(href="https://blog.mycure.md/mycure-is-hipaa-compliant/" target="_blank") Learn more]
      v-col(v-if="!$isMobile" cols="12")
        hr(color="#E7E7E7" height="6")
</template>

<style scoped>
hr {
  height: 6px;
}
a{
  text-decoration: none;
}
</style>
