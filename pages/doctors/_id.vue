<template lang="pug">
  div
    app-bar
    panel-1(
      :pic-url="picURL"
      :full-name="fullName"
      :bio="bio"
    )
    services(
      :services="services"
    )
    tabs
    social
    v-footer(
      height="auto"
      color="primary"
    )
      v-row
        v-col.text-center
          span.white--text Copyright {{new Date().getFullYear()}} | All Rights Reserved | Powered by #[a(href="https://mycure.md" target="_blank").mycure-link MYCURE]
    //- pre {{doctor}}
</template>

<script>
import { getDoctorWebsite } from '../../utils/axios';
import { formatName } from '../../utils/formats';
import AppBar from '~/components/doctor-website/app-bar';
import Panel1 from '~/components/doctor-website/panel-1';
import Services from '~/components/doctor-website/services';
import Tabs from '~/components/doctor-website/tabs';
import Social from '~/components/doctor-website/social';
export default {
  layout: 'doctor-website',
  components: {
    AppBar,
    Panel1,
    Services,
    Tabs,
    Social,
  },
  async asyncData ({ app, router, params }) {
    const doctor = await getDoctorWebsite({ username: params.id });
    return {
      doctor: doctor || {},
    };
  },
  data () {
    return {
      selectedTab: 'clinics',
    };
  },
  computed: {
    picURL () {
      // TODO: add placeholder as alternative
      return this.doctor?.picURL || '';
    },
    fullName () {
      return formatName(this.doctor?.name || {}, 'firstName middleInitial lastName');
    },
    bio () {
      return this.doctor?.doc_bio || ''; // eslint-disable-line
    },
    services () {
      return [
        'Newborn Jaundice',
        'Adolescent Medicine',
        'Chickenpox Treatment',
        'Measles Treatment',
        'Vaccination / Immunization',
        'Congenital Disorders',
        'Evaluation / Treatment',
        'Limping Child',
        'Bronchial Asthma Treatment',
      ];
    },
  },
  head () {
    return {
      title: `Dr. ${this.fullName} | MYCURE Doctors`,
    };
  },
};
</script>

<style scoped>
.mycure-link {
  color: white;
  text-decoration: none;
}
</style>
