<template lang="pug">
  //- Section 5 of Home Page
  div.mc-light-grey.px-5
    v-container
      v-layout(row wrap justify-center)
        strong.align-center.font-m.pa-5 Is this you right now?
        v-layout(row wrap justify-center)
          v-flex(xs12 md2).mx-1
            div.problem-pic.red 
            h3.text-center The admin with a headache
            | Telling the biggest problem of the great clinic admin in 158 characters
          v-flex(xs12 md2).mx-1
            div.problem-pic.orange
            h3.text-center The empty pocket techie doctor
            | Telling the biggest problem of the great clinic admin in 158 characters
          v-flex(xs12 md2).mx-1
            div.problem-pic.lime
            h3.text-center The admin in a rollercoaster ride
            | Telling the biggest problem of the great clinic admin in 158 characters
          v-flex(xs12 md2).mx-1
            div.problem-pic.purple
            h3.text-center The bill chasing clinic owner
            | Telling the biggest problem of the great clinic admin in 158 characters
          v-flex(xs12 md2).mx-1
            div.problem-pic.pink
            h3.text-center The daydreamer doctor
            | Telling the biggest problem of the great clinic admin in 158 characters
        v-layout(row wrap justify-center).pt-5
          v-btn(
            color="info"
            large
            ) 
            b.text-none.font-s We got a solution
      p.text-xs-center.font-xs.py-4 Have questions? Give us a call: 
        strong (+63) 699 - 7272
</template>

<style scoped>

.problem-pic {
  height: 150px;
}

</style>
