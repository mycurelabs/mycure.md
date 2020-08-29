<template lang="pug">
  div
    h2.pb-6 Services Offered
    div(v-for="(service, key) in services" :key="key").d-inline-flex
      v-img(:src="require(`~/assets/images/${service.image}`)" width="35")
      div.ml-3.mt-2
        span {{ service.service }}
    div.pt-6
      strong.primary--text See All
</template>

<script>
export default {
  data () {
    this.services = [
      { image: 'mycure-check.png', service: 'Newborn Jaundice' },
      { image: 'mycure-check.png', service: 'Adolescent Medicine' },
      { image: 'mycure-check.png', service: 'Chickenpox Treatment' },
      { image: 'mycure-check.png', service: 'Physical Therapy' },
      { image: 'mycure-check.png', service: 'ENT Service' },
      { image: 'mycure-check.png', service: 'Weight Management' },
    ];
    return {};
  },
};
</script>

<style scoped>
</style>
