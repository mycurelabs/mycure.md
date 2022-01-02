<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="9")
        div(v-if="!$isMobile")
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
      v-col(cols="12")
        v-divider(width="100%" color="#DEDEDE").mb-7.mt-10
      v-col(cols="12")
        h3.mc-h4.title--text Insurance Accreditations
        br
        v-row(:justify="$isMobile ? 'center' : 'start'").pa-3
          v-avatar(v-for="(insurer, key) in insurers" color="secondary" :key="key" size="80").elevation-4.ma-2
            img(v-if="insurer.coveragesData.picURL" :src="insurer.coveragesData.picURL")
            span(v-else).white--text {{ getInsurerName(insurer) }}
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
  computed: {
    getInsurerName (insurer) {
      return insurer.insurerName?.substring(0, 1) || insurer.coveragesData?.name || '*';
    },
  },
};
</script>
