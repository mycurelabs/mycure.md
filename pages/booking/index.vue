<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      description="Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use."
      slotted-title
      image="Booking USP"
      custom-image-path="booking/"
    )
      template(slot="title")
        h1(:class="[{'text-center': $isMobile}, ...headerClasses]").font-weight-bold Grow your #[br]
          vue-typer(
            :text="['Practice', 'Clinic', 'Diagnostics', 'Hospital']"
            :repeat="Infinity"
            :erase-delay="100"
            erase-style="backspace"
          ).typer
          span #[br] Safely
    //- 2nd panel
    div.mx-n3.grey-bg
      start-easy(:header-classes="headerClasses")
    //- 3rd - 5th panel
    features(
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 6th panel
    plans.mb-n3
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
import StartEasy from '~/components/booking/StartEasy';
import Features from '~/components/booking/Features';
import Syncbase from '~/components/booking/Syncbase';
import Plans from '~/components/booking/Plans';

export default {
  components: {
    Usp,
    StartEasy,
    Features,
    Syncbase,
    Plans,
  },
  middleware: [
    'disable-route',
  ],
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/OG Booking.png'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
  mounted () {
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}

.vue-typer >>> .custom.char.typed  {
  color: #04B1E7;
}

.vue-typer >>> .custom.caret {
  width: 5px;
  background-color: #FFFFFF;
}

.vue-typer >>> .custom.caret.typing {
  background-color: #04B1E7;
}

.syncbase-container {
  background-color: #BDDBE6
}
</style>
