<template lang="pug">
  div
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12").text-center
            span(:class="metaTitleClasses").primary--text Why MYCURE?
            h2(:class="panelHeaderClasses").font-weight-semibold Think Long-Term
    generic-media-panel(
      v-for="(panel, key) in panels"
      align="center"
      :key="key"
      :content="panel"
      :title-classes="headerClasses"
      :class="{'pb-16': key === 1}"
      hide-btn
      disable-parent-padding
    )
      template(slot="content")
        p(:class="descriptionClasses") {{ panel.description }}&nbsp;
          span(v-if="$nuxt.$route.name !== 'doctors-clinics' && panel.descriptionAppend") {{ panel.descriptionAppend }}
</template>

<script>
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panelHeaderClasses = ['mc-title-set-1'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.metaTitleClasses = ['mc-content-set-1', 'font-open-sans', 'font-weight-semibold'];
    this.headerClasses = ['mc-title-set-2', 'primary--text', 'font-weight-semibold'];
    return {};
  },
  computed: {
    panels () {
      return [
        {
          title: 'MYCURE is not just your ordinary medical app.',
          description: 'It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network.',
          descriptionAppend: 'MYCURE has open APIs to give you more flexibility in integrating with other systems.',
          imageBindings: {
            image: 'preventing-failures.png',
            imageAlt: 'Doctor and patient communicating artwork',
            customPath: 'commons/',
            extensionExclusive: true,
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '144.08px' : (this.$isRegularScreen ? '229.69px' : '370.62px'),
          },
          contentAlign: 'right',
        },
        {
          title: 'As your practice grows, your tech tools need to upgrade too.',
          description: 'The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.',
          imageBindings: {
            image: 'as-your-practice-grows.png',
            imageAlt: 'Hospitals growing and scaling up artwork',
            customPath: 'commons/',
            extensionExclusive: true,
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '213.25px' : (this.$isRegularScreen ? '339.97px' : '548.58px'),
          },
          contentAlign: 'left',
        },
      ];
    },
  },
};
</script>
