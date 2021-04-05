<template lang="pug">
  v-app-bar(
    color="white"
    height="70"
    elevate-on-scroll
    fixed
  )
    v-container
      v-row(no-gutters align="center")
        v-avatar
          img(
            :src="picURL"
            height="60"
            alt="Profile"
          )
        v-col.pl-2
          h3 {{ clinicName }}
          span Telemedicine
        v-spacer
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
  },
};
</script>
