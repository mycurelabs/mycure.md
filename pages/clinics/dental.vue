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
        h2(:class="headerClasses") Always accesible dental charts.
        br
        h2(:class="subHeaderClasses") Never miss an appointment.
          br
          span Never miss a tooth.
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            color="success"
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            :class="btnClasses"
          ).text-none
            span Get Started
    //- 4th panel
    straightforward
    //- 5th panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" lg="8" xl="6").white--text.text-center
              h2(:class="['white--text', ...headerClasses]").mb-10 Still a student?
              h3(:class="studentPanelDescriptionClasses").mb-10 Join the next free webinar series for dentistry students.
              mc-btn(
                color="success"
                depressed
                rounded
                :large="!$isWideScreen"
                :x-large="$isWideScreen"
                :class="btnClasses"
              ).text-none Count me in

    //- 6th panel
    generic-media-panel(
      :content="directoryPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      //- Check list
      template(slot="additional-content")
        div.mb-10
          v-row(
            v-for="(item, i) in directoryPanel.list"
            :key="item"
            dense
          )
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="10" sm="11" md="11")
              span(:class="descriptionClasses").font-open-sans.font-gray {{ item }}
      template(slot="cta-button")
        v-row
          v-col(cols="12" md="7" lg="6" xl="5")
            mc-btn(
              color="success"
              href="https://calendly.com/mycure/demo"
              target="_blank"
              rel="noopener noreferrer"
              depressed
              rounded
              block
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
            ).text-none Create my Website
          v-col(cols="12" md="7" lg="6" xl="7")
            signup-button(
              depressed
              rounded
              outlined
              block
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              :class="btnClasses"
              color="success"
            ).text-none
              span View Sample Website

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
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="btnClasses"
          ).text-none Get Started
    //- 8th panel
    syncbase(:version="3")
    //- 9th panel
    think-long-term(extended)
    //- 10th panel
    pricing(
      title="Start free and only pay as you grow"
      type="clinic"
    )
    //- 11th panel
    call-to-action(:version="3")
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
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
    this.thirdPanel = {
      contentAlign: 'left',
      imageBindings: {
        image: 'Dental charts.png',
        mobileImage: 'Dental charts mobile.png',
        imageAlt: 'Dental charts in a tablet',
        customPath: 'clinics/dental/',
        extensionExclusive: true,
        imageWidth: '80%',
      },
    };
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.directoryPanel = {
      title: 'Get more eyes on your brand',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'commons/',
        image: 'Expand your reach.webp',
        imageAlt: 'Man browsing a clinic website',
      },
      list: [
        'Acquire patients beyond your reach',
        'Hassle-free from booking to billing',
        'Covers virtual to physical accommodation',
      ],
    };
    this.multiplePanel = {
      title: 'One view for multiple locations',
      description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
      contentAlign: 'left',
      imageBindings: {
        customPath: 'clinics/skin/',
        image: 'Multiple locations.png',
        mobileImage: 'Multiple locations mobile.png',
        extensionExclusive: true,
        imageAlt: 'Charts and graphs',
      },
    };
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Dental Clinics',
      description: 'Experience the most versatile software for dental clinics that seamlessly manages dental charts, inventory, and billing.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
      ];
      return descriptionClasses;
    },
    studentPanelDescriptionClasses () {
      const studentPanelDescriptionClasses = [
        classBinder(this, {
          mobile: ['font-s'],
          regular: ['font-m'],
          wide: ['font-l'],
        }),
        'font-weight-semibold',
      ];
      return studentPanelDescriptionClasses;
    },
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-s', 'text-center'],
          regular: ['font-25'],
          wide: ['font-l'],
        }),
        'lh-title',
        'font-weight-semibold',
        'secondary--text',
      ];
    },
    btnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
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
