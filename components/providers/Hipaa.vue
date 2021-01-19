<template lang="pug">
  v-container
    v-row(align="center" justify="center").my-10
      v-col(cols="12" md="6").text-center
        img(
          :width="$isMobile ? '100%' : '80%'"
          src="../../assets/images/HIPAA Badge.png"
        )
      v-col(cols="12" md="6")
        h1 MYCURE is HIPAA Compliant
        p MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.
        v-btn(
          rounded
          color="primary"
        ).text-none Learn more
</template>
