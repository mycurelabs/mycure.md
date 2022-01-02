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
      template(slot="prepend-inner")
        v-icon.mr-2 {{mdiBriefcaseOutline}}
    //- DIALOG
    v-dialog(v-model="dialog" :width="$isWideScreen ? '800' : '600'" height="95%" @click:outside="onClose")
      v-card(tile).pa-5
        v-card-title
          v-row
            v-col
              h2.mc-h2 Filter by Specialization
            v-col(cols="1" align-self="center").pa-0
              v-icon(large @click="onClose") {{ mdiClose }}
        v-card-subtitle.pt-3.pb-0
          v-row(justify="end").pa-3.mt-1
            v-text-field(
              v-model="searchSpecialtyText"
              placeholder="Search"
              outlined
              dense
              hide-details
            )
            v-btn(
              color="secondary"
              text
              @click="clearSpecializations"
              :class="{'px-0': $isMobile}"
            ).font-12 CLEAR FILTERS
        v-card-text.mt-5
          div(v-for="(specialty, key) in filteredSpecialties" :key="key")
            v-checkbox(
              :value="specialty.selected"
              :on-icon="mdiCheckboxMarkedOutline"
              :off-icon="mdiCheckboxBlankOutline"
              :label="specialty.text"
              @change="onSpecialtySelect(specialty)"
              class="mc-b2"
            ).ma-0
</template>

<script>
import {
  mdiMenuDown,
  mdiClose,
  mdiCheckboxMarkedOutline,
  mdiCheckboxBlankOutline,
  mdiBriefcaseOutline,
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
      mdiBriefcaseOutline,
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
      if (this.specializationFiltersArray.length > 1) {
        return this.specializationFiltersArray[0].concat(` +${this.specializationFiltersArray.length - 1}`) || '';
      } else {
        return this.specializationFiltersArray || '';
      }
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
