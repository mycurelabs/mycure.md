<template lang="pug">
  v-container.py-12
    //- WEB
    v-row(v-if="!$isMobile" justify="center").panel-content
      v-col(cols="12" align-self="center" md="6").first-column
        img(width="80%" v-lazy="require(`@/assets/images/virtual-clinic-home/${panelImage}.png`)" alt="Data Privacy Law")
      v-col(lg="4" align-self="center").second-column
        h1.font-36.lh-title.pb-3.font-weight-light {{ panelTitle }}
        br
        p.font-16.font-gray.text-justify.my-0 {{ panelText }}
    //- MOBILE
    v-row(v-else).pt-5
      v-col(cols="12").text-center
        br
        h2.lh-title.font-36.pb-5 {{ panelTitle }}
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
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
@media screen and (min-width: 1280px) {
  .first-column {
    margin-left: 5%;
  }
  .second-column {
    margin-left: -5%;
  }
  .panel-content {
    padding-left: 5%;
  }
}
@media screen and (min-width: 1366px) {
  .panel-content {
    padding-left: 0%;
  }
  .second-column {
    padding-left: 1%;
  }
}
@media screen and (min-width: 1920px) {
  .panel-content {
    margin-left: -4%;
  }
  .second-column {
    padding-left: 3%;
  }
}
@media screen and (min-width: 2304px) {
  .panel-content {
    margin-left: -3%;
  }
  .second-column {
    padding-left: 2%;
  }
}
@media screen and (min-width: 2560px) {
  .second-column {
    padding-left: 2%;
  }
}
</style>
