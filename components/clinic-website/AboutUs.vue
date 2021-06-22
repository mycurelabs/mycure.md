<template lang="pug">
  //- ABOUT US PANEL
  div#about-us-panel.white
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12").mb-5
            h1 Our Clinic
            div(style="width: 160px; height: 3px; background: #0099cc")
          v-col(cols="12" md="4")
            h1.primary--text {{ name }}
          v-col(cols="12" md="4")
            h3 About Us
            br
            p {{description}}
          v-col(cols="12" md="4")
            template(v-if="address || phone")
              h3 Contact Us
              br
              media(v-if="address" align="top")
                template(slot="media-image")
                  v-icon.red--text mdi-map-marker
                template(slot="media-content")
                  p {{address}}
              media(v-if="phone" align="top")
                template(slot="media-image")
                  v-icon.green--text mdi-phone
                template(slot="media-content")
                  p {{phone}}
              br
            schedules(:schedules="schedules")
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import Media from '~/components/commons/media';
import Schedules from '~/components/clinic-website/schedules';
export default {
  components: {
    GenericPanel,
    Media,
    Schedules,
  },
  props: {
    name: {
      type: String,
      default: null,
    },
    picURL: {
      type: String,
      default: null,
    },
    // - Should be formatted
    address: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    phone: {
      type: [Number, String],
      default: null,
    },
    schedules: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style scoped>
.clinic-underline {
  border-bottom: solid 1px #0099cc;
}
</style>
