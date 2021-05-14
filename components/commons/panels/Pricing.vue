<template lang="pug">
  v-container(:fluid="fluid")
    v-row(justify="center" align="center")
      v-col(cols="12" md="10")
        v-row(justify="center")
          v-col(cols="12" md="10").text-center
            strong(v-if="metaTitle" :class="metaTitleClasses").primary--text {{ metaTitle }}
            h1(:class="titleClasses").lh-title.font-weight-medium {{ title }}
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
            v-card(color="#fafafa" flat height="100%" width="100%" rounded).card-outter
              v-toolbar(flat color="info" dark height="175").text-center
                v-col
                  picture-source(
                    extension-exclusive
                    custom-path="pricing/"
                    :image="details.image"
                    image-file-extension=".png"
                    :image-alt="details.title"
                    :image-width="!$isMobile ? '60%' : '40%'"
                  )
                  v-toolbar-title {{ details.title }}
              v-card-text.py-8
                div.text-center
                  p(v-if="details.requireContact").font-m.font-weight-bold.pb-10 Contact Us
                    br
                    br
                  template(v-else)
                    p.font-weight-bold {{ details.currency }}&nbsp;
                      span(v-if="pricingMode === 'monthly'").font-l {{ details.monthlyPrice }}
                      span(v-else).font-l {{ details.annualMonthlyPrice ? details.annualMonthlyPrice : details.monthlyPrice }}
                    p {{ details.users }} user
                      br
                      | per month
              v-divider(:class="{'mt-2' : details.requireContact }")
              v-card-text
                div(v-for="(inclusion, key) in details.inclusions" :key="key").d-flex
                  v-icon(small :color="inclusion.valid ? 'primary' : 'error'" left) {{ inclusion.valid ? 'mdi-check' : 'mdi-close' }}
                  span {{ inclusion.text }}
              div.card-actions
                mc-btn(
                  depressed
                  block
                  tile
                  color="success"
                  event-category="Pricing"
                  :event-label="`click-pricing-${details.title}`"
                  @click="onBtnClick(details)"
                ).text-none {{ details.btnText }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
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
            preset = 'doctors';
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
          params: { type: preset },
        });
      }
    },
  },
};
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
