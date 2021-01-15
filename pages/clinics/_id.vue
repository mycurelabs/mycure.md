<template lang="pug">
  div(v-if="!loading").py-0
    app-bar(:picURL="picURL" :clinicName="clinicName")
    usp(
      :name="clinicName"
      :org-id="orgId"
      @searchLoading="searchLoading"
      @searchResultsLoaded="searchResultsLoaded"
    )
    v-container
      v-row(justify="center" align="center")
        p.font-21.pb-2 Doctors available:
        v-col(cols="12" md="3").py-0
          v-select(
            :items="items"
            label="Every Monday"
            dense
            outlined
            width="258"
          ).dropdown
        v-col(cols="12" md="3").py-0
          v-select(
            :items="items"
            label="Morning"
            dense
            outlined
          ).dropdown
        v-col(cols="12" md="3").py-0
          v-select(
            :items="items"
            label="Including Holidays"
            dense
            outlined
          ).dropdown
      v-row
        v-col(v-if="!$isMobile" cols="12" md="7")
          doctor-cards(
            :formattedDoctors="formattedDoctors"
            :members="orgDoctors"
            :total="doctorsTotal"
            :limit="doctorsLimit"
            @onUpdatePage="fetchDoctorMembers"
            )
        v-col(cols="12" md="5" align="center")
          info(
            :hospitalName="clinicName"
            :address="address"
            :completeAddress="completeAddress"
            :picURL="picURL"
            :description="description"
          )
          services(:servicesOffered="servicesOffered").mt-2
          schedules(:schedules="schedules").mt-2
    //-         schedules(:schedules="schedules").pa-3
    //-         v-col(cols="12" style="background-color: #ececec; border-radius: 5px; min-height: 100px;").mt-6
    //-           //- UPDATE CONSULTATIONS DATA
    //-           consultations(
    //-             :price-min="minimumServicePrice"
    //-             :price-max="maximumServicePrice"
    //-           )

    //-     //- UPDATE TESTIMONIAL DATA
    //-     v-row
    //-       v-col(cols="12")
    //-         h2 Testimonials
    //-         testimonials(:picURL="picURL" :testimonialDate="testimonialDate" :testimonialDescription="testimonialDescription")

    //-   //- UDPATE DOCTORS DATA
    //-   //- v-col(cols="12" md="4")
    //-   //-   specializations-chats(:doctors="doctors" :consultIDS="consultIDS")

    v-divider
    v-footer(v-if="!$isMobile" color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(
          cols="12"
          md="5"
          align="start"
        )
          div.d-flex
            p.ml-5.mt-1 #[b Powered by]
            img(
              height="30"
              src="~/assets/images/MYCURE-logo.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            ).ml-2
          div
            p.ml-5 &#169;{{new Date().getFullYear()}} All Rights Reserved.
        v-col(cols="12" md="5" align="end")
          span Share the love:
          template(v-for="(icon, key) in icons")
            a(
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ).pl-3
              v-icon.font-30 {{ icon.icon }}
    v-footer(v-else color="primary")
      v-row(justify="center" align="center")
        v-col(cols="12" align="center")
          span.white--text Share the love:
          template(v-for="(icon, key) in icons")
            a(
              :href="icon.link"
              target="_blank"
              rel="noopener noreferrer"
            ).pl-3
              v-icon(color="white").font-30 {{ icon.icon }}
        v-col(cols="10" align="center")
          div.d-flex.justify-center
            img(
              height="26"
              src="~/assets/images/MYCURE-logo-white.png"
              alt="MYCURE"
              @click="$nuxt.$router.push({ name: 'index' })"
            )
            p.white--text.font-14.ml-4.mt-1 &#169;{{new Date().getFullYear()}} All Rights Reserved.
</template>

<script>
import { getClinicWebsite, getMembership, getServices } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import Usp from '~/components/clinic-website/usp';
import DoctorsList from '~/components/clinic-website/doctors-list';
import AboutUs from '~/components/clinic-website/about-us';
import Info from '~/components/clinic-website/info';
import Schedules from '~/components/clinic-website/schedules';
import Services from '~/components/clinic-website/services';
// import Consultations from '~/components/clinic-website/consultations';
// import Testimonials from '~/components/clinic-website/testimonials';
// import SpecializationsChats from '~/components/clinic-website/specializations-chat';
import DoctorCards from '~/components/clinic-website/doctor-card';
import Specializations from '~/components/clinic-website/specialization-expansion';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Usp,
    DoctorsList,
    AboutUs,
    Info,
    Schedules,
    Services,
    // Consultations,
    // Testimonials,
    // SpecializationsChats,
    DoctorCards,
    Specializations,
  },
  async asyncData ({ params, error }) {
    try {
      const clinic = await getClinicWebsite({ username: params.id });
      const clinicWebsite = clinic[0];
      const membership = await getMembership({ organization: params.id });
      const member = membership[0];
      const services = await getServices({ facility: params.id });
      return {
        clinicWebsite,
        member,
        services,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    this.icons = [
      { icon: 'mdi-facebook', link: 'https://facebook.com/' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/' },
      { icon: 'mdi-email', link: 'mailto:' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/' },
    ];
    this.doctorsLimit = 7;
    return {
      loading: true,
      page: 1,
      pageCount: 2,
      orgDoctors: [],
      doctorsTotal: 0,
    };
  },
  computed: {
    orgId () {
      return this.$route.params.id;
    },
    picURL () {
      return this.clinicWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.clinicWebsite?.description ||
      `${this.clinicWebsite?.name} specializes in telehealth services. ${this.clinicWebsite?.name} telemedicine service is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
    clinicName () {
      return this.clinicWebsite?.name || 'MYCURE Clinic';
    },
    address () {
      return [
        this.clinicWebsite?.address?.city,
        this.clinicWebsite?.address?.province,
        this.clinicWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    completeAddress () {
      return [
        this.clinicWebsite?.address?.street1,
        this.clinicWebsite?.address?.street2,
        this.clinicWebsite?.address?.city,
        this.clinicWebsite?.address?.province,
        this.clinicWebsite?.address?.country,
      ].filter(Boolean).join(', ') || 'Address not available';
    },
    servicesOffered () {
      return this.services;
    },
    sortedServices () {
      if (!this.services) return null;
      return [...this.services].sort((a, b) => a.price - b.price);
    },
    minimumServicePrice () {
      return this.sortedServices?.shift()?.price;
    },
    maximumServicePrice () {
      return this.sortedServices?.pop()?.price;
    },
    schedules () {
      return this.clinicWebsite?.mf_schedule; // eslint-disable-line
    },
    testimonialDate () {
      return this.clinicWebsite?.createdAt;
    },
    testimonialDescription () {
      return this.clinicWebsite?.description;
    },
    doctors () {
      // return { data: this.clinicWebsite };
      if (this.orgDoctors.length > 0) {
        return this.orgDoctors;
      } else {
        return [];
      }
    },
    consultIDS () {
      return { docUID: this.member?.uid, clinicID: this.orgId };
    },
    formattedDoctors () {
      return this.orgDoctors?.map((doctor) => {
        const practicingSince = doctor.personalDetails?.['doc_practicingSince'];
        const yearsPracticing = practicingSince && (new Date().getFullYear() - practicingSince);

        return {
          ...doctor,
          picURL: doctor.personalDetails?.picURL,
          doctorName: `Dr. ${doctor.personalDetails?.name?.firstName} ${doctor.personalDetails?.name?.lastName}`,
          specialties: doctor.personalDetails?.['doc_specialties']?.join(', '),
          yearsPracticing: yearsPracticing && `${yearsPracticing} years`,
        };
      });
    },
  },
  mounted () {
    this.loading = false;
    this.fetchDoctorMembers();
  },
  methods: {
    async fetchDoctorMembers (page = 1) {
      const skip = this.doctorsLimit * (page - 1);
      const { items, total } = await this.$sdk.service('organization-members').find({
        organization: this.orgId,
        roles: 'doctor',
        $limit: this.doctorsLimit,
        $skip: skip,
      });
      this.doctorsTotal = total;
      const members = items;
      if (!members?.length) return members;

      const doctorPersonalDetails = await this.fetchDoctorPersonalDetails(members);
      this.orgDoctors = doctorPersonalDetails;
    },
    async fetchDoctorPersonalDetails (members) {
      const populatedMembersPromises = members.map(async (member) => {
        const data = await this.$sdk.service('personal-details').get(member.uid);
        return {
          ...member,
          personalDetails: data,
        };
      });
      return await Promise.all(populatedMembersPromises);
    },
  },
  head () {
    return headMeta({
      title: `${this.clinicWebsite?.name || 'Clinic Website'}`,
      description: 'Visit my professional website and schedule an appointment with me today.',
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.main-content {
  margin-top: 100px;
}
.doctors-container {
  background-color: #F2F2F2;
}
</style>
