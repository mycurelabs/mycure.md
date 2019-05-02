<template lang="pug">
  //- Section 8 (Sign-Up) of Home Page
  div.mc-light-grey.pb-5
    v-container
      v-layout(row wrap justify-center).mx-5
        v-flex(xs12)
          h2.text-xs-center.pa-5 Yes! I need this! Tell me what to do next.
        v-flex(xs8)
            p.text-xs-center {{ panelText }}
      v-layout(row wrap justify-center).mx-5.py-3
        v-flex(xs12 md4 v-for="card in signUpCards" :key="card.type").mx-2.pt-2
          v-card.sign-up-card.pb-3
            div.indiv-pic.blue
            v-card-title.justify-center 
              h3 {{ card.title }}
            v-card-text.text-xs-center  {{ card.text }}
            v-card-actions.justify-center
              v-btn(color="info") SIGN UP
</template>

<script scoped>
export default {
  data () {
    return {
      panelText: 'MYCURE is revolutionary because it lowers your average monthly expenses. ' +
       'It helps you increase your clinic productivity and effectiveness. PLUS, MYCURE maintains' + 
       'data confidentiality, integrity, and availability. It brings out the best in your clinic' +
       'complete and it even works offline.',

      signUpCards: [
        { 
          type: 'individual',
          title: 'For individual doctors', 
          text: 'An essential record-keeping tool for all practicing physicians'
        },
        { 
          type: 'multispecialty',
          title: 'For Multi-specialty Clinics', 
          text: 'An essential record-keeping tool for all practicing physicians'
        }
      ]
    };
  }
};
</script>

<style scoped>

.sign-up-card {
  border-radius: 10px;
}

.indiv-pic, .multi-pic {
  height: 200px;
}

</style>

