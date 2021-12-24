<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="9")
        h3.mc-h4.title--text About Clinic
        br
        br
        div(:class="{'text-center': $isMobile}")
          v-avatar(size="120").elevation-4
            img(:src="picUrl")
        br
        h3.mc-h3.title--text.mb-4 {{ clinicName }}
        div(:class="{'text-center': $isMobile}")
          span.mc-b4 {{ description }}
        br
        h3.mc-h4.title--text Insurance Accreditations
        br
        v-avatar(v-for="(insurer, key) in insurers" color="secondary" :key="key" size="100").elevation-4.mx-2
          img(v-if="insurer.coveragesData.picURL" :src="insurer.coveragesData.picURL")
          span(v-else).white--text {{ insurer.insurerName.substring(0,1) }}
</template>

<script>
export default {
  props: {
    clinicName: {
      type: String,
      default: null,
    },
    picUrl: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    insurers: {
      type: Array,
      default: null,
    },
  },
};
</script>
