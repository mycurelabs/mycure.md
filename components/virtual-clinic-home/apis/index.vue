<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center").pb-5
      v-col(
        v-if="!$isMobile"
        cols="12"
        md="4"
        align="start"
        align-self="center"
      )
        img(v-lazy="require(`~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-F-features-02-api.png`)" width="80%" alt="Health systems more powerful")
      v-col(
        cols="12"
        md="5"
        offset-md="1"
        align-self="center"
      )
        h1(:class="titleClasses").font-30.lh-title APIs built to make your existing health systems more powerful.
        br
        v-col(
          v-if="$isMobile"
          cols="12"
          align="center"
          align-self="center"
        )
          img(v-lazy="require(`~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-F-features-02-api.png`)" width="100%" alt="Health systems more powerful")
        br
        p.font-16.font-gray.text-justify MYCURE is made to augment your IT innovations. We created our APIs to be simple to use, excellent in performance, and boundless in possibilities.
        v-list(dense).ml-n5
          v-list-item(v-for="(item, key) in checkList" :key="key")
            v-list-item-action
              img(v-lazy="require('~/assets/images/mycure-web-bullet-check.png')" alt="Check icon")
            v-list-item-content
              span.font-16.font-gray {{ item }}
</template>

<script>
export default {
  data () {
    this.checkList = [
      'Integrate with your database systems',
      'Customize the CMS as needed',
      'Complete documentation',
    ];
    return {};
  },
  computed: {
    titleClasses () {
      return [!this.$isMobile ? 'text-justify font-weight-light' : 'text-center'];
    },
  },
};
</script>
