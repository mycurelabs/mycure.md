<template lang="pug">
  div
    v-tabs(v-model="activeTab")
      v-tab(v-for="(tab, key) in doctorTabs" :key="key" :href="tab.href").text-none {{ tab.name }}
    v-tabs-items(v-model="activeTab")
      v-tab-item(
        value="facilities"
      )
        v-card(flat)
          v-card-text
             facilities(
                :doctorId="doctorId"
                :clinics="clinics"
                :total="clinicsTotal"
                :limit="clinicsLimit"
                @onUpdatePage="$emit('onUpdateClinicPage', $event)"
              )
</template>

<script>
import Facilities from './Facilities';
export default {
  components: {
    Facilities,
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
