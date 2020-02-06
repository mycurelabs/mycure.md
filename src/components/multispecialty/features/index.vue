<template lang="pug">
  div.pt-5.white
    //- WEB
    features-diagram(
      v-if="!$isMobile"
      :title="title"
      :description="description"
      :customPath="customPath"
      :image="image"
      :imageWidth="$isMobile ? '100%' : '80%'"
    )
    //- MOBILE
    div(v-else)
      v-container
        v-layout(row justify-center)
          h1.font-xl.text-xs-center.lh-title {{ title }}
        br
        v-layout(row justify-center)
          div
            //- https://ssense.github.io/vue-carousel/
            carousel(
              :per-page="1" 
              :autoplay="true"
              :loop="true"
              :navigationEnabled="true"
              :adjustableHeight="true"
              :paginationEnabled="false"
              :navigationClickTargetSize="50"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            ) 
              slide(
                v-for="(product,index) in 6"
                :key="index"
                :data-index="product"
              ).px-2
                img(:src="require(`@/assets/images/mycure-web-clinic-type-0${product}.png`)" alt="Multispecialty Clinic" width="100%")
        br
        v-layout(row justify-center v-for="feature in multiFeatures" :key="feature.title").pt-3
          v-flex(xs3).text-xs-center
            img(v-if="feature.icon" :src="require(`@/assets/images/${feature.icon}`)" :alt="feature.title")
          v-flex(xs8 offset-xs1)
            b {{ feature.title }}
            p {{ feature.description}}

    v-layout(row justify-center align-center).pt-4
      v-flex(xs12).text-xs-center
        v-btn(
          :color="$mcColors.mcBlue"
          :to="{ name: 'features' }"
          :id="exploreFeaturesId"
          dark
          large
          @click.stop="handleExploreFeaturesBtn"
        ).text-none.font-21.font-weight-bold Explore the Features
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
import FeaturesDiagram from '@/components/commons/features-diagram';

export default {
  components: {
    FeaturesDiagram
  },
  data () {
    return {
      customPath: 'multispecialty/',
      exploreFeaturesId: 'multispecialty-explore-features-btn',
      image: 'mycure-home-web-complete-for-clinics-of-all-sizes-diagram',
      multiFeatures: [
          {
            title: 'Multispecialty Clinics',
            description: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services',
            icon: 'mycure-web-clinic-type-icon-multispecialty.png'
          },
          {
            title: 'Outpatient Clinics',
            description: 'Hospital-based clinics that provide outpatient consultation services from various specialists',
            icon: 'mycure-web-clinic-type-icon-opd.png'
          },
          {
            title: 'Industrial Clinics',
            description: 'Primary clinics inside companies, schools, BPOs, and other industries covered by OSHS',
            icon: 'mycure-web-clinic-type-icon-industrial.png'
          },
          {
            title: 'Skin & Aesthetics Clinics',
            description: 'Specialized for clinics that offer aesthetic procedures and dermatological services',
            icon: 'mycure-web-clinic-type-icon-skin.png'
          },
          {
            title: 'PME Clinics',
            description: 'Clinics specializing in Physical Medical Exam (PME) Services',
            icon: 'mycure-web-clinic-type-icon-pme.png'
          },
          {
            title: 'Family Clinics',
            description: 'Small to medium clinics that offer family medicine services, laboratory tests, and pharmacy',
            icon: 'mycure-web-clinic-type-icon-family-clinic.png'
          }
        ]
    };
  },
  computed: {
    title () {
      const title = 'Provide the best service to your patients.';
      return parseTextWithNewLine(title, ['service']);
    },
    description () {
      const description = 'Your multispecialty clinic is everything your patients need. We help you make it extra easier to manage so you can focus more on patient care.';
      return parseTextWithNewLine(description, ['need.']);
    }
  },
  methods: {
    handleExploreFeaturesBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${this.$isMobile ? 'mobile-': ''}${this.exploreFeaturesId}`,
        eventLabel: this.exploreFeaturesId
      });
    }
  }
};
</script>