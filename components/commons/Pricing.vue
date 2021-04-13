<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="6").text-center
        strong(v-if="metaTitle").font-xs.primary--text {{ metaTitle }}
        h1(:class="titleClasses").lh-title {{ title }}
    v-row(justify="center")
      v-col(cols="12" md="4").text-center
        mc-btn(
          v-for="(mode, key) in modeBtns"
          :key="key"
          color="primary"
          v-bind="modeBtnBindings(mode)"
          depressed
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
        v-card(color="#fafafa" flat height="100%" width="100%").card-outter
          v-toolbar(flat color="primary" dark)
            v-spacer
            v-toolbar-title {{ details.title }}
            v-spacer
          v-card-text.py-8
            div.text-center
              p.font-weight-bold {{ details.currency }}&nbsp;
                span(v-if="pricingMode === 'monthly'").font-m {{ details.monthlyPrice }}
                span(v-else).font-m {{ details.annualMonthlyPrice ? details.annualMonthlyPrice : details.monthlyPrice }}
              p {{ details.users }} user
                br
                | per month
              template(v-for="inclusion in details.inclusions")
                v-icon(small color="primary" left) mdi-check
                span {{ inclusion }}
                br
          v-card-actions.card-actions
            mc-btn(
              depressed
              block
              :to="{ name: details.btnRoute }"
              color="success"
            ).text-none {{ details.btnText }}
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
  props: {
    title: {
      type: String,
      default: '',
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
    this.modeBtns = ['monthly', 'anually'];
    return {
      pricingMode: 'monthly', // monthly | annually
    };
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
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
