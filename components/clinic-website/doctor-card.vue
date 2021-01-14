<template lang="pug">
  div
    v-card.mb-3
      v-tabs(v-model="activeTab").doctor-card
        v-tab #[b Doctors] ({{ formattedDoctors.length }})
        v-tab #[b Specializations]
      v-tabs-items(v-model="activeTab").doctor-card
        v-tab-item.pa-4
          div(v-for="(doctor, key) in visibleDoctors" :key="key").d-flex.pa-6
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
          :length="2"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @next="nextPage(visibleDoctors)"
          @previous="previousPage(visibleDoctors)"
          @input="paginate()"
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
  },
  data () {
    return {
      activeTab: null,
      page: 1,
      currentPage: 0,
      pageItems: 7,
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
    // formattedDoctors () {
    //   return this.doctors?.map((doctor) => {
    //     const practicingSince = doctor.personalDetails?.['doc_practicingSince'];
    //     const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

    //     return {
    //       ...doctor,
    //       picURL: doctor.personalDetails?.picURL,
    //       doctorName: `Dr. ${doctor.personalDetails?.name?.firstName} ${doctor.personalDetails?.name?.lastName}`,
    //       specialties: doctor.personalDetails?.['doc_specialties']?.join(', '),
    //       yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
    //     };
    //   });
    // },
  },
  mounted () {
    console.log('formattedDoctors', this.formattedDoctors);
    console.log('visibleDoctors', this.visibleDoctors);
    // this.updateVisibleDoctors();
  },
  beforeMount () {
    this.updateVisibleDoctors();
  },
  methods: {
    goToConsult (doctor) {
      if (!doctor) return;
      const docUID = doctor.uid;
      const clinicID = doctor.organization;
      return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?doctor=${docUID}&organization=${clinicID}`;
    },
    updatePage (pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleDoctors();
    },
    updateVisibleDoctors () {
      this.visibleDoctors = this.formattedDoctors.slice(this.currentPage * this.pageItems, (this.currentPage * this.pageItems) + this.pageItems);

      // IF there are no visible doctors, go back a page
      if (this.visibleDoctors.length === 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    },
    nextPage (visibleDoctors) {
      this.updatePage(this.currentPage + 1);
    },
    previousPage (visibleDoctors) {
      this.prevButtonClicked = true;
      this.updatePage(this.currentPage - 1);
      console.log('this.prevbuttonclicked', this.prevButtonClicked);
    },
    paginate (prevButton) {
      console.log('this.Page', this.page);
      console.log('this.prevbuttonclicked paginate', this.prevButtonClicked);
      if (this.page === 1 && !this.prevButtonClicked) {
        this.updatePage(this.page - 1);
      } else {
        this.updatePage(this.page);
      }
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
