<template lang="pug">
  div.main-container
    specialization-expansion(:doctors="doctors")
</template>

<script>
import SpecializationExpansion from '~/components/clinic-website/specialization-expansion';
export default {
  components: {
    SpecializationExpansion,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #ececec;
  border-radius: 5px;
}
</style>
