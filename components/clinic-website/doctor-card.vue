<template lang="pug">
  div
    v-card.mb-3
      v-tabs(v-model="activeTab").doctor-card
        v-tab #[b Doctors] ({{ total }})
        v-tab #[b Specializations]
      v-tabs-items(v-model="activeTab").doctor-card
        v-tab-item.pa-4
          div(v-for="(doctor, key) in formattedDoctors" :key="key").d-flex.pa-6
            v-avatar
              img(
                v-if="doctor.picURL"
                :src="doctor.picURL"
                alt="Doctor Profile"
                )
              img(
                v-if="!doctor.picURL && doctor.sex === 'male'"
                src="~/assets/images/clinics-website/physician-male.png"
                alt="Male Doctor Profile"
              )
              img(
                v-if="!doctor.picURL && doctor.sex === 'female'"
                src="~/assets/images/clinics-website/physician-female.png"
                alt="Female Doctor Profile"
              )
            div.ml-3
              strong.font-18 {{ doctor.doctorName}}
              p.ma-0
                span(v-if="doctor.specialties") {{ doctor.specialties }}
            v-spacer
            v-row(align="center" justify="end")
              v-btn(
                v-if="xlBelow"
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
                :href="goToConsult(doctor)"
                outlined
              ) #[b Consult Now]
            v-btn(
              v-if="xlOnly"
              color="primary"
              style="position: absolute; right: 6px;"
              target="_blank"
              rel="noopener noreferrer"
              :href="goToConsult(doctor)"
              outlined
            ) #[b Consult Now]
        v-pagination(
          v-if="this.activeTab === 0"
          v-model="page"
          :length="length"
        )
        v-tab-item.main-container.pa-4
          specializations(:doctors="members")
</template>

<script>
import Specializations from '~/components/clinic-website/specialization-expansion';
export default {
  components: {
    Specializations,
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
