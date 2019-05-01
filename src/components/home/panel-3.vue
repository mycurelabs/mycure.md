<template lang="pug">
  //- Section 3 of Home Page
  div.silver.px-5
    v-container.px-5
      v-layout(row wrap justify-center)
        h2.pa-5 Is your current clinic system stopping you and your clinic from progress?
        v-layout(row wrap justify-center).mx-5
          v-flex(xs4)
            ul
              li Is your clinic system already outdated and lack reliablity?
              br
              li Is your clinic system providing accurate, real-time data?
              br
              li Is your clinic system already outdated and lack reliability?
              br
          v-flex(xs4)
            ul
              li Is your clinic system hard to maintain?
              br
              br
              li Is your clinic system help you in Data Privary Issues?
              br
              li Is your clinic system working perfectly even without WiFi?
              br
        v-layout(row wrap justify-center)
          v-btn(
          color="info"
          large
          ) 
            strong We got a solution
      p.text-xs-center.py-4 Have questions? Give us a call: (+63) 699 - 7272
</template>
