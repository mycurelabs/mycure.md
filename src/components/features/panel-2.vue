<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
        center
          strong.font-small.font-mc-blue ROLES &amp; PRIVILEGES
        br
        br
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).pr-5
            span.font-medium Everybody's got a special role to play.
          v-flex(xs12 md6 align-self-center).pl-5
            span.font-small Collaborate with your clinc staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        br
        br
        br
        v-layout(row align-self-center)
          v-flex(xs12 md2 justify-center)
            center
              img(src="../../assets/images/mycure-web-features-role-health-professionals.png" height="250px")
              br
              span.font-small Health 
                br
                | Professionals
          v-flex(xs12 md2)   
            center       
              img(src="../../assets/images/mycure-web-features-role-front-desk-receptionists.png" height="250px")
              br
              span.font-small Front Desk
                br
                | Receptionists
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-inventory-manager.png" height="250px")
              br
              span.font-small Inventory
                br
                | Manager
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-medical-technologist.png" height="250px")
              br
              span.font-small Medical
                br
                | Technologists
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-cashier-billing-staff.png" height="250px")
              br
              span.font-small Cashier &amp;
                br
                | Billing Staff
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-clinic-administrators.png" height="250px")
              br
              span.font-small Clinic
                br
                | Administrators        
    div(v-else)#panel2
      v-container
        center
          strong.font-s.font-mc-blue ROLES &amp; PRIVILEGES
        br
        br
        v-layout(column justify-center)
          v-flex(xs12)
            span.font-l Everybody's got a special role to play.
          br
          v-flex(xs12)
            span.font-m Collaborate with your clinc staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        br
        br
        v-layout(row justify-center)
          div
          //- https://ssense.github.io/vue-carousel/
          carousel(
            :per-page="1" 
            :autoplay="true"
            :loop="true"
            :adjustableHeight="true"
            :paginationEnabled="true"
            paginationActiveColor="grey"
            paginationColor="#f5f5f5"
            style="height: 400px"
          ) 
            slide(
              :data-index="0"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-health-professionals.png" height="250px")
                br
                span.font-small Health
                  br
                  | Professionals
            slide(
              :data-index="1"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-front-desk-receptionists.png" height="250px")
                br
                span.font-small Front Desk
                  br
                  | Receptionists
            slide(
              :data-index="1"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-inventory-manager.png" height="250px")
                br
                span.font-small Inventory
                  br
                  | Manager
            slide(
              :data-index="1"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-medical-technologist.png" height="250px")
                br
                span.font-small Medical
                  br
                  | Technologists
            slide(
              :data-index="1"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-cashier-billing-staff.png" height="250px")
                br
                span.font-small Cashier &amp;
                  br
                  | Billing Staff
            slide(
              :data-index="1"
            )
              center
                img(src="../../assets/images/mycure-web-features-role-clinic-administrators.png" height="250px")
                br
                span.font-small Clinic
                  br
                  | Administrators
              
          

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

  #panel2 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

</style>
