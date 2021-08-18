<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Dental Clinics USP - Full Illu"
      background-image-file-extension=".webp"
      title="Easy to setup, affordable"
      meta-title="MYCURE for Dental Clinics"
      description="Start going digital without spending anything."
      btn-text="Start Free"
      image="Dental Clinics USP - Mobile version"
      custom-image-path="clinics/dental/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      problem-statement
    //- 3rd panel
    generic-media-panel(
      :content="thirdPanel" align="center"
    )
      template(slot="content")
        h2(:class="headerClasses") Always accessible dental charts.
        br
        h2(:class="contentClasses") Never miss an appointment.
          br
          span Never miss a tooth.
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            color="success"
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started
    //- 4th panel
    straightforward
    //- 5th panel
    //- div.info.mx-n3
    //-   v-container
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }")
    //-         v-col(cols="12" lg="8" xl="6").white--text.text-center
    //-           h2(:class="['white--text', ...headerClasses]").mb-10 Still a student?
    //-           h3(:class="studentPanelDescriptionClasses").mb-10 Join the next free webinar series for dentistry students.
    //-           mc-btn(
    //-             color="success"
    //-             depressed
    //-             rounded
    //-             :large="!$isWideScreen"
    //-             :x-large="$isWideScreen"
    //-             :class="btnClasses"
    //-           ).text-none Count me in

    //- 6th panel
    generic-media-panel(
      :content="directoryPanel"
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in directoryPanel.list")
          v-row(dense)
            v-col(cols="2" sm="1" md="1"  :class="$isWideScreen ? 'pt-3' : 'pt-2'").pr-2
              img(
                src="~/assets/images/mycure-check.png"
                alt="Check icon"
                :width="$isWideScreen ? '30' : '20'"
                :height="$isWideScreen ? '30' : '20'"
              )
            v-col(cols="10" sm="11" md="11")
              span(:class="descriptionClasses").font-open-sans.font-gray {{ item }}
        div.mb-10
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          mc-btn(
            color="success"
            href="https://calendly.com/mycure/demo"
            target="_blank"
            rel="noopener noreferrer"
            depressed
            rounded
            width="228px"
            height="59px"
          ).text-none
            v-icon(left) mdi-web
            span.generic-button-text Create my Website
          signup-button(
            depressed
            rounded
            outlined
            width="228px"
            height="59px"
            color="success"
          ).text-none.ml-5
            span.generic-button-text Get Started

    //- 7th panel
    generic-media-panel(
      :content="multiplePanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        div(:class="{'text-center': $isMobile}")
          mc-btn(
            color="success"
            href="https://calendly.com/mycure/demo"
            target="_blank"
            rel="noopener noreferrer"
            depressed
            rounded
                  width="228px"
                  height="59px"
          ).text-none
            span.generic-button-text Get Started
    //- 8th panel
    syncbase(:version="3")
    //- 9th panel
    think-long-term(extended)
    //- 10th panel
    pricing(
      title="Take the first step today."
      type="clinic"
    )
    //- 11th panel
    call-to-action(:version="3")
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ProblemStatement: () => import('~/components/dental-clinics/ProblemStatement'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Straightforward: () => import('~/components/dental-clinics/Straightforward'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
  data () {
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1'];
    this.contentClasses = ['mc-content-set-1', 'font-weight-semibold', 'secondary--text'];
    this.btnClasses = ['mc-button-set-1'];
    this.subHeaderClasses = ['mc-subheader-set-1', 'lh-title', 'font-weight-semibold', 'secondary--text'];
    this.studentPanelDescriptionClasses = ['mc-subheader-set-2', 'font-weight-semibold'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'primary--text', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for Dental Clinics',
      description: 'Experience the most versatile software for dental clinics that seamlessly manages dental charts, inventory, and billing.',
      socialBanner: require('~/assets/images/banners/MYCURE - Dental Clinic OG BANNER.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        contentAlign: 'left',
        imageBindings: {
          image: 'Dental charts.png',
          mobileImage: 'Dental charts mobile.png',
          imageAlt: 'Dental charts in a tablet',
          customPath: 'clinics/dental/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '231.38px' : (this.$isRegularScreen ? '385.52px' : '595.03px'),
        },
      };
    },
    directoryPanel () {
      return {
        title: 'Get more eyes on your brand',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'commons/',
          image: 'Expand your reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
        list: [
          'Acquire patients beyond your reach',
          'Hassle-free from booking to billing',
          'Covers virtual to physical accommodation',
        ],
      };
    },
    multiplePanel () {
      return {
        title: 'One view for multiple locations',
        description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'clinics/skin/',
          image: 'Multiple locations.png',
          mobileImage: 'Multiple locations mobile.png',
          extensionExclusive: true,
          imageAlt: 'Charts and graphs',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '156.16px' : (this.$isRegularScreen ? '260.29px' : '401.63px'),
        },
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
.blue-bg {
  background-color: #0099cc;
}
</style>
