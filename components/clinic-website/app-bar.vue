<template lang="pug">
  div(v-if="!loading")
    v-app-bar(
      color="white"
      height="70"
      flat
      app
      absolute
      no-gutters
    )
      v-container(v-if="!$isMobile" fluid)
        v-row(justify="center" align="center" no-gutters)
          v-col(cols="12" md="10")
            v-row(no-gutters align="center")
              v-avatar
                img(
                  :src="picURL"
                  height="60"
                  alt="Clinic Logo"
                )
              v-col.pl-2
                h3 {{ clinicName }}&nbsp;
                  v-icon(v-if="isVerified" color="primary") {{ mdiCheckDecagram }}
              v-spacer
              v-btn(
                depressed
                Large
                color="#fff"
                @click="goToPxpSignin"
              ).text-none #[b Login]
              v-btn(
                depressed
                Large
                color="primary"
                target="_blank"
                href="https://6rbf27w6k3r.typeform.com/to/V13pJzW9"
              ).text-none.ml-2 #[b Create an Account]
      v-container(v-else)
        v-row(align="center")
          v-avatar
            img(
              :src="picURL"
              height="60"
              alt="Clinic Logo"
            )
          div.pl-2
            h3.font-12 {{ clinicName }}
            div(v-if="isVerified")
              i.font-12 Verified&nbsp;
              v-avatar(color="primary" size="20")
                v-icon(dark small) {{ mdiCheck }}
          v-spacer
          div
            v-menu
              template(v-slot:activator="{ on, attrs }")
                v-btn(icon v-bind="attrs" v-on="on")
                  v-icon {{ mdiMenu }}
              v-list
                v-list-item(@click="goToPxpSignin")
                  v-list-item-title.text-none Login
                v-list-item(href="https://6rbf27w6k3r.typeform.com/to/V13pJzW9")
                  v-list-item-title.text-none Create an Account
</template>

<script>
import { mdiMenu, mdiCheck, mdiCheckDecagram } from '@mdi/js';
export default {
  props: {
    picURL: {
      type: String,
      default: '',
    },
    clinicName: {
      type: String,
      default: '',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      loading: true,
      // icons,
      mdiMenu,
      mdiCheck,
      mdiCheckDecagram,
    };
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    goToPxpSignin () {
      if (this.isPreviewMode) return;
      window.open(process.env.PX_PORTAL_URL, '_blank', 'noopener, noreferrer');
    },
    goToPxpSignup () {
      if (this.isPreviewMode) return;
      window.open(process.env.PX_PORTAL_URL, '_blank', 'noopener, noreferrer');
    },
    getStarted () {
      const opts = {
        name: 'signup-health-facilities',
      };
      this.$router.push(opts);
    },
  },
};
</script>

<style scoped>
.powered-by-link {
  text-align: right;
  text-decoration: none;
}

.powered-by-txt {
  font-size: 0.7em;
  font-weight: bold;
  color: black;
}
</style>
