<template lang="pug">
  div
    v-expansion-panels(flat :value="0")
      v-expansion-panel(v-for="entry in specialtyDoctorsMapEntries" :key="entry.specialty")
        v-expansion-panel-header.pa-1.doctor-card
          template(v-slot:actions)
            v-icon.primary--text.icon mdi-chevron-down
          span.header-title {{ entry.specialty }}
          span.primary--text.mr-2.doctors-count {{ entry.doctorsLengthText }}
        v-expansion-panel-content(v-for="doctor in entry.doctors" :key="doctor.id").doctor-card
          div.d-flex
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
              strong {{ doctor.doctorName }}
              p.ma-0
                span(v-if="doctor.specialties") {{ doctor.specialties }}
            v-spacer
            div.ml-auto.my-auto
              v-btn(
                v-if="xlBelow"
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
                :href="goToConsult(doctor)"
              ) Consult Now
            v-btn(
              v-if="xlOnly"
              color="primary"
              style="position: absolute; right: 6px;"
              target="_blank"
              rel="noopener noreferrer"
              :href="goToConsult(doctor)"
            ) Consult Now
</template>

<script>
export default {
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    formattedDoctors () {
      return this.doctors?.map((doctor) => {
        const practicingSince = doctor.personalDetails?.['doc_practicingSince'];
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.personalDetails?.picURL,
          doctorName: `Dr. ${doctor.personalDetails?.name?.firstName} ${doctor.personalDetails?.name?.lastName}`,
          specialties: doctor.personalDetails?.['doc_specialties']?.join(', '),
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      });
    },
    specialtyDoctorsMap () {
      return this.formattedDoctors?.reduce((acc, doctor) => {
        const specialties = doctor.personalDetails?.['doc_specialties'];
        if (!specialties?.length) return acc;
        for (const specialty of specialties) {
          if (!acc[specialty]) acc[specialty] = [];
          acc[specialty].push(doctor);
        }
        return acc;
      }, {});
    },
    specialtyDoctorsMapEntries () {
      if (!this.specialtyDoctorsMap) return null;
      return Object.entries(this.specialtyDoctorsMap)
        .map(([specialty, doctors]) => ({
          specialty,
          doctors,
          doctorsLengthText: doctors.length === 1
            ? '1 Doctor'
            : `${doctors.length} Doctors`,
        }));
    },
    xlBelow () {
      return this.$vuetify.breakpoint.lgAndDown;
    },
    xlOnly () {
      return this.$vuetify.breakpoint.xlOnly;
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
.icon {
  order: 0;
}
.header-title {
  max-width: 60% !important;
  order: 1;
}
.doctors-count {
  position: relative;
  text-align: right;
  order: 2;
}
.doctor-card {
  background-color: #F2F2F2;
}
.doctor-card >>> .v-item-group {
  background-color: #F2F2F2;
}
</style>
