<template lang="pug">
  div.white.testimonial-contents
    client-only
      v-container(v-if="!$isMobile" @mouseover="playCarousel = true")
        v-row(justify="center")
          v-col(cols="12" md="11").pt-2.pb-1
            v-carousel(
              next-icon="mdi-chevron-right"
              height="450"
              dark
              hide-delimiters
              :cycle="playCarousel"
              :interval="4000"
            ).elevation-0.testimonial-carousel
              v-carousel-item(
                v-for="(testimonial,i) in testimonials"
                :key="i"
              ).pt-10.text-center
                v-row(justify="center" align="center")
                  v-col(cols="10").text-center.pa-5
                    h1(v-html="testimonial.message").black--text.mb-5.font-30.font-weight-light
                    span.font-s.primary--text {{ testimonial.name }}
                    br
                    span.font-s.subheading.grey--text {{ testimonial.position }}
      div(v-else).transparent.pt-5
        v-container
          v-row(justify="center").px-3
            v-col(cols="12")
              carousel(
                paginationActiveColor="#3498DB"
                paginationColor="grey"
                navigationNextLabel=" "
                navigationPrevLabel=" "
                :navigationClickTargetSize="50"
                :per-page="1"
                :autoplay="false"
                :loop="true"
                :navigationEnabled="true"
              )
                slide(v-for="(testimonial,index) in testimonials" :key="index" :data-index="index+1").text-center
                  h2(v-html="testimonial.message").black--text.font-weight-light
                  br
                  br
                  strong.font-16.primary--text {{ testimonial.name }}
                  br
                  | {{ testimonial.position }}
</template>

<script>
export default {
  data () {
    this.testimonials = [
      {
        name: 'Dr. Gay Cadorna-Toledo',
        position: 'Pediatrician',
        message: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user-friendly even to my secretary.”',
      },
      {
        name: 'Nelson S. Abelardo, M.D.',
        position: 'Cardiologist',
        message: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry<br>with them wherever they are.”',
      },
      {
        name: 'Atty. Ivy D. Patdu, M.D.',
        position: 'Deputy Privacy Commissioner, NPC',
        message: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations<br>for data protection.”',
      },
      {
        name: 'Greg Burke, M.D.',
        position: 'Internist',
        message: '“They want to be greeted by name, they want their healthcare professionals [to] be identifiable and professionally dressed. They don\'t want to wait long<br>for an appointment.”',
      },
      {
        name: 'Meredith Phillips',
        position: 'Chief Information Privacy & Security Officer, Henry Ford Health System',
        message: '“What I preach to our executives is that it is not about the data; it is about the people. Behind every line of data<br>and medical record number, there is a person.”',
      },
      {
        name: 'Forrester Research',
        position: '',
        message: '“The adoption of telemedicine shifted into hyper-drive over the past month (March to April 2020), with virtual health-care interactions on pace to top 1 billion<br>by year’s end.”',
      },
    ];
    return {
      playCarousel: false,
    };
  },
};
</script>

<style scoped>
.gradient-grey {
  background-color: #f0f0f0;
}
.testimonial-contents {
  position: relative;
  z-index: 2;
}
</style>
