<template lang="pug">
  v-col(
    cols="12"
    xs="12"
    sm="12"
    md="6"
    :class="cardClass"
  )
    template(v-if="!$isMobile")
      v-card
        v-img(:src="require(`~/assets/images${imagePath}/${imageUrl}`)" width="100%")
          v-col(align-contents="center").pl-5
            h2.py-5 {{ headerText }}
            p.pre-white-space {{ contentText }}
            v-card-actions.pt-5
              v-btn(
                :color="btnColor"
                :href="btnHref"
                width="135"
              ).white--text.ml-n2 Sign Me Up
    template(v-else)
      h2 {{ headerText }}
      img(:src="require(`~/assets/images/directory-doctor/mycure-sign-up-doctor-cms-blue-banner-mobile.png`)" width="100%").pb-5
      p.pre-white-space {{ contentText }}
      v-btn(color="accent").mt-2
        strong Sign Me Up
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: 'doctor-website-profile-female.png',
    },
    imagePath: {
      type: String,
      default: 'directory-doctor',
    },
    headerText: {
      type: String,
      default: '',
    },
    contentText: {
      type: String,
      default: '',
    },
    btnColor: {
      type: String,
      default: 'accent',
    },
    btnHref: {
      type: String,
      default: `${process.env.WEB_MAIN_URL}`,
    },
    isLeft: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    cardClass () {
      if (this.$isMobile) {
        return this.isLeft
          ? 'text-center py-6 bg-color-left'
          : 'text-center py-6 bg-color-right';
      }
      return '';
    },
  },
};
</script>

<style scoped>
.bg-color-left {
  background-color: #bbdefb;
  width: 100vw;
}
.bg-color-right {
  background-color: #ffebee;
  width: 100vw;
}
</style>
