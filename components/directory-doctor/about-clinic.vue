<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center" v-for="(data, key) in about" :key="key")
      v-col(justify="center" cols="12" md="8").text-center
        h1 About {{data.clinicName}}
      v-col(justify="center" align="center" cols="12" md="8")
        p(v-if="readMore" v-html="data.clinicsInfo.slice(0, 189)").grey--text
        a(v-if="readMore" @click="toggleReadMore").primary-text Read More...
        p(v-if="!readMore" v-html="data.clinicsInfo").grey--text
        a(v-if="!readMore" @click="toggleReadMore").pl-3.primary-text Read Less
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    about: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      readMore: true,
    };
  },
  methods: {
    toggleReadMore () {
      this.readMore = !this.readMore;
    },
  },
};
</script>
