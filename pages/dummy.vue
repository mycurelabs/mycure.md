<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel
        v-col(cols="12").text-center
          signup-button Foo
      generic-panel
        v-col(cols="12").text-center
          h1.text-h2 Make Healthcare Accessible to All
          h2 THE SEVEN WONDERS OF HEALTHCARE EMPOWERED BY MYCURE
        v-col(sm="12" md="4").text-center
          v-card
            v-card-text.pa-5
              img(
                width="100%"
                src="~/assets/images/home/Doctor.png"
              )
        v-col(sm="12" md="4").text-center
          v-card
            v-card-text.pa-5
              img(
                width="100%"
                src="~/assets/images/home/Doctor.png"
              )
        v-col(sm="12" md="4").text-center
          v-card
            v-card-text.pa-5
              img(
                width="100%"
                src="~/assets/images/home/Doctor.png"
              )
    v-row(justify="center").green
      generic-sub-page-panel(
        super-title="This is a super title"
        title="This is a title"
        content="Commodo tempor culpa ea nisi mollit pariatur est ipsum incididunt."
        cta-button-text="Override Get Started"
        :image="require('~/assets/images/doctors-clinics/Digital Records.png')"
      )
    v-row(justify="center").blue
      generic-sub-page-panel
        template(slot="super-title")
          h3 slot super title
        template(slot="title")
          h1 slot title
        template(slot="content")
          p Qui consectetur duis dolor dolore duis sunt fugiat et ullamco.
        template(slot="image")
          img(width="100%" src="~/assets/images/doctors-clinics/Digital Records.png")
    //- v-row(justify="center").purple
    //-   h1 normal panel
    //-   generic-panel
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericPanel,
    SignupButton,
  },
};
</script>
