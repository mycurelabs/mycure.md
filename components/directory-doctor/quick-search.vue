<template lang="pug">
  generic-container
    v-row(style="margin-top: 60px").mb-10
      template(v-for="item in firstFive")
        v-col(cols="4" sm="4" md="2" lg="2").pa-1
          v-card(hover height="100%" @click="search(item)")
            v-card-actions.py-5
              small {{ item.text }}
              v-spacer
              img(
                v-if="item.icon"
                width="35"
                :src="require(`../../assets/images/directory-doctor/${item.icon}`)"
              )
      v-menu(offset-y left max-width="60%" nudge-left="4")
        template(v-slot:activator="{ on, attrs }")
          v-col(cols="4" sm="4" md="2" lg="2" v-on="on").pa-1
            v-card(hover height="100%")
              v-card-actions.py-6
                small Other
                v-spacer
                v-icon mdi-dots-vertical
        v-list(v-if="$isMobile" style="width: 200px;")
          template(v-for="item in sixAbove")
            v-list-item(@click="search(item)")
              v-list-item-title {{ item.text }}
        v-row(v-if="!$isMobile" style="background-color: #F0F0F0;" justify="center" no-gutters).pa-3
          v-card(v-for="(item, key) in sixAbove" :key="key" @click="search(item)").ma-1.px-1
            v-card-actions
              small {{ item.text }}
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
    search (item) {
      this.$emit('search', item);
    },
  },
};
</script>
