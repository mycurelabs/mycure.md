<template lang="pug">
  v-dialog(v-model="dialog" width="600" height="800" persistent)
    v-card
      v-toolbar(flat)
        v-spacer
        h2 Choose a Service
        v-spacer
        v-btn(
          icon
          depressed
          @click="dialog = false"
        ).text-none
          v-icon mdi-close
      v-card-text.pa-3
        v-container
          v-row
            v-col(cols="6" v-for="(service, key) in services" :key="key").text-center
              v-hover(
                v-slot="{ hover }"
                open-delay="100"
              )
                v-card(
                  hover
                  :color="hover ? 'primary' : 'white'"
                  :class="{'white--text': hover}"
                  @click="onServiceSelect(service.type)"
                ).service-card
                  picture-source(
                    :image="service.image"
                    :image-alt="service.text"
                    :image-width="$isMobile ? '50%' : '100%'"
                    image-file-extension=".webp"
                    custom-path="doctor-website/"
                  )
                  v-card-text.text-center
                    h3(:class="hover ? 'white--text' : 'secondary--text'") {{ service.text }}
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  props: {
    value: {
      type: Boolean,
      default: null,
    },
  },
  data () {
    this.services = [
      {
        text: 'Teleconsult',
        type: 'telehealth',
        color: 'accent',
        image: 'Teleconsult',
      },
      {
        text: 'Clinic Visit',
        type: 'physical',
        color: 'secondary',
        image: 'Clinic Visit',
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
  border: 2px solid #04B1E7;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
