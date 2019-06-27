<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding-top: 200px")
      v-container
        center
          strong.font-18.font-mc-blue ROLES &amp; PRIVILEGES
        v-layout(row justify-center).add-spacing
          span.font-48 Everybody's got a special role to play.
        v-layout(row justify-center).add-spacing
          v-flex(xs7 align-self-center).text-xs-center
            span.font-18 Collaborate with your clinic staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        v-layout(row align-self-center).add-spacing
          v-flex(xs12 md2 justify-center v-for="(role,index) in roles" :key="index")
            center
              img(:src="require(`../../assets/images/mycure-web-features-role-${ role.avatar }.png`)" :alt="role.name" height="250px")
              br
              div.mx-3
                span.font-18 {{ role.name }}
    div(v-else).pt-5#panel2
      v-container
        v-layout(row justify-center) 
          strong.font-16.font-mc-blue ROLES &amp; PRIVILEGES
        br
        br
        v-layout(column justify-center)
          v-flex(xs12)
            p.font-40.text-xs-center.lh-title Everybody's got a special role to play.
          br
          v-flex(xs12)
            p.font-18.text-xs-center Collaborate with your clinic staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
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
            paginationActiveColor="#3498db"
            paginationColor="#808080"
          ) 
            slide(
              v-for="(role,index) in roles"
              :key="index"
              :data-index="index+1"
            )
              center.mx-5
                img(:src="require(`../../assets/images/mycure-web-features-role-${ role.avatar }.png`)" :alt="role.name" height="300px")
                br
                v-layout(row justify-center)
                  v-flex(xs1)
                    span.font-18 {{ role.name }}
</template>

<script>
  export default {
    data () {
      return {
        roles: [
          {
            name: 'Health Professionals',
            avatar: 'health-professionals'
          },
          {
            name: 'Front Desk Receptionists',
            avatar: 'front-desk-receptionists'
          },
          {
            name: 'Inventory Manager',
            avatar: 'inventory-manager'
          },
          {
            name: 'Medical Technologists',
            avatar: 'medical-technologist'
          },
          {
            name: 'Cashier & Billing Staff',
            avatar: 'cashier-billing-staff'
          },
          {
            name: 'Clinic Administrators',
            avatar: 'clinic-administrators'
          }
        ]
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

  .add-spacing {
    padding-top: 32px;
  }

</style>
