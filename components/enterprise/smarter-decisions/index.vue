<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="7" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{smarter.header}}
        p.text-center.font-18.mt-3 {{smarter.description}}
    v-row(justify="center")
      v-col(
        cols="6"
        md="3"
        align="center"
        justify="center"
        v-for="(data, key) in smarter_items"
        :key="key"
      ).py-12
        img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.imageTitle")
        p.text-center.font-18.mt-3 {{data.imageTitle}}
</template>

<script>
import { SMARTER, SMARTER_ITEMS } from '../enterprise-contents';
export default {
  data () {
    return {
      smarter: SMARTER,
      smarter_items: SMARTER_ITEMS,
    };
  },
};
</script>

<style scoped>

</style>
