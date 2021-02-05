<template lang="pug">
  v-container
    v-row(v-if="!$isMobile" justify="center" align="center")
      v-col(cols="10").pb-0
        v-toolbar(height="84").toolbar
          div.d-flex.mt-2.justify-space-between
            v-col(md="3")
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Services
                v-text-field(
                  v-model="serviceSearchQuery"
                  placeholder="Consultation (Virtual)"
                ).font-14.font-weight-regular
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold HMO Providers
                v-text-field(
                  placeholder="All Coverage"
                ).font-14.font-weight-regular
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Date
                v-text-field(
                  placeholder="Add Dates"
                ).font-14.font-weight-regular
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Location
                v-text-field(
                  placeholder="Anywhere"
                ).font-14.font-weight-regular
          v-spacer
          v-btn(
            v-if="!icon"
            depressed
            large
            rounded
            color="primary"
          ) #[b Search Now]
          v-btn(
            v-else
            large
            fab
            color="primary"
            @click="searchServices(serviceSearchQuery)"
          )
            v-icon mdi-magnify
        v-col(v-if="services" cols="12").pb-0
          v-row.filter-menu.white--text.font-14.ml-8
            div.d-flex
              span.mt-2 Filter:
              v-select(
                label="Book a Teleconsult"
                dense
                solo
              ).filter.ml-2.font-14.search-select
            div.d-flex.ml-4
              span.mt-2 Sort by:
              v-select(
                label="Relevance"
                dense
                solo
              ).filter.ml-2.font-14.search-select
          v-row
    v-row(v-else justify="center" align="end")
      v-col(cols="12").pb-0
        v-text-field(
          solo
          clearable
          rounded
          color="white"
          placeholder="Search Services"
        ).bg-white
          template(v-slot:append)
            v-icon(color="primary").search-icon mdi-magnify
</template>
<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    services: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      serviceSearchQuery: '',
    };
  },
  methods: {
    searchServices (servicesQuery) {
      this.$emit('search-services', servicesQuery);
    },
  },
};
</script>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  opacity: 0.8;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}

.filter-menu {
  flex-wrap: nowrap !important;
  font-weight: 600;
}

.filter >>> .v-input__slot {
  box-shadow: none !important;
  background-color: #0369A5 !important;
  border: none !important;
}

.filter >>> label {
  font-size: 14px;
  color: #FFFFFF;
}

.filter >>> i {
  color: #FFFFFF;
}
</style>
