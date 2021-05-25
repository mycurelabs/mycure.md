<template lang="pug">
   v-card(flat height="100%" width="100%").card-outter.rounded-xl
      v-card-title
        v-spacer
        h2.font-weight-semibold {{ bundle.title }}
        v-spacer
      v-card-text.general-info-container
        div.text-center.pb-5
          picture-source(
            extension-exclusive
            custom-path="pricing/"
            :image="bundle.image"
            image-file-extension=".png"
            :image-alt="bundle.title"
            :image-width="!$isMobile ? '50%' : '40%'"
          )
        div.text-center
          div(v-if="bundle.requireContact")
            p.font-l.font-weight-semibold Contact Us
          template(v-else)
            p.font-weight-bold
              template(v-if='bundle.monthlyPrice > 0')
                span.font-s.font-weight-semibold {{ bundle.currency }}&nbsp;
                span.font-xl.font-weight-semibold {{ bundle.monthlyPrice }}
              span(v-else).font-xl.font-weight-semibold FREE
              //- span(v-else).font-xl {{ bundle.annualMonthlyPrice ? bundle.annualMonthlyPrice : bundle.monthlyPrice }}
            p.font-s
              span(v-if="bundle.users") {{ bundle.users }} user
              br
              | per clinic
              br
              | per month
        div.text-center.description-container
          p.info--text {{ bundle.description }}
      v-card-text
        template(v-if="bundle.requireContact")
          mc-btn(
            depressed
            rounded
            outlined
            block
            event-category="Pricing"
            color="info"
            :large="$isRegularScreen"
            :x-large='$isWideScreen'
            :event-label="`click-pricing-${bundle.title}`"
            @click="sendCrispMessage"
          ).font-s.font-weight-semibold.text-none {{ bundle.btnText }}
        template(v-else)
          signup-button(
            depressed
            rounded
            outlined
            block
            event-category="Pricing"
            color="info"
            :large="$isRegularScreen"
            :x-large='$isWideScreen'
            :event-label="`click-pricing-${bundle.title}`"
            :pricing-bundle="bundle.id"
          ).font-s.font-weight-semibold.text-none {{ bundle.btnText }}
      v-card-text
        v-row(justify="center")
          v-col(cols="12" xl="10")
            div(v-for="(inclusion, inclusionKey) in bundle.inclusions" :key="inclusionKey").d-flex
              v-icon(:color="getInclusionColor(inclusion.valid)" left) mdi-check
              span(:class="inclusion.valid ? 'info--text' : 'grey--text'") {{ inclusion.text }}
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
      return 'info';
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
  padding-bottom: 250px;
  border: 2px solid #0174BB;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.general-info-container {
  position: relative;
  min-height: 400px;
}

.description-container {
  position: absolute;
  bottom: 0;
}

.divider {
  border-bottom: 1px solid black;
}
.divider-dark {
  border-bottom: 1px solid white;
}

@media screen and (min-width: 1920px) {
  .general-info-container {
    min-height: 450px;
  }
}
</style>
