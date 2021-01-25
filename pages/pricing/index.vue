<template lang="pug">
  div
    v-container(v-if="!loading").main-container
      v-row(justify="center" align="center")
        v-col(cols="12").py-10.mb-10.text-center
          h1(:class="titleClasses").mb-2 Start for free, then pay as you grow.
          p We got you from your first sale to full scale.
          v-btn(
            x-large
            color="primary"
            rounded
          ).font-weight-bold.text-none Start free today
        v-col(cols="12").mb-10
          table(width="100%")
            tr
              td(width="33%")
              td(width="33%").text-center
                div#free-container
                  h2.mb-10 Free
                  p All the essential tools you need to run your health facility
              td(width="33%").text-center
                div#paid-container.primary
                  h2.mb-10.white--text Pay as you grow
                  p.white--text Only pay for what you use on top of the free plan
            tr
              td(width="33%").styled-td #[span.font-weight-bold Pricing]
              td(width="33%" valign="bottom").styled-td.text-center
                h1 #[span(style="font-size: 14px;") $]0
              td(width="33%" valign="bottom").styled-td.text-center
                h3 Starts at
                h1 #[span(style="font-size: 14px;") $]4#[span(style="font-size: 14px;") /mo]
            template(v-for="(row, index) in rows")
              tr
                td.styled-td #[span.font-weight-bold {{row.item}}]
                td(:style="{ 'background-color': (index % 2 === 1) ? '' : '#f0f0f0' }").styled-td.text-center
                  template(v-if="isIcon(row.free)")
                    v-icon(
                      :class="{ 'success--text': getIconColor(row.free) === 'success', 'error--text': getIconColor(row.free) === 'error' }"
                      size="30"
                    ) {{row.free}}
                  template(v-else)
                    span.font-weight-bold {{row.free}}
                td(:style="{ 'background-color': (index % 2 === 1) ? '' : '#f0f0f0' }").styled-td.text-center
                  template(v-if="isIcon(row.paid)")
                    v-icon(
                      :class="{ 'success--text': getIconColor(row.free) === 'success', 'error--text': getIconColor(row.free) === 'error' }"
                      size="30"
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
                ).text-none.font-weight-bold.white--text Start free
              //- td(width="33%")#start-free-paid-container.text-center.primary
                v-btn(
                  text
                  block
                  x-large
                ).text-none.font-weight-bold.white--text Start free
    div(style="background-color: #CCEBF5")
      v-container
        v-row(justify="center")
          v-col(cols="12").text-center
            h1 Enterprise-grade solutions for high volume #[br(v-if="!$isMobile")] operations and multi-branch health facilities.
            br
            p Get a customized suite of healthcare modules to handle cross-functional #[br(v-if="!$isMobile")] operations across one or more health facilities that you mange.
            v-btn(
              large
              color="primary"
              rounded
            ).text-none.font-weight-bold Learn more
    v-container
      v-row(justify="center")
        v-col(cols="12").text-center
          h1 FAQs
        v-col(cols="12" md="6")
          h2.primary--text General
          template(v-for="faq in generalFaqs")
            h4 {{faq.question}}
            p.text-justify {{faq.answer}}
            br
        v-col(cols="12" md="6")
          h2.primary--text Online
          template(v-for="faq in onlineFaqs")
            h4 {{faq.question}}
            p.text-justify {{faq.answer}}
            br
      v-row(justify="center").mb-10.pb-10
        div.need-more-container.elevation-2
          v-row(align="center")
            v-col.pa-10.grow
              h1 Setup your health facility now and get more awesome stuff later.
              p We got your from your first sale to full scale.
            v-col.pa-10.shrink
              v-btn(
                x-large
                rounded
                color="primary"
              ).font-weight-bold.text-none Start free today
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
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
      rows: [
        {
          item: 'Health facility',
          free: '1',
          paid: '$5/health facility',
        },
        {
          item: 'Users',
          free: '2',
          paid: '$5/user',
        },
        {
          item: 'Storage',
          free: '1 GB',
          paid: '$4/GB',
        },
        {
          item: 'Classic Website',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Online booking',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Online payments',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Pay later',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'Patient Registration',
          free: 'mdi-check-circle',
          paid: 'mdi-check-circle',
        },
        {
          item: 'EMR',
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
          question: 'Is there a setup fee?',
          answer: 'No. THere are no setup fees on any of our plans.',
        },
        {
          question: 'Do I need to enter my payment details to sign up?',
          answer: 'No. You can signup up and use MYCURE for 14 days without entering your payment details. At the end of your trial, or when you decide to launch your store, you will need to pick a plan and enter your payment details.',
        },
        {
          question: 'How long are your contracts?',
          answer: 'All MYCURE plans are month to month unless you sign up for an annual or biennial plan.',
        },
        {
          question: 'Do you offer any discounted plans?',
          answer: 'Yes, we offer a 10% discound on annual plans and a 20% discount on biennial plans, when they are paid upfront.',
        },
        {
          question: 'Can I change my plan later on?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time.',
        },
      ],
      onlineFaqs: [
        {
          question: 'Is there a setup fee?',
          answer: 'No. THere are no setup fees on any of our plans.',
        },
        {
          question: 'Do I need to enter my payment details to sign up?',
          answer: 'No. You can signup up and use MYCURE for 14 days without entering your payment details. At the end of your trial, or when you decide to launch your store, you will need to pick a plan and enter your payment details.',
        },
        {
          question: 'How long are your contracts?',
          answer: 'All MYCURE plans are month to month unless you sign up for an annual or biennial plan.',
        },
        {
          question: 'Do you offer any discounted plans?',
          answer: 'Yes, we offer a 10% discound on annual plans and a 20% discount on biennial plans, when they are paid upfront.',
        },
        {
          question: 'Can I change my plan later on?',
          answer: 'Absolutely! You can upgrade or downgrade your plan at any time.',
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
  },
  head () {
    return headMeta({
      title: 'MYCURE Pricing',
      description: 'MYCURE is a complete and affordable Clinic and Practice Management System that works for healthcare facilities of all shapes and sizes.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Homepage.png'),
    });
  },
};
</script>

<style scoped>
.main-container{
  margin-top: 100px;
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
  padding: 20px;
}

#free-container {
  height: 150px;
  padding: 10px;
  background-color: #F0f0f0;
  border-top-left-radius: 15px;
}

#paid-container {
  height: 150px;
  padding: 10px;
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
  border-radius: 10px;
}
</style>
