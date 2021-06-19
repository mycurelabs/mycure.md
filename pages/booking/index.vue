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
    features(
      title="Acquire and accomodate more patients"
      meta-title="How It Works?"
      :items="howItWorksContents"
      image-dir="booking/"
    )
      template(slot="items")
        v-col(cols="12" md="4" xl="3" v-for="(item, key) in howItWorksContents" :key="key").text-center
          picture-source(
            v-if="item.icon"
            custom-path="booking/"
            :image="item.icon"
            :image-alt="item.title"
            :image-file-extension="item.iconExtension"
            :image-width="!$isMobile ? '100%' : '80%'"
          )
          br
          br
          h2.hiw-subheading.font-weight-semibold {{ item.title }}
          p.hiw-caption.font-open-sans {{ item.description }}

    //- 3rd panel
    div.grey-bg.mx-n3
      features(
        :items="thirdPanelContents"
        image-dir="booking/"
      )
        template(slot="title")
          h2(:class="['primary--text', 'font-weight-semibold', ...titleClasses]") Make every step of patient care a breeze
        template(slot="additional-content")
          v-col(cols="12").text-center.mt-5
            signup-button(
              depressed
              rounded
              :x-large="$isWideScreen"
              :large="!$isWideScreen"
              color="accent"
            ).text-none.font-s
              span Get Started Free
    //- 4th panel
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" md="8").text-center
            h2(:class="titleClasses").font-weight-semibold.primary--text Activate your awesome booking website
            p(:class="descriptionClasses").mt-3 Patients can directly book their next visit on your professional booking page. It’s a digital hub where you can showcase your services and medical professionals like having your very own website.
          v-col(cols="12").text-center
            //- v-btn-toggle(v-model="websiteType" mandatory)
            v-row.text-center
              v-spacer
              v-btn(
                color="primary"
                depressed
                tile
                x-large
                style="width: 200px;"
                :outlined="websiteType !== 'doctor'"
                @click="websiteType = 'doctor'"
              ).text-none Doctors
              v-btn(
                color="primary"
                depressed
                outlined
                tile
                x-large
                style="width: 200px;"
                :outlined="websiteType !== 'clinic'"
                @click="websiteType = 'clinic'"
              ).text-none Clinics
              v-spacer
            br
            br
            v-tabs-items(v-model="websiteType")
              v-tab-item(v-for="(mockup, key) in websiteMockups" :key="key" :value="mockup.value")
                picture-source(
                  :image="mockup.image"
                  :image-alt="websiteType"
                  image-width="80%"
                  image-file-extension=".webp"
                  custom-path="booking/"
                )
    //- 5th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        align="center"
        :content="fifthPanelContents"
        :title-classes="[...titleClasses, 'white--text']"
        :content-classes="['white--text', ...descriptionClasses]"
      )
        template(slot="cta-button")
          signup-button(
            depressed
            rounded
            color="accent"
            facility-type="clinic"
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
          ).text-none.font-s
            span Get Started Free
    //- 6th panel
    plans.mb-n3
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// components
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import Plans from '~/components/booking/Plans';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    Features,
    GenericMediaPanel,
    GenericPanel,
    PictureSource,
    Plans,
    Usp,
    SignupButton,
  },
  data () {
    this.howItWorksContents = [
      {
        title: 'Set up your page',
        description: 'Create your professional website and add your availability preferences.',
        icon: 'Set up your page',
        iconExtension: '.webp',
      },
      {
        title: 'Share your link',
        description: 'Send your website URL to your family, network, and patients.',
        icon: 'Share your link',
        iconExtension: '.webp',
      },
      {
        title: 'Get booked',
        description: 'Patients pick a time and the consultation is added in your calendar',
        icon: 'Get Booked',
        iconExtension: '.webp',
      },
    ];
    this.thirdPanelContents = [
      {
        icon: 'Organized Patient visits',
        iconExtension: '.webp',
        title: 'Organized patient visits for easy COVID-19 safety compliance.',
      },
      {
        icon: 'open schedule',
        iconExtension: '.webp',
        title: 'Open schedule to the days and times that work for you. Reminders go out automatically.',
      },
      {
        icon: 'covers from virtual',
        iconExtension: '.webp',
        title: 'Covers from virtual (telehealth) to physical (face to face) accommodation',
      },
    ];
    this.fifthPanelContents = {
      title: 'Also available for Medium and Large-scale Facilities',
      description: 'MYCURE Booking can also be used for clinics, diagnostic centers, and hospitals to seamlessly organize your patient visits. It has APIs that can be integrated in your existing information systems.',
      imageBindings: {
        image: 'As your practice grows.png',
        customPath: 'commons/',
        extensionExclusive: true,
        imageAlt: 'MYCURE Booking',
      },
    };
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
    imageBindings () {
      return {
        image: 'Booking Mobile',
        customImagePath: 'booking/',
        imageAlign: 'right',
      };
    },
    metaTitleClasses () {
      return [
        classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
    titleClasses () {
      return [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
      ];
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    itemTextClasses () {
      return [
        classBinder(this, {
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
    buttonClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
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
