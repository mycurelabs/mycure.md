<template lang="pug">
  v-container.py-16.my-5
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12" md="10" xl="12").text-center.pa-0
            h1(:class="headerClasses").font-weight-semibold.primary--text Caring for people who care for people
            p(:class="descriptionClasses").grey--text.font-open-sans MYCURE is dedicated to help healthcare providers save more lives each day.
            v-row(
              justify="center"
            ).stat-container
              v-col(
                v-for="(stat, key) in stats"
                :key="key"
                cols="12"
                md="4"
                v-observe-visibility="{ callback: onVisibilityChange, intersection: { threshold: 1 } }"
              ).text-center
                h1(:class="{ 'font-xl': $isWideScreen, 'font-l': $isRegularScreen, 'font-m' : $isMobile }").primary--text.font-weight-semibold {{ statData[stat.amountKey].toLocaleString() }}
                  span(v-if="statData[stat.amountKey] > 0") +
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
    return {
      statData: {
        'medical-records': 0,
        lives: 0,
        providers: 0,
      },
      stats: [
        {
          title: 'Medical Records',
          amountKey: 'medical-records',
        },
        {
          title: 'Lives Saved',
          amountKey: 'lives',
        },
        {
          title: 'Partner Providers',
          amountKey: 'providers',
        },
      ],
      isVisible: false,
      hasAnimated: false,
    };
  },
  computed: {
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-m', 'mb-5'],
        regular: ['font-l', 'mb-5'],
        wide: ['font-2xl', 'mb-5'],
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
  watch: {
    isVisible (val) {
      if (!val || this.hasAnimated) return;
      this.$anime({
        targets: this.statData,
        'medical-records': 2700000,
        lives: 1400000,
        providers: 2000,
        easing: 'linear',
        round: 1,
        duration: 500,
      });
      this.hasAnimated = true;
    },
  },
  methods: {
    onVisibilityChange (isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>
