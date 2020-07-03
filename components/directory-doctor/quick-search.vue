<template lang="pug">
  generic-container
    v-row(style="margin-top: 60px")
      template(v-for="item in firstFive")
        v-col(cols="4" sm="4" md="2" lg="2").pa-1
          v-card(hover height="100%")
            v-card-actions.py-5
              span {{item}}
      v-menu(offset-y left)
        template(v-slot:activator="{ on, attrs }")
          v-col(cols="4" sm="4" md="2" lg="2" v-on="on").pa-1
            v-card(hover height="100%")
              v-card-actions.py-5
                span Other
                v-spacer
                v-icon mdi-dots-vertical
        v-list(style="width: 200px;")
          template(v-for="item in sixAbove")
            v-list-item(@click="")
              v-list-item-title {{item}}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  data () {
    return {
      quickSearchItems: [
        'For my eyes',
        'For my nose',
        'For my throat',
        'For my family',
        'For my baby',
        'For my skin',
        'For my bones',
      ],
    };
  },
  computed: {
    firstFive () {
      return this.quickSearchItems.slice(0, 5);
    },
    sixAbove () {
      return this.quickSearchItems.slice(5);
    },
  },
};
</script>
