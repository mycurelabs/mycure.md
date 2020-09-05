<template lang="pug">
  div(style="background-color: #ececec; border-radius: 5px; min-height: 808px;")
    v-tabs(background-color="#ececec")
      v-tab.text-none Specializations
      v-tab.text-none Chats
      v-tab-item
        specialization-expansion(:doctors="doctors" :consultIDS="consultIDS")
      v-tab-item(background-color="#ececec")
        //- INSERT CHAT COMPONENTS HERE
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
  data () {
    return {};
  },
};
</script>

<style scoped>

</style>
