<template lang="pug">
  generic-container
    v-row
      v-col(cols="12").mb-5
        h2 Specializations (65)
      template(v-for="(specialization, key) in specializations")
        v-card(:color="specialization.color" flat).ma-1
          v-card-actions
            img(src="~/assets/images/clinics-website/specialization-skin.png" width="30")
            span.mx-3 {{ specialization.title }}
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
        color: 'blue lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my heart',
        color: 'red lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my family',
        color: 'indigo lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my liver',
        color: 'green lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my teeth',
        color: 'light-blue lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my lungs',
        color: 'orange lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For mothers',
        color: 'blue lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my mental health',
        color: 'red lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my blood',
        color: 'indigo lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my nervous system',
        color: 'green lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my colon',
        color: 'light-blue lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my skin',
        color: 'orange lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my ears, nose and throat',
        color: 'blue lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For my heart',
        color: 'red lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my stomach',
        color: 'indigo lighten-4',
        counts: '(124)',
      },
      {
        image: '',
        title: 'For elderly care',
        color: 'green lighten-4',
        counts: '(143)',
      },
      {
        image: '',
        title: 'For my hormones and metabolism',
        color: 'light-blue lighten-4',
        counts: '(124)',
      },
    ];
    return {};
  },
};
</script>
