<template lang="pug">
  div
    v-row(align="center").pa-3
      v-btn(
        v-if="itemsPage !== 1"
        icon
        style="min-width: 0;"
        @click="prevPage()"
      ).mr-1
        v-icon {{ mdiArrowLeft }}
      v-btn(
        text
        :width="$isWideScreen? '35px' : '30px'"
        style="min-width: 0;"
        @click="changePage(1)"
      ).pa-1.text-none
        span(:class="{'primary--text font--bold': itemsPage === 1}").mc-hyp1 {{ 1 }}
      span(v-if="itemsPage > 3").mc-b1.mx-1 ...
      div(v-for="number in itemsPaginationLength")
        v-btn(
          v-if="showNum(number) "
          text
        :width="$isWideScreen? '35px' : '30px'"
          style="min-width: 0;"
          @click="changePage(number)"
        ).pa-1.text-none
          span(:class="{'primary--text font--bold': number === itemsPage}").mc-hyp1 {{ number }}
      span(v-if="itemsPage < itemsPaginationLength - 2").mc-b1.mx-1 ...
      v-btn(
        text
        :width="$isWideScreen? '35px' : '30px'"
        style="min-width: 0;"
        @click="changePage(itemsPaginationLength)"
      ).pa-1.text-none
        span(:class="{'primary--text font--bold': itemsPage === itemsPaginationLength}").mc-hyp1 {{ itemsPaginationLength }}
      v-btn(
        v-if="itemsPage !== itemsPaginationLength"
        icon
        style="min-width: 0;"
        @click="nextPage()"
      ).ml-1
        v-icon {{ mdiArrowRight }}
</template>

<script>
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js';
export default {
  props: {
    itemsPage: {
      type: Number,
      default: null,
    },
    itemsPaginationLength: {
      type: Number,
      default: null,
    },
  },
  data () {
    return {
      mdiArrowRight,
      mdiArrowLeft,
    };
  },
  methods: {
    showNum (value) {
      if (value === 1 || value === this.itemsPaginationLength) {
        return false;
      } else if (value === this.itemsPage || value === this.itemsPage - 1 || value === this.itemsPage + 1) {
        return true;
      } else {
        return false;
      }
    },
    changePage (value) {
      this.$emit('input', value);
    },
    prevPage () {
      this.$emit('input', this.itemsPage - 1);
    },
    nextPage () {
      this.$emit('input', this.itemsPage + 1);
    },
  },
};
</script>
