<template lang="pug">
  v-col(cols="12")
    v-data-table(
      :headers="doctorsTableHeaders"
      :items="doctors"
      :items-per-page="5"
      disable-sort
    )
      template(v-slot:body="{ items }")
        tbody
          template(v-for="item in items")
            doctor-item-list-row(:doctor="item")
</template>

<script>
import DoctorItemListRow from '~/components/clinic-website/doctor-item-list-row';
export default {
  components: {
    DoctorItemListRow,
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
  data () {
    return {
      doctorsTableHeaders: [
        {
          text: '',
          value: 'imageUrl',
          width: '2%',
        },
        {
          text: 'Doctor',
          value: 'name',
          class: 'primary--text font-weight-bold',
          width: '38%',
        },
        {
          text: 'Specialization',
          value: 'specialization',
          class: 'primary--text font-weight-bold',
          width: '20%',

        },
        {
          text: 'Years of Experience',
          value: 'experience',
          class: 'primary--text font-weight-bold',
          width: '20%',
        },
        {
          text: '',
          value: 'viewSite',
          width: '10%',
        },
      ],
    };
  },
  computed: {
    doctorsTableContents () {
      return this.doctors.map(doctor => (
        {
          imageUrl: doctor?.imageFile || 'doctor-website-profile-male.png',
          name: `${doctor?.fullName || ''} ${doctor?.title || ''}`,
          specialization: doctor?.specialization || '',
          experience: `${doctor?.experience || ''} years`,
        }
      ));
    },
  },
};
</script>
