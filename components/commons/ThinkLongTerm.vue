<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="6").text-center
        strong.font-xs.primary--text Why MYCURE?
        h1.font-l Think Long-Term
    v-row(v-if="extended" justify="center")
      //- TODO: Loop
      v-col(
        v-for="(item, key) in items"
        :key="key"
        cols="12"
        md="5"
      )
        v-card(flat color="#fafafa" height="100%").pa-1
          v-card-text
            h2(:class="headerClasses").lh-title {{ item.header }}
            br
            p(:class="descriptionClasses").font-open-sans.lh-title {{ item.description }}
    v-row(v-else justify="center")
      v-col(cols="12" md="8").text-center
        p.font-xs.grey--text.font-open-sans MYCURE is not just an app! It’s a platform built for the healthcare ecosystem. As your practice grows, your tech solution needs grows as well, which is a great thing! Finding these added solutions will be much easier since they would most likely be available with MYCURE platform. Not only that, MYCURE has open APIs so you can integrate it with your other systems giving you more flexibility.
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.items = [
      {
        header: 'MYCURE is not just your ordinary medical app.',
        description: 'It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network. MYCURE has open APIs to give you more flexibility in integrating with other systems.',
      },
      {
        header: 'As your practice grows, your tech tools need to upgrade too.',
        description: 'The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.',
      },
    ];
    return {};
  },
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-m'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>
