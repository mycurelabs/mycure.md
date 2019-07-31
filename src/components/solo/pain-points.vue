
<template lang="pug">
  div
    div(v-if="!$isMobile").topSpacing
      v-container
        v-layout(row justify-center).pb-5
          h2.font-30.text-xs-center  Common Pain Points in Choosing 
            br
            | an Electronic Medical Records (EMR) System
        v-layout(row justify-center)
          img(
            width="70%" 
            src="@/assets/images/mycure-solo-health-doctor-pain-points-header.png" 
            alt="Solo Pain Points"
          )
        v-layout(row).pt-5
          v-flex(xs6).pr-5
            v-card
              v-toolbar(flat color="#9da0a6")
                v-toolbar-title
                  h3.white--text Concerns on a Standalone EMR
              v-list(two-line v-for="(item, key) in emr" :key="key")
                v-list-tile
                  v-list-tile-avatar
                    img(:src="require(`@/assets/images/${ item.image }`)")
                  v-list-tile-content
                    v-list-tile-title
                      span.font-16 {{ item.content }}
                v-divider(inset)
          v-flex(xs6).pl-5
            v-card
              v-toolbar(flat color="#9da0a6")
                v-toolbar-title
                  h3.white--text Concerns on a Cloud-Based EMR
              v-list(two-line v-for="(item, key) in cloud" :key="key")
                v-list-tile
                  v-list-tile-avatar
                    img(:src="require(`@/assets/images/${ item.image }`)")
                  v-list-tile-content
                    v-list-tile-title
                      span.font-16 {{ item.content }}
                v-divider(inset)
    div(v-else)
      v-container
        v-layout(row justify-center).pb-4
          h2.font-30.text-xs-center  Choosing an 
            br 
            | Electronic Medical
            br
            | Records (EMR) System
        v-layout(row justify-center)
          img(
            width="60%" 
            src="@/assets/images/mycure-solo-health-doctor-pain-points-header-mobile.png" 
            alt="Solo Pain Points"
          )
        v-layout(column justify-center).pt-3
          v-flex(xs12)
            v-card
              v-toolbar(flat color="#9da0a6")
                v-toolbar-title
                  h5.font-24.white--text Concerns on a Standalone EMR
              v-list(two-line v-for="(item, key) in emr" :key="key")
                v-list-tile
                  v-list-tile-avatar
                    img(:src="require(`@/assets/images/${ item.image }`)")
                  v-list-tile-content
                    v-list-tile-title
                      span.font-12 {{ item.content }}
                v-divider(inset)
          v-flex(xs12).pt-4
            v-card
              v-toolbar(flat color="#9da0a6")
                v-toolbar-title
                  h5.font-24.white--text Concerns on a Cloud-Based EMR
              v-list(two-line v-for="(item, key) in cloud" :key="key")
                v-list-tile
                  v-list-tile-avatar
                    img(:src="require(`@/assets/images/${ item.image }`)")
                  v-list-tile-content
                    v-list-tile-title
                      span.font-12 {{ item.content }}
                v-divider(inset)
</template>

<script>
  export default {
    data () {
      return {
        emr: [
          {
            image: 'mycure-ic-question.png',
            content: 'I can\'t access my data outside the clinic!'
          },
          {
            image: 'mycure-ic-question.png',
            content: 'How do I backup my data?'
          },
          {
            image: 'mycure-ic-question.png',
            content: 'License fee is costly!'
          },
        ],
        cloud: [
          {
            image: 'mycure-ic-question.png',
            content: 'How can I access when the internet is down?'
          },
          {
            image: 'mycure-ic-question.png',
            content: 'Do I have 100% control of my data?'
          },
          {
            image: 'mycure-ic-question.png',
            content: 'Monthly subscription fee is costly!'
          },
        ]
      };
    }
  };
</script>

<style scoped>
  .topSpacing {
    padding-top: 100px;
  }
</style>
