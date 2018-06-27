<template lang="pug">
  b-container
    b-row(v-if="!!items.length").row.justify-content-left.pt-4.pb-4
      b-col(xs="4" md="3" v-for="(item, key) in items" @click="goToDoctorWebsite(item)").result-item.pb-3
        div.card
          img(width="100%" :src="item.picURL" v-img-fallback="imgFallback").mb-1
          div.text-center
            h5 Dr. {{item.name.firstName}} {{item.name.middleName}} {{item.name.lastName}}
    pre {{items}}
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        imgFallback: {
          loading: require('../../assets/images/loading-1.gif'),
          error: require('../../assets/images/person-placeholder.png')
        },
        items: [],
        name: {
          firstName: '',
          middleName: '',
          lastName: ''
        }
      }
    },
    methods: {
      goToDoctorWebsite(doctor) {
        console.log(doctor)
        if(!doctor.doc_website) {
          alert(`Dr. ${doctor.name.firstName}'s website is not enabled.`);
          return;
        }
        location.href = `${location.origin}/${doctor.doc_website}`;
      }
    },
    watch: {
      data(val) {
        if(!val) return;
        const { items } = val;
        this.items = items;
      }
    }
  }
</script>

<style scoped>
  .result-item {

  }

  .result-item:hover {
    cursor: pointer;
  }
</style>
