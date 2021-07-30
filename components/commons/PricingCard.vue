<template lang="pug">
   v-card(:color="cardColor" :height="cardHeight" width="100%").rounded-xl.card-outter
      v-chip(v-if="isRecommended" color="warning" label small).chip.mt-n3.black--text.align-center.justify-center.font-weight-bold Recommended
      v-card-title.pt-8
        v-spacer
        h2(:class="[normalTextColor, {'font-21': !$isWideScreen, 'font-24': $isWideScreen}]").font-weight-bold {{ bundle.title }}
        v-spacer
      v-card-text.general-info-container.font-open-sans
        div.text-center.pb-3
          picture-source(
            custom-path="pricing/"
            image-file-extension=".webp"
            image-alt="Health facility pricing icon"
            :image="bundle.image"
            :image-width="cardType === 'enterprise' ? '200px' : iconSize"
            :image-height="cardType === 'enterprise' ? '139.4px' : iconSize"
          )
        div.text-center.description-container
          p(:class="[normalTextColor, textFontSize, recommendedText]") {{ bundle.description }}
        div.text-center#price-container
          template(v-if="!bundle.requireContact")
            p(:class="priceColor").font-weight-bold
              v-tabs-items(v-if="bundle.monthlyPrice > 0" v-model="paymentInterval" transition="slide-y-transition")
                v-tab-item(value="year" transition="slide-y-transition")
                  span(:class="{'font-30': !$isWideScreen, 'font-35': $isWideScreen}").currency.font-open-sans {{ bundle.currency }}&nbsp;
                  span(:class="{'font-45': !$isWideScreen, 'font-60': $isWideScreen}") {{ bundle.annualMonthlyPrice }}
                v-tab-item(value="month" transition="slide-y-transition")
                  span(:class="{'font-30': !$isWideScreen, 'font-35': $isWideScreen}").currency.font-open-sans {{ bundle.currency }}&nbsp;
                  span(:class="{'font-45': !$isWideScreen, 'font-60': $isWideScreen}") {{  bundle.monthlyPrice }}
              span(v-else).font-45 FREE
            //- span(v-else).font-xl {{ bundle.annualMonthlyPrice ? bundle.annualMonthlyPrice : bundle.monthlyPrice }}
        div.text-center.usage-metric-container
          p(v-if="!bundle.requireContact" :class="[normalTextColor, textFontSize, recommendedText]").black--text
            span(v-if="bundle.users") {{ bundle.users }} user
            br(v-if="bundle.users")
            | per clinic monthly
            template(v-if="!bundle.users")
              br
              br
          div(v-else).top-spacing-btn
            | &nbsp;
      v-card-text.card-actions
        slot(name="card-btn")
          template(v-if="bundle.requireContact")
            mc-btn(
              depressed
              rounded
              block
              event-category="Pricing"
              :color="btnColor"
              :event-label="`click-pricing-${bundle.title}`"
              :class="{'white--text': isRecommended}"
              @click="sendCrispMessage"
            ).mc-button-set-1.font-weight-semibold.text-none {{ bundle.btnText }}
          template(v-else)
            signup-button(
              depressed
              rounded
              block
              event-category="Pricing"
              :color="btnColor"
              :class="{'white--text': isRecommended}"
              :event-label="`click-pricing-${bundle.title}`"
              :pricing-bundle="bundle.id"
            ).mc-button-set-1.font-weight-semibold.text-none {{ bundle.btnText }}
        v-row(justify="center").mt-3
          v-col(cols="12" xl="10")
            div(v-for="(inclusion, inclusionKey) in mainInclusions" :key="inclusionKey").d-flex
              v-icon(:color="getInclusionIconColor(inclusion.valid)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid) }}
              span(:class="[getInclusionTextColor(inclusion.valid), textFontSize, {'font-weight-medium': isRecommended}]") {{ inclusion.text }}
      v-divider(:class="{'divider': !this.isRecommended, 'divider-dark': this.isRecommended}").mx-5
      v-card-text
        v-row(justify="center")
          v-col(cols="12" xl="10")
            div(v-for="(inclusion, inclusionKey) in additionalInclusions" :key="inclusionKey").d-flex
              template(v-if="inclusion.valid || !hideInvalidItems")
                v-icon(:color="getInclusionIconColor(inclusion.valid, true)" left :small="!$isWideScreen") {{ getInclusionIcon(inclusion.valid, true) }}
                span(:class="[getInclusionTextColor(inclusion.valid), textFontSize]") {{ inclusion.text }}
        //- v-row(justify="center" v-if="!showList")
        //-   v-col(cols="12" xl="10").text-center
        //-     v-btn(:color="isRecommended ? 'white' : 'primary'" text @click="showList = !showList").text-none
        //-       | {{ showList ? 'Collapse' : 'View Details'}}
        //-       v-icon(v-if="!showList" right) mdi-chevron-down
</template>

<script>
import SignupButton from '~/components/commons/SignupButton';
import PictureSource from '~/components/commons/PictureSource';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    SignupButton,
    PictureSource,
  },
  props: {
    bundle: {
      type: Object,
      default: () => ({}),
    },
    /**
     * @example 'month'
     * @example 'year'
     */
    paymentInterval: {
      type: String,
      default: 'month',
    },
    height: {
      type: String,
      default: null,
    },
    // - If non-inclusions will be included
    hideInvalidItems: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      showList: false,
    };
  },
  computed: {
    mainInclusions () {
      return this.bundle?.inclusions?.slice(0, 3) || [];
    },
    additionalInclusions () {
      const length = this.bundle?.inclusions?.length;
      if (!length) return [];
      return this.bundle?.inclusions.slice(3, length) || [];
    },
    iconSize () {
      return this.$isWideScreen ? '85px' : '65px';
    },
    cardType () {
      return this.bundle.value;
    },
    isRecommended () {
      return this.bundle.isRecommended;
    },
    cardColor () {
      return this.isRecommended ? 'primary' : 'white';
    },
    normalTextColor () {
      return { 'black--text': !this.isRecommended, 'white--text': this.isRecommended };
    },
    priceColor () {
      return { 'primary--text': !this.isRecommended, 'white--text': this.isRecommended };
    },
    btnColor () {
      return this.isRecommended ? 'warning' : 'primary';
    },
    cardHeight () {
      // if (!this.showList) return '500';
      return this.height || '800';
    },
    textFontSize () {
      return classBinder(this, {
        mobile: ['font-12'],
        regular: ['font-14'],
        wide: ['font-18'],
      });
    },
    recommendedText () {
      return this.isRecommended ? 'font-weight-bold' : 'font-weight-medium';
    },
  },
  methods: {
    getInclusionIconColor (valid, additional = false) {
      if (this.isRecommended) return 'white';
      if (!valid) return 'grey';
      if (additional) return 'green';
      return 'primary';
    },
    getInclusionIcon (valid, additional = false) {
      if (valid && additional) return 'mdi-plus-circle';
      if (valid) return 'mdi-checkbox-marked-circle';
      if (this.isRecommended && !valid) return 'mdi-close';
      return 'mdi-close-circle';
    },
    getInclusionTextColor (valid) {
      if (this.isRecommended) return 'white--text';
      if (valid) return 'black--text';
      return 'grey--text';
    },
    sendCrispMessage () {
      const message = 'Hello, I would like to inquire about the ENTERPRISE plan.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
  },
};
</script>

<style scoped>
.font-45 {
  font-size: 45px;
}

.font-60 {
  font-size: 60px;
}

/* .card-outter {
  position: relative;
  padding-bottom: 90px;
} */

/* .card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
} */

.price-container {
  position: relative;
}

.currency {
  position: absolute;
  top: 25%;
  left: 5%;
}

.general-info-container {
  position: relative;
  min-height: 240px;
}

.description-container {
  min-height: 85px;
}

.chip {
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 60%
}

/* .usage-metric-container {
  min-height: 50px;
} */
.top-spacing-btn {
  margin-top: -5px;
}
.divider {
  border-bottom: 1px solid black;
}
.divider-dark {
  border-bottom: 1px solid white;
}

#price-container .v-window {
  overflow: visible !important;
}
#price-container .v-window-item {
  overflow: visible !important;
}

.v-tabs-items {
  background-color: transparent !important;
}

@media screen and (width: 1920px) and (height: 1007px) {
  .top-spacing-btn {
    margin-top: 5px;
  }
}
@media screen and (min-width: 1921px) {
  .general-info-container {
    min-height: 235px;
  }
  .top-spacing-btn {
    margin-top: 15px;
  }
}
</style>
