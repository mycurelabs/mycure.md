<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-3
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).px-3
            strong.font-medium.font-mc-blue MYCURE for 
              br
              | Private Practice
            br
            br
            span.font-small.font-mc-grey A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
            br
            br
            div.pl-1
              v-btn(:href="`${siginURL}/signup/private/step-1`" color="#18c551" large right)
                strong.white--text.text-none Sign Up Now
          v-flex(xs12 md6).px-3
            img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-small.font-mc-grey 
              strong FEATURES INCLUDED
        br
        v-layout(row justify-center)
          v-flex(xs12 md4)
            v-list
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Unlimited clinics
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Unlimited devices
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small 50 patients per month
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Secretary account
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Queuing System
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Medical Billing
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small SOAP Charting
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Prescription
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Lab &amp Imaging orders
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Custom medical forms
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Print functions
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Bulk patient upload
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small SMS Feature
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Patient tagging
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Reports &amp Analytics
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small PNF Drug Catalog
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small ICD-10 List
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small DPA Registration Guide
        br
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span(style="font-size: 22px")
              strong Frequently Asked Questions
        br
        br
        v-layout(row)
          v-flex(xs12 md4).px-3 
            span.font-small 
              strong  Is the MYCURE Free version for doctors really always free?
              br
              br
              | 
              span.font-mc-grey Yes! Especially for fresh starters, we wanna make sure that you love our product first before you pay for it and use it full-time.
            br
            br
            br
            span.font-small 
              strong How secure is MYCURE?
              br
              br
              | 
              span.font-mc-grey MYCURE is DPA-compliant and follows international standards in data security. We use advanced encryption protocols to keep your patient records unreadable to anyone, except you. While we aren’t promising a 100% hack-proof system (since no such system exists yet!), we follow international standards that highly value confidentiality, integrity, and availability.
            br
            br
            br
            span.font-small 
              strong  Who else can see my patient records?
              br
              br
              | 
              span.font-mc-grey Only you. You are in control of your own account and the medical records you create. If you add a secretary into your account, you are entitling him/her to view your patient records, too.
            br
            br
            br
          v-flex(xs12 md4).px-3
            span.font-small 
              strong Do you have an account for secretaries and nurses?
              br
              br
              | 
              span.font-mc-grey Yes. You can learn more about the different features on our products page.
              br
              br
              br
              span.font-small 
              strong  Does my MYCURE account also come with a free device?
              br
              br
              | 
              span.font-mc-grey No. MYCURE only provides the web-based application. 
                br
                | That’s actually more practical (and less spending) for you! Most software that come with devices require you to be locked up to their expensive subscription plans for a certain period of time. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.
              br
              br
              br
              span.font-small 
              strong Is MYCURE cloud-based?
              br
              br
              | 
              span.font-mc-grey Yes. All your medical records are backed up in the cloud.
          v-flex(xs12 md4).px-3
            span.font-small 
              strong How fast should my internet connection be when I’m using MYCURE?
              br
              br
              | 
              span.font-mc-grey This varies on the number of users of the app. We encrypt and upload your records to our secure servers every time you process them. The download/upload speed should be at least:
                br
                br
                p.text-xs-center
                  | 5 Mbps → 1 to 3 simultaneous users
                  br
                  | 10 Mbps → 4 to 10 simultaneous users
                  br
                  | 15 Mbps and up → More than 10 users
    div(v-else)
      div.pt-3.px-3
        img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        p.font-small.text-xs-center A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
      div.px-3
        v-list
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Unlimited clinics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Unlimited devices
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small 50 patients per month
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Secretary account
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Queuing System
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Medical Billing
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small SOAP Charting
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Prescription
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Lab &amp Imaging orders
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Custom medical forms
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Print functions
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Bulk patient upload
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small SMS Feature
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Patient tagging
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Reports &amp Analytics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small PNF Drug Catalog
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small ICD-10 List
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small DPA Registration Guide
      div.py-3
        v-layout(justify-center)
          v-btn(:href="`${siginURL}/signup/private/step-1`" color="info" large) 
            strong.text-none Sign Up Now
      br
      br
      br
      v-layout(row)
        v-flex(xs12 md4) 
          span(style="font-size: 22px")
            strong Frequently Asked Questions
      br
      br
      v-layout(row)
        v-flex(xs12).px-2
          span.font-small 
            strong  Is the MYCURE Free version for doctors really always free?
            br
            br
            | 
            span.font-mc-grey Yes! Especially for fresh starters, we wanna make sure that you love our product first before you pay for it and use it full-time.
          br
          br
          br
          span.font-small 
            strong How secure is MYCURE?
            br
            br
            | 
            span.font-mc-grey MYCURE is DPA-compliant and follows international standards in data security. We use advanced encryption protocols to keep your patient records unreadable to anyone, except you. While we aren’t promising a 100% hack-proof system (since no such system exists yet!), we follow international standards that highly value confidentiality, integrity, and availability.
          br
          br
          br
          span.font-small 
            strong  Who else can see my patient records?
            br
            br
            | 
            span.font-mc-grey Only you. You are in control of your own account and the medical records you create. If you add a secretary into your account, you are entitling him/her to view your patient records, too.
          br
          br
          br
          span.font-small 
            strong Do you have an account for secretaries and nurses?
            br
            br
            | 
            span.font-mc-grey Yes. You can learn more about the different features on our products page.
            br
            br
            br
            span.font-small 
            strong  Does my MYCURE account also come with a free device?
            br
            br
            | 
            span.font-mc-grey No. MYCURE only provides the web-based application. 
              br
              | That’s actually more practical (and less spending) for you! Most software that come with devices require you to be locked up to their expensive subscription plans for a certain period of time. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.
            br
            br
            br
            span.font-small 
            strong Is MYCURE cloud-based?
            br
            br
            | 
            span.font-mc-grey Yes. All your medical records are backed up in the cloud.
          span.font-small 
            strong How fast should my internet connection be when I’m using MYCURE?
            br
            br
            | 
            span.font-mc-grey This varies on the number of users of the app. We encrypt and upload your records to our secure servers every time you process them. The download/upload speed should be at least:
              br
              br
              p.text-xs-center
                | 5 Mbps → 1 to 3 simultaneous users
                br
                | 10 Mbps → 4 to 10 simultaneous users
                br
                | 15 Mbps and up → More than 10 users
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  br{
    line-height: 150%;
  }
</style>
