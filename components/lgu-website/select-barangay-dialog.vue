<template lang="pug">
  v-dialog(
    v-model="model"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    :hide-overlay="$vuetify.breakpoint.smAndDown"
    :width="$vuetify.breakpoint.mdAndDown ? $vuetify.breakpoint.width : $vuetify.breakpoint.width - 500"
  )
    //- mobile
    v-toolbar(
      v-if="$vuetify.breakpoint.smAndDown"
      color="primary"
    )
      v-btn(
        depressed
        icon
        @click="$emit('toggleSelectBrgyDialog')"
      )
        v-icon.white--text mdi-close
    v-card.py-2.px-4
      v-container
        v-row
          v-col(cols="12")
            v-text-field(
              label="Search Barangay"
              solo
              hide-details
            )
        v-row.px-3
          v-col(
            cols="12"
            sm="12"
            md="6"
            v-for="(brgy, key) of barangays"
            :key="key"
          ).py-1.px-1
            v-btn(
              depressed
              block
              @click="onSelectBarangay(brgy)"
            ) {{ brgy.locationTag }}
      v-card-actions
</template>

<script>
export default {
  props: {
    value: null, // eslint-disable-line
    isLoading: {
      type: Boolean,
      default: false,
    },
    barangays: {
      type: Array,
      default: () => ([]),
    },
    orgId: {
      type: String,
      default: null,
    },
  },
  computed: {
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
    onSelectBarangay (barangay) {
      if (!barangay) return;
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const bookingAddress = `${pxPortalUrl}/lgu-appointment/step-1?parent=${this.orgId}&child=${barangay.orgId}`;
      window.location.href = bookingAddress;
    },
  },
};
</script>
