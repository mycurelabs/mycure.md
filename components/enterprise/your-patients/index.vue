<template lang="pug">
  v-container.py-12.your-patients-contents
    v-row(justify="center")
      v-col(cols="12" md="8" lg="6" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{secondPanelHeader.header}}
        p.text-center.font-16.mt-3.font-gray {{secondPanelHeader.description}}
    v-row(justify="center")
      v-col(
        cols="12"
        :md="$isMobile ? '5' : '4'"
        v-for="(data, key) in secondPanelContents"
        :key="key"
        align="center"
        justify="center"
        :class="columnClasses"
      )
        div(v-if="!$isMobile").text-center.img-container
          img(v-lazy="require(`~/assets/images/enterprise/${data.image}`)" :alt="data.header")
        h1(:class="headerClasses").lh-title.pb-3.font-weight-bold {{data.header}}
        img(
          v-if="$isMobile"
          v-lazy="require(`~/assets/images/enterprise/${data.image}`)"
          :alt="data.header"
          width="100%"
        )
</template>

<script>
import { SECOND_PANEL_HEADER, SECOND_PANEL_CONTENTS } from '../enterprise-contents';
export default {
  data () {
    this.secondPanelHeader = SECOND_PANEL_HEADER;
    this.secondPanelContents = SECOND_PANEL_CONTENTS;
    return {};
  },
  computed: {
    headerClasses () {
      const webClasses = ['font-16', 'column-head', 'mt-4'];
      const mobileClasses = ['font-16'];
      return this.$isMobile
        ? mobileClasses
        : webClasses;
    },
    columnClasses () {
      return !this.$isMobile
        ? ['text-center', 'column-container']
        : ['my-5'];
    },
  },
  methods: {
    onClick () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.column-container {
  position: relative;
  min-height: 200px;
}
.img-container {
  height: 350px;
}
.img-container img {
  height: 100%;
}
.column-head {
  margin-bottom: 20px;
}
.get-started-btn {
  position: absolute;
  margin-left: -19%;
  bottom: 0px;
}
@media screen and (min-width: 1260px) {
  .your-patients-contents {
    margin-top: 8%;
  }
}
@media screen and (device-width: 1024px) {
  .your-patients-contents {
    margin-top: -60%;
  }
  .img-container {
    height: 250px;
  }
  .img-container img {
    height: 100%;
  }
  .get-started-btn {
    margin-left: -25%;
  }
}
@media screen and (device-width: 1440px) {
  .get-started-btn {
    margin-left: -18%;
  }
}
@media screen and (device-width: 1680px) {
  .get-started-btn {
    margin-left: -18%;
  }
}
@media screen and (device-width: 1920px) {
  .get-started-btn {
    margin-left: -12%;
  }
}
@media screen and (device-width: 2304px) {
  .your-patients-contents {
    margin-top: -10%;
  }
  .get-started-btn {
    margin-left: -12%;
  }
}@media screen and (device-width: 2560px) {
  .get-started-btn {
    margin-left: -12%;
  }
}
</style>
