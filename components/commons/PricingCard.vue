<template lang="pug">
   v-card(height="100%" width="100%").rounded-xl.card-outter
      v-card-title
        v-spacer
        h2.font-20.font-weight-bold {{ bundle.title }}
        v-spacer
      v-card-text.general-info-container.font-open-sans
        div.text-center.pb-5
          picture-source(
            extension-exclusive
            custom-path="pricing/"
            :image="bundle.image"
            image-file-extension=".png"
            :image-alt="bundle.title"
            image-width="65'"
          )
        div.text-center.description-container
          p.font-weight-semibold.font-12 {{ bundle.description }}
        div.text-center
          div(v-if="bundle.requireContact")
            p.font-30.font-weight-bold.primary--text.lh-title Contact Us
          template(v-else)
            p.font-weight-bold.primary--text
              template(v-if='bundle.monthlyPrice > 0')
                span.font-30 {{ bundle.currency }}&nbsp;
                span.font-45 {{ bundle.monthlyPrice }}
              span(v-else).font-45 FREE
            //- span(v-else).font-xl {{ bundle.annualMonthlyPrice ? bundle.annualMonthlyPrice : bundle.monthlyPrice }}
        div.text-center.usage-metric-container
          p(v-if="!bundle.requireContact").font-10.black--text
            span(v-if="bundle.users") {{ bundle.users }} user
            br(v-if="bundle.users")
            | per clinic
            br
            | per month
      v-divider.divider.mx-5
      v-card-text
        v-row(justify="center")
          v-col(cols="12" xl="10")
            div(v-for="(inclusion, inclusionKey) in bundle.inclusions" :key="inclusionKey").d-flex
              v-icon(:color="getInclusionColor(inclusion.valid)" left) {{ inclusion.valid ? 'mdi-checkbox-marked-circle' : 'mdi-close-circle' }}
              span(:class="inclusion.valid ? 'black--text' : 'grey--text'").font-10 {{ inclusion.text }}
      v-card-text.card-actions
        slot(name="card-btn")
          template(v-if="bundle.requireContact")
            mc-btn(
              depressed
              rounded
              block
              event-category="Pricing"
              color="primary"
              :event-label="`click-pricing-${bundle.title}`"
              @click="sendCrispMessage"
            ).font-14.font-weight-semibold.text-none {{ bundle.btnText }}
          template(v-else)
            signup-button(
              depressed
              rounded
              block
              event-category="Pricing"
              color="primary"
              :event-label="`click-pricing-${bundle.title}`"
              :pricing-bundle="bundle.id"
            ).font-14.font-weight-semibold.text-none {{ bundle.btnText }}
</template>

<script>
import SignupButton from '~/components/commons/SignupButton';
import PictureSource from '~/components/commons/PictureSource';
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
  },
  methods: {
    getInclusionColor (valid) {
      if (!valid) return 'grey';
      return 'primary';
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
.card-outter {
  position: relative;
  padding-bottom: 100px;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.general-info-container {
  position: relative;
  min-height: 325px;
}

.description-container {
  min-height: 100px;
}

/* .usage-metric-container {
  min-height: 50px;
} */

.divider {
  border-bottom: 1px solid black;
}
.divider-dark {
  border-bottom: 1px solid white;
}

@media screen and (min-width: 1920px) {
  .general-info-container {
    min-height: 350px;
  }
}
</style>
