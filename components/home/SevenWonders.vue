<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? '300px' : '325px' }"
      :class="{ 'pt-10': $isMobile }"
    )
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-xl mb-8' : !$isMobile, 'font-m mb-6' : $isMobile }") Make Healthcare Accessible to All
        p(:class="{ 'font-m' : !$isMobile, 'font-xs' : $isMobile }").grey--text THE&nbsp;
          span.primary--text SEVEN WONDERS&nbsp;
          span.grey--text OF HEALTHCARE
          br
          | EMPOWERED BY MYCURE
      v-col(cols="12" md="4")
    v-row(justify="center" align="center" no-gutters)
      v-col(v-if="!$isMobile" cols="12" md="10")
        carousel(
          :perPage="4"
          :navigationEnabled="true"
          navigationNextLabel=" "
          navigationPrevLabel=" "
        )
          slide(v-for="(wonder, key) in wonders" :key="key")
            wonder(:wonder="wonder").ma-1
      v-row(v-else justify="center")
        v-col(cols="6" v-for="(wonder, key) in wonders" :key="key")
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
        image: 'hospitals',
      },
      {
        title: 'Outpatient Clinics',
        description: 'Get simplified workflows, real-time reports',
        infoLink: 'clinics',
        image: 'hospitals',
      },
      {
        title: 'Diagnostics',
        description: 'Convert online booking to online results',
        infoLink: 'diagnostics',
        image: 'hospitals',
      },
      {
        title: 'Pharmacy',
        description: 'Make medicines available anytime, anywhere',
        comingSoon: true,
        image: 'hospitals',
      },
      {
        title: 'Hospitals',
        description: 'Take control of a more streamlined inpatient care',
        infoLink: 'hospitals',
        comingSoon: true,
        image: 'hospitals',
      },
      {
        title: 'Patient Relationship',
        description: 'Build continuity of care for your patients.',
        infoLink: 'patients',
        comingSoon: true,
        image: 'hospitals',
      },
      {
        title: 'Compliance, security, interoperability',
        description: 'Implement health international health IT standards',
        infoLink: 'csi',
        image: 'hospitals',
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
