<template lang="pug">
  v-container
    v-row.my-10
      v-col(cols="12").mb-10.text-center
        h1 Start Easy
      template(v-for="item in items")
        v-col(cols="12" md="4").text-center
          img(
            :src="item.image"
            width="80%"
          ).mb-4
          h2 {{item.title}}
          p {{item.description}}
      v-col(cols="12").mb-5.text-center
        get-started-button(
          large
        )
    need-more.my-10
</template>

<script>
import GetStartedButton from '~/components/providers/GetStartedButton';
import NeedMore from '~/components/providers/NeedMore';
export default {
  components: {
    GetStartedButton,
    NeedMore,
  },
  data () {
    return {
      items: [
        {
          image: require('../../assets/images/providers/A Asset 2.png'),
          title: 'Appointments',
          description: 'Easy booking to get more patients',
        },
        {
          image: require('../../assets/images/providers/B Asset 2.png'),
          title: 'Billing',
          description: 'Efficiently measure your clinic\'s growth',
        },
        {
          image: require('../../assets/images/providers/B Asset 2.png'),
          title: 'Charting',
          description: 'Quick & secure access to medical records',
        },
      ],
    };
  },
};
</script>
