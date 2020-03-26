<template lang="pug">
  div
    div(v-if="!$isMobile").registration-panel.py-10
      v-container
        v-row(justify="center").text-center
          strong.font-21.primary--text REGISTRATION AND QUEUING
        v-row(justify="center").add-spacing.text-center
          strong.font-40.font-work-sans Value everyone's time more effectively.
        v-row(justify="center").add-spacing
          v-col(cols="7" align-self="center").text-center
            span.font-21 With MYCURE, queuing is easier done than spelled. Patients easily register
              |  via kiosks. Display multiple queues through auxiliary monitors or smart TVs for waiting patients. Incoming doctors even get notified in their
              | devices for every new patient in line.
        v-row(justify="center").add-spacing
          img(src="@/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        v-row(justify="center").add-spacing
          carousel(
            :per-page="1"
            :autoplay="true"
            :loop="true"
            adjustableHeight
            paginationActiveColor="white"
            paginationColor="grey"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          ).text-center
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
              img(:src="require(`~/assets/images/features/mycure-web-features-mockup-02-${feature}.png`)" alt="Clinic Registration and Queueing" width="70%")
    div(v-else).registration-panel.pt-5
      v-container
        v-row(justify="center")
          strong.font-16.primary--text REGISTRATION AND QUEUEING
        br
        br
        v-row(justify="center").mx-2
          p.font-weight-bold.font-30.text-center.font-work-sans Value everyone's time more effectively.
        br
        v-row(justify="center").mx-2
          p.font-18.text-center With MYCURE, queueing is easier done than spelled. Patients easily register via kiosks.
            br
            br
            | Display multiple queues through auxiliary monitors or smart&nbsp;
            | TVs for waiting patients. Incoming doctors even get notified in their devices for every new patient in line.
        v-row(justify="center").add-spacing
          img(src="@/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
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
          ).mx-2
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
              v-row(justify="center").mx-2
                img(:src="require(`~/assets/images/features/mycure-web-features-mockup-02-${feature}.png`)" alt="Clinic Registration and Queueing" height="210px")
</template>

<script>
export default {
  data () {
    this.features = ['A', 'B'];
    return {};
  },
};
</script>

<style scoped>
.registration-panel {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.add-spacing {
  padding-top: 32px;
}
</style>
