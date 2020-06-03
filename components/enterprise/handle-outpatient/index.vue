<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="6" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${outpatient.image}`)" :alt="outpatient.header")
      v-col(cols="12" md="6" align-self="center")
        h1.font-30.lh-title.pb-3.font-weight-light {{outpatient.header}}
        p.font-18.mt-3 {{outpatient.description}}
        v-btn(text)
          strong.text-capitalize.primary--text {{outpatient.btnTxt}}
          v-icon.primary--text {{outpatient.btnIcon}}
</template>

<script>
import { OUTPATIENT } from '../enterprise-contents';
export default {
  data () {
    return {
      outpatient: OUTPATIENT,
    };
  },
};
</script>

<style scoped>

</style>
