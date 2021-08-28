<template lang="pug">
  div(v-if="emptyLocationSearch || initialServices || locationMatch" style="background-color: #fafafa")
    v-container
      v-row(align="center" justify="center")
        v-col(cols="12" md="10")
          v-card(flat).results-card
            div(style="background-color: #fafafa").d-flex.pa-2
              v-col(cols="4" md="2" align="center")
                v-avatar(
                  v-if="isDoctor"
                  :size="!$isMobile ? 146 : 80"
                )
                  img(
                    alt="Doctor Profile"
                  )
                img(
                  src="~/assets/images/facility-placeholder.jpg"
                  alt="Services"
                  :width="!$isMobile ? 146 : 80"
                )
                //- v-avatar(
                //-   v-if="isService"
                //-   :size="!$isMobile ? 146 : 80"
                //- )
                //-   img(
                //-     src="~/assets/images/MYCURE-icon.png"
                //-     alt="Services"
                //-   )
                div(v-if="isDoctor")
                  a(href="#") View Website
              v-col(cols="6" md="5").ml-3.text-left
                span(v-if="isDoctor").font-18 Jose Rizal, MD, DPSEDM
                span(v-if="isService").font-18 {{ service.name }}
                template(v-if="isService")
                  div(v-if="serviceOrganization[0] !== undefined")
                    p.ma-0.font-weight-bold.primary--text {{ serviceOrganization[0].name }}
                div(v-if="isDoctor")
                  p.ma-0
                    span Endocrinology #[span |] 13 years experience
                  span Quezon City
                div.mt-4(v-if="isDoctor")
                  div.d-flex
                    v-icon(color="primary") mdi-map-marker
                    span Clinics:
                  ul.clinics-list
                    li Providence Hospital
                    li Medical Center Manila
                    li New Era General Hospital
                template(v-if="isService")
                  div(v-if="serviceOrganization[0] !== undefined").mt-4
                    div(v-if="serviceOrganization[0].address").d-flex
                      v-icon(color="primary").mr-2.mb-auto mdi-map-marker
                      p {{ serviceAddress  }}
                    div(v-if="serviceOrganization[0].phone").d-flex
                      v-icon(color="primary").mr-2.mb-auto mdi-phone
                      p.font-weight-bold {{ serviceOrganization[0].phone }}
                    div.d-flex
                      v-icon(color="primary").mr-2.mb-auto mdi-calendar-today
                      p #[strong Mon - Fri 7:00AM to 3:00 PM]
                    template(v-if="$isMobile")
                      template(v-if="hasCoverages")
                        div.d-flex
                          v-icon(color="success").mr-2 mdi-shield-check
                          span HMO:
                        div.d-flex
                          v-tooltip(
                            v-for="(coverage, key) in coverages"
                            :key="key"
                            top
                          )
                            template(v-slot:activator="{ on, attrs }")
                              v-avatar(
                                size="40"
                                color="secondary"
                                v-on="on"
                              ).mx-1
                                v-img(v-if="coverage.picURL" :src="coverage.picURL")
                                span(v-else).white--text {{ coverage.name.substring(0,1) }}
                            span {{ coverage.name || 'HMO' }}
                      div(v-if="service.price").d-flex.mb-2
                        v-icon(color="primary").mr-2 mdi-wallet
                        span.font-18 Php {{ service.price }}
                      div.my-1
                      v-btn(
                        v-if="isService && !readOnly"
                        color="primary"
                        @click="openPXPortal"
                        target="_blank"
                        rel="noopener noreferrer"
                        rounded
                        block
                        ) #[b Book now]
                        v-btn(
                          v-if="isDoctor && !readOnly"
                          color="primary"
                          @click="openPXPortal"
                          target="_blank"
                          rel="noopener noreferrer"
                          rounded
                          block
                        ).mb-2 #[b Book a Teleconsult]
                        v-btn(
                          v-if="isDoctor && !readOnly"
                          color="primary"
                          @click="openPXPortal"
                          target="_blank"
                          rel="noopener noreferrer"
                          outlined
                          rounded
                          block
                        ) #[b Book a Visit]
              v-col(v-if="!$isMobile" cols="1")
              v-col(v-if="!$isMobile")
                div(v-if="service.price").d-flex.mb-2
                  v-icon(color="primary").mr-2 mdi-wallet
                  span.font-18 Php {{ service.price }}
                template(v-if="hasCoverages")
                  div.d-flex
                    v-icon(color="success").mr-2 mdi-shield-check
                    span HMO:
                  div.d-flex
                    v-tooltip(
                      v-for="(coverage, key) in coverages"
                      :key="key"
                      top
                    )
                      template(v-slot:activator="{ on, attrs }")
                        v-avatar(
                          size="40"
                          color="secondary"
                          v-on="on"
                        ).mx-1
                          v-img(v-if="coverage.picURL" :src="coverage.picURL")
                          span(v-else).white--text {{ coverage.name.substring(0,1) }}
                      span {{ coverage.name || 'HMO' }}
                div.my-4
                v-btn(
                    v-if="isService && !readOnly"
                    color="primary"
                    @click="openPXPortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    rounded
                    block
                  ) #[b Book now]
                  v-btn(
                    v-if="isDoctor && !readOnly"
                    color="primary"
                    @click="openPXPortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    rounded
                    block
                  ).mb-2 #[b Book a Teleconsult]
                  v-btn(
                    v-if="isDoctor && !readOnly"
                    color="primary"
                    @click="openPXPortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    outlined
                    rounded
                    block
                  ) #[b Book a Visit]
</template>
<script>
import isEmpty from 'lodash/isEmpty';
import { formatAddress } from '~/utils/formats';
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
    locationText: {
      type: String,
      default: '',
    },
    emptyLocationSearch: {
      type: Boolean,
      default: false,
    },
    initialServices: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      serviceOrganization: [],
    };
  },
  computed: {
    locationMatch () {
      const location = this.locationText;
      if (location) {
        return this.serviceOrganization[0]?.address?.city.toLowerCase().includes(location.toLowerCase());
      }

      return false;
    },
    organization () {
      return this.service.facility;
    },
    serviceId () {
      return this.service.id;
    },
    serviceAddress () {
      const { address } = this.serviceOrganization[0];
      if (isEmpty(address)) return 'No address available';
      return formatAddress(address, 'street1, city, province, country');
    },
    hasCoverages () {
      return this.service?.coveragesData?.length;
    },
    coverages () {
      const coverages = this.service?.coveragesData;
      if (!coverages?.length) return [];
      return coverages.map((coverage) => {
        return {
          name: coverage.name || coverage.contractData?.insurerName,
          ...coverage.contractData?.insurerPicURL && { picURL: coverage.contractData.insurerPicURL },
        };
      });
    },
  },
  watch: {
    locationMatch (val) {
      if (!val) {
        this.$emit('location-not-matched');
      }
    },
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
    },
    openPXPortal () {
      window.open(`${process.env.PX_PORTAL_URL}/appointments/step-1?organization=${this.organization}&service=${this.serviceId}`, '_blank', 'noopener, noreferrer');
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
