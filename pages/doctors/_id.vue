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
    pre {{doctor}}
</template>

<script>
import { getDoctorWebsite } from '../../utils/axios';
import { formatName } from '../../utils/formats';
import AppBar from '~/components/doctor-website/app-bar';
import Panel1 from '~/components/doctor-website/panel-1';
import Services from '~/components/doctor-website/services';
export default {
  layout: 'doctor-website',
  components: {
    AppBar,
    Panel1,
    Services,
  },
  async asyncData ({ app, router, params }) {
    const doctor = await getDoctorWebsite({ username: params.id });
    console.warn(doctor);
    return {
      doctor: doctor || {},
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
