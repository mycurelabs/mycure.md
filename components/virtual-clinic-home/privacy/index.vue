<template lang="pug">
  v-container.py-12
    //- WEB
    v-row(v-if="!$isMobile" justify="center" align="center" no-gutters)
      v-col(justify="start" align="center" md="5")
        img(width="75%" v-lazy="require(`@/assets/images/virtual-clinic-home/${panelImage}.png`)" alt="Data Privacy Law").panel-image
      v-col(align-self="center" md="5")
        h1.text-justify.font-30.lh-title.pb-3.font-weight-light {{ panelTitle }}
        br
        p.font-16.font-gray.text-justify.my-0 {{ panelText }}
    //- MOBILE
    v-row(v-else).pt-5
      v-col(cols="12").text-center
        br
        h2.lh-title.font-30.pb-5 {{ panelTitle }}
        br
        v-row(no-gutters justify="center")
          v-col(
            v-for="(item, key) in privacyItems"
            :key="key"
            cols="4"
          )
            v-tooltip(bottom)
              template(v-slot:activator="{ on }")
                img(
                  v-lazy="require(`~/assets/images/mycure-data-privacy-mobile-${item.image}.png`)"
                  :alt="item.text"
                  width="80%"
                  v-on="on"
                )
              | {{item.text}}
        p.font-16.mt-3.font-gray.text-justify {{ panelText }}
</template>

<script>
export default {
  data () {
    this.panelTitle = 'Protect your patients\' medical records with confidence';
    this.panelText = 'With MYCURE you\'ll never have to worry much about data privacy concerns. Keeping them secure is our #1 priority.';
    this.panelImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-F-features-01-data-privacy';
    this.privacyItems = [
      { text: 'Secure Cloud Hosting', image: 'cloud' },
      { text: 'Data Encryption', image: 'encryption' },
      { text: 'Data Compliance', image: 'dpa' },
      { text: 'User Designated Access', image: 'user-access' },
      { text: 'Grade A+ SSL', image: 'ssl' },
    ];
    return {};
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .panel-image{
    margin-left: -20%;
  }
}
</style>
