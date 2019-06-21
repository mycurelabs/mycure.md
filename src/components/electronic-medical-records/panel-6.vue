<template lang="pug">
  //-TODO: Confirm if we are reverting back to the old product card
  div(style="padding-top: 80px")#emrproduct
    div(v-if="!$isMobile").transparent#panel6
      v-container
        //- v-flex(xs12 md12)
        //-   br
        //-   v-layout(row wrap)
        //-     v-flex(xs12 md6).px-2
        //-       center
        //-         div(style="width: 75%").right
        //-           img(width="80%" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-me-standalone.png" alt="MYCURE Standalone")
        //-           v-card(style="margin-top: -2%" width="80%" height="450px").clinic-card.text-xs-left.pa-4
        //-             p.pb-2.font-small {{ standalone_title }}
        //-             template(v-for="(feature,index) in standaloneFeatures")
        //-               v-layout(row)
        //-                 span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small &#10003 &nbsp  
        //-                 span(v-if="index === 2").font-small.ml-2 {{ feature }} &nbsp; &nbsp;
        //-                   img(height="25px" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-icon-google-drive.png")
        //-                   img(height="25px" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-icon-drop-box.png").pl-3    
        //-                 span(v-else :class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small {{ feature }}
        //-             div(style="position: absolute; bottom: 30px;")
        //-               v-btn(
        //-                 disabled
        //-                 large
        //-               ) 
        //-                 strong.font-small.font-mc-grey.text-none Coming Soon!
        //-     v-flex(xs12 md6).px-2
        //-       center
        //-         div(style="width: 75%").left
        //-           img(width="80%" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-cloud.png" alt="MYCURE Cloud")
        //-           v-card(style="margin-top: -2%" width="80%" height="450px").clinic-card.text-xs-left.pa-4
        //-             p.pb-2.font-small {{ cloud_title }}
        //-             template(v-for="(feature,index) in cloudFeatures") 
        //-               v-layout(row)
        //-                 span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small &#10003 &nbsp
        //-                 span(v-if="index === 2") &nbsp; &nbsp; &nbsp; &nbsp;
        //-                 span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small {{ feature }}
        //-             div(style="position: absolute; bottom: 30px;")
        //-               v-btn(
        //-                 id="emr-signup-btn"
        //-                 :href="`${siginURL}/signup/private/step-1`"
        //-                 style="background-color: #18c551; color: white; width: auto" 
        //-                 large
        //-               ) 
        //-                 strong.white--text.text-none.font-small Sign Up Now
        v-flex(xs12 md12)
          br
          v-layout(row justify-center)
            v-card(height="508px" width="80%" flat).elevation-10.image-rounded-corner
              v-layout(row justify-center)
                v-flex(xs5)
                  img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-private.png" alt="Private clinic pricing")
                v-flex(xs8).text-xs-left.pa-5
                  strong(style="font-size: 30px").pb-2 For Private Practice
                  br
                  br
                  span.font-small Know some of the other features specifically designed for private practitioners running their clinic alone or collaborating with other private practitioners.
                  br
                  br
                  v-layout(row v-for="(feature,index) in privateFeatures" :key="index")
                    span.font-small &#10003 &nbsp 
                    span.font-small {{ feature }}
                    br
                  v-layout(row wrap).py-4
                    v-btn(:href="`${siginURL}/signup/choose`" style="background-color: #18c551; color: white; width: auto" large).text-none
                      strong Sign Up Now
      panel6a(style="padding-top: 150px")
      filler(style="padding-top: 100px")
        span(slot="privateFiller").font-l Are you part of a group clinic?
        br
        span(slot="chatWindow" @click="toggleChat").pointer.font-l.font-mc-blue Ask us how it works.
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else).py-3.white
      //- div.white
      //-   img(width="100%" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-me-standalone.png" alt="MYCURE Standalone")
      //-   v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
      //-     p.pb-2.font-s {{ standalone_title }}
      //-     div(v-for="(feature,index) in standaloneFeatures" :key="index")
      //-       v-layout(row)
      //-         span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small &#10003; &nbsp;  
      //-         span(v-if="index === 2").font-small &nbsp; {{ feature }} &nbsp; &nbsp; 
      //-           img(height="25px" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-icon-google-drive.png")
      //-           img(height="25px" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-icon-drop-box.png").pl-3    
      //-         span(v-else :class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small {{ feature }}
      //-   v-layout(row wrap justify-center)
      //-     v-btn(
      //-       style="width: 80%; height: 60px"
      //-       disabled
      //-       large
      //-     ) 
      //-       strong.font-small.font-mc-grey.text-none Coming Soon!
      //- br
      //- br
      //- div.white
      //-   img(width="100%" src="@/assets/images/mycure-web-banner-fifth-panel-private-clinic-mycure-cloud.png" alt="MYCURE Cloud")
      //-   v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
      //-     p.pb-2.font-s {{ cloud_title }}
      //-     div(v-for="(feature,index) in cloudFeatures" :key="index")
      //-       v-layout(row)
      //-         span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small &#10003 &nbsp
      //-         span(v-if="index === 2") &nbsp; &nbsp;
      //-         span(:class="index === 0 ? 'font-weight-bold' : 'font-weight-regular'").font-small {{ feature }}
      //-   v-layout(row justify-center)
      //-     v-btn(id="emr-signup-btn" style="background-color: #18c551; width: 80%; height: 60px")
      //-       a(:href="`${siginURL}/signup/private/step-1`")
      //-         strong.font-m.white--text.text-none Sign Up Now      
      //- br
      //- br
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png" alt="Private clinic pricing")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        p.pb-2.font-s {{ private_title }}
        div(v-for="(feature,index) in privateFeatures" :key="index")
          //- b(v-if="index === 0").font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center)
        v-btn(style="background-color: #18c551; width: 80%; height: 60px")
          a(:href="`${siginURL}/signup/choose`")
            strong.font-m.white--text.text-none Sign Up Now
</template>

<script>
  import panel6a from './panel-6a';
  import filler from '../commons/filler';

  export default {
    components: {
      panel6a,
      filler
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        // cloud_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        // standalone_title: 'Get access to the full features, completely independent system and designed for the physician’s personal clinic.',
        // cloudFeatures: [
        //   'It\'s FREE!',
        //   'Unlimited Clinics, infinite devices',
        //   'Store 100 patient profiles using MYCURE Cloud storage',
        //   'In-app purchases'
        // ],
        // standaloneFeatures: [
        //   'It’s FREE forever!',
        //   '1 Clinic per device',
        //   'Store unlimited patient profiles using your personal cloud',
        //   'In-app purchases'
        // ],
        
        privateFeatures: [
          'Store 100 patient profiles for free.',
          'You can connect to unlimited clinics.',
          'It has the complete product features.',
          'It has upgrades and In-app purchases.',
          'It can be accessed in any device using your login credentials.'
        ]
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Electronic Medical Records for Private Practice.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
    }
  };
</script>

<style scoped>
  #panel6 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  a:link {
    text-decoration: none
  }

  .price-card{
    border-radius: 0 10px 10px 0;
  }

  .image-rounded-corner {
    border-radius: 10px !important;
  }

  .pointer:hover {
    cursor: pointer;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>