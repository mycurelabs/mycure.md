<template lang="pug">
  v-container(:fluid="fluid")
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        v-row(justify="center")
          v-col(cols="12" md="10").text-center
            strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
            h2(:class="titleClasses").lh-title.font-weight-medium {{ title }}
          v-col(cols="12" md="6" v-if="description").text-center
            p(:class="descriptionClasses").grey--text.font-open-sans {{ description }}
        v-row(justify="center")
          v-col(cols="12" md="6" xl="4").text-center
            v-btn(
              v-for="(mode, key) in modeBtns"
              :key="key"
              color="primary"
              v-bind="modeBtnBindings(mode)"
              depressed
              tile
              :large="$isWideScreen"
              @click="pricingMode = mode"
            ).text-none
              | Billed&nbsp;
              span.text-capitalize {{ mode }}
        v-row(justify="center")
          v-col(
            v-for="(details, key) in pricingDetails"
            :key="key"
            cols="12"
            :md="columnSize"
          )
            v-card(flat height="100%" width="100%" :class="{'primary': key === 2}").card-outter.rounded-xl
              v-card-text(:class="{'white--text': key === 2}").py-8
                div.text-center
                  picture-source(
                    extension-exclusive
                    custom-path="pricing/"
                    :image="details.image"
                    image-file-extension=".png"
                    :image-alt="details.title"
                    :image-width="!$isMobile ? '50%' : '40%'"
                  )
                  h2.pt-5 {{ details.title }}
              div(:class="key === 2 ? 'divider-dark' : 'divider'").mx-5
              v-card-text(:class="{'white--text': key === 2}")
                v-row(justify="center")
                  v-col(cols="12" xl="10")
                    div(v-for="(inclusion, inclusionKey) in details.inclusions" :key="inclusionKey").d-flex
                      v-icon(:color="getInclusionColor(inclusion.valid, key)" left) {{ inclusion.valid ? 'mdi-checkbox-marked-circle-outline' : 'mdi-close' }}
                      span {{ inclusion.text }}
              div
              v-card-text(:class="{'white--text': key === 2}").py-8.card-actions
                div.text-center
                  div(v-if="details.requireContact").pb-10
                    br
                    br
                    br
                  template(v-else)
                    p.font-weight-bold
                      span.font-s.font-weight-medium {{ details.currency }}&nbsp;
                      span(v-if="pricingMode === 'monthly'").font-xl {{ details.monthlyPrice }}
                      span(v-else).font-xl {{ details.annualMonthlyPrice ? details.annualMonthlyPrice : details.monthlyPrice }}
                    p.font-s {{ details.users }} user
                      br
                      | per month
                  signup-button(
                    depressed
                    rounded
                    block
                    event-category="Pricing"
                    :color="key === 2 ? 'white' : 'primary'"
                    :class="{'primary--text': key === 2}"
                    :large="$isRegularScreen"
                    :x-large='$isWideScreen'
                    :event-label="`click-pricing-${details.title}`"
                    :pricing-bundle="details.id"
                  ).font-s.font-weight-medium {{ details.btnText }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    PictureSource,
    SignupButton,
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
    columnSize: {
      type: Number,
      default: 3,
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
    onBtnClick (details) {
      const { btnRoute, requireContact } = details;
      if (requireContact) {
        window.$crisp.push(['do', 'chat:toggle']);
        return;
      }
      if (btnRoute) {
        let preset = '';
        switch (this.$nuxt.$route.name) {
          case 'doctors-clinics':
            preset = 'doctor';
            break;
          case 'clinics':
            preset = 'clinic';
            break;
          case 'diagnostics':
            preset = 'clinic-diagnostic';
            break;
          case 'telehealth':
            preset = 'doctor-telehealth';
            break;
          default:
            preset = '';
        }
        this.$router.push({
          name: btnRoute,
          query: { type: preset },
        });
      }
    },
    getInclusionColor (valid, key) {
      if (!valid) return 'error';
      if (key === 2) return 'white';
      return 'primary';
    },
  },
};
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 250px;
  border: 3px solid #04B1E7;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.divider {
  border-bottom: 1px solid black;
}
.divider-dark {
  border-bottom: 1px solid white;
}
</style>
