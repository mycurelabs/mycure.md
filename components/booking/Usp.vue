<template lang="pug">
  v-container(fluid :class="{'usp-mobile' : $isMobile }")
    v-row(
      align="center"
      justify="center"
      :style="{ height: panelHeight }"
      no-gutters
    )
      v-col(cols="8" md="7" offset-md="1" :class="{ 'order-last' : !$isMobile }")
        v-img(
          :src="require('../../assets/images/booking/Booking USP.png')"
          width="108%"
          alt="homepage image"
        )
      v-col(cols="12" md="3" offset-md="1" :class="{ 'text-center' : $isMobile }")
        h1(:class="titleClasses") Grow your #[br]
          vue-typer(
            :text="['Practice', 'Clinic', 'Diagnostics', 'Hospital']"
            :repeat="Infinity"
            :erase-delay="100"
            erase-style="backspace"
          ).typer
          span #[br] Safely
        p(:class="descriptionClasses").font-gray.font-open-sans Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use.
        br
        get-started-button(rounded :large="$isRegularScreen" :x-large="$isWideScreen").font-s
</template>

<script>
import GetStartedButton from './GetStartedButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GetStartedButton,
  },
  data () {
    return {
      email: '',
    };
  },
  computed: {
    // Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
      return [
        'mb-8',
        classes,
      ];
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs', 'text-center'],
        regular: ['font-s', 'text-justify'],
        wide: ['font-m', 'text-justify'],
      });
    },
    panelHeight () {
      if (this.$isMobile) return 'auto';
      if (this.$isRegularScreen) return '650px';
      return '950px';
    },
  },
  methods: {
    getStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.vue-typer >>> .custom.char.typed  {
  color: #04B1E7;
}

.vue-typer >>> .custom.caret {
  width: 5px;
  background-color: #FFFFFF;
}

.vue-typer >>> .custom.caret.typing {
  background-color: #04B1E7;
}

.usp-mobile {
  margin-top: 38px;
}
</style>
