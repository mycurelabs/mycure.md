<template lang="pug">
  div.pt-5.white
    //- WEB
    features-diagram(
      v-if="!$isMobile"
      :title="title"
      :description="description"
      :image="image"
      :customPath="customPath"
      :image-width="$isMobile ? '100%' : '80%'"
    )
    //- MOBILE
    div(v-else)
      v-container
        v-row(justify="center")
          h1.font-36.text-center.lh-title {{ title }}
        br
        v-row(
          v-for="(step, key) in steps"
          :key="key"
          justify="center"
          dense
        )
          v-col(cols="12")
            v-btn(
              fab
              small
              depressed
              color="#372A82"
            ).font-s.white--text {{ step.number }}
            div.ml-5.mt-5
              span.font.s {{ step.text }}
              br
              img(
                :src="require(`~/assets/images/hippocrates/${step.image}`)"
                alt="Hippocrates Workflow"
                width="50%"
              )
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import FeaturesDiagram from '~/components/commons/features-diagram';
export default {
  components: {
    FeaturesDiagram,
  },
  data () {
    this.image = 'mycure-hippocrates-diagram-steps';
    this.customPath = 'hippocrates/';
    this.steps = [
      {
        number: 1,
        text: 'Patient goes to your virtual MAC website, and will then be asked a few questions.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-01.png',
      },
      {
        number: 2,
        text: 'Patient searches for or selects a doctor.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-02A.png',
      },
      {
        number: 3,
        text: 'Patient sets an appointment with selected doctor.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-03.png',
      },
      {
        number: 4,
        text: 'When Doctor is ready, a video screen will open & online consultation begins.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-04.png',
      },
      {
        number: 5,
        text: 'Doctor takes diagnosis notes in provided EMR. Doctor issues ePrescription.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-05.png',
      },
      {
        number: 6,
        text: 'Doctor can order Diagnostic Tests (connected to Hospital existing LIS or RIS)',
        note: 'Note: If hospital does not have an LIS or RIS, Hippocrates also has existing modules for this.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-06.png',
      },
      {
        number: 7,
        text: 'Once done, patient pays online (via credit card). ePrescription is shown in patient dashboard.',
        image: 'mycure-hippocrates-virtual-medical-center-steps-07.png',
      },
    ];
    return {};
  },
  computed: {
    title () {
      const title = 'Imagine your Medical Arts Center Going Online';
      return !this.$isMobile
        ? parseTextWithNewLine(title, ['Arts'])
        : title;
    },
    description () {
      const description = 'Continue your outpatient services with online video chat consultations bundled with an advanced EMR system that your physicians can access anytime.';
      return !this.$isMobile
        ? parseTextWithNewLine(description, ['advanced'])
        : description;
    },
  },
};
</script>
