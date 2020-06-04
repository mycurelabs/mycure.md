<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="6" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{panelTitle.header}}
        p.text-center.font-18.mt-3 {{panelTitle.description}}
    v-row(justify="center")
      v-col(
        cols="12"
        md="5"
        align="center"
        justify="center"
        v-for="(data, key) in panelContents"
        :key="key"
        v-if="!$isMobile"
      )
        img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.header")
        h1.font-30.lh-title.pb-3.font-weight-light {{data.header}}
        v-btn(text)
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
      v-col(
        cols="12"
        md="5"
        align="center"
        justify="center"
        v-for="(data, key) in panelContents"
        :key="key"
        v-if="$isMobile"
      )
        h1.font-30.lh-title.pb-3.font-weight-light {{data.header}}
        v-btn(text).my-5
          strong.text-capitalize.primary--text {{data.btnTxt}}
          v-icon.primary--text {{data.btnIcon}}
        img(
          v-lazy="require(`~/assets/images/enterprise/${data.image}`)"
          :alt="data.header"
          width="100%"
        )
</template>

<script>
import { PATIENTS, AUTOMATED } from '../enterprise-contents';
export default {
  data () {
    return {
      panelTitle: PATIENTS,
      panelContents: AUTOMATED,
    };
  },
};
</script>
