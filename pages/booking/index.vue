<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      v-bind="imageBindings"
      background-image="Booking Landing Page"
      title="Easy Booking System to Grow Your Practice"
      meta-title="MYCURE Booking"
      description="Let your patients book and schedule appointments efficiently"
      btn-text="Get Started Free"
      parse-title
      :parse-title-fields="['to ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )

    //- 2nd panel
    generic-media-panel(
      :content="secondPanel"
      :title-classes="[...headerClasses, 'primary--text']"
      :content-classes="[...descriptionClasses, 'justify-left']"
    )
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            color="success"
            facility-type="clinic"
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started Free

    //-3rd panel
    features(
      title="Easy as 1-2-3"
      :items="howItWorksContents"
      image-dir="booking/"
      icon-container-col-size="12"
      :each-icon-col="{ cols: 12 }"
    )
      template(slot="description")
        p(:class="howItWorksClass").primary--text.font-weight-semibold How it works?
      template(slot="items")
        v-col(cols="12" md="4" xl="3" v-for="(item, key) in howItWorksContents" :key="key").text-center
          picture-source(
            v-if="item.icon"
            custom-path="booking/"
            :image="item.icon"
            :image-alt="item.title"
            :image-file-extension="item.iconExtension"
            :image-width="$isMobile ? '190px' : ($isRegularScreen ? '250px' : '325px')"
            :image-height="$isMobile ? '124.48px' : ($isRegularScreen ? '163.63px' : '212.91px')"
          )
          br
          br
          h2.hiw-subheading.font-weight-semibold {{ item.title }}
          p.hiw-caption.font-open-sans {{ item.description }}

    //- 4th panel
    div.grey-bg.mx-n3
      features(
        :items="thirdPanelContents"
        image-dir="booking/"
        icon-container-col-size="10"
        :each-icon-col="{ cols: 12, sm: 10 }"
      )
        template(slot="title")
          h2(:class="['primary--text', 'font-weight-semibold', ...titleClasses]") Acquire and Accommodate more Patients
        template(slot="additional-content")
          v-col(cols="12").text-center.mt-5
            signup-button(
              depressed
              rounded
              width="228px"
              height="59px"
              color="success"
            ).text-none
              span.generic-button-text Get Started Free
    //- 5th panel
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" md="8").text-center
            h2(:class="titleClasses").font-weight-semibold.primary--text Activate your awesome booking website
            p(:class="descriptionClasses").mt-3 Patients can directly book their next visit on your professional booking page. It’s a digital hub where you can showcase your services and medical professionals like having your very own website.
          v-col(cols="12").text-center
            //- v-btn-toggle(v-model="websiteType" mandatory)
            v-row.justify-center.gutterless
              v-col(cols="6" md="3").pa-0
                v-btn(
                  color="primary"
                  depressed
                  tile
                  block
                  :x-large="!$isMobile"
                  :outlined="websiteType !== 'doctor'"
                  @click="websiteType = 'doctor'"
                ).text-none Doctors
              v-col(cols="6" md="3").pa-0
                v-btn(
                  color="primary"
                  depressed
                  outlined
                  tile
                  block
                  :x-large="!$isMobile"
                  :outlined="websiteType !== 'clinic'"
                  @click="websiteType = 'clinic'"
                ).text-none Clinics
            br
            br
            v-tabs-items(v-model="websiteType")
              v-tab-item(v-for="(mockup, key) in websiteMockups" :key="key" :value="mockup.value")
                picture-source(
                  :image="mockup.image"
                  :image-alt="`A ${websiteType} website mockup on laptop screen`"
                  :image-width="$isMobile ? '256px' : ($isRegularScreen ? '756px' : '1156px')"
                  :image-height="$isMobile ? '192px' : ($isRegularScreen ? '567px' : '867px')"
                  image-file-extension=".webp"
                  custom-path="booking/"
                )
    //- 6th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        align="center"
        :content="fifthPanelContents"
        :title-classes="[...titleClasses, 'white--text', 'line-height-reducer']"
        :content-classes="['white--text', ...descriptionClasses]"
      )
        template(slot="cta-button")
          div(:class="{ 'text-center': $isMobile }")
            signup-button(
              depressed
              rounded
              color="success"
              facility-type="clinic"
              width="228px"
              height="59px"
            ).text-none
              span.generic-button-text Get Started Free
    //- 7th panel
    plans.mb-n3
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
// components
import PictureSource from '~/components/commons/PictureSource';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource,
    Plans: () => import('~/components/booking/Plans'),
    Usp,
    SignupButton: () => import('~/components/commons/SignupButton'),
  },
  data () {
    this.howItWorksContents = [
      {
        title: 'Set up your page',
        description: 'Create your professional website and add your availability preferences.',
        icon: 'MYCURE - Product Step 1',
        iconExtension: '.webp',
        alt: 'Man browsing a website page artwork',
      },
      {
        title: 'Share your link',
        description: 'Send your website URL to your family, network, and patients.',
        icon: 'MYCURE - Product Step 2',
        iconExtension: '.webp',
        alt: 'Woman pressing the share button artwork',
      },
      {
        title: 'Get booked',
        description: 'Patients pick a time and the consultation is added in your calendar',
        icon: 'MYCURE - Product Step 3',
        iconExtension: '.webp',
        alt: 'Doctor and patient appointment confirmation artwork',
      },
    ];
    this.thirdPanelContents = [
      {
        icon: 'Organized Patient visits',
        iconExtension: '.webp',
        title: 'Organized patient visits for easy COVID-19 safety compliance.',
        alt: 'Health checklist icon',
      },
      {
        icon: 'open schedule',
        iconExtension: '.webp',
        title: 'Open schedule to the days and times that work for you. Reminders go out automatically.',
        alt: 'Phone scheduling icon',
      },
      {
        icon: 'covers from virtual',
        iconExtension: '.webp',
        title: 'Covers from virtual (telehealth) to physical (face to face) accommodation',
        alt: 'Virtual telehealth icon',
      },
    ];
    this.websiteMockups = [
      {
        image: 'Booking Page UI Mockup - Doctor',
        value: 'doctor',
      },
      {
        image: 'Booking Page UI Mockup - Clinic',
        value: 'clinic',
      },
    ];
    this.titleClasses = ['mc-title-set-1'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.buttonClasses = ['mc-button-set-1'];
    this.howItWorksClass = ['mc-title-set-2'];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.imageBindings = {
      image: 'Booking Mobile',
      customImagePath: 'booking/',
      imageAlign: 'right',
      imageAlt: 'Booking a schedule on a phone artwork',
    };
    return {
      loading: true,
      websiteType: 'doctor',
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/OG Booking.png'),
    });
  },
  computed: {
    secondPanel () {
      return {
        title: 'Never waste Time or Money',
        description: 'Without an appointment booking system, healthcare providers find it difficult to organize patient visits resulting to missed opportunities and more time wasted.',
        contentAlign: 'right',
        imageBindings: {
          image: 'Stakes.png',
          mobileImage: 'Stakes.png',
          imageAlt: 'Doctor witha lot of paper work',
          customPath: 'booking/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '197.14px' : (this.$isRegularScreen ? '328.58px' : '507.14px'),
        },
      };
    },
    fifthPanelContents () {
      return {
        title: 'Also available for Medium and Large-scale Facilities',
        description: 'MYCURE Booking can also be used for clinics, diagnostic centers, and hospitals to seamlessly organize your patient visits. It has APIs that can be integrated in your existing information systems.',
        imageBindings: {
          image: 'As your practice grows.png',
          imageAlt: 'Hospitals growing and scaling up artwork',
          customPath: 'commons/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '213.25px' : (this.$isRegularScreen ? '355.42px' : '548.58px'),
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
.hiw-subheading {
  color: #212121;
}
.hiw-caption {
  color: #787878;
}
.grey-bg {
  background-color: #fafafa;
}
.blue-bg {
  background-color: #0099cc;
}
.divider {
  margin-right: 40% !important;
  margin-left: 40% !important;
}
</style>
