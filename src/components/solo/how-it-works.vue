<template lang="pug">
  div
    div.topSpacing
      v-container
        v-layout(v-if="!$isMobile" row justify-center)
          h2.font-30.text-xs-center SOLO is FREE. SOLO Works offline.
            br
            | SOLO Even Backs Up Data in Personal Cloud.
        div(v-else justify-center)
          p.font-weight-bold.font-30.text-xs-center SOLO is FREE. 
          p.font-weight-bold.font-30.text-xs-center SOLO Works offline.
          p.font-weight-bold.font-30.text-xs-center SOLO Even Backs Up Data in Personal Cloud.
        v-layout(row justify-center).pt-5
          img(
            v-if="!$isMobile"
            width="70%" 
            src="@/assets/images/mycure-solo-health-comparison-solo.png" 
            alt="Solo Pain Points"
          )
          img(
            v-else
            width="100%" 
            src="@/assets/images/mycure-solo-health-comparison-solo.png" 
            alt="Solo Pain Points"
          ) 
        h3(v-if="!$isMobile").text-xs-center.font-30.topSpacing.pb-5 SOLO by MYCURE is coming soon.
          br
          |  
          router-link(:to="{name:'solo-early-access'}").visit Get early access today
        h3(v-else).text-xs-center.font-28.topSpacing.pb-5 SOLO by MYCURE is coming soon.
          br
          |  
          router-link(:to="{name:'solo-early-access'}").visit Get early access today        
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
  .topSpacing {
    padding-top: 100px;
  }

  .visit {
    text-decoration: none;
  }
</style>

