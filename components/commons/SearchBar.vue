<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="10")
        v-toolbar(height="84").toolbar
          div.d-flex.mt-2.justify-space-between
            div
              v-toolbar-title.font-14.ml-4 Services
                v-text-field(
                  placeholder="Consultation (Virtual)"
                ).font-14
            div
              v-toolbar-title.font-14.ml-4 HMO Providers
                v-text-field(
                  placeholder="All Coverage"
                ).font-14
            div
              v-toolbar-title.font-14.ml-4 Date
                v-text-field(
                  placeholder="Add Dates"
                ).font-14
            div
              v-toolbar-title.font-14.ml-4 Location
                v-text-field(
                  placeholder="Anywhere"
                ).font-14
          v-spacer
          v-btn(
            depressed
            large
            rounded
            color="primary"
          ) #[b Search Now]
</template>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  opacity: 0.8;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}
</style>
