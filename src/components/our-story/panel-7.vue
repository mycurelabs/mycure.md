<template lang="pug">
  div
    div(v-if="!$isMobile").white#panel7
      v-container
        br
      v-container  
        v-layout(row).py-2
          v-flex(xs12 md3 offset-xs1).px-4
            img(src="../../assets/images/mycure-our-story-clara-barton-values-01.png" alt="MYCURE Values").right
          v-flex(xs12 md8).px-4
            br.brLH
            strong.font-48 You are one of a kind.
            br
            br
            span.font-18 Highly value diversity and respect everyone’s opinions. These cultivate the way we practice honesty, transparency, and emanate integrity at all times.
        v-layout(row).py-2
          v-flex(xs12 md7 offset-md1).px-4
            br.brLH
            strong.font-48 All we need is love.
            br
            br
            span.font-18 Everything starts, ends, and happens with love — be it in building great products, delivering awesomeness to customers, or strengthening the MYCURE culture.
          v-flex(xs12 md3).px-4
            img(src="../../assets/images/mycure-our-story-elton-john-values-02.png" alt="MYCURE Values").left
        v-layout(row).py-2
          v-flex(xs12 md3 offset-xs1).px-4
            img(src="../../assets/images/mycure-our-story-mother-theresa-values-03.png" alt="MYCURE Values").right
          v-flex(xs12 md8).px-4
            br.brLH
            strong.font-48 Our Mission is Our Obsession.
            br
            br
            span.font-18 As passionate, fun-loving, and innovative people that we are, we dare to challenge status quo and make things happen by giving that extra mile of care in all that we do.
        v-layout(row).py-2
          v-flex(xs12 md7 offset-md1).px-4
            br.brLH
            strong.font-48 First Think First.
            br
            br
            span.font-18 Follow the first principles thinking wherever possible. As Elon Musk said, "boil things down to the most fundamental truths and then reason up from there."
          v-flex(xs12 md3).px-4
            img(src="../../assets/images/mycure-our-story-elon-musk-values-04.png" alt="MYCURE Values").left
      br
      br
    div(v-else)
      v-container
        br
      v-container  
        div.pt-2
          center
            img(src="../../assets/images/mycure-our-story-clara-barton-values-01.png" alt="MYCURE Values")
        div
          v-flex(xs12)
            br
            strong.font-40 You are one of a kind.
            br
            br
            span.font-18 Highly value diversity and respect everyone’s opinions. These cultivate the way we practice honesty, transparency, and emanate integrity at all times.
        div.pt-5
          center
            img(src="../../assets/images/mycure-our-story-elton-john-values-02.png" alt="MYCURE Values")
        div
          v-flex(xs12)
            strong.font-40 All we need is love.
            br
            br
            span.font-18 Everything starts, ends, and happens with love — be it in building great products, delivering awesomeness to customers, or strengthening the MYCURE culture.
        div.pt-5
          center
            v-flex(xs12)
              img(src="../../assets/images/mycure-our-story-mother-theresa-values-03.png" alt="MYCURE Values")
        div
          v-flex(xs12)
            br
            strong.font-40 Our Mission is Our Obsession.
            br
            br
            span.font-18 As passionate, fun-loving, and innovative people that we are, we dare to challenge status quo and make things happen by giving that extra mile of care in all that we do.
        div.pt-5
          center
            img(src="../../assets/images/mycure-our-story-elon-musk-values-04.png" alt="MYCURE Values")
        div
          v-flex(xs12)
            br
            strong.font-40 First Think First.
            br
            br
            span.font-18 Follow the first principles thinking wherever possible. As Elon Musk said, "boil things down to the most fundamental truths and then reason up from there."
</template>

<script>
  export default {
    components: {
      // 
    },
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>
 .brLH {
   line-height: 130px;
 }
</style>



