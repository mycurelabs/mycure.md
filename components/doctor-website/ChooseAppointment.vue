<template lang="pug">
  v-dialog(v-model="dialog" width="900" height="900" persistent)
    v-card
      v-card-text.pa-3
        v-container
          v-row
            v-col(cols="12").text-center
              h1 Choose a Service
            v-col(cols="6" v-for="(service, key) in services" :key="key").text-center
              v-card(height="100%").elevation-3.service-card
                v-card-text
                  img(
                    :src="require(`~/assets/images/home/${service.image}.png`)"
                    :alt="service.image"
                    width="50%"
                  )
                v-card-actions.px-3.card-actions
                  v-btn(
                    color="primary"
                    outlined
                    depressed
                    block
                    @click="onServiceSelect(service.type)"
                  ).text-none
                    v-icon(left) {{ service.btnBindings.icon }}
                    | {{ service.btnBindings.text }}
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null,
    },
  },
  data () {
    this.services = [
      {
        btnBindings: {
          text: 'Teleconsult',
          icon: 'mdi-stethoscope',
        },
        type: 'telehealth',
        image: 'Telehealth',
      },
      {
        btnBindings: {
          text: 'Clinic Visit',
          icon: 'mdi-calendar',
        },
        type: 'physical',
        image: 'Booking',
      },
    ];
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
    onServiceSelect (type) {
      this.$emit('select', type);
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.service-card {
  position: relative;
  padding-bottom: 30px;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
