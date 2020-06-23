<template lang="pug">
  v-container(fluid)
    // TODO: navbar -- done
    // TODO: hero panel -- doing
    // TODO: services
    // TODO: clinic info
    // TODO: doctors list
    // TODO: about clinic
    // TODO: final cta
    // TODO: footer -- done
    app-bar
    //- panel 1
    div
      v-row(justify="center" align="center")
        v-col(align="right" cols="12" md="5" order-sm="2" order-md="1")
          picture-source(
            customPath="enterprise/"
            image="MYCURE-virtual-clinic-healthcare-practice-online-enterprise-F-multi-specialty"
            imageAlt="Clinic Image"
            imageFileExtension=".webp"
          )
        v-col(align="left" cols="12" md="7" order-sm="1" order-md="2")
          h1.font-weight-bold.font-64 Copy of the clinic. Ex. The best clinic since 1945
          br
          p.font-32 Up to 50 characters plus a tagline up to well 60 characters.
          br
          v-btn(color="primary" large) Book Appoinment
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
import Panel1 from '~/components/doctor-website/panel-1';
import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
import Social from '~/components/doctor-website/social';
export default {
  layout: 'clinic-website',
  components: {
    PictureSource,
    AppBar,
    Panel1,
    Services,
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
