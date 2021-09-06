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
              width="228px"
              height="59px"
              @click="viewDemo"
            ).text-none
              span.generic-button-text View live demo
        v-col(cols="12").text-center.ml-n10
          picture-source(
            image="MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult"
            image-alt="Virtual Clinic"
            :image-width="$isMobile ? '300px' : ($isRegularScreen ? '964px' : '1475px')"
            :image-height="$isMobile ? '192.08px' : ($isRegularScreen ? '617.23px' : '944.39px')"
            image-file-extension=".webp"
            custom-path="telehealth/"
          )
        generic-panel(:row-bindings="{ justify: 'center'}").pa-0
          v-col(
            v-for="(data, key) in contents"
            cols="12"
            md="5"
            :offset-md="key === 1 ? 2 : null"
            :key="key"
          )
            v-row(justify="center")
              v-col(align="center" :cols="$isMobile ? '12' : '2'").pb-0
                div.text-center.pt-1
                  img(v-lazy="require(`~/assets/images/telehealth/${data.headerIcon}`)" :width="$isWideScreen ? '80px' : '50px'" :height="$isWideScreen ? '80px' : '50px'")
              v-col
                h1(:class="headerClasses") {{ data.header }}
                br
                p(:class="contentClasses") {{ data.description }}
</template>

<script>
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
    this.titleClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.headerClasses = ['mc-title-set-2', 'font-weight-semibold', { 'pt-5': this.$isMobile }];
    this.contentClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {};
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
