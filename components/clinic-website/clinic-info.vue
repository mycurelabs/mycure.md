<template lang="pug">
  div.container
    v-row(justify="center" align="center")
      v-col(cols="12" sm="12").text-center
        v-alert(
          v-if="isDummyOrg"
          dense
          type="info"
        )
          v-row(no-gutters)
            v-col.grow.text-left
              | Do you own this business?
          v-row(no-gutters)
            v-col.grow.text-left
              v-btn(small color="accent" @click="onClaim").text-none Claim now
        v-avatar(size="130")
          img(:src="picURL")
      v-col(cols="12").text-center
        h1 {{ name }}
        p.font-14 {{ completeAddress }}
      v-col(cols="10")
        v-icon(medium) mdi-phone
        span.ml-2 #[b {{ contactNumber }}]
    v-row(justify="center" align="center")
      v-col(
        cols="12"
        :class="{ 'text-left': !$isMobile, 'text-center': $isMobile }"
      )
        h3.font-21 About
        p.text-justify.font-14 {{ description }}
</template>

<script>
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
  },
  data () {
    return {};
  },
  computed: {
    name () {
      return this.clinic?.name || 'MYCURE Clinic';
    },
    address () {
      return [
        this.clinic?.address?.city,
        this.clinic?.address?.province,
        this.clinic?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    completeAddress () {
      return [
        this.clinic?.address?.street1,
        this.clinic?.address?.street2,
        this.clinic?.address?.city,
        this.clinic?.address?.province,
        this.clinic?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    contactNumber () {
      return this.clinic?.phone || 'Contact Number not available';
    },
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.clinic?.description ||
      `${this.clinic?.name} specializes in telehealth services. ${this.clinic?.name} telemedicine service is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
  },
  methods: {
    onClaim () {
      const message = `Hi, I want to inquire about claiming ownership of ${this.name} in MYCURE Clinics`;
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
