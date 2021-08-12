<template lang="pug">
  v-dialog(v-model="dialog" width="850" height="900")
    v-card.pa-4.rounded-xl
      v-card-text.pa-3
        v-container
          v-row(justify="center")
            v-col(cols="12").text-center
              h1 Choose Health Facility Type
            v-col(cols="12" md="4" v-for="(type, key) in facilityTypes" :key="key")
              v-card(
                height="100%"
                :class="{'on-hover': type.value === typeValue}"
                @click="onTypeSelect(type)"
              ).elevation-3.text-center.rounded-xl.pt-5
                img(
                  :src="require(`~/assets/images/home/${type.image}.png`)"
                  :alt="type.image"
                  width="50%"
                )
                v-card-text.text-center
                  h3.mt-3.primary--text {{ type.text }}
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
    return {
      typeValue: undefined,
    };
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
    isSelected () {
      return this.typeVal === this.value;
    },
  },
  methods: {
    onTypeSelect (type) {
      this.typeValue = type.value;
      this.$emit('select', this.typeValue);
    },
  },
};
</script>

<style scoped>
.on-hover{
  border-style: solid;
  border-width: 3px;
  border-color: #0099cc !important;
}
</style>
