<template lang="pug">
  div.container
    v-row(justify="center" align="center")
      v-col(v-if="isDummyOrg" cols="12" sm="12").text-center
        v-alert(
          dense
          type="info"
        )
          v-row(no-gutters)
            v-col.grow.text-left
              | Do you own this business?
          v-row(no-gutters)
            v-col.grow.text-left
              v-btn(small color="accent" @click="onClaim").text-none Claim now
      v-col(cols="12" :class="{ 'text-center': $isMobile }")
        h3.font-21 Contact Us
        v-row(no-gutters)
          v-col.shrink
            v-icon(color="error" medium) mdi-map-marker
          v-col.grow
            span.ml-2.font-14.font-gray {{ completeAddress }}
        v-row(no-gutters)
          v-col.shrink
            v-icon(color="success" medium) mdi-phone
          v-col.grow
            span.ml-2.font-14.font-gray #[b {{ contactNumber }}]
      v-col(cols="12" :class="{ 'text-center': $isMobile }")
        v-btn(
          color="primary"
          shaped
          depressed
          @click="onInquiry"
        ).text-none.font-12
          v-icon(small left) mdi-forum
          | Questions? Chat with us now.
    v-divider
    br
    v-row(justify="center" align="center")
      v-col(
        cols="12"
        :class="{ 'text-left': !$isMobile, 'text-center': $isMobile }"
      )
        h3.font-21 About
        p(:class="{ 'text-justify': !$isMobile }").font-14 {{ description }}
</template>

<script>
import { isEmpty } from 'lodash';
import { formatAddress } from '~/utils/formats';

export default {
  props: {
    clinic: {
      type: Object,
      default: () => ({}),
    },
    isDummyOrg: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {};
  },
  computed: {
    name () {
      return this.clinic?.name;
    },
    completeAddress () {
      const { address } = this.clinic;
      if (isEmpty(address)) return 'Address not available';
      return formatAddress(address, 'street1, street2, city, province, country');
    },
    contactNumber () {
      return this.clinic?.phone || 'Contact Number not available';
    },
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} specializes in telehealth services. ${this.name || 'It'} is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
  },
  methods: {
    onClaim () {
      if (this.isPreviewMode) return;
      const message = `Hi, I want to inquire about claiming ownership of ${this.name} in MYCURE Clinics`;
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
    onInquiry () {
      if (this.isPreviewMode) return;
      const message = 'Hi, I have an inquiry about a health facility';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
  },
};
</script>

<style scoped>
.container {
  /* background: rgba(0, 153, 204, 0.2); */
  /* width:448px; */
}
h1{
  font-size: 27px;
}
p {
  color: #4D4D4D;
}
</style>
