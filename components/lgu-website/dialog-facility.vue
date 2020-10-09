<template lang="pug">
  v-dialog(
    v-model="model"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    :hide-overlay="$vuetify.breakpoint.smAndDown"
    :width="$vuetify.breakpoint.mdAndDown ? $vuetify.breakpoint.width : $vuetify.breakpoint.width - 200"
  )
    //- mobile
    v-toolbar(
      v-if="$vuetify.breakpoint.smAndDown"
      color="primary"
    )
      v-btn(
        depressed
        icon
        @click="$emit('toggleFacilityDialog')"
      )
        v-icon.white--text mdi-close
    v-card(color="#E0E0E0").py-2.px-4
      v-container
        template(v-if="$vuetify.breakpoint.smAndDown")
          v-row
            v-col(cols="12")
              v-card(height="100%")
                v-container
                  v-row
                    v-img(height="300" width="100%" :src="getImage(facilityImage)")
                  v-row
                    v-col
                      h1 {{ facility.name }}
                      p.grey--text.lighten-1 Description
                      p {{ formattedDescription }}
                      p.grey--text.lighten-1 Barangay/s under this facility
                      template(v-if="formattedBrgys.length === 0")
                        p No barangay available
                      template(v-else)
                        ul.mb-2
                          template(v-for="item in formattedBrgys")
                            li {{ item }}
                      p.grey--text.lighten-1 Services
                  v-row(v-if="isLoadingFacilityInfo")
                    v-col.text-center
                      v-progress-circular(
                        indeterminate
                        color="primary"
                      )
                  v-row(v-else)
                    template(v-if="selectedHcFacilityServices.length === 0")
                      v-col.text-center
                        p.font-weight-bold No services available
                    template(v-else v-for="item in selectedHcFacilityServices")
                      v-col(cols="12" sm="12" md="6")
                        div.d-flex.align-center
                          v-avatar(
                            color="primary"
                            size="26"
                          ).mr-2
                            v-icon.white--text mdi-check
                          span {{ item.name }}
                  v-row
                    v-col
                      p.mb-0.grey--text.lighten-1 Address
                      p {{ formattedAddress }}
                  v-row
                    v-col
                      p.mb-0.grey--text.lighten-1 Phone
                      p {{ formattedPhone }}
                  v-row
                    v-col
                      p.grey--text.lighten-1 Providers
                      div(v-if="isLoadingFacilityInfo").text-center
                        v-progress-circular(
                          indeterminate
                          color="primary"
                        )
                      div(v-else)
                        template(v-if="selectedHcFacilityProviders.length === 0")
                          div.text-center
                            p.font-weight-bold No providers available
                        template(v-else v-for="item in selectedHcFacilityProviders")
                          div.d-flex.align-center.mb-4
                            v-avatar.mr-2
                              img(:src="getImage(item.picURL)")
                            div
                              p.mb-0.font-weight-bold {{ formattedProviderName(item) }}
                              p.mb-0 {{ formattedProviderInfo(item) }}
                  v-row
                    v-col(cols="6")
                      v-btn(
                        :large="$vuetify.breakpoint.mdAndDown"
                        :small="$vuetify.breakpoint.smAndDown"
                        depressed
                        text
                        color="primary"
                        @click="$emit('toggleFacilityDialog')"
                      ) Back
                    v-col(cols="6").text-right
                      v-btn(
                        :large="$vuetify.breakpoint.mdAndDown"
                        :small="$vuetify.breakpoint.smAndDown"
                        depressed
                        color="success"
                        :href="url"
                      ) CONSULT NOW
        //- desktop
        template(v-else)
          v-row
            v-col(cols="12" sm="12" md="4" lg="3" offset-lg="1" order="2" order-md="1")
              v-card(height="100%")
                v-container
                  div.d-flex.flex-column
                    v-img(height="300" width="100%" :src="getImage(facilityImage)")
                    p.mb-0.grey--text.lighten-1 Address
                    p {{ formattedAddress }}
                    p.mb-0.grey--text.lighten-1 Phone
                    p {{ formattedPhone }}
                    p.grey--text.lighten-1 Providers
                    div(v-if="isLoadingFacilityInfo").text-center
                      v-progress-circular(
                        indeterminate
                        color="primary"
                      )
                    div(v-else)
                      template(v-if="selectedHcFacilityProviders.length === 0")
                        div.text-center
                          p.font-weight-bold No providers available
                      template(v-else v-for="item in selectedHcFacilityProviders")
                        div.d-flex.align-center.mb-4
                          v-avatar.mr-2
                            img(:src="getImage(item.picURL)")
                          div
                            p.mb-0.font-weight-bold {{ formattedProviderName(item) }}
                            p.mb-0 {{ formattedProviderInfo(item) }}
            v-col(cols="12" sm="12" md="8" lg="7" order="1" order-md="2")
              v-card(height="100%")
                v-container.pa-6
                  v-row
                    v-col(cols="6" sm="4" md="4")
                      v-btn(
                        large
                        depressed
                        text
                        color="primary"
                        @click="$emit('toggleFacilityDialog')"
                      ) Back
                    v-spacer(v-if="$vuetify.breakpoint.mdAndUp")
                    v-col(cols="6" sm="8" md="4").text-right
                      v-btn(
                        large
                        depressed
                        color="success"
                        :href="url"
                      ) CONSULT NOW
                  v-row
                    v-col
                      h1 {{ facility.name }}
                      p.grey--text.lighten-1 Description
                      p {{ formattedDescription }}
                      p.grey--text.lighten-1 Barangay/s under this facility
                      template(v-if="formattedBrgys.length === 0")
                        p No barangay available
                      template(v-else)
                        ul.mb-2
                          template(v-for="item in formattedBrgys")
                            li {{ item }}
                      p.grey--text.lighten-1 Services
                  v-row(v-if="isLoadingFacilityInfo")
                    v-col.text-center
                      v-progress-circular(
                        indeterminate
                        color="primary"
                      )
                  v-row(v-else)
                    template(v-if="selectedHcFacilityServices.length === 0")
                      v-col.text-center
                        p.font-weight-bold No services available
                    template(v-else v-for="item in selectedHcFacilityServices")
                      v-col(cols="12" sm="12" md="6")
                        div.d-flex.align-center
                          v-avatar(
                            color="primary"
                            size="26"
                          ).mr-2
                            v-icon.white--text mdi-check
                          span {{ item.name }}
                  v-row
                    v-col
                      v-btn(
                        large
                        depressed
                        color="success"
                        :href="url"
                      ) CONSULT NOW
