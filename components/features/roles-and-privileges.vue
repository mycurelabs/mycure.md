<template lang="pug">
  div
    div(v-if="!$isMobile").pt-10
      v-container
        v-row(justify="center").text-center
          strong.font-21.primary--text ROLES &amp; PRIVILEGES
        v-row(justify="center").add-spacing.text-center
          strong.font-40.font-work-sans Everybody's got a special&nbsp;
            br
            | role to play.
        v-row(justify="center").add-spacing
          v-col(cols="7" align-self="center").text-center
            span.font-21 Collaborate with your clinic staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        v-row(align="start").add-spacing
          v-col(v-for="(role,index) in roles" :key="index" cols="12" md="2" justify="center").text-center
            img(:src="require(`~/assets/images/features//mycure-web-features-role-${ role.avatar }.png`)" :alt="role.name" height="250px")
            br
            div.mx-1
              span.font-18 {{ role.name }}
    div(v-else).pt-10.mt-10.mobile-container
      v-container
        v-row(justify="center")
          strong.font-16.primary--text ROLES &amp; PRIVILEGES
        br
        br
        v-row(justify="center")
          v-col(cols="12")
            p.font-weight-bold.font-30.text-center.lh-title.font-work-sans Everybody's got a special role to play.
          br
          v-col(cols="12")
            p.font-18.text-center Collaborate with your clinic staff more efficiently using a clinic system that's so user-friendly, you wouldn't even feel that you're working.
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        br
        br
        v-row(justify="center")
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
              div.text-center.mx-5
                img(:src="require(`~/assets/images/features/mycure-web-features-role-${ role.avatar }.png`)" :alt="role.name" height="300px")
                br
                v-row(justify="center")
                  v-flex(xs1)
                    span.font-18 {{ role.name }}
</template>

<script>
export default {
  data () {
    this.roles = [
      { name: 'Health Professionals', avatar: 'health-professionals' },
      { name: 'Front Desk Receptionists', avatar: 'front-desk-receptionists' },
      { name: 'Inventory Manager', avatar: 'inventory-manager' },
      { name: 'Medical Technologists', avatar: 'medical-technologist' },
      { name: 'Cashier and Billing Staff', avatar: 'cashier-billing-staff' },
      { name: 'Clinic Administrators', avatar: 'clinic-administrators' },
    ];
    return {};
  },
};
</script>

<style scoped>

.mobile-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.add-spacing {
  padding-top: 32px;
}
</style>
