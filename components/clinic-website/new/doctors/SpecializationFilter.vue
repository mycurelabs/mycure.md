<template lang="pug">
  div
    v-text-field(
      :value="selectedSpecializationsText"
      placeholder="Filter Specializations"
      dense
      hide-details
      outlined
      :disabled="dialog"
      :append-icon="mdiMenuDown"
      @click="dialog = true"
    )
    //- DIALOG
    v-dialog(v-model="dialog" width="600" height="100%" @click:outside="onClose")
      v-card.pa-5
        v-card-title
          v-row
            v-col
              h2 Filter by Specialization
            v-col(cols="1" align-self="center").pa-0
              v-icon(large @click="onClose") {{ mdiClose }}
        v-card-subtitle.pt-3.pb-0
          v-row.pa-3.mt-1
            v-text-field(
              v-model="searchSpecialtyText"
              placeholder="Search"
              outlined
              dense
            )
            v-btn(
              v-if=""
              color="secondary"
              text
              @click="clearSpecializations"
            ).font-12 CLEAR FILTERS
        v-card-text
          div(v-for="(specialty, key) in filteredSpecialties" :key="key")
            v-checkbox(
              :value="specialty.selected"
              :on-icon="mdiCheckboxMarkedOutline"
              :off-icon="mdiCheckboxBlankOutline"
              :label="specialty.text"
              @change="onSpecialtySelect(specialty)"
            ).ma-0
</template>

<script>
import {
  mdiMenuDown,
  mdiClose,
  mdiCheckboxMarkedOutline,
  mdiCheckboxBlankOutline,
} from '@mdi/js';
import SPECIALTIES from '~/assets/fixtures/specialties';

export default {
  props: {
    value: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.specialties = SPECIALTIES;
    return {
      dialog: false,
      searchSpecialtyText: null,
      mdiMenuDown,
      mdiClose,
      mdiCheckboxMarkedOutline,
      mdiCheckboxBlankOutline,
    };
  },
  computed: {
    specializationFiltersArray: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
    selectedSpecializationsText () {
      return this.specializationFiltersArray?.join(', ') || '';
    },
    filteredSpecialties () {
      return this.specialties.map((specialty) => {
        return {
          text: specialty,
          selected: this.isSelected(specialty),
        };
      }).filter(specialty => this.searchSpecialty(specialty.text, this.searchSpecialtyText));
    },
  },
  methods: {
    // inner search
    searchSpecialty (specialty, searchText) {
      if (!searchText) return true;
      const textBase = specialty.toLowerCase();
      const textSearch = searchText.toLowerCase();
      return textBase.includes(textSearch);
    },
    isSelected (specialty) {
      return this.specializationFiltersArray.includes(specialty);
    },
    clearSpecializations () {
      this.specializationFiltersArray = [];
    },
    // Events
    onSpecialtySelect (specialty) {
      const { text } = specialty;
      const specialties = this.specializationFiltersArray;
      const index = specialties.indexOf(text);
      if (index === -1) {
        specialties.push(text);
      } else {
        specialties.splice(index, 1);
      }
      this.specializationFiltersArray = specialties;
    },
    onClose () {
      this.dialog = false;
      this.$emit('filter', this.specializationFiltersArray);
    },
  },
};
</script>
