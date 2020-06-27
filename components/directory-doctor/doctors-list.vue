<template lang="pug">
  v-row(justify="center" align="center")
    template(v-if="isLoading")
      v-progress-circular(:size="70" :width="7" color="primary" indeterminate)
    template(v-else)
      template(v-if="$isMobile")
        template(v-for="item in doctors")
          doctor-item-list-mobile(
            :doctor="item"
          )
      template(v-else)
        v-col(cols="12")
          v-data-table(
            :headers="doctorsTableHeaders"
            :items="doctorsTableContents"
            :items-per-page="6"
            disable-sort
            hide-default-footer
          ).elevation-2.doctors-table
            template(v-slot:item.imageUrl="{ item }")
              v-avatar(size="50" rounded).ma-4
                img(v-lazy="require(`~/assets/images/doctor-website/${item.imageUrl}`)")
            template(v-slot:item.name="{ item }")
              p.mb-2 {{ item.name }}
              v-btn(color="primary" small elevation="0").letter-spacing-normal.text-none.font-weight-bold Book Now
            template(v-slot:item.actions="{ item }")
              div.text-center
                v-btn(width="110" tile elevation="0" icon).letter-spacing-normal.text-none.primary--text.font-weight-bold Availability
                span |
                v-btn(width="110" tile elevation="0" icon).letter-spacing-normal.text-none.primary--text.font-weight-bold View Site
            template(v-slot:footer)
              div(v-if="!isHeader").text-center
                v-btn(
                  large
                  color="primary"
                  elevation="0"
                ).text-none.letter-spacing-normal.white--text.font-weight-bold.my-6 VIEW MORE
              div(v-else)
                div.d-flex.justify-center.align-center.py-10
                  span Page
                  span
                    v-text-field(outlined :value="currentPage" dense).page-field.mx-2
                  span of {{ totalPages }}
                  v-btn(tile icon).ml-2
                    v-icon(
                      size="28"
                      color="grey"
                    ) mdi-chevron-left
                  v-btn(tile icon).ml-2
                    v-icon(
                      size="28"
                      color="grey"
                    ) mdi-chevron-right
</template>

<script>
import DoctorItemListMobile from '~/components/commons/generic-doctor-item-list-mobile';
export default {
  components: {
    DoctorItemListMobile,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isHeader: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: String,
      default: '',
    },
    totalPages: {
      type: String,
      default: '',
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
          class: 'grey--text font-weight-bold',
          width: '38%',
        },
        {
          text: 'Specialization',
          value: 'specialization',
          class: 'grey--text font-weight-bold',
          width: '15%',

        },
        {
          text: 'Years of Experience',
          value: 'experience',
          class: 'grey--text font-weight-bold',
          width: '15%',
        },
        {
          text: 'Actions',
          value: 'actions',
          class: 'grey--text font-weight-bold text-center',
          width: '30%',
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
