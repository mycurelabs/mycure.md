<template lang="pug">
  v-container
    v-row(justify="center" no-gutters)
      v-col(cols="12" md="10")
        v-row
          v-col(cols="12").mb-6.text-center
            h1(:class="headerClasses") As easy as
          div(v-if="!$isMobile").d-flex.align-end
            v-row(align="center")
              v-col(cols="12" md="4" v-for="(item, key) in items" :key="key").text-center
                img(
                  :src="item.image"
                  width="80%"
                )
                h2(:class="") {{item.title}}
                p.font-open-sans.grey--text {{item.description}}
          div(v-else)
            template(v-for="item in items")
              div.d-flex
                v-col(cols="5")
                  img(
                    :src="item.image"
                    width="130"
                  )
                v-col(cols="7")
                  h2.font-20 {{item.title}}
                  p.font-open-sans.grey--text {{item.description}}
        //- need-more(:class="{ 'need-more-md-up' : !$isMobile }")
</template>

<script>
import GetStartedButton from './GetStartedButton';
import NeedMore from './NeedMore';
export default {
  components: {
    GetStartedButton,
    NeedMore,
  },
  props: {
    headerClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      items: [
        {
          image: require('../../assets/images/providers/A Asset 2.png'),
          title: 'Appointments',
          description: 'Seamless booking to get more patients',
        },
        {
          image: require('../../assets/images/providers/B Asset 2.png'),
          title: 'Billing',
          description: 'Efficiently measure your growth',
        },
        {
          image: require('../../assets/images/providers/C Asset 2.png'),
          title: 'Charting',
          description: 'Quick & secure access to medical records',
        },
      ],
    };
  },
};
</script>

<style scoped>

@media (min-width: 960px) {
  .need-more-md-up{
    max-width: 900px;
  }
}

@media (min-width: 1264px) {
  .need-more-md-up{
    max-width: 1185px;
  }
}
.need-more-md-up {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

}
</style>
