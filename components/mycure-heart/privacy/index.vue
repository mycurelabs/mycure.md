<template lang="pug">
  div(:class="{'hearts': !$isMobile}")
    //- WEB
    div(v-if="!isMobile").py-5
      v-container
        v-row(justify="center")
          v-col(cols="6" align-self="center")
            strong.font-40.lh-title.pb-3 {{ panelTitle }}
            br
            br
            span.font-s.mt-3 {{ panelText }}
          v-col(cols="5")
            img(width="85%" v-lazy="require(`@/assets/images/${panelImage}.png`)" alt="Data Privacy Law")
    //- MOBILE
    div(v-else).pt-5
      v-container
        v-row
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
            p.font-s.mt-3 {{ panelText }}
</template>

<script>
export default {
  data () {
    this.panelTitle = 'Protect your patients\' medical records with confidence';
    this.panelText = 'Keeping health records of your stakeholders is MYCUREs # 1 Priority! It uses advanced encryption algorithms on top of industry security standards.';
    this.panelImage = 'mycure-web-banner-data-privacy-law';
    this.privacyItems = [
      { text: 'Secure Cloud Hosting', image: 'cloud' },
      { text: 'Data Encryption', image: 'encryption' },
      { text: 'Data Compliance', image: 'dpa' },
      { text: 'User Designated Access', image: 'user-access' },
      { text: 'Grade A+ SSL', image: 'ssl' },
    ];
    return {
      isMobile: true,
    };
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
};
</script>

<style scoped>
a {
  text-decoration-color: #2e9fdf;
  text-decoration: none;
}
.hearts {
  background-image: url('../../../assets/images/mycure-heart/heart-decor-right.webp');
  background-position: top right;
}
</style>
