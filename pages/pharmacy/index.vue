<template lang="pug">
  div(v-if="!loading").white
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
      title: 'MYCURE for Pharmacy and Drugstores',
      description: 'MYCURE provides medical POS and Inventory solutions that make pharmacy and drugstore management so much simpler.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
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
