<template lang="pug">
  v-card.rounded-md
    v-toolbar(flat).pa-1
      v-spacer
      img(
        src="~/assets/images/MYCURE-icon.png"
        alt="MYCURE icon"
        width="50px"
      ).mr-3
      h3.font-weight-semibold Our Services
      v-spacer
    div.mt-3
    v-tabs(vertical v-model="activeServiceType" grow).tabs.highlight
      template(v-for="type in types")
        v-tab(v-if="hasServiceType(type.value)" :href="`#${type.value}`")
          v-icon(left) {{ type.icon }}
          span.black--text.text-none {{ type.text }}&nbsp;
</template>

<script>
import {
  mdiAccountTieVoiceOutline,
  mdiVideoOutline,
  mdiFlaskOutline,
  mdiRadiologyBoxOutline,
  mdiPackageVariantClosed,
  mdiPulse,
  mdiToothOutline,
  mdiStethoscope,
} from '@mdi/js';
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    hasDoctors: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.types = [
      { icon: mdiAccountTieVoiceOutline, text: 'Face-to-Face Consults', type: 'clinical-consultation', value: 'clinical-consultation' },
      { icon: mdiVideoOutline, text: 'Teleconsults', type: 'telehealth', value: 'telehealth' },
      { icon: mdiFlaskOutline, text: 'Laboratory', type: 'diagnostic', value: 'lab' },
      { icon: mdiRadiologyBoxOutline, text: 'Imaging', type: 'diagnostic', value: 'imaging' },
      { icon: mdiPackageVariantClosed, text: 'PE Packages', type: 'pe', value: 'pe' },
      { icon: mdiPulse, text: 'Procedures', type: 'clinical-procedure', value: 'clinical-procedure' },
      { icon: mdiToothOutline, text: 'Dental', type: 'dental', value: 'dental' },
      { icon: mdiStethoscope, text: 'Our Doctors', type: 'doctors', value: 'doctors' },
    ];
    return {};
  },
  computed: {
    activeServiceType: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    hasServiceType (type) {
      if (type === 'doctors') return this.hasDoctors;
      return this.serviceTypes.includes(type);
    },
  },
};
</script>

<style scoped>
.tabs [role="tab"] {
  justify-content: flex-start;
}
.highlight >>> .v-tabs-slider-wrapper {
  left: auto !important;
  right: 1px;
}
</style>
