<template lang="pug">
  div.main-container
    v-tabs(background-color="#ececec")
      v-tab.text-none Specializations
      v-tab-item
        specialization-expansion(:doctors="doctors" :consultIDS="consultIDS")
</template>

<script>
import SpecializationExpansion from '~/components/clinic-website/specialization-expansion';
export default {
  components: {
    SpecializationExpansion,
  },
  props: {
    doctors: {
      type: Object,
      default: () => ({}),
    },
    consultIDS: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #ececec;
  border-radius: 5px;
  min-height: 808px;
}
</style>
