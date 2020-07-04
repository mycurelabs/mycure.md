<template lang="pug">
  generic-container.mb-10
    v-row(justify="center" align="center")
      v-col(cols="12" md="8").text-center
        h1 About {{about.clinicName}}
        p.grey--text.white-space {{ readMore ? about.clinicsInfo.slice(0, 189) : about.clinicsInfo }}
        a(@click="readMore = !readMore").primary-text {{ readMore ? 'Read More...' : 'Read Less' }}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  props: {
    about: {
      type: Object,
      default: () => ({
        clinicName: '',
        clinicsInfo: '',
      }),
    },
  },
  data () {
    return {
      readMore: true,
    };
  },
};
</script>

<style scoped>
.white-space {
  white-space: break-spaces;
}
</style>
