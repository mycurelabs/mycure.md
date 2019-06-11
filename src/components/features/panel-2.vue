<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile")
      v-container
        center
          strong.font-small.font-mc-blue ROLES &amp; PRIVELEGES
        br
        br
        v-layout(row justify-center)
          v-flex(xs12 md6).pr-5
            span.font-medium Everybody's got a special role to play.
          v-flex(xs12 md6).pl-5
            span.font-small Collaborate with your clinc staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        br
        br
        br
        v-layout(row align-self-center)
          v-flex(xs12 md2 justify-center)
            center
              img(src="../../assets/images/mycure-web-features-role-health-professionals.png" height="250px")
              span.font-small Health 
                br
                | Professionals
          v-flex(xs12 md2)   
            center       
              img(src="../../assets/images/mycure-web-features-role-front-desk-receptionists.png" height="250px")
              span.font-small Front desk
                br
                | Receptionists
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-inventory-manager.png" height="250px")
              span.font-small Inventory
                br
                | manager
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-medical-technologist.png" height="250px")
              span.font-small Medical
                br
                | Technologists
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-cashier-billing-staff.png" height="250px")
              span.font-small Cashier &amp;
                br
                | Billing Staff
          v-flex(xs12 md2)
            center
              img(src="../../assets/images/mycure-web-features-role-clinic-administrators.png" height="250px")
              span.font-small Clinic
                br
                | Administrators        
    //- div(v-else)
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
