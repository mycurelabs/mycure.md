<template lang="pug">
  div(v-if="!loading")
    v-app-bar(
      color="white"
      height="70"
      elevate-on-scroll
      fixed
      no-gutters
    )
      v-container(fluid v-if="!$isMobile")
        v-row(no-gutters align="center")
          v-avatar
            img(
              :src="picURL"
              height="60"
              alt="Clinic Logo"
            )
          v-col.pl-2
            h3 {{ clinicName }}
            div(v-if="isVerified")
              i Verified&nbsp;
              v-avatar(color="primary" size="20")
                v-icon(dark small) mdi-check
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
            @click="goToPxpSignup"
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
                v-icon(dark small) mdi-check
          v-spacer
          div
            v-menu
              template(v-slot:activator="{ on, attrs }")
                v-btn(icon v-bind="attrs" v-on="on")
                  v-icon mdi-menu
              v-list
                v-list-item(@click="goToPxpSignin")
                  v-list-item-title.text-none Login
                v-list-item(@click="goToPxpSignup")
                  v-list-item-title.text-none Create an Account
</template>

<script>
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
    }
  },
  data () {
    return {
      loading: true,
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
      window.open(`${process.env.PX_PORTAL_URL}/signup`, '_blank', 'noopener, noreferrer');
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
