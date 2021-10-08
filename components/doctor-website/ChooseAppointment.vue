<template lang="pug">
  v-dialog(v-model="dialog" width="600" height="800" persistent)
    v-card
      v-toolbar(flat)
        v-spacer
        h2 How can {{ isClinic ? 'we' : 'I' }} help you?
        v-spacer
        v-btn(
          v-if="!$isMobile"
          icon
          depressed
          @click="dialog = false"
        ).text-none
          v-icon mdi-close
      v-card-text.pa-3
        v-container
          v-row
            v-col(cols="12" md="6" v-for="(service, key) in services" :key="key").text-center
              v-hover(
                v-slot="{ hover }"
                open-delay="100"
              )
                v-card(
                  :disabled="docUnavailable(service)"
                  hover
                  :color="hover ? service.color : 'white'"
                  :class="[{'white--text': hover}, {'unavailable': docUnavailable(service)}]"
                  @click="onServiceSelect(service.type)"
                ).service-card
                  picture-source(
                    :image="service.image"
                    :image-alt="service.alt"
                    :image-width="$isMobile ? '50%' : '100%'"
                    :image-file-extension="$useWebp? '.webp' : '.png'"
                    custom-path="doctor-website/"
                  )
                  v-card-text.text-center
                    h3(:class="hover ? 'white--text' : `${service.color}--text`") {{ key === 1 && isClinic ? 'Visit Clinic' : service.text }}
                    //- span(v-if="!isAvailable(service.type) && !isClinic").error--text UNAVAILABLE
      v-card-actions(v-if="$isMobile")
        v-spacer
        v-btn(
          color="error"
          outlined
          depressed
          @click="dialog = false"
        ).text-none Cancel
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
    organizations: {
      type: Array,
      default: () => ([]),
    },
    isClinic: {
      type: Boolean,
      default: false,
    },
    hasDoctors: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.services = [
      {
        text: 'Online Consult',
        type: 'telehealth',
        color: 'secondary',
        image: 'Teleconsult',
        alt: 'Doctor talking to a patient online artwork',
      },
      {
        text: 'Visit Doctor',
        type: 'physical',
        color: 'accent',
        image: 'Clinic Visit',
        alt: 'Doctor talking to a patient in a hospital room',
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
    bookingOrgType () {
      return this.isClinic ? 'clinic-booking' : 'doctor-booking';
    },
    telehealthOrgType () {
      return this.isClinic ? 'clinic-telehealth' : 'doctor-telehealth';
    },
  },
  methods: {
    onServiceSelect (type) {
      if (!this.isAvailable(type) && !this.isClinic) return;
      this.$emit('select', type);
      this.dialog = false;
    },
    isAvailable (type) {
      switch (type) {
        case 'telehealth':
          return !!this.organizations?.find(org => org.teleconsultQueue && org.types?.includes(this.telehealthOrgType));
        case 'physical':
          return !!this.organizations?.find(org => (org.doctorSchedules || org.$populated?.doctorSchedules) && org.types?.includes(this.bookingOrgType));
        default: return false;
      }
    },
    docUnavailable (service) {
      return !this.isClinic ? !this.isAvailable(service.type) : service.type === 'telehealth' && !this.hasDoctors;
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
.unavailable {
  filter: grayscale(100%);
}
</style>
