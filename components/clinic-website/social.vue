<template lang="pug">
  v-container.pt-6
    v-row(justify="center" align="center" v-for="(data, key) in social" :key="key")
      v-col(cols="12" md="6" justify="center" align="center").panel-content
        p.pt-1 {{data.title}}
        template(v-for="(data, key) in data.icons" align-self="center")
          a(:href="data.link" target="_blank" rel="noopener noreferrer")
            v-icon(:class="paddingClasses").font-30.primary--text.pl-4 {{data.icon}}
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    social: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    paddingClasses () {
      return [this.$isMobile ? 'pt-3' : ''];
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.panel-content {
  display: flex;
  justify-content: center;
}
</style>
