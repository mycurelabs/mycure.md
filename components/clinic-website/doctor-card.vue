<template lang="pug">
  div
    v-card.mb-3
      v-tabs(v-model="activeTab").doctor-card
        v-tab #[b Specialties]
        v-tab #[b Services Offered]
        v-tab #[b Doctors] ({{ total }})
      v-tabs-items(v-model="activeTab").doctor-card
        v-tab-item.main-container.pa-4
          specializations(:doctors="members")
        v-tab-item.main-container.pa-4
          template(v-for="(service, key) in servicesOffered").d-flex.pa-6
            single-card(
              :service="service"
              :isService="true"
              :key="key"
            )
        v-tab-item.pa-4
          template(v-for="(doctor, key) in formattedDoctors")
            single-card(
              :doctor="doctor"
              :isDoctor="true"
              :key="key"
            )
          v-pagination(
            v-if="this.activeTab === 2"
            v-model="page"
            :length="length"
          )
</template>

<script>
import Specializations from '~/components/clinic-website/specialization-expansion';
import SingleCard from '~/components/commons/single-card';
export default {
  components: {
    Specializations,
    SingleCard,
  },
  props: {
    formattedDoctors: {
      type: Array,
      default: () => ([]),
    },
    members: {
      type: Array,
      default: () => ([]),
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 7,
    },
    servicesOffered: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      activeTab: null,
      page: 1,
      visibleDoctors: [],
      prevButtonClicked: false,
    };
  },
  computed: {
    xlBelow () {
      return this.$vuetify.breakpoint.lgAndDown;
    },
    xlOnly () {
      return this.$vuetify.breakpoint.xlOnly;
    },
    isMaleDoctor (doctor) {
      return doctor === 'male';
    },
    length () {
      return Math.ceil(this.total / this.limit) || 0;
    },
  },
  watch: {
    page (val) {
      this.$emit('onUpdatePage', val);
      return val;
    },
  },
  methods: {
    goToConsult (doctor) {
      if (!doctor) return;
      const docUID = doctor.uid;
      const clinicID = doctor.organization;
      return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?doctor=${docUID}&organization=${clinicID}`;
    },
  },
};
</script>

<style scoped>
.doctor-card {
  background-color: #F2F2F2;
}
.doctor-card >>> .v-item-group {
  background-color: #F2F2F2;
}
.btn {
  border: 1px solid;
}
</style>
