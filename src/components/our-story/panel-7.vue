<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container
        div.hr-blue
        br
      v-container  
        v-layout(row).py-2
          v-flex(xs12 md3 offset-xs1).px-4
            img(src="../../assets/images/mycure-our-story-clara-barton-values-01.png").right
          v-flex(xs12 md8).px-4
            br(style="line-height: 130px")
            strong.font-xl You are one of a kind.
            br
            br
            span.font-m Highly value diversity and respect everyone’s opinions. These cultivate the way we practice honesty, transparency, and emanate integrity at all times.
        v-layout(row).py-2
          v-flex(xs12 md7 offset-md1).px-4
            br(style="line-height: 130px")
            strong.font-xl All we need is love.
            br
            br
            span.font-m Everything starts, ends, and happens with love — be it in building great products, delivering awesomeness to customers, or strengthening the MYCURE culture.
          v-flex(xs12 md3).px-4
            img(src="../../assets/images/mycure-our-story-elton-john-values-02.png").left
        v-layout(row).py-2
          v-flex(xs12 md3 offset-xs1).px-4
            img(src="../../assets/images/mycure-our-story-mother-theresa-values-03.png").right
          v-flex(xs12 md8).px-4
            br(style="line-height: 130px")
            strong.font-l Our Mission is Our Obsession.
            br
            br
            span.font-m As passionate, fun-loving, and innovative people that we are, we dare to challenge status quo and make things happen by giving that extra mile of care in all that we do.
        v-layout(row).py-2
          v-flex(xs12 md7 offset-md1).px-4
            br(style="line-height: 130px")
            strong.font-xl First Think First.
            br
            br
            span.font-m Follow the first principles thinking wherever possible. As Elon Musk said, "boil things down to the most fundamental truths and then reason up from there."
          v-flex(xs12 md3).px-4
            img(src="../../assets/images/mycure-our-story-elon-musk-values-04.png").left
    div(v-else)
      v-container
        div.hr-blue
        br
      v-container  
        div.pt-2
          center
            img(src="../../assets/images/mycure-our-story-clara-barton-values-01.png")
        div
          v-flex(xs12)
            br
            strong.font-l You are one of a kind.
            br
            br
            span.font-m Highly value diversity and respect everyone’s opinions. These cultivate the way we practice honesty, transparency, and emanate integrity at all times.
        div.pt-5
          center
            img(src="../../assets/images/mycure-our-story-elton-john-values-02.png")
        div
          v-flex(xs12)
            strong.font-l All we need is love.
            br
            br
            span.font-m Everything starts, ends, and happens with love — be it in building great products, delivering awesomeness to customers, or strengthening the MYCURE culture.
        div.pt-5
          center
            v-flex(xs12)
              img(src="../../assets/images/mycure-our-story-mother-theresa-values-03.png")
        div
          v-flex(xs12)
            br
            strong.font-l Our Mission is Our Obsession.
            br
            br
            span.font-m As passionate, fun-loving, and innovative people that we are, we dare to challenge status quo and make things happen by giving that extra mile of care in all that we do.
        div.pt-5
          center
            img(src="../../assets/images/mycure-our-story-elon-musk-values-04.png")
        div
          v-flex(xs12)
            br
            strong.font-l First Think First.
            br
            br
            span.font-m Follow the first principles thinking wherever possible. As Elon Musk said, "boil things down to the most fundamental truths and then reason up from there."
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>

</style>


