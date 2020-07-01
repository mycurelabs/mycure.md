<template lang="pug">
  v-container(fluid).py-12
    v-row(justify="center" align="center")
      v-col(cols="12" justify="center" align="center")
        h1 I need a doctor...
      v-col(cols="12" md="3" v-for="(data, key) in cardItems" :key="key")
        v-card(:color="colors[key]").text-center
          div.py-5
            img(:src="require(`~/assets/images/directory-doctor/${data.image}`)")
            h2.white--text {{data.title}}
            span {{data.subTitle}}
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
      colors: [
        'indigo lighten-3',
        'teal lighten-3',
        'light-green lighten-2',
      ],
    };
  },
};
</script>

<style scoped>
</style>
