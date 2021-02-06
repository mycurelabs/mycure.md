<template lang="pug">
  v-container.py-10
      v-row(justify="center")
        v-col(cols="12").text-center
          h1.font-40 How It Works
        template(v-if="!$isMobile" v-for="item in items")
          v-col(cols="12" md="4").text-center
            img(
              :src="item.image"
              alt="Steps"
              height="210"
              ).mt-4
            p.subtitle-1.mt-2 {{item.description}}
        template(v-else)
          v-col(cols="10").d-flex.align-center
            img(
              :src="item.mobileImage"
              alt="Steps"
              ).mt-2
            p.font-24.mt-2.ml-4.mb-0 {{item.description}}
  </template>
<script>
export default {
  data () {
    return {
      items: [
        {
          number: '01',
          image: require('~/assets/images/home/search-icon.png'),
          mobileImage: require('~/assets/images/home/mobile-search-icon.png'),
          description: 'Find the service you need',
        },
        {
          number: '02',
          image: require('~/assets/images/home/book-icon.png'),
          mobileImage: require('~/assets/images/home/mobile-book-icon.png'),
          description: 'Book the service',
        },
        {
          number: '03',
          image: require('~/assets/images/home/pay-icon.png'),
          mobileImage: require('~/assets/images/home/mobile-pay-icon.png'),
          description: 'Pay later',
        },
      ],
    };
  },
};
</script>
