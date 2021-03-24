<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '300px' : '475px' }"
      :class="{ 'pt-10': $isMobile }"
    )
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }").line-spacing-title Make Healthcare Accessible to All
        p(:class="{ 'font-m' : !$isMobile, 'font-xs' : $isMobile }").grey--text THE&nbsp;
          span.primary--text SEVEN WONDERS&nbsp;
          span.grey--text OF HEALTHCARE
          br
          | EMPOWERED BY MYCURE
      v-col(cols="12" md="6")
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12")
        carousel(
          :per-page="1"
          :navigationEnabled="true"
          :adjustableHeight="true"
          :navigationClickTargetSize="50"
          navigationNextLabel=" "
          navigationPrevLabel=" "
        )
          slide(:data-index="1")
            v-row
              v-col(
                v-for="(wonder, key) in wonders.slice(0, 4)"
                :key="key"
                cols="3"
                color="#fafafa"
                flat
              )
                wonder(:wonder="wonder")
          slide(:data-index="2")
            v-row
              v-col(
                v-for="(wonder, key) in wonders.slice(4)"
                :key="key"
                cols="3"
                color="#fafafa"
                flat
              )
                wonder(:wonder="wonder")
      template(v-else)
        v-col(cols="12" v-for="(wonder, key) in wonders" :key="key").ma-1
          wonder(:wonder="wonder")
</template>

<script>
import Wonder from './Wonder';
export default {
  components: {
    Wonder,
  },
  data () {
    this.wonders = [
      {
        title: 'Physicians',
        description: 'Easily create digital medical records',
        infoLink: 'doctors-clinics',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
        infoLink: 'clinics',
      },
      {
        title: 'Diagnostics',
        description: 'Convert online booking to online results',
        infoLink: 'diagnostics',
      },
      {
        title: 'Pharmacy',
        description: 'Make medicines available anytime, anywhere',
        infoLink: 'pharmacy',
      },
      {
        title: 'Hospitals',
        description: 'Take control of a more streamlined inpatient care',
        infoLink: 'hospitals',
      },
      {
        title: 'Patient Relationship',
        description: 'Build continuity of care for patients',
        infoLink: 'patients',
      },
      {
        title: 'Compliance, security, interoperability',
        description: 'Implement health international health IT standards',
        infoLink: 'csi',
      },
    ];
    return {};
  },
};
</script>

<style scoped>
.usp-container {
  padding-bottom: 50px;
}
.line-spacing-title {
  line-height: 1.25em;
}
</style>
