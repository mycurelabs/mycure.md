<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Clinics Landing Page"
      background-image-file-extension=".webp"
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Most Complete Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-title
      parse-meta-title
      btn-text="Get Started"
      image="Clinics USP"
      :image-width="$isMobile ? '100%' : '90%'"
      custom-image-path="clinics/"
      :parse-title-fields="['workflows, ', 'results, ']"
      :parse-meta-title-fields="['System']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    stakes(
      panel-title="Your clinic system should not cause you more problems"
      sub-title="Without correctly utilizing the technologies available today, you’re actually losing opportunities more than you think."
      panel-description="Well you don’t have to handle all these problems anymore. Join MYCURE and become the expert who doesn’t just sound like you’re good at managing your clinic—you’ll actually know how to maximise the MYCURE suite of tools to get all the right insights, reports, and seamless organisation you’ve always aspired to have."
      :version="2"
      :contents="stakesContent"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      workflow
    //- 3rd panel
    syncbase(:version="2")
    //- 4th panel
    //- div.grey-bg.mx-n3
    //-   mycure-csi
    //- 5th panel
    generic-media-panel(
      :content="fifthPanel"
      :title-classes="headerClasses"
      :content-classes="descriptionClasses"
      hide-btn
    )
      div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
        signup-button(
          depressed
          rounded
          color="success"
          event-label="signup"
          width="228px"
          height="59px"
        ).text-none
          v-icon(left) mdi-web
          span.generic-button-text Create my website
    //- 6th panel
    div.grey-bg.mx-n3
      features(
        title="Customized for Your Specialty"
        description="MYCURE has already built-in workflows and processes for different setups."
        :items="features"
        :class="{ 'mt-10': $isMobile, 'mt-5': !$isMobile }"
        :icon-column-bindings="{ cols: '6', md: '3' }"
        image-dir="clinics/"
        panel-height="70vh"
      )
    //- 7th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        align="center"
        :content="practicingSoloPanel"
        :title-classes="[...headerClasses, 'white--text']"
        hide-btn
      )
        div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
          mc-btn(
            depressed
            rounded
            color="white"
            width="228px"
            height="59px"
            :to="{ name: 'doctors-clinics' }"
          ).text-none.primary--text
            v-icon(left) mdi-information-outline
            span.generic-button-text Learn More
    //- 7.5
    care
    steps(:steps="stepsContent")
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 8th panel
    think-long-term
    v-divider.divider
    //- 9th panel
    call-to-action(:version="2")
    //- 10th panel
    pricing(
      has-trial-option
      type="clinic"
      title="Take the first step today"
      description="Choose the best plan for your clinic. Only pay for what you need."
      :pricing-details="pricingDetails"
    ).mb-n3
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Features: () => import('~/components/commons/panels/Features'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    Workflow: () => import('~/components/outpatient-clinics/Workflow'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  data () {
    this.features = [
      {
        title: 'Multispecialty',
        icon: 'Multispecialty',
        iconExtension: '.webp',
      },
      {
        title: 'Skin & Aesthetics',
        icon: 'Skin',
        iconExtension: '.webp',
      },
      {
        title: 'Maternity Care',
        icon: 'Maternity Care',
        iconExtension: '.webp',
      },
      {
        title: 'Pediatric Care',
        icon: 'Pedia',
        iconExtension: '.webp',
      },
      {
        title: 'Dentistry',
        icon: 'Dentistry',
        iconExtension: '.webp',
      },
      {
        title: 'Diagnostics',
        icon: 'Diagnostics',
        iconExtension: '.webp',
      },
      {
        title: 'Corporate',
        icon: 'Corporate',
        iconExtension: '.webp',
      },
    ];
    this.stakesContent = [
      'You spend more on tools you don\'t need',
      'Patient turnaround time doesn\'t improve',
      'You pay extra space for paper charts',
      'You get appointment no-shows',
      'You\'ll have dissatisfied patients',
      'Your staff gets frustrated with more work',
      'Your daily reports are prone to errors',
      'You\'re unsure of your compliance to laws',
    ];
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your Clinic Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account. MYCURE offers a wide range of modules and features.',
      },
      {
        title: 'Onboarding',
        description: 'Start onboarding other users. You can also watch tutorials or book a training session with a MYCURE specialist.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of clinic that  utilizes modern tools to optimize efficiency and improve operations.  In order to be that way, you need a solution that will integrate critical processes into a simple workflow that benefits everyone.',
      'The problem is it’s hard to find an all-in-one system that is easy to use, affordable and customized to your practice, which makes you feel shortchanged in your current provider.  We believe that clinics like yours should never have to deal with this. We’ve talked to hundreds of health facilities and understand that there is a need for this.',
      'That’s why we\'ve built MYCURE as the most complete Clinic Management System that is flexible and customizable to fit your exact needs.',
    ];
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System',
      description: 'MYCURE enables clinics with complex operations to have simplified workflows to be much more efficient, increase in revenue, and build.',
      socialBanner: require('~/assets/images/banners/OG Clinics.png'),
    });
  },
  computed: {
    fifthPanel () {
      return {
        title: 'Expand your Reach',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'commons/',
          image: 'Expand your reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
      };
    },
    practicingSoloPanel () {
      return {
        title: 'Practicing solo?',
        imageBindings: {
          image: 'Practicing Solo Ipad.webp',
          imageAlt: 'Woman video call in Ipad tablet',
          customPath: 'clinics/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '212.58px' : (this.$isRegularScreen ? '354.6px' : '547.15px'),
        },
        contentAlign: 'left',
      };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}

.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.blue-bg {
  background-color: #0099cc;
}
</style>
