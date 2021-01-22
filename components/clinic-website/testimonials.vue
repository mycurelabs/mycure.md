<template lang="pug">
  v-container
    v-row
      v-col(cols="12").d-flex.testimonial-col-style
        template(v-if="testimonialDescription !== ''")
          div
            v-avatar
              img(:src="picURL")
          div(style="width: 100%; margin-left: 12px;")
            div.d-flex.pb-3
              v-icon(color="orange") mdi-star
              v-spacer
              p.ma-0 {{ testimonialDate | morph-date-format('MMM DD, YYYY') }}
            div
              p.text-justify {{ testimonialDescription }}
        template(v-else)
          i No testimonials available
</template>

<script>
export default {
  props: {
    picURL: {
      type: String,
      default: '',
    },
    testimonialDate: {
      type: Number,
      default: null,
    },
    testimonialDescription: {
      type: String,
      default: '',
    },
  },
  methods: {
    check () {
      return console.log(this.testimonialDescription);
    },
  },
};
</script>

<style scoped>
.testimonial-col-style {
  background-color: #ececec;
  border-radius: 5px;
  min-height: 126px;
}
</style>
