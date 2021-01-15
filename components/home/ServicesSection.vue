<template lang="pug">
  v-container
    v-row(justify="center" align="center").text-center
      template(v-for="service in services")
        v-col(cols="6").d-flex.justify-center
            v-card(width="325").text-center
              img(
                :src="service.image"
                width="100%"
                alt="services"
              )
              v-card-title(v-html="service.title")
              v-card-subtitle {{ service.description }}
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          image: require('~/assets/images/home/services-consult.png'),
          title: '<strong>Consult</strong>',
          description: 'Talk to a doctor',
        },
        {
          image: require('~/assets/images/home/services-lab-and-imaging.png'),
          title: '<strong>Lab & Imaging</strong>',
          description: 'Get tests done',
        },
        {
          image: require('~/assets/images/home/services-my-health.png'),
          title: '<strong>My Health</strong>',
          description: 'Manage personal health records',
        },
        {
          image: require('~/assets/images/home/services-medicine-delivery.png'),
          title: '<strong>Medicine Delivery</strong>',
          description: 'Get medicines delivered now',
        },
      ],
    };
  },
};
</script>
