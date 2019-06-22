<template lang="pug">
  div
    div(v-if="!$isMobile")#panel7
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md9)
            v-carousel(
              light
              hide-delimiters
              next-icon="mdi-chevron-right"
              height="350"
            ).elevation-0
              v-carousel-item(
                v-for="(testimonial,i) in testimonials"
                :key="i"
              )
                v-layout(
                  column 
                  justify-center 
                )
                  v-flex(xs12 md10).text-xs-center.pa-5
                    h2.black--text.mb-5 {{ testimonial.message }}
                    span.font-small.black--text {{ testimonial.name }}
                      br
                      i.black--text {{ testimonial.position }}
    div(v-else).transparent
      v-container
        v-layout(row wrap justify-center).px-3
          //- https://ssense.github.io/vue-carousel/
          v-flex(xs12)
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              :navigationEnabled="true"
              :adjustableHeight="true"
              paginationActiveColor="white"
              paginationColor="grey"
              :navigationClickTargetSize="50"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(v-for="(testimonial,index) in testimonials" :key="index" :data-index="index+1").text-xs-center
                h2.black--text {{ testimonial.message }}
                br
                br
                span.font-s.black--text {{ testimonial.name }}
                  br
                  span {{ testimonial.position }}
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
          },
          {
            name: 'Dr. Greg Burke, MD',
            position: 'Internist',
            message: '“They want to be greeted by name, they want their healthcare professionals [to] be identifiable and professionally dressed. They don\'t want to wait long for an appointment. They want to hear results quickly, and they want rapid access to their clinicians. At a fundamental level, they want to be treated with kindness and compassion and feel they\'re not a number, they\'re a human being.”'
          },
          {
            name: 'Meredith Phillips',
            position: 'Chief Information Privacy & Security Officer, Henry Ford Health System',
            message: '“What I preach to our executives is that it is not about the data; it is about the people. Behind every line of data and medical record number, there is a person. We do what we do because of the person, not the data. That’s what makes us passionate. When you get on the phone with a patient whose information has been breached, and hear them cry, or how they feel violated, that is not a piece of data, that is a person.”'
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
