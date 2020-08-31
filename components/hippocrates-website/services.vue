<template lang="pug">
  div
    h2.pb-6 Services Offered
    div(v-for="(service, key) in services" :key="key")
      div.d-inline-flex
        v-img(:src="require(`~/assets/images/${service.image}`)" width="30" contain)
        span.ml-3.mt-1 {{ service.title }}
    div.pt-6
      strong.primary--text See All
</template>

<script>
export default {
  data () {
    this.services = [
      { image: 'mycure-check.png', title: 'Newborn Jaundice' },
      { image: 'mycure-check.png', title: 'Adolescent Medicine' },
      { image: 'mycure-check.png', title: 'Chickenpox Treatment' },
      { image: 'mycure-check.png', title: 'Physical Therapy' },
      { image: 'mycure-check.png', title: 'ENT Service' },
      { image: 'mycure-check.png', title: 'Weight Management' },
    ];
    return {};
  },
};
</script>

<style scoped>
</style>
