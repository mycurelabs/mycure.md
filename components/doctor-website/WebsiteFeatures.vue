<template lang="pug">
  div
    v-tabs(v-model="activeTab")
      v-tab(v-for="(tab, key) in doctorTabs" :key="key" :href="tab.href").text-none
        span(:class="{'font-11': $isMobile}") {{ tab.name }}
    v-tabs-items(v-model="activeTab")
      v-tab-item(value="facilities")
        v-card(flat)
          v-card-text
             facilities(
                :doctorId="doctorId"
                :clinics="clinics"
                :total="clinicsTotal"
                :limit="clinicsLimit"
                :is-preview-mode="isPreviewMode"
                @onUpdatePage="$emit('onUpdateClinicPage', $event)"
              )
      v-tab-item(value="services")
        v-card(flat)
          v-card-text
            h2 Services Offered
            v-list(v-if="services.length" dense)
              v-list-item(v-for="(service, key) in services" :key="key")
                v-list-item-icon
                  v-icon(color="primary") mdi-check-circle-outline
                v-list-item-content
                  v-list-item-title {{ service }}
            p(v-else).font-open-sans.font-gray.mt-1 This doctor has not listed any services yet. You may check this website from time to time for updates!

      v-tab-item(value="learning-corner")
        v-card(flat)
          v-card-text
            learning-corner(
              :is-preview-mode="isPreviewMode"
              :doctor-id="doctorId"
            )
</template>

<script>
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
  },
  data () {
    this.doctorTabs = [
      { name: 'Facilities', href: '#facilities' },
      { name: 'Services', href: '#services' },
      { name: 'Learning Corner', href: '#learning-corner' },
    ];
    return {
      activeTab: 'facilities',
    };
  },
};
</script>
