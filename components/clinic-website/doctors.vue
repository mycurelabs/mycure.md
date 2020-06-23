<template lang="pug">
  v-container(fluid)
    v-row(justify="start" align="start")
      v-col
        h2 Our Doctors
      v-spacer
      v-col
        p search component
    v-row(justify="start" align="start")
      v-col(cols="4")
        p.grey--text We have {{ doctors.length }} doctors in our clinic. Who would you like to schedule for an appointment?
      v-spacer
      v-col
        p filter component
      v-col
        p sort component
      v-col
        p display component
    v-row
      v-col(cols="12")
        p doctors list here
</template>

<script>
export default {
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
};
</script>
