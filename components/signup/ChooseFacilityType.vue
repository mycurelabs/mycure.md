<template lang="pug">
  v-dialog(v-model="dialog" width="850" height="900" persistent)
    v-card
      v-card-text.pa-3
        v-container
          v-row(justify="center")
            v-col(cols="12").text-center
              h1 Choose Health Facility Type
            v-col(cols="12" md="4" v-for="(type, key) in facilityTypes" :key="key")
              v-card(height="100%" @click="onTypeSelect(type)").elevation-3.text-center
                img(
                  :src="require(`~/assets/images/home/${type.image}.png`)"
                  :alt="type.image"
                  width="50%"
                )
                v-card-text.text-center
                  h3.mt-3.primary--text {{ type.text }}
      v-card-actions
        v-spacer
        v-btn(
          color="error"
          outlined
          :to="{ name: 'index' }"
        ).text-none Back
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null,
    },
    facilityTypes: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {};
  },
  computed: {
    dialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    onTypeSelect (type) {
      this.$emit('select', type.value);
    },
  },
};
</script>
