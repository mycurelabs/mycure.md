<template lang="pug">
  v-container(v-if="!loading").main-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="10").py-10.text-center
        h1(:class="titleClasses").mb-2 Start for free, then pay as you grow.
        p We got you from your first sale to full scale.
        v-btn(
          large
          color="success"
        ) Start free today
      v-col(cols="12" md="10").mb-10
        table(width="100%")
          tr
            td(width="33%")
            td(width="33%").text-center.primary.lighten-2
              h2 Free
            td(width="33%").text-center.primary
              h2 Pay as you grow
          tr
            td(width="33%")
            td(width="33%" valign="bottom").text-center
              h1 #[money(:value="0")]
            td(width="33%" valign="bottom").text-center
              h3 Starts at
              h1 #[money(:value="4")]
          tr
            td(width="33%")
            td(width="33%" valign="bottom").text-center
              p All the essential tools you need to run your health facility
            td(width="33%" valign="bottom").text-center
              p Only pay for what you use on top of the free plan
          template(v-for="row in rows")
            tr
              td.py-2 {{row.item}}
              td.py-2.text-center
                template(v-if="isIcon(row.free)")
                  v-icon(:class="{ 'success--text': getIconColor(row.free) === 'success', 'error--text': getIconColor(row.free) === 'error' }")
                    | {{row.free}}
                template(v-else)
                  | {{row.free}}
              td.py-2.text-center
                template(v-if="isIcon(row.paid)")
                  v-icon(:class="{ 'success--text': getIconColor(row.paid) === 'success', 'error--text': getIconColor(row.paid) === 'error' }")
                    | {{row.paid}}
                template(v-else)
                  | {{row.paid}}
          tr
            td(width="33%")
            td(width="33%").text-center.primary.lighten-2
              v-btn(
                text
                block
                x-large
              ).text-none.font-weight-bold Start free
            td(width="33%").text-center.primary
              v-btn(
                text
                block
                x-large
              ).text-none.font-weight-bold Start free
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
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Online booking',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Online payments',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Pay later',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Patient Registration',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'EMR',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Daily Census',
          free: 'mdi-check',
          paid: 'mdi-check',
        },
        {
          item: 'Sales Reports',
          free: 'mdi-check',
          paid: 'mdi-check',
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
  padding: 5px;
  /* border: 1px solid lightgrey; */
}
</style>
