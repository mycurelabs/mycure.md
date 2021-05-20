<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" md="10" xl="12").text-center.pa-0
            h1(:class="headerClasses").font-weight-semibold.primary--text Caring for people who care for people
            p(:class="descriptionClasses").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day.
            v-row(justify="center")
              v-col(
                v-for="(stat, key) in stats"
                :key="key"
                cols="12"
                md="4"
              ).text-center
                h1(:class="{ 'font-xl': $isWideScreen, 'font-l': $isRegularScreen, 'font-m' : $isMobile }").primary--text.font-weight-semibold {{ stat.amount }}
                h3(:class="{ 'font-m': $isWideScreen, 'font-s' : $isRegularScreen, 'font-xs' : $isMobile }").font-weight-regular.grey--text {{ stat.title }}
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericPanel,
  },
  data () {
    this.stats = [
      {
        title: 'Medical Records',
        amount: '2,700,000+',
      },
      {
        title: 'Lives Saved',
        amount: '1,400,000+',
      },
      {
        title: 'Partner Providers',
        amount: '2,000+',
      },
    ];
    return {};
  },
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-m', 'mb-5'],
        regular: ['font-l', 'mb-10'],
        wide: ['font-2xl', 'mb-10'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs', 'mb-6'],
        regular: ['font-s', 'mb-12'],
        wide: ['font-m', 'mb-12'],
      });
    },
  },
};
</script>
