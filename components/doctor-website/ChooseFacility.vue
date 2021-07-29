<template lang="pug">
  v-dialog(v-model="dialog" width="900" height="900" persistent)
    v-card
      v-card-text.pa-3
        v-container
          v-row
            v-col(cols="12").text-center
              h1 Choose a Facility
            v-col(cols="12" v-if="!availableOrganizations.length").text-center
              h3.font-open-sans.font-gray.font-weight-regular There are no available facilities at this time.
            template(v-else)
              v-col(cols="12" md="4" v-for="(org, key) in availableOrganizations" :key="key")
                v-card(height="100%" @click="onOrgSelect(org)").elevation-3
                  v-card-text
                    v-container
                      v-row
                        v-col(cols="12").text-center
                          v-avatar(size="125")
                            img(:src="org.picURL || require('~/assets/images/doctor-website/doctor-website-profile-clinic.png')")
                          h3.mt-3 {{ org.name }}
      v-card-actions
        v-spacer
        v-btn(
          color="error"
          outlined
          @click="dialog = false"
        ).text-none Cancel
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: null,
    },
    organizations: {
      type: Array,
      default: () => ([]),
    },
    doctorId: {
      type: String,
      default: null,
    },
    appointmentType: {
      type: String,
      default: null,
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
    availableOrganizations () {
      const organizations = [...this.organizations];
      return organizations.filter(org => this.isOrgBookable(org));
    },
  },
  methods: {
    onOrgSelect (organization) {
      const pxpURL = `${process.env.PX_PORTAL_URL}/appointments/step-1?doctor=${this.doctorId}&organization=${organization.id}&type=${this.appointmentType}`;
      window.open(pxpURL, '_blank', 'noopener noreferrer');
      this.dialog = false;
    },
    isOrgBookable (organization) {
      return (organization.$populated?.doctorSchedules || organization?.doctorSchedules || []).length;
    },
  },
};
</script>
