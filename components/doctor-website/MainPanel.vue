<template lang="pug">
  v-container
    v-row(justify="center" align="center" no-gutters)
      v-col(cols="12" md="10")
        v-row(justify="center" align="center" no-gutters)
          //- Profile picture and main info
          v-col(cols="12" md="10").text-center
            v-avatar(size="100")
              img(:src="picUrl")
            br
            br
            h2 {{ fullName }}
            span {{specialtiesMapped}} #[span(v-if="practicingSince") | {{yearsOfExperience}} Years Experience ]
            p {{ bio }}
            //- Virtual Consult
            book-appointment-btn(
              outlined
              rounded
              small
              show-icon
              btn-text="Virtual Consult"
              color="success"
              :class="{ 'font-11' : $isMobile }"
            ).text-none.font-weight-bold
            //- Share Btn and Menu
            v-menu(
              v-model="socialMenu"
              :close-on-content-click="false"
              offset-y
            )
              template(v-slot:activator="{ on }")
                v-btn(
                  v-on="on"
                  small
                  rounded
                  depressed
                  color="primary"
                  :class="{ 'font-11' : $isMobile }"
                ).text-none
                  | Share
                  v-icon(small right) mdi-share-variant
              v-card(color="primary" width="275")
                v-card-text
                  h4.white--text Love this doctor? Let your friends know by sharing this website!
                  v-row(no-gutters)
                    v-col(cols="12")
                      social-sharing(
                        :url="doctorLink"
                        :title="windowTitle"
                        inline-template
                      )
                        div
                          network(network="facebook").social-image
                            img(src="~/assets/images/doctor-website/facebook-logo-white.png" width="20%").pa-3
                          network(network="twitter").social-image
                            img(src="~/assets/images/doctor-website/twitter-logo-white.png" width="20%").pa-3
                          network(network="linkedin").social-image
                            img(src="~/assets/images/doctor-website/linkedin-logo-white.png" width="20%").pa-3
                          network(network="email").social-image
                            img(src="~/assets/images/doctor-website/gmail-logo-white.png" width="20%").pa-3
        //- Stats
        v-row(justify="center" align="center")
          template(v-for="(stat, key) in stats")
            v-col(
              cols="12"
              md="2"
            ).text-center
              v-avatar(size="60" :color="stat.color")
                v-icon(color="white" large) {{ stat.icon }}
              h3.mt-1 {{ stat.value }}
              span.font-14 {{ stat.label }}
            v-col(cols="1" v-if="!$isMobile && key !== 2").divider-container
              div.divider
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
export default {
  components: {
    BookAppointmentBtn,
    SocialSharing,
  },
  props: {
    picUrl: {
      type: String,
      default: null,
    },
    fullName: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    professions: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: [Date, Number],
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    /** @type {Organization[]} */
    memberCmsOrganizations: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    this.stats = [
      {
        icon: 'mdi-heart-outline',
        color: 'error',
        value: 8,
        label: 'lives saved',
      },
      {
        icon: 'mdi-file-document-outline',
        color: 'primary',
        value: 10,
        label: 'digital prescriptions',
      },
      {
        icon: 'mdi-eye',
        color: 'success',
        value: 80,
        label: 'page views',
      },
    ];
    return {
      socialMenu: false,
    };
  },
  computed: {
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    specialtiesMapped () {
      return this.specialties.join(', ');
    },
    doctorLink () {
      if (process.client) {
        return window.location.href;
      }
      return '';
    },
    windowTitle () {
      if (process.client) {
        return window.document.title;
      }
      return '';
    },
  },
};
</script>

<style scoped>
.divider-container {
  position: relative;
  height: 150px;
}
.divider {
  border-left: 2px solid black;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}
.social-image:hover {
  cursor: pointer !important;
}
</style>
