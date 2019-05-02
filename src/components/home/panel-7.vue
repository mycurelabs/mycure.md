<template lang="pug">
  //- Section 7 of Home Page
  div.white.pb-5
    v-container
      v-layout(row wrap justify-center).mx-5
        v-flex(xs12)
          h2.font-m.text-xs-center.pa-5 Introducing: MYCURE - Your Most Complete Clinic Management System
        v-flex(xs6)
            p.font-xs.text-xs-center {{ panelText }}
</template>

<script>
export default {
  data () {
    return {
      panelText: 'MYCURE is revolutionary because it lowers your average monthly expenses. ' +
       'It helps you increase your clinic productivity and effectiveness. PLUS, MYCURE maintains' + 
       'data confidentiality, integrity, and availability. It brings out the best in your clinic' +
       'complete and it even works offline.'
    };
  }
};
</script>

