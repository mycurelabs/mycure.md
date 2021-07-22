<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12").text-center
          h1(:class="headerClasses").mb-10 About the Founders
        v-col(cols="12" md="6").pa-5.text-center
          img(
            v-lazy="require('~/assets/images/our-story/mycure-ourstory-dale.png')"
            alt="Our Story - Dale"
            :width="$isMobile ? '144px' : ($isRegularScreen ? '267px' : '417px')"
            :height="$isMobile ? '144px' : ($isRegularScreen ? '267px' : '417px')"
          ).mb-10
          p(:class="descriptionClasses")
            strong Dale&nbsp;
            | runs a tech company that started in 2004. Among numerous IT projects, their team also made the first Filipino-themed game on iTunes and Googleplay called&nbsp;
            a(href="http://www.butchukoy.com/" target="_blank").primary--text Sipa
            | &nbsp;and a mobile photo diary meant to tell your story through photos called Pickld. He regularly shares experiences being a Mentor and Director at Founder Institute (Manila). He also started&nbsp;
            a(href="http://www.mightyminds.org/" target="_blank").primary--text Mighty Minds
            | , a nonprofit organization that helps kids finish school.
        v-col(cols="12" md="6").pa-5.text-center
          img(
            v-lazy="require('~/assets/images/our-story/mycure-ourstory-joel.png')"
            alt="Our Story - Joel"
            :width="$isMobile ? '144px' : ($isRegularScreen ? '267px' : '417px')"
            :height="$isMobile ? '144px' : ($isRegularScreen ? '267px' : '417px')"
          ).mb-10
          p(:class="descriptionClasses")
            strong Joel&nbsp;
            | is a marketing executive and has been involved in the field for the last 20 years. His work involves a lot of travel and he loves to explore and talk to local folks during these times. Through these encounters, he was able to get a closer look at the plight of the Filipinos with regard to medical and health access. He believes that there is still a lot that can be done and that a good tech infrastructure can be a big boost in improving this sector.
</template>

<script>
export default {
  props: {
    headerClasses: {
      type: [Array, Object],
      default: null,
    },
    descriptionClasses: {
      type: [Array, Object],
      default: null,
    },
  },
  data () {
    return {};
  },
};
</script>

<style scoped>
.sipa {
  text-decoration: none;
}

.mightyMinds {
  text-decoration: none;
}
</style>
