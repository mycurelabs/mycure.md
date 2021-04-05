<template lang="pug">
  div.white.mt-10.mb-5
    v-container
      v-row
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12").px-4.pb-3.text-center
              h1.pt-5.font-40.pb-3 Our Purpose
            v-col(cols="11" md="12" :class="{'pt-3' : isMobile}").px-4.font-21
              img(width="100%" v-lazy="require('~/assets/images/our-story/mycure-team.png')" alt="Our Story - Team").pb-4
              p MYCURE’s vision is to&nbsp;
                strong securely organize medical records that will provide fast, safe, and efficient access to health professionals, enabling them to help and save more lives
                | .
              p We believe that even small things can make a big difference. And that extra mile of care we give for humanity goes a long way and creates a lasting impact.
              p Thus, we honor and support people who care the extra mile. They are the unsung heroes, the doctors and other health professionals who work tirelessly to serve their patients.
              p While they see themselves as simply doing their everyday jobs, we see individuals that impact change on humanity; we see heroes that truly make the world a better place.&nbsp;
                | MYCURE commits to design and build innovative tech tools and products specifically for our doctors and health professionals. Our goal is to help and enable these heroes, to make their jobs easier and more efficient.
              p They are our true inspirations, the reasons for our being and existence.
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {};
  },
};
</script>

<style scoped>
  p {
    text-align: justify;
  }
</style>
