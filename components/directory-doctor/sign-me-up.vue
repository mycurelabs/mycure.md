<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center" v-for="(data, key) in signUpInfo" :key="key")
      v-col(cols="12" md="6")
        v-card(v-for="(data, key) in data.doctor" :key="key")
          v-img(:src="require(`~/assets/images/directory-doctor/MYCURE-Doctor-Directory-Banner-Sign-Up-Doctor.png`)" width="100%")
            v-col(align-contents="center" :class="paddingContentClass")
              h2.white--text.py-5 {{data.title}}
              span(v-html="data.subTitle")
              v-card-actions(:class="paddingBtnClass")
                v-btn(color="accent" :width="$isMobile ? '' : '135'").ml-n2
                  strong {{data.btnTxt}}
      v-col(cols="12" md="6")
        v-card(v-for="(data, key) in data.consult" :key="key")
          v-img(:src="require(`~/assets/images/directory-doctor/MYCURE-Doctor-Directory-Banner-Sign-Up-Patient.png`)" width="100%")
            v-col(align-contents="center" :class="paddingContentClass")
              h2.py-5 {{data.title}}
              span(v-html="data.subTitle")
              v-card-actions(:class="paddingBtnClass")
                v-btn(color="amber" :width="$isMobile ? '' : '135'").ml-n2
                  strong.white--text {{data.btnTxt}}
</template>

<script>
export default {
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    signUpInfo: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    paddingBtnClass () {
      return [this.$isMobile ? '' : 'pt-5'];
    },
    paddingContentClass () {
      return [this.$isMobile ? '' : 'pl-5'];
    },
  },
};
</script>

<style scoped>
</style>
