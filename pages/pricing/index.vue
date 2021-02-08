<template lang="pug">
  div
    v-container(v-if="!loading" :class="{ 'main-container' : !$isMobile, 'mobile-container' : $isMobile }")
      v-row(justify="center" align="center")
        v-col(cols="12").py-10.mb-10.text-center
          h1(:class="titleClasses").mb-2 Start for free, then pay as you grow
          p We got you from your first sale to full scale
          v-btn(
            x-large
            color="primary"
            rounded
            :to="{ name: 'signup-health-facilities' }"
          ).font-weight-bold.text-none Start free today
        v-col(cols="12" md="10").mb-10
          table(width="100%")
            tr
              td(width="33%")
              td(width="33%")#free-container.text-center
                div
                  h2(:class=" !$isMobile ? 'font-30' : 'font-20' ") LITE
                  p.font-14 #[b Free]
                  p(v-if="!$isMobile").font-14 All the essential tools you need to run your health facility
              td(width="33%")#paid-container.primary.text-center
                div.white--text
                  h2(:class=" !$isMobile ? 'font-30' : 'font-20' ") PRO
                  p.font-14 #[b Pay as you grow]
                  p(v-if="!$isMobile").font-14 Only pay for what you use on top of the free plan
            tr(:class="{ 'font-12' : $isMobile }")
              td(width="33%").styled-td #[span.font-weight-bold.primary--text Products]
              td(width="33%" valign="bottom" ).styled-td.text-center
                h1 #[span(:class="!$isMobile ? 'font-12' : 'font-10'") $]0
              td(width="33%" valign="bottom").styled-td.text-center
                h3 Starts at
                h1 #[span(:class="!$isMobile ? 'font-12' : 'font-10'") $]4#[span(:class="!$isMobile ? 'font-12' : 'font-10'") /mo]
            template(v-for="(row, index) in rows")
              tr(:class="{ 'font-12' : $isMobile }")
                td.styled-td #[span.font-weight-bold.mr-2 {{row.item}}]
                  v-tooltip(show right)
                    template(v-slot:activator="{ on, attrs }")
                      span #[v-icon(v-on="on" small color="primary") {{row.iconToolTip}}]
                    span {{row.toolTipContent}}
                td(:style="{ 'background-color': (index % 2 === 1) ? '' : '#f0f0f0' }").styled-td.text-center
                  template(v-if="isIcon(row.free)")
                    v-icon(
                      :class="{ 'success--text': getIconColor(row.free) === 'success', 'error--text': getIconColor(row.free) === 'error' }"
                      :size=" $isMobile ? '30' : '20' "
                    ) {{row.free}}
                  template(v-else)
                    span.font-weight-bold {{row.free}}
                td(:style="{ 'background-color': (index % 2 === 1) ? '' : '#f0f0f0' }").styled-td.text-center
                  template(v-if="isIcon(row.paid)")
                    v-icon(
                      :class="{ 'success--text': getIconColor(row.free) === 'success', 'error--text': getIconColor(row.free) === 'error' }"
                      :size=" $isMobile ? '30' : '20' "
                    ) {{row.paid}}
                  template(v-else)
                    span.font-weight-bold {{row.paid}}
            tr
              td(width="33%")
              td(width="33%" colspan="2")#start-free-free-container.text-center
                v-btn(
                  text
                  block
                  x-large
                  :to="{ name: 'signup-health-facilities' }"
                ).text-none.font-weight-bold.white--text Start free
    div(style="background-color: #CCEBF5")
      v-container
        v-row(justify="center")
          v-col(cols="12").text-center
            h1(:class="{ 'font-20' : $isMobile }") Enterprise-grade solutions for high volume #[br(v-if="!$isMobile")] operations and multi-branch health facilities
            br
            p(:class="{ 'font-14' : $isMobile }") Get a customized suite of healthcare modules to handle cross-functional #[br(v-if="!$isMobile")] operations across one or more health facilities that you mange
            v-btn(
              large
              color="primary"
              rounded
              to="/enterprise"
              target="_blank"
            ).text-none.font-weight-bold Learn more
    v-container
      v-row(justify="center")
        v-col(cols="12").text-center
          h1(:class="{ 'font-20' : $isMobile }") Frequently Asked Questions
        v-col(cols="12")
          v-expansion-panels(focusable)
            v-expansion-panel(v-for="(faq, key) in generalFaqs" :key="key")
              v-expansion-panel-header(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }").font-weight-medium  {{faq.question}}
              v-expansion-panel-content(v-if="!faq.isHTML" :class="{ 'font-12' : $isMobile }").mt-4 {{faq.answer}}
              v-expansion-panel-content(v-if="faq.isHTML" v-html="faq.answer" :class="{ 'font-12' : $isMobile }").mt-4
      v-row(justify="center").mb-10.pb-10.mt-10.pt-10
        div.need-more-container
          v-row(align="center" justify="center" :class="{ 'text-center' : $isMobile }")
            v-col(cols="1")
            v-col(cols="12" md="7" :class="{ 'pb-2' : $isMobile, 'mx-auto' : !$isMobile}").pa-10.grow
              h1(:class="{ 'font-20' : $isMobile }").grayText Get set up today and get more awesome stuff later!
              p(:class="{ 'font-14' : $isMobile }").mt-2.lightGrayText We got you from your first sale to full scale
            v-col(cols="12" md="4" :class="{ 'pt-4' : $isMobile}").pa-10.shrink.mx-auto
              v-btn(
                :x-large="!$isMobile"
                :large="$isMobile"
                rounded
                color="primary"
                :to="{ name: 'signup-health-facilities' }"
              ).font-weight-bold.text-none Start free today
                  p.font-16 Back to Home
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import { getCountry } from '~/utils/axios';
// components
import Money from '~/components/commons/Money';
export default {
  components: {
    Money,
  },
  data () {
    return {
      loading: true,
      userBase: true,
      unlimitedUser: false,
      show: false,
      rows: [
        {
          item: 'Health facility',
          free: '1',
          paid: '$5/health facility',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'A health facility is a place where patients can avail of healthcare services e.g. doctor’s clinics, group clinics, diagnostic centers, multispecialty clinics, medical centers, and hospitals.',
        },
        {
          item: 'Users',
          free: '2',
          paid: '$5/user',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'Total number of accounts that can log in to a health facility. Each health facility includes 2 free users.',
        },
        {
          item: 'Storage',
          free: '1 GB',
          paid: '$4/GB',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: '1GB is approximately 1,000 patient records.',
        },
        {
          item: 'Classic Website',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'Your health facility will have its own website where your patients can view your services and book appointments. Your website will also be listed in the MYCURE Directory for other patients to see.',
        },
        {
          item: 'Online booking',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'Patients can book clinic visits, teleconsults, or diagnostic tests through your website.',
        },
        {
          item: 'Online payments',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'Get paid using PayPal, credit/debit card, GCash, 7-Eleven, and Cebuana Lhuillier.',
        },
        {
          item: 'Pay later',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
          iconToolTip: 'mdi-help-circle',
          toolTipContent: 'Allow your patients to pay in cash after the service has been completed.',
        },
        {
          item: 'Patient Registration',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Electronic Medical Records (EMR)',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Telehealth Consultations',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Daily Census',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Sales Reports',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Laboratory',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Imaging',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Physical Medical Exam',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Materials Management',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Pharmacy',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Dental',
          free: 'mdi-close',
          paid: '$18/mo',
        },
        {
          item: 'Syncbase',
          free: 'mdi-close',
          paid: '$18/mo',
        },
      ],
      generalFaqs: [
        {
          question: 'How do I know which plan is right for me?',
          answer: '<div class="v-expansion-panel-content__wrap"> <div><h3> > Free plan</h3> If you just need a simple booking site, basic EMR, telehealth, and billing tools without needing any support from an IT specialist, our free plan is the perfect start to getting digital. At most two (2) users can access it and it works for any type of health facility: doctor’s clinic, group clinics, diagnostic centers, multispecialty clinics, health centers, and hospitals.</div> <br> <div> <h3> > Pay as you grow</h3> If you want to start with advanced tools such as online diagnostic test results, inventory management, Syncbase online-offline technology, or if you just need more user seats or storage capacity, you can start subscribing to what’s most important to setup first. Our flexible app allows you to pay only for the resources that you consume, allowing you to scale with demand.</div> </div>',
          isHTML: true,
        },
        {
          question: 'Can I upgrade, downgrade, or cancel at any time? ',
          answer: 'Absolutely! Yes, you can upgrade, downgrade, or cancel at any time. Note that we don\'t provide prorated refunds for downgrades or cancellations. This means that if you downgrade or cancel before the end of your billing period, you still pay for the remainder of the month.',
        },
        {
          question: 'Is there a setup fee?',
          answer: '<div class="v-expansion-panel-content__wrap">There are no setup fees for any of our plans. Simply <strong><a style="text-decoration: none;" href="signup/health-facilities">Sign up for free</a> </strong> and you’re all set!</div>',
          isHTML: true,
        },
        {
          question: 'If the patient pays online, how do I encash it?',
          answer: 'You can get payments instantly if you set up your PayPal account. For other payment options (e.g. debit/credit card, GCash, 7-Eleven) they will go through a disbursement process with a minimum request of $50.',
        },
        {
          question: 'Is there a booking fee for patients?',
          answer: 'Yes, to ensure that your patients have an excellent healthcare booking experience, we charge them $1 convenience fee for every successful booking. This is placed on top of the total amount that they have to pay you.',
        },
        {
          question: 'What if I manage more than one health facility?',
          answer: '<div class="v-expansion-panel-content__wrap">You can subscribe for an additional facility account for $5 monthly. If you manage 10 or more health facilities, you may want to check out our <strong><a style="text-decoration: none;" href="/enterprise"> Enterprise plan</a> </strong> </div>.',
          isHTML: true,
        },
        {
          question: 'Do you have discounted plan bundles?',
          answer: '<div class="v-expansion-panel-content__wrap">Yes, we offer customized pricing with valuable discounts for health facility owners that qualify for our Enterprise plan.<strong><a style="text-decoration: none;" href="https://calendly.com/mycure/demo"> Let’s talk.</a> </strong> </div>',
          isHTML: true,
        },
      ],
    };
  },
  computed: {
    titleClasses () {
      return [this.$isMobile ? 'font-30' : ['font-36', 'lh-title']];
    },
  },
  mounted () {
    this.loading = false;
    this.disablePage();
  },
  methods: {
    isIcon (string) {
      return string?.startsWith('mdi');
    },
    getIconColor (string) {
      if (/check/gi.test(string)) {
        return 'success';
      }
      if (/close/gi.test(string)) {
        return 'error';
      }
    },
    async disablePage () {
      const country = await getCountry();
      if (country.country_code === 'PH') {
        this.$nuxt.$router.push('error');
      }
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Pricing',
      description: 'Start building your online health facility for free and then pay as you grow. We got you from your first sale to full scale',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Homepage.png'),
    });
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 100px;
}
.mobile-container{
  margin-top: 80px;
}
.v-card {
  border: 2px solid #1E88E5 !important;
}
.v-card__title {
  word-break: normal;
}
.user-base {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.pricing-active {
  box-shadow: 0px 5px #cecece;
}
.unlimited-user {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

table {
  border-collapse: collapse;
}

table, th, td {
  padding: 0px;
  /* border: 1px solid lightgrey; */
}

.styled-td {
  border: 2px solid lightgrey;
  padding: 14px;
}

#free-container {
  height: 150px;
  /* padding: 10px; */
  background-color: #F0f0f0;
  border-top-left-radius: 15px;
}

#paid-container {
  height: 150px;
  /* padding: 10px; */
  border-top-right-radius: 15px;
}

#start-free-free-container {
  padding: 10px;
  background-color: #0099cc;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

#start-free-paid-container {
  padding: 10px;
  border-bottom-right-radius: 15px;
}

.need-more-container {
  background-color: #f2f2f2;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
}

.grayText {
  color: #4D4D4D;
}

.lightGrayText {
  color: #777777;
}

.v-tooltip__content {
  color: #4D4D4D;
  background-color: #CCEBF5 !important;
  width: 350px !important;
  opacity: 1 !important;
}
</style>
