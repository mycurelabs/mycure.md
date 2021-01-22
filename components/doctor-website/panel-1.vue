<template lang="pug">
  v-container
    //- main header
    v-row(justify="center")
      //- avatar, name, specialties, years of experience
      v-col(cols="12").text-center
        template(v-if="isVerified" )
          v-badge(color="black" overlap bottom right)
            v-tooltip(slot="badge" bottom)
              template(v-slot:activator="{ on }")
                v-icon(v-on="on" medium) mdi-check-decagram
              | Verified
            v-avatar(size="150").elevation-3
              img(:src="picUrl")
        v-avatar(size="150" v-else).elevation-3
          img(:src="picUrl")
      v-col(cols="12" md="10").text-center
        h1 {{fullName}}
        span {{specialtiesMapped}} #[span(v-if="practicingSince") | {{yearsOfExperience}} Years Experience ]
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
      //- bio
      v-col(cols="12" md="10").text-center
        p {{bio}}
    //- action buttons: book online appointment
    v-row(justify="center")
      v-col(class="shrink").pa-1.text-center
        book-appointment-btn(:outlined="false")
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