</template>

<script>
export default {
  props: {
    value: null, // eslint-disable-line
    isLoading: {
      type: Boolean,
      default: false,
    },
    facility: {
      type: Object,
      default: () => ({}),
    },
    doctors: {
      type: Array,
      default: () => ([]),
    },
    isLoadingFacilityInfo: {
      type: Boolean,
      default: false,
    },
    selectedHcFacilityProviders: {
      type: Array,
      default: () => ([]),
    },
    selectedHcFacilityServices: {
      type: Array,
      default: () => ([]),
    },
    lguId: {
      type: String,
      default: '',
    },
  },
  computed: {
    formattedAddress () {
      const address = `${this.facility.address?.street1 ?? ''} ${this.facility.address?.city ?? ''} ${this.facility.address?.province ?? ''} ${this.facility.address?.country ?? ''}`;
      return address.trim().length < 1 ? 'No address provided' : address;
    },
    formattedPhone () {
      const phone = `${this.facility.phone ?? ''}`;
      return phone.trim().length < 1 ? 'No phone number provided' : phone;
    },
    formattedDescription () {
      const description = `${this.facility.description ?? ''}`;
      return description.trim().length < 1 ? 'No description provided' : description;
    },
    formattedBrgys () {
      const brgy = this.facility?.locationTags ?? [];
      return brgy;
    },
    facilityImage () {
      return this.facility?.picURL;
    },
    url () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      return `${pxPortalUrl}/lgu-appointment/step-1?parent=${this.lguId}&child=${this.facility?.id}`;
    },
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    getImage (filename) {
      if (filename) {
        return filename;
      }
      // default image
      return require('~/assets/images/doctor-website/doctor-website-profile-clinic.png');
    },
    formattedProviderName (provider) {
      return `${provider.name?.firstName ?? ''} ${provider.name?.lastName ?? ''} ${provider.name?.academicSuffix ?? ''}`;
    },
    formattedProviderInfo (provider) {
      const from = new Date(provider.personalDetails?.doc_practicingSince).getFullYear(); // eslint-disable-line
      const to = new Date().getFullYear();
      const years = isNaN(to - from) ? '' : `${to - from} Years Experience`;
      return `${provider.personalDetails?.doc_specialties?.[0] ?? ''} ${years}`; // eslint-disable-line
    },
  },
};
</script>
