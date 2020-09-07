<template lang="pug">
  v-container.py-12
    v-row(justify="center" align="center")
      v-col(
        v-if="!$isMobile"
        cols="12"
        md="4"
        align="start"
        align-self="center"
      )
        img(v-lazy="require(`~/assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-F-features-01-data-privacy.png`)" width="80%" alt="Data Privacy Law")
      v-col(
        cols="12"
        md="5"
        offset-md="1"
        align-self="center"
      )
        h1(:class="titleClasses").font-30.lh-title Protect your patients' medical records with confidence
        br
        v-row(justify="center" align="center")
          v-col(
            v-if="$isMobile"
            cols="4"
            align="center"
            v-for="(item, key) in privacyItems"
            :key="key"
          )
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                img(
                  v-lazy="require(`~/assets/images/mycure-data-privacy-mobile-${item.image}.png`)"
                  width="80%"
                  v-on="on"
                  :alt="item.text"
                )
              | {{item.text}}
          br
        p.font-16.font-gray.text-justify With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.
</template>

<script>
export default {
  data () {
    this.privacyItems = [
      { text: 'Secure Cloud Hosting', image: 'cloud' },
      { text: 'Data Encryption', image: 'encryption' },
      { text: 'Data Compliance', image: 'dpa' },
      { text: 'User Designated Access', image: 'user-access' },
      { text: 'Grade A+ SSL', image: 'ssl' },
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
