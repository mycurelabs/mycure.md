<template lang="pug">
  div(v-if="!loading")#top
    div.header.mb-5
      v-container
        v-row(align="center" :class="headerClasses")
          v-col(cols="12")
            h1.font-60.text-center Terms and Conditions
    div.content
      v-container
        v-row(justify="center")
          v-col(cols="12" md="10").mb-3
            strong.font-18 Updated: July 02, 2020
            br
            br
            p These&nbsp;
              b Terms and Conditions&nbsp;
              | ("Terms", "Terms and Conditions") govern your relationship with&nbsp;
              strong.primary--text www.mycure.md&nbsp;
              | website and&nbsp;
              strong.primary--text MYCURE&nbsp;
              | mobile application (the "Service") operated by&nbsp;
              strong.primary--text MYCURE, Inc.&nbsp;
              | - USA and Team O.P.S. Inc. - Philippines ("us", "we", or "our").
            p Please read these Terms and Conditions carefully before using our website and&nbsp;
              strong.primary--text MYCURE&nbsp;
              | mobile application (the "Service").
            p Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            p By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          v-col(cols="12" md="10").mb-3
            h2 Character, Trust and Integrity
            br
            p MYCURE values Character, Trust, and Integrity. These are values  very  important to the Founders, thus were brought about and integrated in MYCURE’s Culture!
          v-col(cols="12" md="10").mb-3
            v-row
              v-col(cols="12" md="6").px-3
                span.font-21 TRUST AND INTEGRITY
                br
                br
                p We are looking forward to your entrusting to MYCURE your personal data. We know how important this is to you. Our tech team has established standard security protocols (and more) to keep your data safe. But does this mean we are 100% hack-proof? Well, we want to be. But let’s admit it, even the world’s biggest banks and government institutions are not. Rest assured, however, that we have set up our backend infrastructure to protect your data and continue to work on it constantly.
                p Personal data like name, photos, phone numbers and email address are yours and yours alone. We are committed to not selling these types of data to third parties. But we are sure you understand that in the interest of science and for the potential to save more lives in the future, MYCURE may have partnerships with hospitals, universities, and health organizations. In other words, records like diseases, types of medicine used, general location and anything that would help medical practitioners for research purposes and other endeavors that will make better medical decisions - as long as it does not directly identify you - could possibly be shared to make our world a better place.&nbsp;
                nuxt-link(:to="{name: 'privacy-policy'}" title="MYCURE Privacy Policy").primary--text See also MYCURE Privacy Policy >>&nbsp;
              v-col(cols="12" md="6").px-3
                span.font-21 CHARACTER
                br
                br
                p Please be nice! We worked hard to put this application together and spent many long hours and sleepless nights (we still do as we keep on improving and adding more features!). So please do not copy, share or modify MYCURE copyrights, trademarks, and patents for distribution to others. Should you have an idea or want to improve our services, please feel free to contact us at hello@mycure.md.
                p Please do not try and hack (what is hacking? See ‘Use License’ below to know what we mean) MYCURE’s website or its apps.  Let us respect each other’s space, please, thank you!
                p For Doctors App: This is strictly exclusive for Licensed Medical Doctors only.
                p For Patients App: Please do not lie about your age. Considering the sensitivity of medical data, we are only allowing users 18 years of age (or whatever is the legal age in your country) and above. Should you want to enroll a child then it can be done by using your name and registering him/her under you. We also understand that you would need to keep and monitor records of your children.
          v-col(cols="12" md="10").mb-3
            img(width="100%" src="../../assets/images/mycure-terms-and-conditions-artwork.png" alt="MYCURE Terms and Conditions")
          v-col(cols="12" md="10").mb-3
            h2 Subscription
            br
            p Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
            p At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or MYCURE, Inc. cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting MYCURE, Inc. customer support team.
            p A valid payment method, including a credit card, is required to process the payment for your Subscription. You shall provide MYCURE, Inc. with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize MYCURE, Inc. to charge all Subscription fees incurred through your account to any such payment instruments.
            p Should automatic billing fail to occur for any reason, MYCURE, Inc. will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.
          v-col(cols="12" md="10").mb-3
            h2 Free Trial
            br
            p MYCURE, Inc. may, at its sole discretion, offer a Subscription with a free trial for a limited period of time ("Free Trial").
            p You may be required to enter your billing information in order to sign up for the Free Trial.
            p If you do enter your billing information when signing up for the Free Trial, you will not be charged by MYCURE, Inc. until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
            p At any time and without notice, MYCURE, Inc. reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.
          v-col(cols="12" md="10").mb-3
            h2 Fee Charges
            br
            p MYCURE, Inc., in its sole discretion and at any time, may modify the Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
            p MYCURE, Inc. will provide you with a reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
            p Your continued use of the Service after the Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
          v-col(cols="12" md="10").mb-3
            h2 Use License
            br
            p Permission is granted to temporarily download a copy of the mobile app, use of the web app and other MYCURE products, whichever you subscribed to. This is the grant of a license, not a transfer of title, which is non-exclusive and non-assignable, and under this license you may not:
            ul
              li modify or copy the materials;
              li use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              li attempt to decompile or reverse engineer;
              li remove any copyright or other proprietary notations from the materials; or
              li transfer the materials to another person or "mirror" the materials on any other server.
            br
            p This license shall automatically terminate if you violate any of these restrictions and may be terminated by MYCURE at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          v-col(cols="12" md="10").mb-3
            h2 Refunds
            br
            p Certain refund requests for Subscriptions may be considered by MYCURE, Inc. on a case-by-case basis and granted in the sole discretion of MYCURE, Inc.
          v-col(cols="12" md="10").mb-3
            h2 Your Content
            br
            p Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
            p By posting Content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
            p You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
          v-col(cols="12" md="10").mb-3
            h2 MYCURE Contents, Revisions, and Errata
            br
            p The materials appearing on MYCURE apps could include technical, typographical, or photographic errors. MYCURE does not warrant that any of the materials on its apps are accurate, complete, or current. MYCURE may make changes to the materials contained on its apps at any time without notice. MYCURE does not make any commitment to update the materials (but of course, we will do our best to have the latest updates!).
            p Some contents like medicines, symptoms, and diagnoses are referenced and/or sourced from publicly available data, thus presumed to be general information. In case of proprietary or copyrighted information, please see our Copyright Policy below.
          v-col(cols="12" md="10").mb-3
            h2 Copyright Policy
            br
            p We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement ("Infringement") of any person.
            p If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" of mark@mycure.md and include in your notice a detailed description of the alleged Infringement.
            p You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.
          v-col(cols="12" md="10").mb-3
            h2 Accounts
            br
            p When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            p Your account may have access to Protected Health Information (PHI). As such, you should be aware of the data privacy laws that apply in your country (see Data Privacy Compliance below). These laws call for higher security protocols covering, but not limited to, physical, administrative and technical safeguards. You are responsible for its compliance and that your Service’s account is protected at all times.
            p You are likewise responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            p You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            p You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
          v-col(cols="12" md="10").mb-3
            h2 Data Privacy Compliance
            br
            p Your data may be processed in the country in which it was collected and in other countries where laws regarding processing of personal data may be less stringent than the laws in your country.  It is your responsibility to determine what applicable laws and data privacy policies are required of you and/or your health facility to be compliant.
            p We take data privacy seriously. We constantly improve our Service to comply with the US Health Insurance Portability and Accountability Act (HIPAA) and the Data Privacy Act (DPA) of the Philippines. While MYCURE adheres to the aforementioned policies and provides a secure  application for the storage and processing of Protected Health Information (PHI), you are responsible for ensuring that the rest of the necessary processes are also implemented according to your country’s data privacy requirements. Likewise, if the said laws require more than what are covered in HIPAA and DPA, please do not use this Service.
          v-col(cols="12" md="10").mb-3
            h2 Business Associate Agreement
            br
            p If you fall under Covered Entity (CE) or Personal Information Controller (PIC) under HIPAA or DPA, you agree to adhere to the Business Associate Agreement (BAA) with MYCURE. The BAA can be found in the Settings page of your MYCURE’s Dashboard. You will also be notified during the sign up process.
          v-col(cols="12" md="10").mb-3
            h2 Intellectual Property
            br
            p The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of MYCURE, Inc. and its licensors. The Service is protected by copyright, trademark, and other laws in the USA, Philippines and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MYCURE, Inc.
          v-col(cols="12" md="10").mb-3
            h2 Links To Other Websites
            br
            p Our Service may contain links to third-party web sites or services that are not owned or controlled by MYCURE, Inc.
            p MYCURE, Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that MYCURE, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            p We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
          v-col(cols="12" md="10").mb-3
            h2 Termination
            br
            p We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            p Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
          v-col(cols="12" md="10").mb-3
            h2 Limitation Of Liability
            br
            p In no event shall MYCURE, Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            p You cannot recover any damages related to your use of MYCURE. This includes any punitive, exemplary, indirect, incidental, special or consequential damages, whether foreseeable or unforeseeable.
            p By accepting the terms of this agreement you agree and understand you will submit to arbitration with MYCURE should any unforeseen conflict arise. You also agree and understand you will not initiate or be a party to any class action legal proceeding.
          v-col(cols="12" md="10").mb-3
            h2 Indemnification
            br
            p You hereby agree to indemnify MYCURE against any losses, damages, costs, liabilities, legal expenses and other expenses incurred or suffered by us arising out of any breach by you of any provision of these Terms or arising out of any claim that you have breached any provision of these Terms.
          v-col(cols="12" md="10").mb-3
            h2 Disclaimer
            br
            p Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance. &nbsp;
            p Your use of and/or reliance upon the application and any third party content and service is at your own risk and discretion. Further, MYCURE does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its apps or otherwise relating to such materials.
            p MYCURE, Inc. its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          v-col(cols="12" md="10").mb-3
            h2 Governing Law
            br
            p These Terms shall be governed and construed in accordance with the laws of the Philippines, without regard to its conflict of law provisions.
            p Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
          v-col(cols="12" md="10").mb-3
            h2 Changes
            br
            p We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30-day notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            p By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          v-col(cols="12" md="10").mb-3
            h2 Contact Us
            br
            p If you have any questions about these Terms, please contact us.
              a
                strong(@click="toggleChat").font-18.toggle-chat.text-none.primary--text &nbsp; please contact us.
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';

export default {
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    headerClasses () {
      return [{ 'header-container': !this.$isMobile }];
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Terms and Conditions',
      description: 'Learn more about our Terms and Conditions so you can maximize using MYCURE Clinic Management System in your practice. Last updated: February 21, 2018.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE_Open_Graph_Images_Terms_and_Conditions.png?alt=media&token=3884660e-7f81-4586-9dc6-c500991e0b03',
    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
}
p {
  text-align: justify;
  font-size: 18px;
}

h2 {
  font-size: 26px;
}

ul li {
  font-size: 18px;
}

a:link {
  text-decoration: none
}

.header {
  background-image: url('../../assets/images/mycure-clinic-background-legal.png');
  background-position: center center;
  background-size: cover;
}

.header-container {
  height: 300px;
}
</style>
