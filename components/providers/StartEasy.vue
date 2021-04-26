<template lang="pug">
  div.header-gray
    v-container
      v-row.my-10
        v-col(cols="12").mb-6.text-center
          h1 As easy as
        div(v-if="!$isMobile").d-flex.align-end
          template(v-for="item in items")
            v-col(cols="12" md="4").text-center
              img(
                :src="item.image"
                width="80%"
              )
              h2 {{item.title}}
              p {{item.description}}
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
                p {{item.description}}
    need-more(:class="{ 'need-more-md-up' : !$isMobile }")
</template>

<script>
import GetStartedButton from '~/components/providers/GetStartedButton';
import NeedMore from '~/components/providers/NeedMore';
export default {
  components: {
    GetStartedButton,
    NeedMore,
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
