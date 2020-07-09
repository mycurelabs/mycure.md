<template lang="pug">
  generic-container
    v-row(style="margin-top: 60px").mb-10
      template(v-for="item in firstFive")
        v-col(cols="4" sm="4" md="2" lg="2").pa-1
          v-card(hover height="100%" @click="go(item)" href="#search-control-container")
            v-card-actions.py-5
              small {{item.text}}
              v-spacer
              v-icon mdi-face
      v-menu(offset-y left)
        template(v-slot:activator="{ on, attrs }")
          v-col(cols="4" sm="4" md="2" lg="2" v-on="on").pa-1
            v-card(hover height="100%")
              v-card-actions.py-5
                small Other
                v-spacer
                v-icon mdi-dots-vertical
        v-list(style="width: 200px;")
          template(v-for="item in sixAbove")
            v-list-item(@click="")
              v-list-item-title {{item.text}}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import specialtyFilters from '~/assets/fixtures/specialty-filters';
export default {
  components: {
    GenericContainer,
  },
  data () {
    this.quickSearchItems = specialtyFilters;
    return {};
  },
  computed: {
    firstFive () {
      return this.quickSearchItems.slice(0, 5);
    },
    sixAbove () {
      return this.quickSearchItems.slice(5);
    },
  },
  methods: {
    go (item) {
      console.warn(item);
    },
  },
};
</script>
