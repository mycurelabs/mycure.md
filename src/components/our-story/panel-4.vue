<template lang="pug">
  div.white
    v-container
      v-layout(row wrap)
        v-flex(xs12 md12)
          v-layout(row wrap align-center justify-center)
            v-flex(xs12 md12).text-xs-center
              h1.pt-5.font-48 Our Purpose
            v-flex(xs12 md4).px-4
              img(width="100%" src="../../assets/images/mycure-ourstory-team.png" alt="Our Story - Team")
            v-flex(xs12 md8).px-4
              p.font-18.pt-5 MYCURE’s vision is to 
                |
                strong securely organize medical records that will provide fast, safe, and efficient access to health professionals, enabling them to help and save more lives.
              p.font-18 We believe that even the small things can make a big difference. And that extra mile of care we give for humanity goes a long way and creates a lasting impact.
              p.font-18 Thus, we honor and support people who care the extra mile. They are the unsung heroes, the doctors and other health professionals who work day and night to make things work. 
              p.font-18 While they see themselves just doing their everyday jobs, we see people that create a dent in humanity. They are truly the heroes that make this world a better place.
              p.font-18 MYCURE commits to design and build amazing tech tools and products specifically for them. These would help and enable these heroes to make their jobs easier and more efficient. They are our inspiration, the reason of our being, our existence.
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
  p {
    text-align: justify;
  }
</style>

