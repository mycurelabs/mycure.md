<template lang="pug">
  div(v-show="!loading").white
    //- 1st panel
    usp(
      title="Sales and stock reporting made simple"
      meta-title="MYCURE Pharmacy"
      description="MYCURE provides POS and Inventory solutions specifically designed for pharmacies and drugstores."
    )
    //- 2nd panel
    features(
      title="Manage your pharmacy like a pro"
      :items="features"
    )
    //- 3rd panel
    generic-media-panel(
      content-align-right
      cols-left="7"
      cols-right="5"
      :header="thirdPanel.header"
      :header-classes="headerClasses"
      dummy
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in thirdPanel.list")
          v-row(:align="i === 2 ? 'center' : 'start'" dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="checkListClasses") {{ item }}
    //- 4th panel
    call-to-action
    //- 5th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header="fifthPanel.header"
      :header-classes="headerClasses"
      :descriptions="fifthPanel.descriptions"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
    )

</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Point of Sales',
        description: 'Easy to use, barcode-ready POS',
      },
      {
        title: 'Inventory Tracking',
        description: 'Know where all your products go',
      },
      {
        title: 'Smart Reports',
        description: 'Get real-time business analytics',
      },
    ];
    this.thirdPanel = {
      header: 'Connect with physicians and clinics near you',
      list: [
        'Get more customers through referrals',
        'Easily validate prescriptions',
        'Promote your products',
      ],
    };
    this.fifthPanel = {
      header: 'Time to make that change today',
      descriptions: [
        'Get exclusive access for free. Limited slots only.',
      ],
    };
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE POS System for Pharmacy and Drugstores',
      description: 'MYCURE provides a POS system specifically catered to pharmacies and drugstores that make their inventory management easier.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    checkListClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
