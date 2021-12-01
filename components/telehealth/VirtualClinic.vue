<template lang="pug">
  generic-blue-bg
    v-container.white--text
      v-row(justify="center")
        v-col(cols="12")
          generic-media-panel(
            :content="contents"
            hide-btn
            :title-classes="listHeaderClasses"
            :content-classes="listContentClasses"
          )
          template(slot="additional-content")
            mc-btn(
              v-if="!$isMobile"
              event-label="view-telehealth-demo"
              color="success"
              depressed
              class="rounded-lg"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              @click="viewDemo"
            ).text-none
              span.generic-button-text View live demo
        v-col(cols="12").text-center.ml-n10
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
import GenericBlueBg from '~/components/generic/GenericBlueBg';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';

export default {
  components: {
    GenericPanel,
    GenericBlueBg,
    GenericMediaPanel,
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
  computed: {
    contents () {
      return {
        title: 'Your New Virtual Clinic – MYCURE Telehealth',
        description: 'Use the online practice management system tools that work best for you. Everything you need is here – and it’s FREE.',
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-A-online-consult.webp',
          imageAlt: 'Virtual Clinic',
          customPath: 'telehealth/',
          width: this.$isMobile ? '300px' : (this.$isRegularScreen ? '964px' : '1475px'),
          height: this.$isMobile ? '192.08px' : (this.$isRegularScreen ? '617.23px' : '944.39px'),
        },
        contentAlign: 'left',
      };
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
