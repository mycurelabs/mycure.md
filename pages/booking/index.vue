<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Doctor Landing Page"
      title="Easy Booking System to Grow Your Practice"
      meta-title="MYCURE Booking"
      image="Doc USP"
      image-width="115%"
      custom-image-path="doctors-clinics/"
      image-align="right"
      btn-text="Get Started Free"
      parse-title
      :description="uspDescription"
      :parse-title-fields="['Grow ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
        v-col(cols="12" :md="titleColSize").text-center
          strong(:class="metaTitleClasses").primary--text HOW IT WORKS
          h2(:class="titleClasses").lh-title.font-weight-semibold Acquire and accommodate #[br] more patients
        v-col(cols="12" :md="titleColSize").text-center
          img(src="https://dummyimage.com/500x500/e3e4e8/00089c.png")
    //- 3th panel
    div.grey-bg.mx-n3
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" :md="titleColSize").text-center
            h2(:class="titleClasses").primary--text Make every step of patient care a breeze
          template(v-for="item in thirdPanelContents")
            v-col(sm="12" md="4").text-center
              v-avatar(size="200").mb-5
                img(:src="item.image")
              p(:class="itemTextClasses") {{item.content}}
          v-col(cols="12" :md="titleColSize").text-center
            signup-button(
              event-label="signup"
              color="success"
              depressed
              rounded
              :large="!$isWideScreen"
              :x-large="$isWideScreen"
              :class="buttonClasses"
            ).text-none Get Started Free
    //- 7th panel
    div.grey-bg.mx-n3
      //- mycure-csi
    //- 8th panel
    div.blue-bg.mx-n3
      //- generic-media-panel(
      //-   :content="eightPanel"
      //-   :title-classes="[...headerClasses, 'white--text']"
      //-   :contentClasses="eightPanelContentClasses"
      //-   hide-btn
      //- )
      //-   template(slot="additional-content")
      //-     v-row(
      //-       v-for="(item, i) in eightPanel.list"
      //-       :key="i"
      //-       dense
      //-     )
      //-       v-col(cols="2" sm="1" md="1").pr-2.pt-2
      //-         v-icon(color="white") mdi-checkbox-marked-circle
      //-       v-col(cols="10" sm="5" md="11")
      //-         span(:class="eightPanelContentClasses") {{ item }}
    //- 9th panel
    //- think-long-term
    v-divider.divider
    //- 10th panel
    //- pricing(
    //-   type="doctor"
    //-   title="Start free and only pay as you grow"
    //-   :column-bindings="{ cols: '12', md: '4', xl: '3'}"
    //- )
    //- 11th panel
    //- call-to-action(:fluid="!$isMobile")
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// // constants
// import { DOCTORS_PRICING } from '~/constants/pricing';
// components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import GenericPanel from '~/components/generic/GenericPanel';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    GenericPanel,
    MycureCsi,
    Pricing,
    ThinkLongTerm,
    Usp,
    SignupButton,
  },
  data () {
    this.thirdPanelContents = [
      {
        image: 'https://dummyimage.com/200x200/e3e4e8/00089c.png',
        content: 'Organized patient visits for easy COVID-19 safety compliance.',
      },
      {
        image: 'https://dummyimage.com/200x200/e3e4e8/00089c.png',
        content: 'Open schedule to the days and times that work for you. Reminders go out automatically.',
      },
      {
        image: 'https://dummyimage.com/200x200/e3e4e8/00089c.png',
        content: 'Covers from virtual  (telehealth) to physical (face to face) accommodation',
      },
    ];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management System for Doctors',
      description: 'MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.',
      socialBanner: require('~/assets/images/banners/OG Doc.png'),
    });
  },
  computed: {
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
    titleColSize: {
      type: [Number, String],
      default: '8',
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
