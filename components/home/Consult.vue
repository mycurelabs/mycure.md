<template lang="pug">
  div
    v-row
      v-col(cols="12")
        v-window(
          v-model="sliderPosition"
        )
          v-window-item(
            v-for="(item, index) in sliderItems"
            :key="index"
          )
            v-row
              v-col(
                :cols="index === 1 || index === 3 ? '7' : '6'"
              ).mr-0.pr-0
                v-img(
                  :src="item.image"
                  height="386"
                  :alt="item.header"
                )
              v-col(
                :cols="index === 1 || index === 3 ? '5' : '6'"
              ).ml-0.pl-0
                v-card(
                  :color="item.bgColor"
                ).consult-card
                  div.pa-12
                    h2.font-45.white--text.text-right {{ item.header }}
                    div.d-flex(justify="flex-end")
                      a(:href="item.link").text-decoration-none.white--text.font-18.mt-2.ml-auto {{ item.linkText }}
                        v-icon(color="white").ml-4 mdi-arrow-right
        v-card-actions.justify-space-between
          v-btn(
            icon
            @click="prevSlide"
          )
            v-icon mdi-chevron-left
          v-item-group(
            v-model="sliderPosition"
            mandatory
          )
            v-item(
              v-for="(item, index) in sliderItems"
              :key="index"
              v-slot="{ active, toggle }"
            )
              v-btn(
                :input-value="active"
                icon
                @click="toggle"
              )
                v-icon mdi-record
          v-btn(
            icon
            @click="nextSlide"
          )
            v-icon mdi-chevron-right
</template>

<script>
export default {
  data () {
    return {
      sliderPosition: 0,
      sliderItems: [
        {
          image: require('~/assets/images/home/consult-image-1.png'),
          header: 'Lab tests booked in under 5 minutes',
          linkText: 'Book now!',
          bgColor: '#3EA1C0',
          link: '/index',
        },
        {
          image: require('~/assets/images/home/consult-image-2.png'),
          header: 'Help MYCURE Help Filipinos',
          linkText: 'Learn more!',
          bgColor: '#7EAC41',
          link: 'index',
        },
        {
          image: require('~/assets/images/home/consult-image-3.png'),
          header: 'Get your medicines immediately after your consultation',
          linkText: 'Medicine Delivery',
          bgColor: '#9A48A7',
          link: 'index',
        },
        {
          image: require('~/assets/images/home/consult-image-4.png'),
          header: 'Think you have COVID?',
          linkText: 'Consult a doctor now!',
          bgColor: '#C93B3B',
          linkL: 'index',
        },
      ],
    };
  },
  created () {
    setInterval(() => {
      if (++this.sliderPosition >= this.sliderItems.length) this.sliderPosition = 0;
    }, 3000);
  },
  methods: {
    nextSlide () {
      this.sliderPosition = this.sliderPosition + 1 === this.sliderItems.length
        ? 0
        : this.sliderPosition + 1;
    },
    prevSlide () {
      this.sliderPosition = this.sliderPosition - 1 < 0
        ? this.sliderItems.length - 1
        : this.sliderPosition - 1;
    },
  },
};
</script>

<style scoped>
.highlighted {
  text-decoration: underline;
  text-decoration-color: white;
}
.text-container {
  background-size: cover;
}
.image {
  padding: 0;
}
.font-50 {
  font-size: 50px;
}
a {
  text-decoration: none !important;
}
.consult-card {
  height: 100%;
  border-radius: 0px !important;
}
</style>
