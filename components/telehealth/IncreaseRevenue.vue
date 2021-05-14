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
          h1(:class="headerClasses").ml-3.font-weight-medium {{ data.header }}
        br
        p(:class="descriptionClasses").text-justify.font-gray.font-open-sans {{ data.description }}
        div.btn-container
          mc-btn(
            depressed
            rounded
            color="success"
            event-label="signup"
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
            :to="{ name: 'signup-health-facilities', params: { type: 'doctor-telehealth' } }"
          ).text-none.font-s
            | Get Started Free
            v-icon(small right) mdi-arrow-right
</template>

<script>
import classBinder from '~/utils/class-binder';
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
    return {};
  },
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-s', 'pt-5'],
        regular: ['font-m'],
        wide: ['font-l'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
        wide: ['font-m'],
      });
    },
  },
};
</script>

<style scoped>
.content-container {
  position: relative;
  padding-bottom: 50px;
}
.btn-container {
  position: absolute;
  bottom: 0;
}
</style>
