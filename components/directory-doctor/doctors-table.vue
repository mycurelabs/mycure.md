<template lang="pug">
  generic-container
    v-row.mb-10
      v-col.pa-1
        v-card
          v-data-table(
            :headers="headers"
            :items="doctors"
            :options.sync="paginationOptions"
            :server-items-length="serverItemsLength"
            :footer-props="footerProps"
          )
            template(slot="no-results")
              v-row
                v-col.text-center
                  h3.grey--text We can't find any result for your searches.
            template(slot="no-data")
              v-row
                v-col.text-center
                  h3.grey--text We can't find any result for your searches.
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
    serverItemsLength: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      paginationOptions: {
        page: 1,
        itemsPerPage: 20,
      },
      footerProps: {
        'items-per-page-options': [20, 50, 100],
      },
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
    paginationOptions (val) {
      this.$emit('paginate', val);
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
