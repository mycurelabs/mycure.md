<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="8" lg="6" justify="center")
        h1.text-center.font-30.lh-title.pb-3.font-weight-light {{ secondPanelHeader.header }}
        p(:class="{ 'pre-white-space' : !$isMobile }").text-center.font-16.mt-3.font-gray {{ secondPanelHeader.description }}
    v-row(justify="center")
      v-col(
        v-for="(data, key) in secondPanelContents"
        cols="12"
        align="center"
        justify="center"
        :md="$isMobile ? '5' : '4'"
        :key="key"
        :class="columnClasses"
      )
        div(v-if="!$isMobile").text-center.img-container
          picture-source(
            custom-path="enterprise/"
            image-file-extension=".webp"
            image-width="70%"
            :image="data.image"
            :image-alt="data.header"
          )
        h1(:class="headerClasses").image-title.lh-title.pb-3.font-weight-bold {{ data.header }}
        picture-source(
          v-if="$isMobile"
          custom-path="enterprise/"
          image-file-extension=".webp"
          :image="data.image"
          :image-alt="data.header"
        )
</template>

<script>
// constants
import { SECOND_PANEL_HEADER, SECOND_PANEL_CONTENTS } from '../enterprise-contents';
// components
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
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
@media screen and  (min-width: 1920px) {
  .image-title {
    padding-top: 30%;
  }
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
