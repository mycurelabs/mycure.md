<template lang="pug">
  div#panel7
    div(v-if="!$isMobile")
      v-container
        v-layout(row justify-center)
          v-carousel(
            light
            hide-delimiters
            style="width: 70% !important; height: 350px;" 
            next-icon="mdi-chevron-right"
          ).elevation-0
            v-carousel-item(
              v-for="(testimonial,i) in testimonials"
              :key="i"
            )
              v-layout(
                column 
                justify-center 
                style="height: 350px; padding-left: 50px; padding-right: 50px")
                h2.black--text.text-xs-center {{ testimonial.message }}
                br
                br
                span.font-small.black--text.text-xs-center {{ testimonial.name }}
                  br
                  span.black--text.text-xs-center {{ testimonial.position }}
    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        testimonials: [
          {
            name: 'Dr. Gay Cadorna-Toledo',
            position: 'Pediatrician',
            message: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user friendly even to my secretary.”'
          },
          {
            name: 'Atty. Ivy D. Patdu, M.D',
            position: 'Deputy Privacy Commissioner, NPC',
            message: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.”'
          },
          {
            name: 'Dr. Nelson S. Abelardo',
            position: 'Cardiologist',
            message: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.”'
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
