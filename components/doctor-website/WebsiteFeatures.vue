<template lang="pug">
  div
    //- v-tabs(v-model="activeTab")
    //-   v-tab(v-for="(tab, key) in doctorTabs" :key="key" :href="tab.href").text-none
    //-     span(:class="{'font-11': $isMobile}") {{ tab.name }}
    v-btn-toggle(
      v-if="!$isMobile"
      v-model="activeTab"
      tile
      group
      mandatory
      color="primary"
    )
      v-btn(
        v-for="(tab, key) in doctorTabs"
        :key="key"
        :value="tab.value"
        @click="onTabClick"
      ).text-none {{ tab.name }}
    v-select(
      v-else
      v-model="activeTab"
      placeholder="Section"
      solo
      outlined
      flat
      dense
      item-text="name"
      item-value="value"
      :items="doctorTabs"
    )
    v-tabs-items(v-model="activeTab").mt-3.transparent-bg#doctor-website-tabs-items
      v-tab-item(value="facilities")
        facilities(
          :doctorId="doctorId"
          :clinics="clinics"
          :total="clinicsTotal"
          :limit="clinicsLimit"
          :is-preview-mode="isPreviewMode"
          :loading="facilitiesLoading"
          @onUpdatePage="$emit('onUpdateClinicPage', $event)"
        )
      v-tab-item(value="services")
        v-card(flat).rounded-xl.bordered-card
          v-card-text
            h2 Services Offered
            v-list(v-if="services.length" dense)
              v-list-item(v-for="(service, key) in services" :key="key")
                v-list-item-icon
                  v-icon(color="primary") {{ mdiCheckCircleOutline }}
                v-list-item-content
                  v-list-item-title {{ service }}
            p(v-else).font-open-sans.font-gray.mt-1 This doctor has not listed any services yet. You may check this website from time to time for updates!

      v-tab-item(value="learning-corner")
        learning-corner(
          :is-preview-mode="isPreviewMode"
          :doctor-id="doctorId"
        )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import { mdiCheckCircleOutline } from '@mdi/js';
import Facilities from './Facilities';
import LearningCorner from './LearningCorner';
export default {
  components: {
    Facilities,
    LearningCorner,
  },
  props: {
    doctorId: {
      type: String,
      default: null,
    },
    clinics: {
      type: Array,
      default: () => ([]),
    },
    clinicsTotal: {
      type: Number,
      default: 0,
    },
    clinicsLimit: {
      type: Number,
      default: 6,
    },
    services: {
      type: Array,
      default: () => ([]),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    facilitiesLoading: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.doctorTabs = [
      { name: 'Facilities', value: 'facilities' },
      { name: 'Services', value: 'services' },
      { name: 'Learning Corner', value: 'learning-corner' },
    ];
    return {
      activeTab: 'facilities',
      mdiCheckCircleOutline,
    };
  },
  methods: {
    onTabClick () {
      VueScrollTo.scrollTo('#doctor-website-tabs-items', 500, { offset: -100, easing: 'ease' });
    },
  },
};
</script>

<style scoped>
.transparent-bg {
  background-color: transparent !important;
}
.bordered-card {
  border: 0.5px solid rgb(218, 218, 218) !important;
}
</style>
