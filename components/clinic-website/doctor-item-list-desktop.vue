<template lang="pug">
  v-col(cols="12")
    v-data-table(
      :headers="doctorsTableHeaders"
      :items="doctors"
      :items-per-page="5"
      disable-sort
    )
      //- template(v-slot:item.imageUrl="{ item }")
      //-   v-avatar(size="50" rounded).ma-4
      //-     img(v-lazy="item.imageUrl")
      //- template(v-slot:item.name="{ item }")
      //-   p.mb-2 {{ item.name }}
      //-   v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none.font-weight-bold Book Now
      //- template(v-slot:item.viewSite="{ item }")
      //-   v-btn(width="110" tile elevation="0" icon).letter-spacing-normal.text-none.primary--text.font-weight-bold View Website
      template(v-slot:body="{ items }")
        tbody
          tr(v-for="item in items" :key="item.name")
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
