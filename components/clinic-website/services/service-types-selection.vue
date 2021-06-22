<template lang="pug">
  v-card.rounded-lg
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
    v-tabs(vertical v-model="activeServiceType" grow).tabs
      template(v-for="type in types")
        v-tab(v-if="hasServiceType(type.value)" :href="`#${type.value}`")
          v-icon(left) {{ type.icon }}
          span.black--text.text-none {{ type.text }}
</template>

<script>
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
      { icon: 'mdi-account-tie-voice-outline', text: 'Consultation', type: 'clinical-consultation', value: 'clinical-consultation' },
      { icon: 'mdi-flask-outline', text: 'Laboratory', type: 'diagnostic', value: 'lab' },
      { icon: 'mdi-radiology-box-outline', text: 'Imaging', type: 'diagnostic', value: 'imaging' },
      { icon: 'mdi-package-variant-closed', text: 'PE Packages', type: 'pe', value: 'pe' },
      { icon: 'mdi-stethoscope', text: 'Doctors', type: 'doctors', value: 'doctors' },
      { icon: 'mdi-pulse', text: 'Procedures', type: 'clinical-procedure', value: 'clinical-procedure' },
      { icon: 'mdi-tooth-outline', text: 'Dental', type: 'dental', value: 'dental' },
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
</style>
