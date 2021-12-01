<template lang="pug">
  div.pt-16
    //- v-container
    //-   v-row(justify="center")
    //-     generic-panel
    //-       v-col(cols="12").text-center
    //-         span(:class="metaTitleClasses").primary--text Why MYCURE?
    //-         h2(:class="panelHeaderClasses").font-weight-semibold Think Long-Term
    generic-media-panel(
      v-for="(panel, key) in panels"
      align="center"
      :key="key"
      :content="panel"
      :title-classes="headerClasses"
      :class="{'pb-16': key === 1}"
      hide-btn
      disable-parent-padding
    ).my-16
      template(slot="content")
        p(:class="descriptionClasses") {{ panel.description }}&nbsp;
      template(v-if="panel.route" slot="additional-content")
        nuxt-link(:to="{ name: panel.route }" :class="{'d-flex': !$isMobile}").text-none
          span.mc-hyp1.primary--text {{ panel.routeText }}
          v-icon(left color="primary" :small="!$isWideScreen" style="margin-top: 2px;") {{ mdiArrowRight }}
        //- span(v-if="$nuxt.$route.name !== 'doctors-clinics' && panel.descriptionAppend") {{ panel.descriptionAppend }}
</template>

<script>
import { mdiArrowRight } from '@mdi/js';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    // this.panelHeaderClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    // this.metaTitleClasses = ['mc-content-set-1', 'font-open-sans', 'font-weight-semibold'];
    this.headerClasses = ['mc-h2'];
    return {
      mdiArrowRight,
    };
  },
  computed: {
    panels () {
      return [
        {
          title: 'MYCURE Clinics is No Ordinary EHR App',
          description: 'It’s a cloud-based clinic system built for the specialized needs of healthcare. Connect and securely share files with other healthcare providers, labs, hospitals, and pharmacies within the MYCURE One network.',
          route: 'syncbase',
          routeText: 'Learn About Syncbase',
          imageBindings: {
            image: 'preventing-failures.png',
            imageAlt: 'Doctor and patient communicating artwork',
            customPath: 'commons/',
            extensionExclusive: true,
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '144.08px' : (this.$isRegularScreen ? '229.69px' : '370.62px'),
          },
          contentAlign: 'right',
        },
        {
          title: 'Advanced Tools for a Growing Clinic',
          description: 'We’re here to make managing your multispecialty clinic so much easier. We offer full functionality for our free accounts, and you only need to upgrade as your practice grows. We want to help you make the world a healthier place.',
          route: 'features',
          routeText: 'See All Features',
          imageBindings: {
            image: 'as-your-practice-grows.png',
            imageAlt: 'Hospitals growing and scaling up artwork',
            customPath: 'commons/',
            extensionExclusive: true,
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '213.25px' : (this.$isRegularScreen ? '339.97px' : '548.58px'),
          },
          contentAlign: 'left',
        },
      ];
    },
  },
};
</script>
