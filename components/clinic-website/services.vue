<template lang="pug">
  div.main-container
    h2(:class="{ 'text-left': !$isMobile, 'text-center': $isMobile }").font-21.pb-6 Services Offered
    div(v-if="services.length === 0")
      i No Services available
    div(v-for="(service, key) in servicesFirstFive" :key="key" :class="{ 'justify-center' : $isMobile }").text-left
      div.d-inline-flex
        v-img(:src="require(`~/assets/images/mycure-check.png`)" width="25" contain)
        span.ml-3.mt-1 {{ service.title }}
    div(v-if="showAll" v-for="(service, key) in allServices" :key="'All' + key")
      div.d-inline-flex
        v-img(:src="require(`~/assets/images/${service.image}`)" width="30" contain)
        span.ml-3.mt-1 {{ service.title }}
    div
    //- UPDATE THE v-if LATER BASE ON servicesOffered PROPS DATA
    div(v-if="servicesFirstFive.length === 5" style="position: absolute; bottom: 10px;")
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
    return {
      showAll: false,
    };
  },
  computed: {
    services () {
      return this.servicesOffered?.map(service => ({
        title: service.name,
      }));
    },
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
.main-container {
  /* background-color: #ececec; */
  border-radius: 5px;
  position: relative;
  padding: 20px;
}
</style>
