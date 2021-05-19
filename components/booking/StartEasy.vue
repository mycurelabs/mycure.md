<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12")
          v-row
            v-col(cols="12").text-center
              h1(:class="headerClasses") As easy as
            div(v-if="!$isMobile").d-flex.align-end
              v-row(align="center")
                v-col(cols="12" md="4" v-for="(item, key) in items" :key="key").text-center
                  img(
                    :src="item.image"
                    width="80%"
                  )
                  h2(:class="{'font-m': $isWideScreen, 'font-s': $isRegularScreen}").font-weight-medium {{item.title}}
                  p(:class="{'font-S': $isWideScreen, 'font-xs': $isRegularScreen}").font-open-sans.font-gray {{item.description}}
            div(v-else)
              template(v-for="item in items")
                div.d-flex
                  v-col(cols="5")
                    img(
                      :src="item.image"
                      width="130"
                    )
                  v-col(cols="7")
                    h2.font-s.font-weight-medium {{item.title}}
                    p.font-open-sans.font-gray {{item.description}}
</template>

<script>
export default {
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
          image: require('../../assets/images/booking/A Asset 2.png'),
          title: 'Appointments',
          description: 'Seamless booking to get more patients',
        },
        {
          image: require('../../assets/images/booking/B Asset 2.png'),
          title: 'Billing',
          description: 'Efficiently measure your growth',
        },
        {
          image: require('../../assets/images/booking/C Asset 2.png'),
          title: 'Charting',
          description: 'Quick & secure access to medical records',
        },
      ],
    };
  },
};
</script>
