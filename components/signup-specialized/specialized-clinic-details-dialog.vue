<template lang="pug">
  v-dialog(v-model="dialog" width="500")
    v-card
      v-toolbar(flat).card-toolbar
        h2 {{ clinic.title }} Clinic
        v-spacer
        v-btn(
          icon
          @click="onClose"
          small
        ).mr-1
          v-icon mdi-close
      v-card-text
        v-row(no-gutters)
          v-col(cols="12" md="3")
            img(
              :src="require(`@/assets/images/${clinic.image || 'mycure-signup-derma'}-active.png`)"
              :alt="clinic.image"
              width="100%"
            )
          v-col(cols="12" md="9")
            v-row(v-for="(desc, key) in clinic.descriptions" :key="key" no-gutters)
              v-col(cols="2").text-center.pt-1
                img(:src="require('@/assets/images/mycure-web-bullet-check.png')" alt="✓ " width="30%")
              v-col(cols="10")
                p.font-14 {{ desc }}
      v-card-actions
        v-spacer
        v-btn(
          color="accent"
          @click="onProceed"
          large
        ).font-weight-bold.mr-1 Proceed
</template>

<script>
export default {
  props: {
    value: null, // eslint-disable-line
    clinic: {
      type: Object,
      required: true,
    },
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
    onProceed () {
      this.dialog = false;
      this.$emit('proceed');
    },
    onClose () {
      this.dialog = false;
      this.$emit('deselect');
    },
  },
};
</script>

<style scoped>
.card-toolbar {
  margin-top: -1%;
}
.no-list-style {
  list-style-type: none;
}
</style>
