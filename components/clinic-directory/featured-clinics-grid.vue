<template lang="pug">
  v-col(cols="6" lg="2" md="4" sm="6").pa-1
    v-card(height="210" :img="picURL" style="position: relative;" @click="viewClinic")
      v-card-text(:style="cardStyles" :class="cardClasses")
        v-icon(color="orange" size="20px") mdi-star
        p {{ hospitalName }}
        //- REMOVE THIS FOR THE MOMENT
        //- p(style="position: absolute; bottom: 0; margin: 5px;")
        //-   v-icon(size="20px").primary--text mdi-map-marker
        //-   | 35km
</template>

<script>
export default {
  props: {
    clinic: {
      type: Object,
      default: null,
    },
  },
  computed: {
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    hospitalName () {
      return this.clinic?.name || {};
    },
    cardStyles () {
      return { height: '100px', position: 'absolute', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' };
    },
    cardClasses () {
      return ['pa-1', 'font-weight-bold', 'white--text', 'pl-2'];
    },
  },
  methods: {
    viewClinic () {
      const id = this.clinic?.id;
      if (!id) return;
      this.$nuxt.$router.push({ name: 'clinics-id', params: { id } });
    },
  },
};
</script>
