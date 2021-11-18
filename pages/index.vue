<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- Remove for now to test SEO
    //- 1st panel
    seven-wonders
    //- 2nd panel
    stakes(
      panel-title="Your Clinic Management System Should Not Cause You More Problems"
      sub-title="As a healthcare provider, your entire day is committed to helping people. But so much of your time is lost to disorganization and inefficiency when you’re using the wrong electronic health records software."
      :version="1"
      :contents="stakesContent"
      not-free
    )
    //- 3rd panel
    care(:metrics-data="metricsData")
    //- 4th panel
    hipaa(
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 5th panel
    syncbase
    //- 6th panel
    simple
    //- 7th panel
    div.grey-bg.mx-n3
      patients
    //- 8th panel
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 9th panel
    tools(:version="2")
    //- 10th panel
    steps(:steps="stepsContent" not-free).mb-n3
    //- CTA
    //- div.cta-container.mx-n3.mb-n3
    //-   join-next-generation
    //-   div.cta-image.text-center
    //-     picture-source(
    //-       image="CTA"
    //-       custom-path="home/"
    //-       image-alt="CTA Home"
    //-       :image-file-extension="$useWebp? '.webp' : '.png'"
    //-       :image-width="$isMobile ? '360px' : ($isRegularScreen ? '450px' : '750px')"
    //-       :image-height="$isMobile ? '157.89px' : ($isRegularScreen ? '197.34px' : '328.94px')"
    //-       :image-styles="{ marginBottom: '-7px' }"
    //-     )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Care from '~/components/home/Care';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import PictureSource from '~/components/commons/PictureSource';
import SevenWonders from '~/components/home/SevenWonders';
import { fetchWebsiteMetrics } from '~/utils/axios';

export default {
  components: {
    Care,
    GenericMediaPanel,
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
    this.headerClasses = ['mc-h2'];
    this.stakesContent = [
      {
        leftTitle: 'Money Wasted on Unnecessary Tools',
        leftDescription: 'Many platforms don’t allow you to choose which tools you need from them to best manage your practice, forcing you to pay for things you won’t use.',
        rightTitle: 'Extra Work for Medical and Administrative Staff',
        rightDescription: 'Your staff already works hard, but inefficient IT solutions will result in even more work just trying to correct mistakes.',
      },
      {
        leftTitle: 'Frustrated and Unhappy Patients',
        leftDescription: 'Long waiting times, incomplete or inaccurate documents, and a disorganized workflow will result in dissatisfied patients not getting the care they need.',
        rightTitle: 'More Revenue Lost to Non-Compliance Fines',
        rightDescription: 'Now more than ever, data privacy is of the utmost importance. But if your IT solutions aren’t in compliance with regulations, you could wind up with expensive fines and penalties.',
      },
    ];
    this.stepsContent = [
      {
        title: 'Pick your product',
        description: 'Select the application suited to your practice or facility.',
      },
      {
        title: 'Automated',
        description: 'This activates your Health Management System.',
      },
      {
        title: 'Start customizing',
        description: 'Customize the system to fit the needs of your practice or facility.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know the many challenges in choosing the right healthcare management solution. Some are good but costly. Some are affordable but lack the needed features and reports. Many are poorly designed and difficult to use. Very few work both online and offline. A lot has closed systems and lacks interoperability.',
      'In order to make an easy decision, you need a solution that has all the benefits and functionalities required without compromising ease of use and affordability. The problem is in finding such a system which makes you feel frustrated. We believe that health providers should never have to deal with this.',
      'That’s why we’ve built MYCURE Healthcare Management Solutions, designed to be robust, easy to use, interoperable and affordable.',
    ];
    this.descriptionClasses = ['mc-b2', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'Enterprise-Grade Healthcare Management Solutions | MYCURE',
      description: 'MYCURE is a modern healthcare management solutions provider that helps doctors, clinics, diagnostic labs, & hospitals save time and work efficiently. Know more.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  created () {
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
