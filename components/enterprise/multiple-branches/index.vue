<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="6" align="center")
        img(v-lazy="require(`~/assets/images/enterprise/${branches.image}`)" :alt="branches.header")
      v-col(cols="12" md="6" align-self="center").pl-10
        h1.font-30.lh-title.pb-3.font-weight-light {{branches.header}}
        p.font-18.mt-3 {{branches.description}}
        v-btn(text).pt-5
          strong.text-capitalize.primary--text {{branches.btnTxt}}
          v-icon.primary--text {{branches.btnIcon}}
</template>

<script>
import { BRANCHES } from '../enterprise-contents';
export default {
  data () {
    return {
      branches: BRANCHES,
    };
  },
};
</script>

<style scoped>

</style>
