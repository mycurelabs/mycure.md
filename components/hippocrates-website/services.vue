<template lang="pug">
  div(style="background-color: #ececec; border-radius: 5px; min-height: 400px; position: relative" )
    h2.pb-6 Services Offered
    div(v-if="services.length === 0")
      i No Services available
    div(v-for="(service, key) in servicesFirstFive" :key="key")
      div.d-inline-flex
        v-img(:src="require(`~/assets/images/${service.image}`)" width="30" contain)
        span.ml-3.mt-1 {{ service.title }}
    div(v-if="showAll" v-for="(service, key) in allServices" :key="'All' + key")
      div.d-inline-flex
        v-img(:src="require(`~/assets/images/${service.image}`)" width="30" contain)
        span.ml-3.mt-1 {{ service.title }}
    //- UPDATE THE v-if LATER BASE ON servicesOffered PROPS DATA LATER
    div(v-if="servicesFirstFive.length === 5" style="position: absolute; bottom: 10px").pt-6
      strong(@click="showAll = !showAll").primary--text See {{ showAll ? 'Less' : 'All' }}
</template>

<script>
// import { length } from '@feathersjs/feathers/lib/version';
export default {
  props: {
    servicesOffered: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.services = [
      { image: 'mycure-check.png', title: 'Newborn Jaundice' },
      { image: 'mycure-check.png', title: 'Adolescent Medicine' },
      { image: 'mycure-check.png', title: 'Chickenpox Treatment' },
      { image: 'mycure-check.png', title: 'Physical Therapy' },
      { image: 'mycure-check.png', title: 'ENT Service' },
      { image: 'mycure-check.png', title: 'Weight Management' },
    ];
    return {
      showAll: false,
    };
  },
  computed: {
    servicesFirstFive () {
      // UPDATE THIS servicesOffered PROPS DATA LATER
      return this.services.slice(0, 5);
    },
    allServices () {
      // UPDATE THIS servicesOffered PROPS DATA LATER
      const servicesLength = this.services.length;
      return this.services.slice(5, servicesLength);
    },
  },
};
</script>

<style scoped>
strong {
  cursor: pointer;
}
</style>
