<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Sales and stock reporting made simple"
      meta-title="MYCURE Pharmacy"
      description="MYCURE provides POS and Inventory solutions specifically designed for pharmacies and drugstores."
      has-custom-background
      background-image="Skin Clinics Full Illu"
      background-image-file-extension=".webp"
      image="Skin Clinics USP Mobile"
      custom-image-path="clinics/skin/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      btn-text="Get exclusive access"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        :items="features"
        image-dir="booking/"
        image-width="200px"
        image-height="200px"
        :icon-column-bindings="iconBindings"
      )
        template(slot="title")
          h2(:class="headerClasses") Acquire and Accomodate more Patients
          h3(:class="['primary--text', 'font-weight-semibold', ...subheaderClasses]") How it works?
    //-3rd panel
    generic-media-panel(
      :content="thirdPanel"
      hide-btn
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in thirdPanel.list")
          v-row(dense)
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="10" sm="5" md="7")
              span(:class="descriptionClasses") {{ item }}
    //- 4th panel
    call-to-action(:fluid="!$isMobile")
    //- 5th panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").white--text.text-center
              h2(:class="['white--text', ...headerClasses]").mb-5 Time to make that change today
              signup-button(
                depressed
                rounded
                :x-large="$isWideScreen"
                :large="!$isWideScreen"
                :class="btnClasses"
                color="success"
              ).text-none
                span Reserve my slot

</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Usp,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Point of Sales',
        description: 'Easy to use, barcode-ready POS',
        icon: 'open schedule',
        iconExtension: '.webp',
        alt: 'Phone scheduling icon',
      },
      {
        title: 'Inventory Tracking',
        description: 'Know where all your products go',
        icon: 'Organized Patient visits',
        iconExtension: '.webp',
        alt: 'Health checklist icon',
      },
      {
        title: 'Smart Reports',
        description: 'Get real-time business analytics',
        icon: 'covers from virtual',
        iconExtension: '.webp',
        alt: 'Virtual telehealth icon',
      },
    ];
    this.iconBindings = {
      cols: 8,
      md: 4,
    };
    // this.fifthPanel = {
    //   header: 'Time to make that change today',
    //   descriptions: [
    //     'Get exclusive access for free. Limited slots only.',
    //   ],
    // };
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.subheaderClasses = ['mc-subheader-set-1'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Pharmacy and Drugstores',
      description: 'MYCURE provides medical POS and Inventory solutions that make pharmacy and drugstore management so much simpler.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        title: 'Connect with Physicians and Clinics near You',
        list: [
          'Get more customers through referrals',
          'Easily validate prescriptions',
          'Promote your products',
        ],
        imageBindings: {
          image: 'Practice.png',
          imageAlt: 'Physicians and medical workers',
          customPath: 'doctors-clinics/',
          extensionExclusive: true,
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '280px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
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
