<template lang="pug">
  div.white
    v-container.pt-5
      v-row(align="center")
        v-col(cols="12").text-center
          h1.font-40.font-work-sans {{ faqsTitle }}
      v-row(v-if="!isMobile" justify="center").pt-5
        v-col(v-for="(column, key) in 2" :key="key" cols="12" md="6").font-source-sans
          template(v-for="(item, key) in faqsItems")
            div(v-if="key < 7 && column === 1")
              img(:src="require(`~/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
              strong.font-21 &nbsp;{{ item.question }}
              p.font-18.pl-1.pt-2 {{ item.answer }}
                span(v-if="key === 4") &nbsp;
                  router-link(:to="{name: 'features'}") features
                  | &nbsp; to view the other modules.
              br
            div(v-else-if="key < 12 && key > 6 && column === 2")
              img(:src="require(`~/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
              strong.font-21 &nbsp;{{ item.question }}
              p.font-18.pl-1.pt-2 {{ item.answer }}
              p(v-if="item.supplement" :class="{'pl-3' : !$isMobile}").font-18.pre-white-space {{ parseSupplement(item)}}
              br
      v-row(v-else justify="center").pt-5
        v-col(cols="12" md="9")
          div(
            v-for="(item, key) in faqsItems"
            :key="key"
          ).font-source-sans
            img(:src="require(`~/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
            strong.font-21 &nbsp;{{ item.question }}
            p.font-21.pl-1.pt-2 {{ item.answer }}
              span(v-if="key === 4") &nbsp;
                router-link(:to="{name: 'features'}") features
                | &nbsp; to view the other modules.
            p(v-if="item.supplement" :class="{'pl-3' : !$isMobile}").font-21.pre-white-space {{ parseSupplement(item)}}
            br
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    this.questionMark = 'mycure-icon-question-mark';
    this.faqsTitle = 'Frequently Asked Questions (FAQs)';
    this.faqsImage = 'mycure-doctor-clinic-faqs';
    this.faqsItems = [
      {
        question: 'Is the MYCURE Free version for doctors really always free?',
        answer: 'Yes! Especially for fresh starters, we wanna make sure that you love our product first before you pay for it and use it full-time.',
      },
      {
        question: 'How free is free?',
        answer: 'You can create and store all types of records up to 1GB. Afterwards you can subscribe for higher storage capacity through our in-app purchases starting $4 a month.',
      },
      {
        question: 'What if I’m part of a group practice?',
        answer: 'You can invite other doctors to your virtual clinic, but each additional doctor to your clinic is an additional charge of $4.',
      },
      {
        question: 'What if I serve multiple clinics?',
        answer: 'Additional clinics are $5 but they automatically come with the same features as your original account!',
      },
      {
        question: 'Can I still get the other modules for my clinic?',
        answer: 'Sure! Just update your subscription under Accounts and upgrade to a premium subscription by subscribing to our other available modules! Check out our',
      },
      {
        question: 'Can I transfer my existing charts to MYCURE?',
        answer: 'Possibly! Chat with us now and ask our experts about it.',
      },
      {
        question: 'Am I required to pay for installation fees?',
        answer: 'No. You can set it up on your own!',
      },
      {
        question: 'Who else can see my patient records?',
        answer: 'Only you. You are in control of your own account and the medical records you create. If you add a secretary account into your clinic, you may allow him/her to view your patient records, too.',
      },
      {
        question: 'Do you have an account for secretaries and nurses?',
        answer: 'Yes. You can learn more about the different features on our features page.',
      },
      {
        question: 'Does my MYCURE account also come with a free device?',
        answer: 'No. MYCURE only provides the web-based application. That’s actually more practical (and less spending) for you! Most software products that come with devices require you to be locked up to their subscription plans for a certain time period. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.',
      },
      {
        question: 'Is MYCURE cloud-based?',
        answer: 'Yes. All your medical records are backed up in the cloud.',
      },
      {
        question: 'How fast should my internet connection be when I’m using MYCURE?',
        answer: 'This varies on the number of users of the app. We encrypt and upload your records to our secure servers every time you process them. The download/upload speed should be at least:',
        supplement: '• 10 Mbps → 1 to 3 simultaneous users • 15 Mbps → 4 to 10 simultaneous users • 20 Mbps and up → More than 10 users',
      },
    ];
    return {
      isMobile: true,
    };
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    parseSupplement (item) {
      const { supplement } = item;
      if (this.faqsItems.indexOf(item) === this.faqsItems.length - 1) {
        return parseTextWithNewLine(supplement, ['3 simultaneous users ', '10 simultaneous users ']);
      } else {
        return supplement;
      }
    },
  },
};
</script>
