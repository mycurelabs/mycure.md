<template lang="pug">
  v-dialog(v-model="dialog" max-width="1050px")
    v-layout(row justify-center)
      v-card(width="1050").white
        v-card-text
          div.crop
            img(:src="require('@/assets/images/mycure-pricing-full-matrix.png')" alt="Pricing Matrix" usemap="#image-map")
          div
            v-layout(row)
              div.solo-btn-container
                v-btn(
                  block
                  :color="$mcColors.mcAltGreen"
                  outline
                  @click.stop="handleMatrixBtn('signup-individual')"
                ).text-none.font-weight-bold Sign Up Free
              div.group-btn-container
                v-btn(
                  block
                  dark
                  :color="$mcColors.mcAltGreen"
                  @click.stop="handleMatrixBtn('signup-multispecialty')"
                ).text-none.font-weight-bold Start 14 Day Trial
</template>

<script>
export default {
  props: {
    value: null
  },
  computed: {
    dialog: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    handleMatrixBtn (link) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-pricing-matrix-${link}-btn`,
        eventLabel: `pricing-matrix-${link}`
      });

      this.$router.push({name: link});
    }
  }
};
</script>

<style scoped>
.crop {
  height: 2625px;
  overflow: hidden;
}
.solo-btn-container {
  width: 261px;
  margin-left: 474px;
}
.group-btn-container {
  width: 261px;
  margin-left: 19px;
}

</style>

