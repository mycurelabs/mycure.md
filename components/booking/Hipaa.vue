<template lang="pug">
  v-container.header-gray
    v-row(justify="center" no-gutters)
      v-col(cols="12" md="10")
        v-row(align="center" justify="center").my-6
          v-col(cols="10" md="6" :class="{'text-center': $isMobile}")
            img(
              :width="$isMobile ? '100%' : '80%'"
              src="../../assets/images/HIPAA Badge.png"
            )
          v-col(cols="10" md="6")
            h1(:class="{ 'text-center font-20' : $isMobile }") MYCURE is HIPAA Compliant
            p.mt-4.text-justify MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
              a(
                href="https://blog.mycure.md/mycure-is-hipaa-compliant/"
                target="_blank"
                rel="noreferrer noopener"
              ).ml-2  #[b Learn more]
</template>
