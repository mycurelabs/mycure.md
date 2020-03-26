<template lang="pug">
  div
    div(v-if="!$isMobile").billing-container.py-10
      v-container
        v-row(justify="center").text-center
          strong.font-21.font-mc-blue BILLING AND PAYMENTS
        v-row(justify="center").text-center.add-spacing
          strong.font-40.font-work-sans Simplified billing, beautiful reports.
        v-row(justify="center").add-spacing
          span.font-21.text-center Produce neatly-organized reports in a minute or less.
        v-row(justify="center").add-spacing
          ul
            li
              v-row(v-for="(item, index) in items" :key="index" row align="start").pb-3
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
                span.font-18.pl-3 {{item}}
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
        v-row(justify="center").add-spacing
          carousel(
            :per-page="1"
            :autoplay="true"
            :loop="true"
            paginationActiveColor="white"
            adjustableHeight
            paginationColor="grey"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          ).text-center
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
              img(:src="require(`~/assets/images/features/mycure-web-features-mockup-03-${feature}.png`)" alt="Clinic Billing and Payments" width="70%")
    div(v-else).billing-container.pt-5
      v-container
        v-row(justify="center")
          strong.font-16.font-mc-blue BILLING AND PAYMENTS
        br
        br
        v-row(justify="center")
          p.font-weight-bold.font-30.text-center.font-work-sans Simplified billing,
            br
            | beautiful reports.
        br
        br
        v-row(justify="center").mx-2
          p.font-18.text-center Produce neatly-organized reports in a minute or less.
        br
        br
        v-row(justify="center")
          ul
            li
              v-row(v-for="(item, index) in items" :key="index" align="start").pb-3
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon" height="29px")
                span.font-14.pl-3 {{ item }}
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png")
        br
        br
        v-row(justify="center")
          carousel(
            :per-page="1"
            autoplay
            loop
            adjustableHeight
            paginationActiveColor="#3498db"
            paginationColor="#808080"
          ).pa-1
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
              v-row(justify="center")
                img(:src="require(`~/assets/images/features/mycure-web-features-mockup-03-${feature}.png`)" alt="Clinic Billing and Payments" height="175px")
</template>

<script>
export default {
  data () {
    this.items = [
      'Payment Management & History',
      'Invoice & Receipt Printing',
      'HMO Statements, Collections, & Reports',
      'Interface with Materials Management',
    ];
    this.features = ['A', 'B', 'C'];
    return {};
  },
};
</script>

<style scoped>
.billing-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.carousel-container {
  height: 600px !important;
}
ul {
  list-style-type: none;
}

.add-spacing {
  padding-top: 32px;
}
</style>
