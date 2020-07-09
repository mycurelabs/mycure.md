<template lang="pug">
  generic-container
    v-row
      v-col.pa-1
        v-card
          v-data-table(
            :items="doctors"
            :headers="headers"
            :items-per-page="20"
          )
            template(v-slot:body="{ items }")
              tbody
                template(v-for="doctor in items")
                  doctors-table-row(:doctor="doctor")
</template>

<script>
import DoctorsTableRow from '~/components/directory-doctor/doctors-table-row';
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    DoctorsTableRow,
    GenericContainer,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      headers: [
        {
          text: '',
          value: 'imageUrl',
          sortable: false,
        },
        {
          text: 'Doctor',
          value: 'name',
          sortable: false,
        },
        {
          text: 'Specialization',
          value: 'specialization',
          sortable: false,

        },
        {
          text: 'Years of Experience',
          value: 'experience',
          sortable: false,
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          class: 'text-right',
        },
      ],
    };
  },
  watch: {
    doctors (val) {
      console.warn(val.map(doctor => (`${doctor.name.lastName}, ${doctor.name.firstName}`)));
    },
  },
};
</script>

<style scoped>
.doctors-table >>> tbody tr:nth-of-type(even) {
  background-color: #fafafa;
}
.doctors-table >>> .v-data-table-header {
  background-color: #fafafa;
  color: white;
  border-bottom: unset;
}
.page-field {
  width: 50px;
  height: 40px;
}
.page-field >>> input {
  text-align: center;
}
</style>
