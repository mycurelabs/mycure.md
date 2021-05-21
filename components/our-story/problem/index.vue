<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12" md="4" align="center")
          img(width="100%" v-lazy="require('~/assets/images/our-story/mycure-our-story-solving-problems-clinic-image.png')" alt="Our Story - Problem")
        v-col(cols="12" md="7" offset-md="1")
          h1(:class="headerClasses").mb-10 The Problem We Are Trying To Solve
          div(:class="descriptionClasses")
            p Medical record systems are highly fragmented, disorganized, and non-collaborative even in some developed countries. Many are still using legacy platforms and are not employing the latest available technologies. Some are exclusive and are not interoperable with other systems.
            p Thus health professionals are unable to optimize patient healthcare. In the same manner, patients have difficulty monitoring and organizing their medical data and history.
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
