<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="12")
          v-row(justify="center")
            v-col(cols="12").text-center
              strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
              h2(:class="titleClasses").lh-title.font-weight-semibold.mb-5 {{ title }}
              p(:class="descriptionClasses").grey--text.font-open-sans.mb-5 {{ description }}
          //- v-row(justify="center")
          //-   v-col(cols="12" md="6" xl="4").text-center.mb-10
          //-     v-btn(
          //-       v-for="(mode, key) in modeBtns"
          //-       :key="key"
          //-       color="primary"
          //-       v-bind="modeBtnBindings(mode)"
          //-       depressed
          //-       tile
          //-       :large="$isWideScreen"
          //-       @click="pricingMode = mode"
          //-     ).text-none
          //-       | Billed&nbsp;
          //-       span.text-capitalize {{ mode }}
          v-row(justify="center")
            v-col(
              v-for="(detail, key) in pricingDetails"
              :key="key"
              v-bind="columnBindings"
            )
              pricing-card(:bundle="detail")
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PricingCard from '~/components/commons/PricingCard';
export default {
  components: {
    GenericPanel,
    PricingCard,
  },
  props: {
    // Make container fluid
    fluid: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: null,
    },
    metaTitle: {
      type: String,
      default: '',
    },
    /**
     * @type {PricingDetail []} PricingDetails
     *
     * @type {Object} PricingDetail
     * @param {String} title
     * @param {String} currency
     * @param {Number} monthlyPrice
     * @param {Number} annualMonthlyPrice
     * @param {String | Number} users
     * @param {Array} inclusions
     * @param {String} btnText
     * @param {String} btnRoute
     * @param {Boolean} requireContact
     *
     */
    pricingDetails: {
      type: Array,
      default: () => ([]),
    },
    columnBindings: {
      type: Object,
      default: () => ({
        cols: '12',
        md: '3',
        xl: '3',
      }),
    },
  },
  data () {
    this.modeBtns = ['monthly', 'annually'];
    return {
      pricingMode: 'monthly', // monthly | annually
    };
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    metaTitleClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
  },
  methods: {
    modeBtnBindings (mode) {
      if (mode === this.pricingMode) return;
      return { outlined: true };
    },
  },
};
</script>
