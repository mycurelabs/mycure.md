<template lang="pug">
  v-app
    nuxt
</template>

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    return {
      dayOrNight: '',
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    // DISABLE THE DARK THEME AFTER SUCCESSFUL
    // APPLICATION FOR WAIT LISTS IN SIGN UP
    async init () {
      this.dayOrNight = await dayOrNight();
      if (this.dayOrNight === 'night') {
        this.$vuetify.theme.dark = false;
      }
    },
  },
};
</script>

<style>
.font-64 {
  font-size: 64px !important;
}
.font-56 {
  font-size: 56px !important;
}
.font-32 {
  font-size: 32px !important;
}
.font-30 {
  font-size: 30px !important;
}
.font-26 {
  font-size: 26px !important;
}
.font-24 {
  font-size: 24px !important;
}
.font-20 {
  font-size: 20px !important;
}
.font-16 {
  font-size: 16px !important;
}

.letter-spacing-normal {
  letter-spacing: normal !important;
}
.pre-white-space {
  white-space: pre;
}
</style>
