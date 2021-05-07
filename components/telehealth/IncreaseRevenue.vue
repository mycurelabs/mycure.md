<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(
        v-for="(data, key) in contents"
        justify="center"
        align-self="center"
        cols="12"
        md="5"
        :key="key"
      )
        div.d-flex
          img(v-lazy="require(`~/assets/images/telehealth/${data.headerIcon}`)" height="30%" :class="{'pt-3': $isMobile}")
          h1(:class="headerClasses").ml-3 {{ data.header }}
        br
        p(:class="descriptionClasses").text-justify.font-gray.font-open-sans {{ data.description }}
        br
        mc-btn(
          depressed
          color="success"
          event-label="signup"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none.font-12
          | Get Started Free
          v-icon(small right) mdi-arrow-right
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
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
        mobile: ['font-s'],
        regular: ['font-m'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>
