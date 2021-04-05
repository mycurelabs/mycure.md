<template lang="pug">
  div(:class="{'hearts': !$isMobile }").white
    usp-template(
      :uspTitle="uspTitle"
      :uspDescription="uspDescription"
      :btnRoute="uspContents.btnRoute"
      :btnId="uspContents.btnId"
      :btnText="uspContents.btnText"
      :coverImg="uspContents.coverImg"
      :coverImgExtension="uspContents.coverImgExtension"
      :customPath="uspContents.customPath"
      :title-mobile-size="29"
      @btnClick="getStarted"
      slottedMetaTitle
      use-picture-source
    )
      span(slot="pre-btn-content").pb-5.font-14.grey--text *This requires your own managed cloud and database server setup.
      span(slot="meta-slot") MYCURE Heart&nbsp;
        v-icon(color="error") mdi-heart
        span : Fight COVID-19
</template>

<script>
import UspTemplate from '~/components/commons/usp';
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: {
    UspTemplate,
  },
  data () {
    this.uspContents = {
      title: 'Free EMR System for LGUs & NGOs',
      description: 'Securely manage  your community’s health data with an enterprise-grade Electronic Medical Records (EMR) System that runs on your own cloud server.',
      btnId: 'mycure-heart-usp-btn',
      btnText: 'Get Started',
      coverImg: 'mycure-heart-usp-cover',
      coverImgExtension: '.webp',
      customPath: 'mycure-heart/',
    };
    return {};
  },
  computed: {
    uspTitle () {
      const title = this.uspContents.title;
      return parseTextWithNewLine(title, ['System']);
    },
    uspDescription () {
      const description = this.uspContents.description;
      return this.$isMobile
        ? description
        : parseTextWithNewLine(description, ['grade']);
    },
  },
  methods: {
    getStarted () {
      if (process.browser) {
        window.open('https://forms.gle/y4qpv7ajERaGE5Lr7', '_blank');
      }
    },
  },
};
</script>

<style scoped>
.hearts {
  background-image: url('../../../assets/images/mycure-heart/heart-decor-right.webp'), url('../../../assets/images/mycure-heart/heart-decor-left.webp');
  background-position: top right, center left;
}
</style>
