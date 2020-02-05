<template lang="pug">
  div.white
    v-container.pt-5
      v-layout(row align-center)
        v-flex(xs12 md12).text-xs-center
          h1.font-xl.font-work-sans {{ faqsTitle }}
      v-layout(row wrap justify-center).pt-5
        v-flex(xs12 md9)
          div(
            v-for="(item, key) in faqsItems"
            :key="key"
          ).font-source-sans
            img(:src="require(`@/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
            strong.font-18 &nbsp;{{ item.question }}
            p.font-21.pl-1 {{ item.answer }}
            p(v-if="item.supplement" :class="{'pl-3' : !$isMobile}").font-21.pre-white-space {{ parseSupplement(item)}}
            br
</template>

<script>
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      questionMark: 'mycure-icon-question-mark',
      faqsTitle: 'Frequently Asked Questions (FAQs)',
      faqsImage: 'mycure-doctor-clinic-faqs',
      faqsItems: [
        {
          question: 'Is the MYCURE Free version for doctors really always free?',
          answer: 'Yes! Especially for fresh starters, we wanna make sure that you love our product first before you pay for it and use it full-time.'
        },
        {
          question: 'How free is free for solo practice?',
          answer: 'You can create all types of records up to 1GB or about 100,000 patient profiles. Afterwards you can subscribe for higher storage starting from $18.99 a month.'
        },
        {
          question: 'Do you have a plan for 2 doctors only?',
          answer: 'Two or more doctors fall under group practice.'
        },
        {
          question: 'Can I transfer my existing charts to MYCURE?',
          answer: 'Possibly! Chat with us now and ask our experts about it.'
        },
        {
          question: 'Am I required to pay for installation fees?',
          answer: 'Not really. You can set it up on your own!'
        },
        {
          question: 'Who else can see my patient records?',
          answer: 'Only you. You are in control of your own account and the medical records you create. If you add a secretary into your account, you are entitling him/her to view your patient records, too.'
        },
        {
          question: 'Do you have an account for secretaries and nurses?',
          answer: 'Yes. You can learn more about the different features on our features page.'
        },
        {
          question: 'Does my MYCURE account also come with a free device?',
          answer: 'No. MYCURE only provides the web-based application. That\'s actually more practical (and less spending) for you! Most software that come with devices require you to be locked up to their expensive subscription plans for a certain period of time. Don\'t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.'
        },
        {
          question: 'Is MYCURE cloud-based?',
          answer: 'Yes. All your medical records are backed up in the cloud.'
        },
        {
          question: 'How fast should my internet connection be when I’m using MYCURE?',
          answer: 'This varies on the number of users of the app. We encrypt and upload your records to our secure servers every time you process them. The download/upload speed should be at least:',
          supplement: '• 5 Mbps → 1 to 3 simultaneous users • 10 Mbps → 4 to 10 simultaneous users • 15 Mbps and up → More than 10 users'
        }
      ]
    };
  },
  methods: {
    parseSupplement (item) {
      const { supplement } = item;
      if (this.faqsItems.indexOf(item) === this.faqsItems.length-1) {
        return parseTextWithNewLine(supplement, ['3 simultaneous users ', '10 simultaneous users ']);
      } else {
        return supplement;
      }
    }
  }
};
</script>