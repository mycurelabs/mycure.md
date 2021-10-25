<template lang="pug">
  v-container(v-show="!loading" fluid).white
    //- 1st panel
    seven-wonders
    //- 2nd panel
    care(:metrics-data="metricsData")
    //- 3rd panel
    stakes(
      panel-title="Your clinic system should not cause you more problems"
      panel-description="IT solutions for your health facility should not be expensive or complicated. Good thing you don’t have to handle all these problems anymore. Join MYCURE and learn how to be a health tech expert—get all the right insights, reports, and seamless organization you’ve always aspired to have."
      :version="1"
      :contents="stakesContent"
      not-free
    )
    //- 4th panel
    div.simple-container.mx-n3
      simple
    //- 5th panel
    patients
    //- 6th panel
    div.grey-bg.mx-n3
      tools(:version="2")
    //- 7th panel
    syncbase
    //- 8th panel
    div.grey-bg.mx-n3
      hipaa(
        :header-classes="headerClasses"
        :description-classes="descriptionClasses"
      )
    //- 9th panel
    steps(:steps="stepsContent" not-free)
    //- 10th panel
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- CTA
    div.cta-container.mx-n3.mb-n3
      join-next-generation
      div.cta-image.text-center
        picture-source(
          image="CTA"
          custom-path="home/"
          image-alt="CTA Home"
          :image-file-extension="$useWebp? '.webp' : '.png'"
          :image-width="$isMobile ? '360px' : ($isRegularScreen ? '450px' : '750px')"
          :image-height="$isMobile ? '157.89px' : ($isRegularScreen ? '197.34px' : '328.94px')"
          :image-styles="{ marginBottom: '-7px' }"
        )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import PictureSource from '~/components/commons/PictureSource';
import SevenWonders from '~/components/home/SevenWonders';
import { fetchWebsiteMetrics } from '~/utils/axios';

export default {
  components: {
    Care: () => import('~/components/home/Care'),
    GenericMediaPanel: () => import('~/components/commons/generic-media-panel'),
    Hipaa: () => import('~/components/booking/Hipaa'),
    JoinNextGeneration: () => import('~/components/home/JoinNextGeneration'),
    Patients: () => import('~/components/home/Patients'),
    PictureSource,
    SevenWonders,
    Simple: () => import('~/components/home/Simple'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    Tools: () => import('~/components/home/Tools'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.stakesContent = [
      {
        leftTitle: 'You spend more on tools that you don’t need',
        leftDescription: 'Lack of needed reports and functionalities lead to problems in your operations. This is wasted time and lost revenue.',
        rightTitle: 'You’ll have unhappy patients',
        rightDescription: 'Disorganized workflows, long waiting time, incomplete documents result in unsatisfied patients.',
      },
      {
        leftTitle: 'Your staff gets frustrated with more work',
        leftDescription: 'IT solutions should simplify your people’s jobs, not make it more complicated. Poorly implemented solutions need to get replaced.',
        rightTitle: 'You’re unsure of your compliance to laws',
        rightDescription: 'With strict laws and heavy penalties on data privacy and security, you have to ensure that compliance is met in your health facility.',
      },
    ];
    this.stepsContent = [
      {
        title: 'Choose a Solution',
        description: 'Select the application suited to your practice or facility.',
      },
      {
        title: 'Create an Account',
        description: 'This activates your Health Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize the system to fit your needs.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know the many challenges in choosing the right healthcare management solution. Some are good but costly. Some are affordable but lack the needed features and reports. Many are poorly designed and difficult to use. Very few work both online and offline. A lot has closed systems and lacks interoperability.',
      'In order to make an easy decision, you need a solution that has all the benefits and functionalities required without compromising ease of use and affordability. The problem is in finding such a system which makes you feel frustrated. We believe that health providers should never have to deal with this.',
      'That’s why we’ve built MYCURE Healthcare Management Solutions, designed to be robust, easy to use, interoperable and affordable.',
    ];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE | Enterprise-Grade Healthcare Solutions',
      description: 'MYCURE is a suite of cost-effective healthcare management solutions designed for doctors, clinics, diagnostic labs, and hospitals.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  watch: {
    '$screen.width' (val) {
      console.warn('screen is now', val);
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.simple-container {
  background-color: #0099cc;
}
.cta-container {
  background-color: #0099cc;
  position: relative;
  padding-bottom: 200px;
}
.cta-image {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.grey-bg {
  background-color: #fafafa;
}

@media screen and (min-width: 1920px) {
  .cta-container {
    padding-bottom: 300px;
  }
}
</style>
