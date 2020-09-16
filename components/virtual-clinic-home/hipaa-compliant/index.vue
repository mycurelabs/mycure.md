<template lang="pug">
  v-container(:class="containerClasses")
    v-row(justify="center" align="center")
      v-col(v-if="!$isMobile" cols="12" md="5")
        picture-source(
          custom-path="virtual-clinic-home/"
          image-alt="MYCURE is HIPAA Compliant"
          image-file-extension=".webp"
          :image="hipaaBadge"
        )
      v-col(
        cols="10"
        md="4"
        offset-md="1"
        :class="{'text-center': $isMobile}"
      )
        h1(:class="titleClasses") {{ hipaaCompliantContent.title }}
        br
        p(:class="descriptionClasses") {{ hipaaCompliantContent.description }}
        br
        v-btn(@click="aboutHipaaCompliant" color="primary" depressed)
          span.white--text.text-none Learn More
      picture-source(
        v-if="$isMobile"
        custom-path="virtual-clinic-home/"
        image-alt="MYCURE is HIPAA Compliant"
        image-file-extension=".webp"
        :image="hipaaBadge"
      ).pt-12
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: { PictureSource },
  data () {
    this.hipaaCompliantContent = {
      title: 'MYCURE is HIPAA Compliant',
      description: 'MYCURE demonstrates its commitment to industry-leading best practices for security and privacy of protected health information as required under HIPAA.',
    };
    this.hipaaBadge = 'HIPAA-Badge';
    return {};
  },
  computed: {
    containerClasses () {
      return [{ 'border-radius': !this.$isMobile }, 'my-12', 'container-color'];
    },
    titleClasses () {
      return ['font-30', 'lh-title', 'pb-3', 'font-weight-light'];
    },
    descriptionClasses () {
      return [`text-${this.$isMobile ? 'center' : 'justify'}`, 'font-16', 'mt-3', 'font-gray'];
    },
  },
  methods: {
    aboutHipaaCompliant () {
      window.open('https://blog.mycure.md/mycure-is-hipaa-compliant/', '_blank', 'noopener, noreferrer');
    },
  },
};
</script>

<style scoped>
.container-color {
  background-color: #BBDEFB
}
.border-radius {
  border-radius: 10px;
}
</style>
