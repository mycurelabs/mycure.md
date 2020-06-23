<template lang="pug">
  v-container(fluid)
    // TODO: navbar -- done
    // TODO: hero panel -- done / refactor needed
    // TODO: services -- doing
    // TODO: clinic info
    // TODO: doctors list
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
    v-container(fluid).my-10
      v-row(justify="center" align="center" :class="{ 'mb-10': !$isMobile }")
        h1 We offer this healthcare services for you.
      v-row(v-if="!$isMobile" justify="center" align="center").px-10
        v-col(cols="12" md="4" align-self="start")
          v-list(two-line).text-left
            v-list-item(
              v-for="(item, key) in servicesColumn1"
              :key="key"
            )
              v-list-item-action
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
              v-list-item-content
                span {{ item }}
        v-col(v-if="showTwoColumn || showThreeColumn" cols="12" md="4" align-self="start")
          v-list(two-line).text-left
            v-list-item(
              v-for="(item, key) in servicesColumn2"
              :key="key"
            )
              v-list-item-action
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
              v-list-item-content
                span {{ item }}
        v-col(v-if="showThreeColumn" cols="12" md="4" align-self="start")
          v-list(two-line).text-left
            v-list-item(
              v-for="(item, key) in servicesColumn3"
              :key="key"
            )
              v-list-item-action
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
              v-list-item-content
                span {{ item }}
      v-row(v-if="$isMobile" justify="center" align="center").px-10
        v-col(cols="12")
          v-list(two-line).text-left
            v-list-item(
              v-for="(item, key) in services"
              :key="key"
            )
              v-list-item-action
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
              v-list-item-content
                span {{ item }}
    v-divider
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
    };
  },
  computed: {
    showOneColumn () {
      return this.services.length < 4;
    },
    showTwoColumn () {
      return this.services.length < 7 && this.services.length > 3;
    },
    showThreeColumn () {
      return this.services.length >= 7;
    },
    columnCount () {
      return this.showOneColumn ? '4' : this.showTwoColumn ? '4' : '4';
    },
    columnOffsetCount () {
      return this.showOneColumn ? '4' : this.showTwoColumn ? '2' : '';
    },
    servicesColumn1 () {
      if (this.showOneColumn) {
        return this.services;
      }

      if (this.showTwoColumn) {
        return this.services.filter((v, i) => !(i % 2));
      }

      return this.services.filter((v, i) => !(i % 3));
    },
    servicesColumn2 () {
      if (this.showOneColumn) {
        return false;
      }

      if (this.showTwoColumn) {
        return this.services.filter((v, i) => (i % 2));
      }

      return this.services.filter((v, i) => (i % 3 === 1));
    },
    servicesColumn3 () {
      if (this.showThreeColumn) {
        return this.services.filter((v, i) => (i % 3 > 1));
      }

      return false;
    },
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
