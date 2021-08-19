<template lang="pug">
  //- ABOUT US PANEL
  div#about-us-panel.white
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" :class="{'mb-5': !$isMobile}")
            h2(:class="mainTitleClasses") Our Clinic
            div(v-if="!$isMobile" style="width: 160px; height: 3px; background: #0099cc")
          v-col(cols="12" md="4")
            h2(:class="mainTitleClasses").secondary--text {{ name }}
          v-col(cols="12" md="4")
            h3(:class="sectionClasses") About Us
            br
            //- p(:class="{'text-center': $isMobile}").font-gray {{description}}
            v-clamp(
              autoresize
              :class="{'text-center': $isMobile}"
              :max-lines="3"
            ).font-gray {{ description }}
          v-col(cols="10" md="4")
            template(v-if="address || phone")
              h3(:class="sectionClasses") Contact Us
              br
              media(v-if="address" align="top")
                template(slot="media-image")
                  v-icon.red--text mdi-map-marker
                template(slot="media-content")
                  p.font-gray {{address}}
              media(v-if="phone" align="top")
                template(slot="media-image")
                  v-icon.green--text mdi-phone
                template(slot="media-content")
                  p.font-gray {{phone}}
              br
            schedules(:schedules="schedules")
</template>

<script>
import VClamp from 'vue-clamp';
import GenericPanel from '~/components/generic/GenericPanel';
import Media from '~/components/commons/media';
import Schedules from '~/components/clinic-website/schedules';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
    Media,
    Schedules,
    VClamp,
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
  data () {
    this.mainTitleClasses = ['mc-title-set-1'];
    return {};
  },
  computed: {
    sectionClasses () {
      return classBinder(this, {
        mobile: ['font-s', 'text-center'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
  },
};
</script>

<style scoped>
.clinic-underline {
  border-bottom: solid 1px #0099cc;
}
</style>
