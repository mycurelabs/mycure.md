<template lang="pug">
  v-container(:fluid="fluid")
    v-row(justify="center")
      v-col(
        v-for="(data, key) in contents"
        cols="12"
        md="5"
        :key="key"
      ).content-container
        div.d-flex
          img(v-lazy="require(`~/assets/images/telehealth/${data.headerIcon}`)" :height="$isMobile? '10%' : '30%'" :class="{'pt-3': $isMobile}")
          h1(:class="headerClasses").ml-3.font-weight-semibold {{ data.header }}
        br
        p(:class="descriptionClasses").text-justify.font-gray.font-open-sans {{ data.description }}
</template>

<script>
export default {
  props: {
    // - Container fluid
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.contents = [
      {
        headerIcon: 'increase-revenue.png',
        header: 'Increase your revenue',
        description: 'Treat more patients and reduce no-shows and cancellations with online consultations via secure video and voice calls.',
      },
      {
        headerIcon: 'build-clientele.png',
        header: 'Build your clientele',
        description: 'Build patient loyalty and accommodate patients outside of your physical work hours. It\'s easy for your old and new patients to set appointments with you.',
      },
    ];
    this.headerClasses = ['mc-title-set-2', { 'pt-5': this.$isMobile }];
    this.descriptionClasses = ['mc-content-set-1'];
    return {};
  },
};
</script>

<style scoped>
.content-container {
  position: relative;
  padding-bottom: 50px;
}
</style>
