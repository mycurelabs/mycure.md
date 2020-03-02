<template lang="pug">
  div.white
    v-container.pt-5
      v-layout(row align-center)
        v-flex(xs12 md12).text-xs-center
          h1.font-40.font-work-sans {{ faqsTitle }}
      v-layout(v-if="!$isMobile" row justify-center).pt-5
        v-flex(v-for="(column, key) in 2" xs12 md6 :key="key").font-source-sans.mx-2
          template(v-for="(item, key) in faqsItems")
            div(v-if="key < 5 && column === 1")
              img(:src="require(`@/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
              strong.font-21 &nbsp;{{ item.question }}
              p.font-18.pl-1.pt-2 {{ item.answer }}
              br
            div(v-else-if="key < 10 && key > 4 && column === 2")
              img(:src="require(`@/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
              strong.font-21 &nbsp;{{ item.question }}
              p.font-18.pl-1.pt-2 {{ item.answer }}
              p(v-if="item.supplement" :class="{'pl-3' : !$isMobile}").font-18.pre-white-space {{ parseSupplement(item)}}
              br
      v-layout(v-else row wrap justify-center).pt-5
        v-flex(xs12 md9)
          div(
            v-for="(item, key) in faqsItems"
            :key="key"
          ).font-source-sans
            img(:src="require(`@/assets/images/${questionMark}.png`)" :alt="questionMark" width="18px")
            strong.font-21 &nbsp;{{ item.question }}
            p.font-21.pl-1.pt-2 {{ item.answer }}
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
          answer: 'You can create all types of records for free up to 100 patient visits per month or until you reach 1000 patient profiles. Afterwards you can subscribe for higher storage capacity through our in-app purchases starting $5 a month.'
        },
        {
          question: 'Can I transfer my existing charts to MYCURE?',
          answer: 'Possibly! Chat with us now and ask our experts about it.'
        },
        {
          question: 'Am I required to pay for installation fees?',
          answer: 'No. You can set it up on your own!'
        },
        {
          question: 'Who else can see my patient records?',
          answer: 'Only you. You are in control of your own account and the medical records you create. If you add a secretary account into your clinic, you may allow him/her to view your patient records, too.'
        },
        {
          question: 'Do you have an account for secretaries and nurses?',
          answer: 'Yes. You can learn more about the different features on our features page.'
        },
        {
          question: 'Does my MYCURE account also come with a free device?',
          answer: 'No. MYCURE only provides the web-based application. That’s actually more practical (and less spending) for you! Most software products that come with devices require you to be locked up to their subscription plans for a certain time period. Don’t worry, we’re confident that MYCURE is compatible with at least one of your current devices so long as it has Google Chrome installed.'
        },
        {
          question: 'Is MYCURE cloud-based?',
          answer: 'Yes. All your medical records are backed up in the cloud.'
        },
        {
          question: 'How fast should my internet connection be when I’m using MYCURE?',
          answer: 'This varies on the number of users of the app. We encrypt and upload your records to our secure servers every time you process them. The download/upload speed should be at least:',
          supplement: '• 10 Mbps → 1 to 3 simultaneous users • 15 Mbps → 4 to 10 simultaneous users • 20 Mbps and up → More than 10 users'
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