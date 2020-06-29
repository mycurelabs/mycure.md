<template lang="pug">
  v-container.pt-6
    v-row(justify="center" align="center" v-for="(data, key) in social" :key="key")
      v-col(cols="12" md="7" justify="center" align="center").panel-content
        p.pt-1 {{data.title}}
        template(v-if="!$isMobile" v-for="(data, key) in data.icons")
          a(:href="data.link" target="_blank" rel="noopener noreferrer")
            v-icon(:class="paddingClasses").font-30.primary--text.pl-4 {{data.icon}}
      v-col(v-if="$isMobile" v-for="(icon, key) in data.icons" :key="key" align="center")
        a(:href="icon.link" target="_blank" rel="noopener noreferrer")
          v-icon(:class="paddingClasses").font-30.primary--text.mt-n12 {{icon.icon}}
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
      return [{ 'pt-3': this.$isMobile }];
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
