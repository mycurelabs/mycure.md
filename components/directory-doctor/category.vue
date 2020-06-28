<template lang="pug">
  v-container(fluid).py-12
    v-row(justify="center" align="center")
      v-cols(cols="12" md="4")
        h1 I need a doctor...
        v-carousel(hide-delimiters continuous).py-10
          v-carousel-item(cols="12" v-for="(data, key) in cardItems" :key="key")
            v-card(width="300" color="indigo lighten-3").text-center
              div.py-5
                img(:src="require(`~/assets/images/directory-doctor/${data.image}`)")
                h2 {{data.title}}
                p {{data.subTitle}}
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    cardItems: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      key: 0,
    };
  },
//   computed: {
//     cardColor () {
//       return [this.key === 0 ? 'indigo lighten-3' : 'teal lighten-3'];
//     },
//   },
};
</script>

<style scoped>
</style>
