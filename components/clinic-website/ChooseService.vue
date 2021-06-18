<template lang="pug">
  v-dialog(v-model="dialog" width="900")
    v-card
      v-card-title
        v-spacer
        h2 Choose a Service
        v-spacer
      v-card-text
        v-row(justify="center")
          v-col(v-for="(type, key) in availableServiceTypes" :key="key" cols="6" md="3")
            v-card(@click="onSelect(type)")
              v-card-text.text-center
                picture-source(
                  :image="type.image"
                  :image-alt="type.text"
                  image-file-extension=".webp"
                  image-width="50%"
                  custom-path="clinics-website/"
                )
                br
                h3 {{ type.text }}
      v-card-actions
        v-spacer
        v-btn(color="error" outlined depressed x-large @click="dialog = false").text-none Cancel
</template>

<script>
import { isEmpty } from 'lodash';
import VueScrollTo from 'vue-scrollto';
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: {
    PictureSource,
  },
  props: {
    value: {
      type: Boolean,
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
    this.TYPE_MAPPINGS = {
      'clinical-consultation': {
        text: 'Consultations',
        value: 'clinical-consultation',
        image: 'Consult',
      },
      'clinical-procedure': {
        text: 'Procedures',
        value: 'clinical-procedure',
        image: 'Procedures',
      },
      lab: {
        text: 'Laboratory',
        value: 'lab',
        image: 'Laboratory',
      },
      imaging: {
        text: 'Imaging',
        value: 'imaging',
        image: 'Imaging',
      },
      pe: {
        text: 'PE Packages',
        value: 'pe',
        image: 'PE Packages',
      },
      dental: {
        text: 'Dental',
        value: 'dental',
        image: 'Dental',
      },
    };
    this.DOCTOR_TYPE = {
      text: 'Doctors',
      value: 'doctors',
      image: 'Doctors',
    };
    return {};
  },
  computed: {
    dialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
    availableServiceTypes () {
      if (isEmpty(this.serviceTypes)) return [];
      const types = this.serviceTypes.map((type) => {
        return this.TYPE_MAPPINGS[type];
      });

      if (this.hasDoctors) types.push(this.DOCTOR_TYPE);
      if (!types.length) return [];
      return types;
    },
  },
  methods: {
    onSelect (type) {
      this.$emit('select', type.value);
      VueScrollTo.scrollTo('#services-panel', 500, { offset: -100, easing: 'ease' });
      this.dialog = false;
    },
  },
};
</script>
