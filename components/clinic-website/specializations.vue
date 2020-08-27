<template lang="pug">
  generic-container
    v-row
      v-col(cols="12")
        h1 Specializations (65)
      v-col
        v-card(v-for="(specialization, key) in specializations" :key="key")
          v-card-text
            img
            p {{ specialization.title }}
            strong {{ specialization.counts }}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: { GenericContainer },
  data () {
    this.specializations = [
      {
        image: '',
        title: 'For my kids',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my heart',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my family',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my liver',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my teeth',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my lungs',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For mothers',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my mental health',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my blood',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my nervous system',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my colon',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my skin',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my ears, nose and throat',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my heart',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my stomach',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For elderly care',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my hormones and metabolism',
        counts: '(124)',
      },
    ];
    return {};
  },
};
</script>
