<template lang="pug">
  v-container
    v-row(justify="center" align="center").text-center
      v-col(cols="12")
        h1.font-40.mb-4 Services
      template(v-for="service in services")
        v-col(cols="12" md="5").d-flex.justify-center
            v-card(width="325")
              img(
                :src="service.image"
                width="100%"
                alt="services"
              )
              v-card-title #[b.ma-auto {{service.title}}]
              v-card-subtitle {{ service.description }}
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
