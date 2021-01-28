<template lang="pug">
  v-container
    v-row(v-if="!$isMobile" justify="center" align="center")
      v-col(cols="10")
        v-toolbar(height="84").toolbar
          div.d-flex.mt-2.justify-space-between
            v-col(md="3")
              v-toolbar-title.font-14.ml-4 Services
                v-text-field(
                  placeholder="Consultation (Virtual)"
                ).font-14
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
              v-toolbar-title.font-14.ml-4 HMO Providers
                v-text-field(
                  placeholder="All Coverage"
                ).font-14
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
              v-toolbar-title.font-14.ml-4 Date
                v-text-field(
                  placeholder="Add Dates"
                ).font-14
            v-divider(inset vertical).mt-6.mb-8
            v-col(md="3")
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
    v-row(v-else justify="center" align="end")
      v-col(cols="12").pb-0
        v-text-field(
          solo
          clearable
          rounded
          color="white"
          placeholder="Search Services"
        ).bg-white
          template(v-slot:append)
            v-icon(color="primary").search-icon mdi-magnify
</template>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  opacity: 0.8;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}
</style>
