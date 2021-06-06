<template lang="pug">
  div
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center'}")
          v-col(cols="12").text-center
            h2(:class="titleClasses").mb-5 Your New Virtual Clinic
            p(:class="contentClasses").mb-10 Use the tools that work best for you. Everything you need is here. It’s FREE.
            mc-btn(
              v-if="!$isMobile"
              event-label="view-telehealth-demo"
              color="primary"
              depressed
              rounded
              :large="$isRegularScreen"
              :x-large="$isWideScreen"
              @click="viewDemo"
            ).text-none.font-s View live demo
          v-col(cols="12").text-center.ml-n10
            picture-source(
              image="MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult"
              image-alt="Virtual Clinic"
              image-width="102%"
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
  methods: {
    viewDemo () {
      const date = Date.now();
      const random = Math.round(Math.random() * 100);

      const roomId = `${date}${random}`;
      const teleconsultRoom = `${process.env.CMS_URL_BASE}/virtual-consult-experience/${roomId}`;
      window.open(teleconsultRoom, '_blank', 'noreferrer noopener');
    },
  },
};
</script>
