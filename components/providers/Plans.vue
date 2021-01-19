<template lang="pug">
  v-container
    v-row(align="center" justify="center")
      v-col(cols="12" md="6")
        v-row(align="center").my-10.plans-container
          v-col(cols="12" md="5").pa-10
            h1.mb-5.plan-title.white--text MYCURE Plans
            get-started-button(large)
          v-col(cols="12" md="7").pa-10
            template(v-for="plan in plans")
              h1.white--text {{plan.name}}
              p.white--text {{plan.description}}
</template>

<script>
import GetStartedButton from '~/components/providers/GetStartedButton';
export default {
  components: {
    GetStartedButton,
  },
  data () {
    return {
      plans: [
        {
          name: 'BASIC',
          description: '10,000 medical records for FREE',
        },
        {
          name: 'PREMIUM',
          description: '30,000 medical records plus more users',
        },
        {
          name: 'CUSTOM',
          description: 'Add whatever features you need',
        },
        {
          name: 'ENTERPRISE',
          description: 'Superadmin module & advanced customization',
        },
      ],
    };
  },
};
</script>

<style scoped>
.plans-container {
  background-color: #1D6A83;
  border-radius: 10px;
}

.plan-title {
  font-size: 70px;
  line-height: 1;
}
</style>
