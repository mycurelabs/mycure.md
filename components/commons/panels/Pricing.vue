<template lang="pug">
  div.pricing-bg.mx-n3
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center'}")
          v-col(cols="12")
            v-row(justify="center")
              v-col(cols="12").text-center
                strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
                h2(:class="titleClasses").lh-title.font-weight-semibold.mb-5 {{ title }}
                p(:class="descriptionClasses").font-open-sans.mb-5 {{ description }}
            v-row(justify="center")
              v-col(cols="12" md="6" xl="4").text-center.mb-10
                div.d-flex.align-center.justify-center
                  strong(:class="descriptionClasses").font-open-sans.black--text.mr-3 Billed Monthly
                  v-switch(
                    v-model="switchModel"
                    inset
                    color="info"
                  )
                  strong(:class="descriptionClasses").font-open-sans.black--text Billed Annually
                //- v-btn(
                //-   v-for="(mode, key) in modeBtns"
                //-   :key="key"
                //-   color="primary"
                //-   v-bind="modeBtnBindings(mode)"
                //-   depressed
                //-   tile
                //-   :large="$isWideScreen"
                //-   @click="pricingMode = mode"
                //- ).text-none
                //-   | Billed&nbsp;
                //-   span.text-capitalize {{ mode }}
            v-row(justify="center")
              v-col(
                v-for="(pack, key) in pricingPackages"
                :key="key"
                v-bind="columnBindings"
              )
                pricing-card(
                  :bundle="pack"
                  :pricing-mode="pricingMode"
                ).elevation-3
</template>

<script>
import classBinder from '~/utils/class-binder';
import { getSubscriptionPackagesPricing } from '~/services/subscription-packages';
import GenericPanel from '~/components/generic/GenericPanel';
import PricingCard from '~/components/commons/PricingCard';
export default {
  components: {
    GenericPanel,
    PricingCard,
  },
  props: {
    /**
     * @type {String} type
     * @example 'doctor'
     * @example 'clinic'
     * @example 'diagnostic',
     */
    type: {
      type: String,
      default: 'clinic',
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
      loading: false,
      switchModel: false,
      pricingMode: 'monthly', // monthly | annually
      pricingPackages: [],
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
  watch: {
    switchModel (val) {
      if (val) {
        this.pricingMode = 'annually';
        return;
      }
      this.pricingMode = 'monthly';
    },
  },
  async created () {
    // fetch packages
    await this.fetchPackages(this.type);
  },
  methods: {
    async fetchPackages (type) {
      try {
        this.loading = true;
        this.pricingPackages = await getSubscriptionPackagesPricing(type) || [];
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    modeBtnBindings (mode) {
      if (mode === this.pricingMode) return;
      return { outlined: true };
    },
  },
};
</script>

<style scoped>
.pricing-bg {
  width: 100vw;
  background-image: url('../../../assets/images/pricing/Pricing BG.png');
  background-position: center center;
  background-size: 100% 100%;
}
</style>
