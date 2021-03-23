<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="6").text-center
        strong.font-xs.primary--text Why MYCURE?
        h1.font-l Think Long-Term
    v-row(v-if="extended" justify="center")
      //- TODO: Loop
      v-col(cols="12" md="5")
        v-card(flat color="#fafafa").pa-1
          v-card-text
            h2.font-m MYCURE is not just your ordinary medical app.
            p It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network. MYCURE has open APIs to give you more flexibility in integrating with other systems.
      v-col(cols="12" md="5")
        v-card(flat color="#fafafa").pa-1
          v-card-text
            h2.font-m As your practice grows, your tech tools need to upgrade too.
            p The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.
    v-row(v-else justify="center")
      v-col(cols="12" md="8").text-center
        p.font-xs.grey--text MYCURE is not just an app! It’s a platform built for the healthcare ecosystem. As your practice grows, your tech solution needs grows as well, which is a great thing! Finding these added solutions will be much easier since they would most likely be available with MYCURE platform. Not only that, MYCURE has open APIs so you can integrate it with your other systems giving you more flexibility.
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
