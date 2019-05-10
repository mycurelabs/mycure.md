<template lang="pug">
  //- Section 4 of Home Page
  div.px-5
    v-container
      v-flex(xs12 md12)
          v-layout(row wrap justify-center)
            strong(style="font-size: 25px").pa-5 Does your clinic have more than 3 branches? 
              a(
                href="https://mycure.md"
              )
               span Talk to us for custom pricing.
</template>

<style scoped>

a {
  color: #2e9fdf
}

</style>
