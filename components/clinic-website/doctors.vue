<template lang="pug">
  v-container(fluid)
    v-row(justify="start" align="end" dense)
      v-col
        h2 Our Doctors
      v-spacer
      v-col
        v-text-field(
          outlined
          clearable
          label="Search Doctor"
          type="text"
          dense
        ).search-field
          template(v-slot:append)
            v-icon mdi-magnify
    v-row(justify="start" align="start")
      v-col(cols="4")
        p.grey--text.font-26.message-line-height We have {{ doctorsLength }} doctors in our clinic. Who would you like to schedule for an appointment?
      v-spacer
      v-col(cols="3")
        p Specialization
        v-select(
          :items="specializations"
          dense
          outlined
        )
      v-col(cols="3")
        p Sort By
        v-select(
          :items="sortBy"
          dense
          outlined
        )
      v-col(align-self="center" cols="1")
        v-btn(tile large icon)
          v-icon(large color="primary") mdi-view-grid
        v-btn(tile large icon)
          v-icon(x-large color="primary") mdi-view-list
    v-row
      template(v-for="(item) in doctors")
        doctor-item(
          :doctor="item"
        )
</template>

<script>
import DoctorItem from '~/components/clinic-website/doctor-item';
export default {
  components: {
    DoctorItem,
  },
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    doctorsLength () {
      return this.doctors?.length || 0;
    },
    specializations () {
      return ['For my family', 'For my kids', 'For my eyes', 'For my nose'];
    },
    sortBy () {
      return ['Alphabetical Order', 'Reverse Alphabetical', 'Specialization', 'Years of Experience'];
    },
  },
};
</script>

<style scoped>
.message-line-height {
  line-height: 32px;
}
.search-field {
  height: 40px;
}
</style>
