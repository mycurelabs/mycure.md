<template lang="pug">
  generic-media-panel(
    :content="callToActionPanel"
    :center-panel-title-classes="titleClasses"
    :content-classes="descriptionClasses"
    :super-title-classes="subheaderClasses"
    :title-classes="[...titleClasses, 'primary--text']"
    hide-btn
    align="center"
  )
    template(slot="content")
      p(v-for="(desc, key) in callToActionPanel.description" :key="key" :class="descriptionClasses") {{ desc }}
    template(slot="additional-content")
      v-row.mt-10
        slot(name="cta-button")
          v-row(:justify="$isMobile ? 'center' : 'start'")
            v-col(cols="10" sm="5" md="7" lg="6" xl="7")
              div(:class="{'text-center': $isMobile}")
                mc-btn(
                  color="success"
                  depressed
                  rounded
                  :block="![2, 4].includes(version)"
                  :large="!$isWideScreen"
                  :x-large="$isWideScreen"
                  :class="!$isWideScreen ? 'font-14' : ![2, 4].includes(version) ? 'font-s' : 'font-m'"
                  :href="'https://calendly.com/mycure/demo'"
                ).text-none {{ ![2, 4].includes(version) ? 'Book a full training' : 'Start Now' }}
            v-col(v-if="![2, 4].includes(version)" cols="10" sm="5" md="7" lg="6" xl="5")
              signup-button(
                event-label="signup"
                color="success"
                depressed
                rounded
                block
                :outlined="![2, 4].includes(version)"
                :large="!$isWideScreen"
                :x-large="$isWideScreen"
                :class="buttonClasses"
              ).text-none {{notFree ? 'Get Started' : 'Get Started Free'}}
</template>

<script>
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import SignupButton from '~/components/commons/SignupButton';
export default {
  components: {
    GenericMediaPanel,
    SignupButton,
  },
  props: {
    version: {
      type: Number,
      default: 1,
    },
    notFree: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.versionOne = {
      centerPanelTitle: 'Learn the basics with ease',
      superTitle: 'Worrying about the shift to digital records? We got you covered.',
      description: [
        'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
      contentAlign: 'right',
    };
    this.versionTwo = {
      centerPanelTitle: 'Let us do the work for you',
      superTitle: 'Worrying about the shift to digital records? We got you covered.',
      description: [
        'We know it’s challenging to shift your entire operations into a new system. Our lean implementation process ensures that you get what you need—customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you from training to winning.',
      ],
      contentAlign: 'right',
    };
    this.versionThree = {
      title: 'Learn the basics with ease',
      description: [
        'Worrying about the shift to digital records? We got you covered. We have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
      contentAlign: 'right',
    };
    this.versionFour = {
      centerPanelTitle: 'Let us do the work for you',
      superTitle: 'Worrying about the shift to digital records? We got you covered.',
      description: [
        'Get what you need—customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you from training to winning.',
      ],
      contentAlign: 'left',
    };
    this.titleClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.buttonClasses = ['mc-button-set-1'];
    this.subheaderClasses = ['mc-subheader-set-2', 'font-open-sans', 'primary--text'];
    return {};
  },
  computed: {
    imgBindings () {
      return {
        image: 'Let us do the work.webp',
        imageAlt: 'Hospital and smartphone artwork',
        customPath: 'commons/',
        width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
        height: this.$isMobile ? '181.8px' : (this.$isRegularScreen ? '303px' : '467.65px'),
      };
    },
    callToActionPanel () {
      switch (this.version) {
        case 2: return { ...this.versionTwo, imageBindings: this.imgBindings };
        case 3: return { ...this.versionThree, imageBindings: this.imgBindings };
        case 4: return { ...this.versionFour, imageBindings: this.imgBindings };
        default: return { ...this.versionOne, imageBindings: this.imgBindings };
      }
    },
  },
};
</script>
