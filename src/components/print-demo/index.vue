<template lang="pug">
  div.container
    div#print.row.pt-5
      div.col-xs-12.col-md-12
        div.media
          img(width="100" src="https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c_400x400.jpeg").mr-3
          div.media-body
            h5 Clinic Name
            p Address
            p Phone: Foo
        br
        table.table.table-bordered
          tr
            td Name: 
              strong Jofferson Tiquez
            td Sex: 
              strong Male
            td Date Performed: 
              strong 8/27/2017
            td Date Released: 
              strong 8/28/2017
          tr
            td Req. Physician: 
              strong Jofferson Ramirez Tiquez
            td Age: 
              strong 25
            td(colspan="2") HMO: 
              strong MAXICARE
        br
        h4(align="center") HEMATOLOGY
        table.table.table-bordered
          thead(style="background-color: #DEE2E6;")
            tr
              th Test Name
              th Result
              th Reference Value
          tbody
            tr
              td(style="padding-top: 2px; padding-bottom: 2px;") Joff
              td(style="padding-top: 2px; padding-bottom: 2px;") Tiquez
              td(style="padding-top: 2px; padding-bottom: 2px;") Tiquez
            tr
              td(style="padding-top: 2px; padding-bottom: 2px;") Foo
                ul.pl-2.list
                  li Bar
                  li Bar
                  li Bar
                  li Bar
              td(style="padding-top: 2px; padding-bottom: 2px;") 
                div(style="height: 20px;")
                ul.pl-2.list
                  li Bar
                  li Bar
                  li Bar
                  li Bar
              td(style="padding-top: 2px; padding-bottom: 2px;") Tiquez
      div.col-xs-12.col-md-12.fixed-bottom
        div.row
          div.col-xs-12.col-md-6.text-center
            strong Jofferson Ramirez Tiquez
            hr(style="padding:0; margin:0")
            span Medical Technologist
          div.col-xs-12.col-md-6.text-center
            strong Jofferson Ramirez Tiquez
            hr(style="padding:0; margin:0")
            span Pathologist



    div.row
      div.col-xs-12.col-md-12
        button(@click="print").btn.btn-primary Print
</template>

<script>
  export default {
    methods: {
      print() {
        this.$htmlToPaper('print');
      }
    }
  }
</script>

<style scoped>
  #print {
    /* display: none; */
  }
</style>
