<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center'}")
        v-col(cols="12").text-center
          h2(:class="titleClasses").mb-5 Your New Virtual Clinic
          p(:class="contentClasses").mb-5 Use the tools that work best for you. Everything you need is here. It’s FREE.
        v-col(cols="12").text-center
          picture-source(
            image="MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult"
            image-alt="Virtual Clinic"
            image-file-extension=".webp"
            custom-path="telehealth/"
          )
        v-col(
          v-for="(data, key) in contents"
          cols="12"
          md="5"
          :offset-md="key === 1 ? 2 : null"
          :key="key"
        )
          div.d-flex
            img(v-lazy="require(`~/assets/images/telehealth/${data.headerIcon}`)" :height="$isMobile? '10%' : '30%'" :class="{'pt-3': $isMobile}")
            h1(:class="headerClasses").ml-3 {{ data.header }}
          br
          p(:class="contentClasses") {{ data.description }}
        v-col(cols="12").text-center
          signup-button(
            depressed
            rounded
            color="success"
            event-label="signup"
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
          ).text-none.font-s
            | Get Started Free
            v-icon(small right) mdi-arrow-right
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericPanel from '~/components/generic/GenericPanel';
import PictureSource from '~/components/commons/PictureSource';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    GenericPanel,
    PictureSource,
    SignupButton,
  },
  data () {
    this.contents = [
      {
        headerIcon: 'increase-revenue.png',
        header: 'Increase your revenue',
        description: 'Treat more patients and reduce no-shows and cancellations with online consultations via secure video and voice calls.',
      },
      {
        headerIcon: 'build-clientele.png',
        header: 'Build your clientele',
        description: 'Build patient loyalty and accommodate patients outside of your physical work hours. It\'s easy for your old and new patients to set appointments with you.',
      },
    ];
    return {};
  },
  computed: {
    titleClasses () {
      const titleClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'font-weight-semibold',
      ];
      return titleClasses;
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s', 'text-center', 'pt-5'],
          regular: ['font-m'],
          wide: ['font-l'],
        }),
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    contentClasses () {
      const contentClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return contentClasses;
    },
  },
};
</script>
