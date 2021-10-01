<template lang="pug">
  v-dialog(v-model="dialog" width="600")
    v-card
      v-card-title
        v-spacer
        h3 Choose a Service
        v-spacer
      v-card-text
        v-row(justify="center")
          v-col(v-for="(type, key) in availableServiceTypes" :key="key" cols="6" md="4")
            v-hover(
              v-slot="{ hover }"
              open-delay="100"
            )
              v-card(
                hover
                :color="hover ? 'primary' : 'white'"
                :class="{'white--text': hover}"
                @click="onSelect(type)"
              ).service-card
                picture-source(
                  :image="type.image"
                  :image-alt="type.alt"
                  :image-file-extension="$useWebp? '.webp' : '.png'"
                  custom-path="booking/"
                )
                v-card-text.text-center
                  h3(:class="[hover ? 'white--text' : 'secondary--text', {'font-12': $isMobile}]") {{ type.text }}
      v-card-actions
        v-spacer
        v-btn(color="error" outlined depressed x-large @click="dialog = false").text-none Cancel
</template>

<script>
import isEmpty from 'lodash/isEmpty';
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
        image: 'Doctors',
        alt: 'Doctor giving consultation artwork',
      },
      'clinical-procedure': {
        text: 'Procedures',
        value: 'clinical-procedure',
        image: 'Procedures',
        alt: 'Nurse and patient artwork',
      },
      lab: {
        text: 'Laboratory',
        value: 'lab',
        image: 'Laboratory',
        alt: 'Health specialists working in a laboratory artwork',
      },
      imaging: {
        text: 'Imaging',
        value: 'imaging',
        image: 'Imaging',
        alt: 'Doctors assisting an elderly patient artwork',
      },
      pe: {
        text: 'PE Packages',
        value: 'pe',
        image: 'PE Packages',
        alt: 'Eye test examination artwork',
      },
      dental: {
        text: 'Dental',
        value: 'dental',
        image: 'Dental',
        alt: 'Dentist working on a dental procedure artwork',
      },
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

<style scoped>
.service-card {
  border: 2px solid #04B1E7;
}
</style>
