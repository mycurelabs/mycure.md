<template lang="pug">
  v-container
    v-row(justify="center" align="center").text-center
      v-col(cols="12")
        h1.font-40.mb-4 Services
      template(v-if="!$isMobile" v-for="service in services")
        v-col(cols="12" md="5").d-flex.justify-center
            v-card(width="325")
              v-img(
                :src="service.image"
                width="100%"
                height="218"
                alt="services"
              )
              v-card-title #[b.ma-auto {{service.title}}]
              v-card-subtitle {{ service.description }}
      template(v-if="$isMobile" v-for="service in services")
        v-col(cols="12")
          v-row(width="100%").service-card
            v-col(cols="4")
              v-img(
                :src="service.image"
                width="125"
                alt="services"
              ).ma-auto
            v-col(cols="6").text-left
              div.my-auto
                h1.font-18 {{service.title}}
                p.font-16.font-gray {{ service.description }}
            v-col.my-auto
              v-icon mdi-chevron-right
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          image: require('~/assets/images/home/services-consult.png'),
          title: 'Consult',
          description: 'Talk to a doctor',
        },
        {
          image: require('~/assets/images/home/services-lab-and-imaging.png'),
          title: 'Lab & Imaging',
          description: 'Get tests done',
        },
        {
          image: require('~/assets/images/home/services-my-health.png'),
          title: 'My Health',
          description: 'Manage personal health records',
        },
        {
          image: require('~/assets/images/home/services-medicine-delivery.png'),
          title: 'Medicine Delivery',
          description: 'Get medicines delivered now',
        },
      ],
    };
  },
};
</script>
<style scoped>
.service-card {
  border-bottom: 1px solid;
}
</style>
