<template lang="pug">
  div(v-if="!loading.page").py-0
    app-bar(:picURL="picURL" :clinicName="clinicName")
    usp(
      :name="clinicName"
      :org-id="orgId"
      :coverURL="coverURL"
    )
    v-container(fluid)
      v-row(justify="center")
        v-col(cols="12" md="3")
          //- TODO: one property only, `clinic`
          clinic-info(:clinic="clinicWebsite")
          schedules(:schedules="schedules").mt-2
        v-col(cols="12" md="8")
          services-tabs(
            v-model="activeTab"
            :items="listItems"
            :loading="loading.list"
          )
    v-divider
    v-footer(v-if="!$isMobile" color="white").mt-3
      v-row(justify="center" align="center" no-gutters)
        v-col(
          cols="12"
          md="5"
          align="start"
        )
          div.d-flexDirectory
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
            p.white--text.font-14.ml-4.mt-1 &#169;{{new Date().getFullYear()}} All Rights Reserved. asd
</template>

<script>
// - utils
import { getMembership, getServices } from '~/utils/axios';
import {
  getOrganization,
} from '~/utils/axios/organizations';
import headMeta from '~/utils/head-meta';
// - services
import { fetchClinicWebsiteDoctors } from '~/services/organization-members';
import { fetchClinicServices } from '~/services/services';
// - components
import AboutUs from '~/components/clinic-website/about-us';
import AppBar from '~/components/clinic-website/app-bar';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import DoctorCards from '~/components/clinic-website/doctor-card';
import DoctorsList from '~/components/clinic-website/doctors-list';
import Schedules from '~/components/clinic-website/schedules';
import ServicesTabs from '~/components/clinic-website/services/tabs';
import Specializations from '~/components/clinic-website/specialization-expansion';
import Usp from '~/components/clinic-website/usp';
export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Usp,
    DoctorsList,
    AboutUs,
    ClinicInfo,
    Schedules,
    ServicesTabs,
    // Consultations,
    // Testimonials,
    // SpecializationsChats,
    DoctorCards,
    Specializations,
  },
  async asyncData ({ params, $sdk }) {
    try {
      const clinicWebsite = await getOrganization({ id: params.id }, true) || [];
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
    this.servicesLimit = 7;
    return {
      loading: {
        page: true,
        list: false,
      },
      page: 1,
      pageCount: 2,
      orgDoctors: [],
      //
      clinicWebsite: {},
      activeTab: 'lab',
      doctorsTotal: 0,
      filteredServices: [],
      // Items to show in tab list
      listItems: [],
    };
  },
  computed: {
    orgId () {
      return this.clinicWebsite.id;
    },
    picURL () {
      return this.clinicWebsite?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    coverURL () {
      return this.clinicWebsite?.coverURL || require('~/assets/images/clinics-website/usp-background.png');
    },
    clinicName () {
      return this.clinicWebsite?.name || 'MYCURE Clinic';
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
  watch: {
    activeTab: {
      async handler (val) {
        if (val === 'lab') {
          await this.fetchServices({ type: 'diagnostic', subtype: 'lab' });
          this.listItems = [...this.filteredServices];
          return;
        }
        if (val === 'imaging') {
          await this.fetchServices({ type: 'diagnostic', subtype: 'imaging' });
          this.listItems = [...this.filteredServices];
          return;
        }
        if (val === 'doctors') {
          await this.fetchDoctorMembers();
          this.listItems = [...this.formattedDoctors];
          return;
        }
        await this.fetchServices({ type: val });
        this.listItems = [...this.filteredServices];
      },
    },
  },
  async mounted () {
    this.loading.page = false;
    await this.fetchServices({ type: 'diagnostic', subtype: 'lab' });
    await this.fetchDoctorMembers();
    this.listItems = this.filteredServices;
  },
  methods: {
    async fetchDoctorMembers (page = 1) {
      try {
        this.loading.list = true;
        const skip = this.doctorsLimit * (page - 1);
        const { items, total } = await fetchClinicWebsiteDoctors(this.$sdk, {
          organization: this.orgId,
          limit: this.doctorsLimit,
          skip,
        });
        this.doctorsTotal = total;
        const members = items || [];
        if (!members?.length) return members;

        this.orgDoctors = members;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.list = false;
      }
    },
    async fetchServices (service, page = 1) {
      try {
        this.loading.list = true;
        const { type, subtype } = service;
        const skip = this.servicesLimit * (page - 1);
        const { items } = await fetchClinicServices(this.$sdk, {
          facility: this.orgId,
          type,
          subtype,
          limit: this.servicesLimit,
          skip,
        });
        this.filteredServices = items;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.list = false;
      }
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
