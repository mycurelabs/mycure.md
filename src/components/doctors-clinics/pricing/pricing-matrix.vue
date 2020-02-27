<template lang="pug">
  v-dialog(v-model="dialog" max-width="1050px" scrollable).white
    v-card(width="1050" :height="$isMobile ? '600' : ''").white
      v-toolbar(color="white" flat).toolbar
        v-spacer
        v-btn(icon small @click="dialog = false")
          v-icon mdi-close
      v-card-text(v-if="!$isMobile")
        div.crop
          img(:src="require('@/assets/images/mycure-pricing-full-matrix.png')" alt="Pricing Matrix")
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
      v-card-text(v-else)
        v-layout(row)
          v-flex(xs6)
            v-btn(
              block
              color="primary"
              :outline="matrixView != 'individual'"
              @click.stop="handleMatrixMobileSwitchBtn('individual')"
            ).text-none.font-weight-bold Solo
          v-flex(xs6)
            v-btn(
              block
              outline
              color="primary"
              :outline="matrixView != 'multispecialty'"
              @click.stop="handleMatrixMobileSwitchBtn('multispecialty')"
            ).text-none.font-weight-bold Group
        div.crop-mobile
          img(
            v-if="matrixView === 'individual'"
            :src="require('@/assets/images/mycure-pricing-full-matrix-mobile-solo.png')" 
            alt="Pricing Matrix Solo"
            width="100%"
          )
          img(
            v-else
            :src="require('@/assets/images/mycure-pricing-full-matrix-mobile-group.png')" 
            alt="Pricing Matrix Group"
            width="100%"
          )
      v-card-actions(v-if="$isMobile")
        v-btn(
          block
          :color="$mcColors.mcAltGreen"
          dark
          @click="handleMatrixBtn(matrixView)"
        ).text-none.font-weight-bold
          | {{ matrixView === 'individual' ? 'Sign Up Free' : 'Start 14-day Trial'}}
</template>

<script>
export default {
  props: {
    value: null
  },
  data () {
    return {
      matrixView: 'individual'
    };
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
        eventAction: `click-pricing-matrix-${this.$isMobile ? 'mobile-' : ''}${link}-btn`,
        eventLabel: `pricing-matrix-${this.$isMobile ? 'mobile-' : ''}${link}`
      });

      this.$router.push({
        name: this.$isMobile ? `signup-${link}` : link
      });
    },
    handleMatrixMobileSwitchBtn (view) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-pricing-matrix-mobile-${view}-btn`,
        eventLabel: `pricing-matrix-mobile-${view}`
      });

      this.matrixView = view;
    }
  }
};
</script>

<style scoped>
.toolbar {
  height: 30px;
}
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

