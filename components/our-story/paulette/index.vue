<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12" md="4" align-self="center").text-center
          img(
            v-lazy="require('~/assets/images/our-story/mycure-web-our-story-paulette.png')"
            alt="Our Story Paulette"
            :width="$isMobile ? '205px' : ($isRegularScreen ? '240px' : '373px')"
            :height="$isMobile ? '273.81px' : ($isRegularScreen ? '320.56px' : '498.21px')"
          )
        v-col(cols="12" md="7" offset-md="1")
          h1(:class="headerClasses").mb-10 Meet Paulette
          div(:class="descriptionClasses")
            p Paulette became a young widow at age 30. Her two children were just 4- and 6-year olds then. Despite limited resources, she managed to give her kids a good life.
            p Just when things got a lot better, Paulette encountered a bigger challenge—cancer.
            p For about a decade and a half, her life had been all about trips to the doctor, regular checkups, and staying healthy.&nbsp;
              strong Years of medical files&nbsp;
              | were definitely taking up space in their home and in her everyday life. As she shuttled between Guam (where she is based) and the Philippines, carrying her medical files to different doctors and pharmacies became too cumbersome and costly. Replenishing her medication had become a guessing game. Staying healthy sometimes became detrimental to her own health.
            p Paulette stood strong as a cancer warrior and survivor.
            p Our founder, Dale, had been witness to all of this. Paulette is Dale's mother.
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
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
