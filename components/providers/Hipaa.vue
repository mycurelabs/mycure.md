<template lang="pug">
  v-container.header-gray
    v-row(align="center" justify="center").my-10
      v-col(cols="10" md="6").text-center
        img(
          :width="$isMobile ? '100%' : '80%'"
          src="../../assets/images/HIPAA Badge.png"
        )
      v-col(cols="10" md="6")
        h1(:class="{ 'text-center font-24' : $isMobile }") MYCURE is HIPAA Compliant
        p.mt-4 MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA. #[br(v-if="$isMobile")]
          span #[a(href="https://blog.mycure.md/mycure-is-hipaa-compliant/")  #[b Learn more]]
</template>
