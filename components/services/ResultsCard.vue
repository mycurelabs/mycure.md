<template lang="pug">
  div(style="background-color: #fafafa")
    v-container
      v-row(align="center" justify="center")
        v-col(cols="12" md="10")
          v-card.results-card
            div(style="background-color: #fafafa").d-flex.pa-2
              v-col(cols="2" align="center")
                v-avatar(
                  v-if="isDoctor"
                  :size="!$isMobile ? 146 : 80"
                )
                  img(
                    alt="Doctor Profile"
                    )
                v-avatar(
                  v-if="isService"
                  :size="!$isMobile ? 146 : 80"
                )
                  img(
                    src="~/assets/images/MYCURE-icon.png"
                    alt="Services"
                    )
                div(v-if="isDoctor")
                  a(href="#") View Website
              v-col(cols="5" :class="{ 'd-flex' : !$isMobile }").ml-3.text-left
                strong(v-if="isDoctor").font-18 Jose Rizal, MD, DPSEDM
                strong(v-if="isService").font-18 {{ service.name }}
                template(v-if="isService")
                  div(v-if="serviceOrganization[0] !== undefined")
                    p.ma-0.font-weight-bold.primary--text {{ serviceOrganization[0].name }}
                div(v-if="isDoctor")
                  p.ma-0
                    span Endocrinology #[span |] 13 years experience
                  span Quezon City
                div.mt-4(v-if="isDoctor")
                  div.d-flex
                    v-icon mdi-map-marker
                    span Clinics:
                  ul.clinics-list
                    li Providence Hospital
                    li Medical Center Manila
                    li New Era General Hospital
                template(v-if="isService")
                  div(v-if="serviceOrganization[0] !== undefined").mt-4
                    div(v-if="serviceOrganization[0].address").d-flex
                      v-icon.mr-2.mb-auto mdi-map-marker
                      p {{ `${serviceOrganization[0].address.street1}, ${serviceOrganization[0].city}, ${serviceOrganization[0].province}, ${serviceOrganization[0].country} ` }}
                    div(v-if="serviceOrganization[0].phone").d-flex
                      v-icon.mr-2.mb-auto mdi-phone
                      p.font-weight-bold {{ serviceOrganization[0].phone }}
                    div.d-flex
                      v-icon.mr-2.mb-auto mdi-calendar-today
                      p #[strong Mon - Fri 7:00AM to 3:00 PM]
              v-col(cols="1")
              v-col
                div(v-if="service.price").d-flex.mb-2
                  v-icon.mr-2 mdi-wallet
                  strong.font-18 Php {{ service.price }}
                div.d-flex
                  v-icon(color="success").mr-2 mdi-shield-check
                  span HMO Providers:
                div.my-4
                v-btn(
                    v-if="isService"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    rounded
                    block
                  ) #[b Book now]
                  v-btn(
                    v-if="isDoctor"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    rounded
                    block
                  ).mb-2 #[b Book a Teleconsult]
                  v-btn(
                    v-if="isDoctor"
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    outlined
                    rounded
                    block
                  ) #[b Book a Visit]
</template>
<script>
export default {
  props: {
    isService: {
      type: Boolean,
      default: false,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    service: {
      type: Object,
      default: () => {},
    },
  },
  data () {
    return {
      serviceOrganization: [],
    };
  },
  mounted () {
    this.fetchOrganization();
  },
  methods: {
    async fetchOrganization () {
      const { items } = await this.$sdk.service('organizations').find({
        id: this.service.facility,
      });
      if (items) {
        this.serviceOrganization = items;
      }

      console.log('serviceOrganization', this.serviceOrganization[0]);
    },
  },
};
</script>
<style scoped>
.results-card {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}

.clinics-list {
  list-style: none;
}
</style>
