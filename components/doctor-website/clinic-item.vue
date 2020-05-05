<template lang="pug">
  v-row
    v-col.shrink
      v-avatar(tile size="150")
        img(
          src="../../assets/images/mycure_home_web_complete_for_clinics_1.png"
          style="border-radius: 5px"
        )
    v-col.grow
      v-row(wrap)
        v-col(cols="12" sm="12" md="6")
          h3 Clinic Name
          span Meo myau mjau myām̥ō mňau mjau niaou nyav meogre myau.
        v-col(cols="12" sm="12" md="3")
          h3 Mon, Wed, Fri
          span 9:00 AM - 6:00 PM
        v-col(cols="12" sm="12" md="3")
          h3 Services
          span {{['foo', 'bar', 'fizz', 'buzz'].join(', ')}}
          br
          a View more
        v-col(cols="12" sm="12")
          //- TODO: check if clinic lat lng is available
          v-btn(color="primary" depressed).mr-2 View Map
          //- TODO: check if clinic website is available
          v-btn(color="primary" depressed) Clinic Website
</template>

<script>
export default {
  props: {
    clinic: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
