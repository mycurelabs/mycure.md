<template lang="pug">
  v-container(fluid).primary
    v-row(justify="center" align="center" no-gutters)
      v-col(cols="12" md="10")
        v-card(color="White").pa-3
          v-card-text
            h1.text-center
              | {{ firstName ? `${firstName}'s ` : '' }}Services
            br
            template(v-if="services.length")
              vue-slick-carousel(
                v-if="!$isMobile"
                :arrows="false"
                :dots="false"
                infinite
                focusOnSelect
                centerMode
                :slidesToShow="4"
                :slidesToScroll="4"
                autoplay
                :speed="2000"
                :autoplaySpeed="500"
                swipeToSlide
              )
                div(v-for="(service, key) in services" :key="key")
                  v-card(color="#f0f0f0" flat).ma-1
                    v-card-text.text-center
                      v-avatar(size="75" color="white")
                        v-icon(color="error" large) mdi-medical-bag
                      br
                      br
                      h3 {{ service }}
              br
              v-row(justify="center")
                v-col(cols="12" md="10")
                  v-row
                    v-col(
                      v-for="(service, index) in services"
                      :key="index"
                      cols="12"
                      sm="12"
                      md="3"
                    ).text-center
                      h3
                        v-icon(color="primary" left) mdi-check-circle
                        | {{ service }}
              br
              br
              //- Virtual Consult
              div.text-center
                h3 Want to avail a service?
                book-appointment-btn(
                  outlined
                  rounded
                  small
                  show-icon
                  btn-text="Book an Appointment"
                  color="success"
                  :class="{ 'font-11' : $isMobile }"
                ).text-none.font-weight-bold.mt-1
            template(v-else)
              p.font-open-sans.font-gray.text-center This doctor has not listed any services yet. You may check this website from time to time for updates!
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';

export default {
  components: {
    BookAppointmentBtn,
    VueSlickCarousel,
  },
  props: {
    firstName: {
      type: String,
      default: '',
    },
    services: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
