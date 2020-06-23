<template lang="pug">
  v-container(fluid)
    // TODO: navbar -- done / refactor needed?
    // TODO: hero panel -- done / refactor needed
    // TODO: services -- done / check for refactors
    // TODO: clinic info -- done / check for refactors
    // TODO: doctors list -- doing
    // TODO: about clinic
    // TODO: social panel
    // TODO: final cta
    // TODO: footer -- done
    app-bar
    //- panel 1
    panel-1(
      pic-url="MYCURE-virtual-clinic-healthcare-practice-online-enterprise-F-multi-specialty"
      pic-extension=".webp"
      pic-alt="Clinic Image"
      pic-custom-path="enterprise/"
      clinic-copy="Copy of the clinic. Ex. The best clinic since 1945"
      clinic-tagline="Up to 50 characters plus a tagline up to well 60 characters."
    )
    services(
      header-text="We offer this healthcare services for you."
      :services="services"
    )
    v-divider
    clinic-info(
      :schedules="schedules"
      :rates="rates"
      clinic-name="MYCURE Virtual Clinic"
      clinic-address="1036, Delos Santos STI Medical Center 201 E. Rodriguez Avenue Quezon City"
    )
    v-divider
    doctors(
      :doctors="doctors"
    )
    //- panel-1(
    //-   :pic-url="picURL"
    //-   :full-name="fullNameWithSuffixes"
    //-   :bio="bio"
    //-   :specialties="specialties"
    //-   :professions="professions"
    //-   :practicing-since="practicingSince"
    //- )
    //- services(
    //-   :services="services"
    //- )
    //- tabs(
    //-   :clinics="clinics"
    //-   :bio="bio"
    //-   :specialties="specialties"
    //-   :professions="professions"
    //-   :practicing-since="practicingSince"
    //-   :education="education"
    //- )
    //- social(
    //-   :name="name"
    //- )
    v-divider
    v-footer(
      height="auto"
      color="white"
    )
      v-row
        v-col.text-center
          span.black--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link.font-weight-bold MYCURE]
    //- pre {{doctor}}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
// import _ from 'lodash';
// import { getDoctorWebsite, getDoctorClinics, recordWebsiteVisit } from '~/utils/axios';
// import { formatName } from '~/utils/formats';
import headMeta from '~/utils/head-meta';
import AppBar from '~/components/clinic-website/app-bar';
import Panel1 from '~/components/clinic-website/panel-1';
import Services from '~/components/clinic-website/services';
import ClinicInfo from '~/components/clinic-website/clinic-info';
import Doctors from '~/components/clinic-website/doctors';
// import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
import Social from '~/components/doctor-website/social';
export default {
  layout: 'clinic-website',
  components: {
    PictureSource,
    AppBar,
    Panel1,
    Services,
    ClinicInfo,
    Doctors,
    Tabs,
    Social,
  },
  // async asyncData ({ app, router, params, error }) {
  //   try {
  //     const doctor = await getDoctorWebsite({ username: params.id });
  //     console.warn('doctor', doctor);
  //     if (_.isEmpty(doctor)) {
  //       error({ statusCode: 404, message: 'doctor-not-found' });
  //     }
  //     const clinics = await getDoctorClinics({ uid: doctor.id });
  //     console.warn('clinics', clinics);
  //     return {
  //       doctor,
  //       clinics: clinics || [],
  //     };
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  data () {
    return {
      selectedTab: 'clinics',
      services: [
        'Obstetrics and Gynecology',
        'Pediatrics and Neonatology',
        'Internal Medicine',
        'Cardiology',
        'Pulmonology',
        'General Surgery',
        'Pathology, Radiology, and Sonology',
        'Endocrinology',
        'Gastroenterology',
      ],
      schedules: [
        {
          day: 'Mon - Sat',
          time: '04:00 PM - 09:00 PM',
        },
        {
          day: 'Sun',
          time: '09:00 PM - 12:00 PM',
        },
      ],
      rates: {
        currency: '₱',
        min: '500',
        max: '1,000',
      },
      doctors: [
        {
          firstName: 'Jean',
          lastName: 'Rivera',
          title: 'MD',
          imageUrl: '~/assets/images/doctor-website/doctor-website-profile-female.png',
          specialization: 'Pediatrician',
          specializationTags: ['kids', 'family', 'eyes', 'nose', 'elderly'],
          experience: 25,
          siteUrl: 'https://www.google.com',
          availability: [
            {
              day: 'Mon - Sat',
              time: '04:00 PM - 09:00 PM',
            },
            {
              day: 'Sun',
              time: '09:00 PM - 12:00 PM',
            },
          ],
        },
        {
          firstName: 'Arthas',
          lastName: 'Menethil',
          title: 'MD',
          imageUrl: '~/assets/images/doctor-website/doctor-website-profile-male.png',
          specialization: 'Pulmonology',
          specializationTags: ['kids', 'family', 'eyes', 'nose', 'elderly'],
          experience: 3,
          siteUrl: 'https://www.google.com',
          availability: [
            {
              day: 'Mon - Sat',
              time: '04:00 PM - 09:00 PM',
            },
            {
              day: 'Sun',
              time: '09:00 PM - 12:00 PM',
            },
          ],
        },
        {
          firstName: 'Jaina',
          lastName: 'Proudmoore',
          title: 'MD',
          imageUrl: '~/assets/images/doctor-website/doctor-website-profile-female.png',
          specialization: 'Internist',
          specializationTags: ['kids', 'family', 'eyes', 'nose', 'elderly'],
          experience: 5,
          siteUrl: 'https://www.google.com',
          availability: [
            {
              day: 'Mon - Sat',
              time: '04:00 PM - 09:00 PM',
            },
            {
              day: 'Sun',
              time: '09:00 PM - 12:00 PM',
            },
          ],
        },
      ],
    };
  },
  computed: {
    // picURL () {
    //   const sex = this.doctor?.sex;
    //   if (sex === 'female') {
    //     return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-female.png');
    //   }
    //   return this.doctor?.picURL || require('~/assets/images/doctor-website/doctor-website-profile-male.png');
    // },
    // name () {
    //   return this.doctor?.name;
    // },
    // fullName () {
    //   return formatName(this.doctor?.name || {}, 'firstName middleInitial lastName generationalSuffix');
    // },
    // fullNameWithSuffixes () {
    //   return [
    //     this.fullName,
    //     ...this.professions,
    //     this.doctor?.name.academicSuffix,
    //     this.doctor?.name.professionalSuffix,
    //   ].filter(Boolean).join(', ');
    // },
    // bio () {
    //   return this.doctor?.doc_bio || ''; // eslint-disable-line
    // },
    // specialties () {
    //   return this.doctor?.doc_specialties || []; // eslint-disable-line
    // },
    // professions () {
    //   return this.doctor?.doc_professions || []; // eslint-disable-line
    // },
    // practicingSince () {
    //   return this.doctor?.doc_practicingSince; // eslint-disable-line
    // },
    // services () {
    //   return this.doctor?.doc_services; // eslint-disable-line
    // },
    // education () {
    //   return this.doctor?.educations;
    // },
  },
  async mounted () {
    // if (this.$route.query.audience === 'self') {
    //   return;
    // };
    // await recordWebsiteVisit({ uid: this.doctor.id });
  },
  head () {
    // TODO: update meta tags
    return headMeta({
      title: `${this.fullNameWithSuffixes}`,
      description: `${this.bio || 'Visit my professional website and schedule an appointment with me today.'}`,
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
</style>
