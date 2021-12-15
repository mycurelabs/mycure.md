<template lang="pug">
  v-row
    template(v-for="type in types")
      v-col(
        v-if="hasServiceType(type.value)"
        cols="12"
      )
        v-card(color="grey" @click="$emit('select', type.value)")
          v-toolbar(flat)
            h3 {{ type.text }}&nbsp;
            v-spacer
            v-icon(color="primary") {{ mdiChevronRight }}
</template>

<script>
import { mdiChevronRight } from '@mdi/js';
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
      { text: 'Face-to-Face Consults', type: 'clinical-consultation', value: 'clinical-consultation' },
      { text: 'Teleconsult', type: 'telehealth', value: 'telehealth' },
      { text: 'Laboratory', type: 'diagnostic', value: 'lab' },
      { text: 'Imaging', type: 'diagnostic', value: 'imaging' },
      { text: 'PE Packages', type: 'pe', value: 'pe' },
      { text: 'Procedures', type: 'clinical-procedure', value: 'clinical-procedure' },
      { text: 'Dental', type: 'dental', value: 'dental' },
      { text: 'Our Doctors', type: 'doctors', value: 'doctors' },
    ];
    return {
      mdiChevronRight,
    };
  },
  methods: {
    hasServiceType (type) {
      if (type === 'doctors') return this.hasDoctors;
      return this.serviceTypes.includes(type);
    },
  },
};
</script>
