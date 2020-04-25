<template lang="pug">
  v-container
    v-row
      v-col
        img(width="100" :src="picURL")
        pre {{name}}
</template>

<script>
import { getDoctorWebsite } from '../../utils/axios';
export default {
  layout: 'doctor-website',
  async asyncData ({ app, router, params }) {
    const doctor = await getDoctorWebsite({ username: params.id });
    return {
      picURL: doctor.picURL,
      name: doctor.name,
    };
  },
  head () {
    return {
      title: `Dr. ${this.name?.firstName} ${this.name?.lastName} | MYCURE`,
    };
  },
};
</script>
