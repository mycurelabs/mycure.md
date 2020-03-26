<template lang="pug">
  div
    div(v-if="!$isMobile").reports-panel.py-10
      v-container
        v-row(justify="center").text-center
          strong.font-21.primary--text REPORTS AND ANALYTICS
        v-row(justify="center").add-spacing
          strong.font-40.text-center.font-work-sans Never miss out on important&nbsp;
            br
            | business decisions.
        v-row(justify="center").add-spacing
          span.font-21.text-center Measure your day-to-day clinic performance analyzing comprehensive&nbsp;
            br
            | graphs based on your KPIs. Census, billing, diagnostics, sales, and&nbsp;
            br
            | physical exam reports can be generated instantly.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" width="90%" height="100%")
    div(v-else).reports-panel.pt-5
      v-container
        v-row(justify="center")
          strong.font-16.primary--text REPORTS AND ANALYTICS
        br
        br
        v-row(justify="center")
          p.font-weight-bold.font-30.text-center.font-work-sans Never miss out
            br
            | on important
            br
            | business decisions.
        br
        br
        v-row(justify="center").mx-2
          p.font-18.text-center Measure your day-to-day clinic performance analyzing comprehensive graphs based on your KPIs. Census, billing, diagnostics, sales, and physical exam reports can be generated instantly.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        br
        br
        v-row(justify="center")
          img(src="~/assets/images/features/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" height="200px")
</template>

<script>
export default {
  data () {
    return {};
  },
};
</script>

<style scoped>
.reports-panel {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

ul {
  list-style-type: none;
}

.add-spacing {
  padding-top: 32px;
}
</style>
