<template lang="pug">
  v-container.py-12
    v-row(justify="center")
      v-col(cols="12" md="5")
        h1.font-30.lh-title.pb-3.font-weight-light.text-center {{ panelContent.header }}
    v-row(justify="center" align="start")
      v-col(
        v-for="(data, key) in plans"
        cols="10"
        md="3"
        :key="key"
        :class="mobileClasses"
        :offset-md-="key === 3 ? '1' : '0'"
      ).mr-9.ml-9
        img(v-lazy="require(`~/assets/images/doctors-clinics/${data.images}`)" :alt="data.header")
        h1.font-22.lh-title.pb-3.font-weight-medium {{ data.header }}
        p.text-justify.font-16.mt-3.font-gray {{ data.description }}
    v-row(justify="center").pt-12
      v-col(cols="12" md="5")
        h1.font-16.font-weight-light.text-center.font-italic {{ panelContent.description }}
</template>

<script>
export default {
  data () {
    this.panelContent = {
      header: 'Do more with specialized plan for your specialized clinics',
      description: '*All specialized plans come with Pharmacy, Inventory and Point-of-Sales modules',
    };
    this.plans = [
      {
        images: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-01-skin.png',
        header: 'Skin and Aesthetic',
        description: 'A comprehensive EMR module with image uploads and medical drawings.',
      },
      {
        images: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-02-pediatrics.png',
        header: 'Pediatrics',
        description: 'An EMR complete with growth charts, vaccination trackers, and developmental milestones.',
      },
      {
        images: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-03-maternity.png',
        header: 'Maternity Care',
        description: 'Laboratory and Imaging modules to store lab & ultrasounds results with AOG and EDD calculators.',
      },
      {
        images: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-04-dental.png',
        header: 'Dental',
        description: 'A special Dental EMR for baseline dental charting, proposed documentation for work, and other attachments.',
      },
      {
        images: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-D-specialization-05-diagnostic.png',
        header: 'Diagnostic',
        description: 'Interoperable Laboratory and Imaging modules with HL7 machine integrations, send-outs and specimen tracking functions.',
      },
    ];
    return {};
  },
  computed: {
    mobileClasses () {
      return this.$isMobile ? ['text-center', 'py-3'] : [];
    },
  },
};
</script>
