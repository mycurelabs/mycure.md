<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number Flip
    div.flip-panel.pt-5
      b-container
        //- v-for="(card, key) in cards" :key="key"v-for="(card, key) in cards" :key="key"
        b-row.align-items-center
          b-col(xs="6" md="3" v-for="(card, key) in cards").text-center
            vue-flip(:active-hover="true" width="100%" class="simple-test" style="margin-bottom: 250px;")
              div(slot="front" ref="frontCard").flip-card.align-items-center
                img(width="150" :src="card.image")
                br
                label {{card.text}}
              div(slot="back" ref="backCard").flip-card.flip-card-back.align-items-center
                strong {{card.text}}
                p(v-html="card.content")

</template>

<script>
import VueFlip from 'vue-flip';
export default {
  components: {
    VueFlip
  },
  mounted() {
    // const style = window.getComputedStyle(this.$refs.frontCard.$el);
    // console.log(style.width);
  },
  data() {
    return {
      cards: [
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-multispecialty-clinics.png'),
          text: 'Multispecialty Clinics',
          content: 'One-stop, multi-staff clinics that provide ambulatory care and ancillary services'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-outpatient-clinics.png'),
          text: 'Outpatient Clinics',
          content: 'Hospital-based clinics that provide outpatient consultation services from various specialists'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-individual-clinics.png'),
          text: 'Industrial Clinics',
          content: 'Primary clinics inside companies, schools, BPOs, and other industries covered by OSHS'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-aesthetic-clinics.png'),
          text: 'Skin & Aesthetic Clinics',
          content: 'Specialized for clinics that offer aesthetic procedures and dermatological services'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-industrial-clinics.png'),
          text: 'PME Clinics',
          content: 'Clinics specializing in Physical Medical Exam (PME) services.'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-pme-clinics.png'),
          text: 'Group Clinics',
          content: 'Managed by a group of physicians practicing together and assisted by one or more secretaries'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-group-clinics.png'),
          text: 'Individual Clinics',
          content: 'Physicians practicing independently in one or more clinic locations'
        },
        {
          image: require('../../assets/images/v4/mycure-home-products-icon-more.png'),
          text: 'More coming!',
          content: `
            Rehab Clinics<br>
            Maternity Clincis<br>
            Diagnostic Clinics<br>
            Pharmacies<br>
            and other health facilities on their way!
          `
        }
      ]
    }
  }
}
</script>


<style scoped>
  .flip-panel {
    /* height: 100vh; */
    background-color: white;
  }

  .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #673AB7;
    color: white;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFC107;
    color: white
  }

  .flip-card {
    background-color: white;
    border-radius: 10px;
  }

  .flip-card, .flip-card-back {
    padding: 10px;
    width: 100%;
    height: 200px;
  }

  .flip-card:hover, .flip-card-back {
    -webkit-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    -moz-box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
    box-shadow: 0px 0px 20px -4px rgba(130,130,130,1);
  }
</style>
