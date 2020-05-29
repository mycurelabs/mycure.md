<template lang="pug">
  div(:class="[...mainContainerClasses]" :style="backgroundImageStyleConfig")
    v-container
      v-row
        //- v-col(cols="12" md="6" :style="{ 'margin': isMobile ? '30px 0px 50px 0px': '50px 0px 0px 0px' }")
        slot(name="content")
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: null,
    },
    customPath: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      isMobile: true,
    };
  },
  computed: {
    mainContainerClasses () {
      const defaultClasses = ['usp-container', 'white'];
      return this.isMobile
        ? defaultClasses.push('pt-10')
        : defaultClasses;
    },
    backgroundImageStyleConfig () {
      if (!this.backgroundImage) {
        return {};
      }
      const styleConfig = {
        'background-image': `url(${require(`~/assets/images/${this.customPath}${this.backgroundImage}`)})`,
      };
      return styleConfig;
    },
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
.usp-container {
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
}
</style>
