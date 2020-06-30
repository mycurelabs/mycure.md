<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center" v-for="(data, key) in signUpInfo" :key="key")
      v-col(v-if="!$isMobile" cols="12" md="6")
        v-card(v-for="(data, key) in data.doctor" :key="key")
          v-img(:src="require(`~/assets/images/directory-doctor/MYCURE-Doctor-Directory-Banner-Sign-Up-Doctor.png`)" width="100%")
            v-col(align-contents="center").pl-5
              h2.white--text.py-5 {{data.title}}
              span(v-html="data.subTitle")
              v-card-actions.pt-5
                v-btn(color="accent" :width="$isMobile ? '' : '135'").ml-n2
                  strong {{data.btnTxt}}
      v-col(v-if="!$isMobile" cols="12" md="6")
        v-card(v-for="(data, key) in data.consult" :key="key")
          v-img(:src="require(`~/assets/images/directory-doctor/MYCURE-Doctor-Directory-Banner-Sign-Up-Patient.png`)" width="100%")
            v-col(align-contents="center").pl-5
              h2.py-5 {{data.title}}
              span(v-html="data.subTitle")
              v-card-actions.pt-5
                v-btn(color="amber" :width="$isMobile ? '' : '135'").ml-n2
                  strong.white--text {{data.btnTxt}}
      v-row(v-if="$isMobile" no-gutters)
        v-col(cols="12" v-for="(data, key) in data.doctor" :key="key").text-center.bg-color-doctor.py-12
          h2.white--text {{data.title}}
          img(:src="require(`~/assets/images/directory-doctor/mycure-sign-up-doctor-cms-blue-banner-mobile.png`)" width="100%").pb-5
          span.font-gray(v-html="data.subTitle")
          br
          v-btn(color="accent").mt-5
            strong {{data.btnTxt}}
        v-col(cols="12" v-for="(data, key) in data.consult" :key="key").text-center.bg-color-px.py-12
          h2 {{data.title}}
          img(:src="require(`~/assets/images/directory-doctor/mycure-sign-up-patient-portal-orange-banner-mobile.png`)" width="100%").pb-5
          span.font-gray(v-html="data.subTitle")
          br
          v-btn(color="accent").mt-5
            strong {{data.btnTxt}}
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
};
</script>

<style scoped>
.bg-color-doctor {
  background-color: #bbdefb;
  width: 100vw;
}
.bg-color-px {
  background-color: #fce4ec;
  width: 100vw;
}
</style>
