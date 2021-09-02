<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    seven-wonders
    //- 2nd panel
    care
    //- 2.5
    stakes(
      panel-title="IT Solutions for your Health Facility Should Not Be Too Expensive and Complicated"
      panel-description="Good thing you don’t have to handle all these problems anymore. Join the MYCURE Community of health professionals and become the expert who doesn’t just sound like you’re good in managing your health facility—you’ll actually know how to maximise the MYCURE suite of tools to get all the right insights, reports, and seamless organisation you’ve always aspired to have."
      :version="1"
      :contents="stakesContent"
    )
    //- 3rd panel
    div.simple-container.mx-n3
      simple
    //- 4th panel
    patients
    //- 5th panel
    div.grey-bg.mx-n3
      tools(:version="2")
    //- 5.5th panel
    steps(:steps="stepsContent")
    //- 5.75 panel
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //-6th panel
    syncbase
    //- 7th panel
    div.grey-bg.mx-n3
      hipaa(
        :header-classes="headerClasses"
        :description-classes="descriptionClasses"
      )
    //- CTA
    div.cta-container.mx-n3.mb-n3
      join-next-generation
      div.cta-image.text-center
        picture-source(
          image="CTA"
          image-file-extension=".webp"
          custom-path="home/"
          image-alt="CTA Home"
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
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    Tools: () => import('~/components/home/Tools'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  data () {
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.stakesContent = [
      {
        leftTitle: 'You spend more on tools that you don’t need',
        leftDescription: 'Covers from virtual  (telehealth) to physical (face to face) accommodation',
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
      title: 'MYCURE | Making Healthcare Accessible to All',
      description: 'MYCURE is a healthcare platform that connects physicians, clinics, hospitals, and medical organizations to anyone in need.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  mounted () {
    this.loading = false;
    this.$gtag.pageview('/home');
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
