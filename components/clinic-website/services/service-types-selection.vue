<template lang="pug">
  div
    h3.font-21 Our Services
    v-card(flat).mt-1
      v-tabs(vertical v-model="activeServiceType" grow).tabs
        template(v-for="type in types")
          v-tab(v-if="hasServiceType(type.value)" :href="`#${type.value}`").text-left
            v-icon(left) {{ type.icon }}
            | {{ type.text }}
</template>

<script>
export default {
  props: {
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
      { icon: 'mdi-flask', text: 'Laboratory', type: 'diagnostic', value: 'lab' },
      { icon: 'mdi-radiology-box-outline', text: 'Imaging', type: 'diagnostic', value: 'imaging' },
      { icon: 'mdi-package-variant-closed', text: 'PE Packages', type: 'pe', value: 'pe' },
      { icon: 'mdi-stethoscope', text: 'Doctors', type: 'doctors', value: 'doctors' },
      { icon: 'mdi-medical-bag', text: 'Procedures', type: 'clinical-procedure', value: 'clinical-procedure' },
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
