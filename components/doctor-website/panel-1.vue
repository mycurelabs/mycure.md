<template lang="pug">
  div.doctor-panel
    //- main header
    v-container
      v-row(justify="center" align="center").pa-4
        //- avatar, name, specialties, years of experience
        v-col(cols="12" md="4").text-center
          template(v-if="isVerified" )
            v-badge(color="black" overlap bottom right)
              v-tooltip(slot="badge" bottom)
                template(v-slot:activator="{ on }")
                  v-icon(v-on="on" medium) mdi-check-decagram
                | Verified
              v-avatar(size="212").elevation-3
                img(:src="picUrl")
          v-avatar(size="212" v-else).elevation-3
            img(:src="picUrl")
        v-col(cols="12" md="6").pa-6
          h1.white--text {{fullName}}
          span.white--text {{specialtiesMapped}} #[span(v-if="practicingSince") | {{yearsOfExperience}} Years Experience ]
          p.mt-2.white--text {{bio}}
          //- action buttons: book online appointment
          v-row(justify="start")
            v-col(class="shrink").pa-1.text-center
              book-appointment-btn(:outlined="false" :rounded="true")
            v-col(class="shrink").pa-1.text-center
              v-btn(
                outlined
                rounded
                large
                color="white"
              ).text-none Virtual Consult
            v-col(class="shrink").pa-1.text-center
              v-btn(
                outlined
                icon
                large
                color="white"
              )
                v-icon mdi-share-variant
        //- affiliated clinics
        template(v-if="hasMemberCMSOrganizations")
          v-col(cols="12" md="10").text-center.pa-0
            v-row(justify="center")
              v-col(
                v-for="organization in memberCmsOrganizations"
                :key="organization.id"
                shrink
              ).pa-0
                v-tooltip(bottom)
                  span {{organization.name}}
                  template(#activator="{ on, attrs }")
                    v-avatar(v-bind="attrs" v-on="on" size="50")
                      img(:src="organization.picURL")
</template>

<script>
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import OnlineConsultBtn from '~/components/commons/online-consult-btn';
export default {
  components: {
    BookAppointmentBtn,
    OnlineConsultBtn,
  },
  props: {
    picUrl: {
      type: String,
      default: null,
    },
    fullName: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    professions: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: [Date, Number],
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    /** @type {Organization[]} */
    memberCmsOrganizations: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasMemberCMSOrganizations () {
      return !!this.memberCmsOrganizations?.length;
    },
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    specialtiesMapped () {
      return this.specialties.join(', ');
    },
    professionsMapped () {
      return this.professions.join(', ');
    },
  },
};
</script>
<style scoped>
.doctor-panel {
  background-color: rgb(0 43 57 / 50%);
  backdrop-filter: blur(35px);
}
</style>
