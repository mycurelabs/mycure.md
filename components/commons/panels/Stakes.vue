<template lang="pug">
  div
    v-container(v-if="version !== 3")
      v-row(justify="center" align="center")
        generic-panel(:row-bindings="{ justify: 'center' }")
          v-col(cols="12").py-16
            v-row(justify="center").mb-10
              v-col(cols="11" :sm="version === 2 ? 7 : 11")
                div.text-center
                  p(:class="{'primary--text': version === 2}").mc-title-set-1.font-weight-semibold.mb-0.mb-4 {{ panelTitle }}
                  p(v-if="version === 2").mc-content-set-1.mb-0.font-gray {{ subTitle }}
            //- version 1
            div(v-if="version === 1").font-open-sans
              div(v-for="(content, index) in contents" :key="index")
                div(v-if="!$isMobile")
                  v-row(justify="center")
                    v-col(cols="5").pb-0
                      span.primary--text.mc-content-set-1.font-weight-semibold {{ content.leftTitle }}
                    v-col(cols="1").pb-0
                    v-col(cols="5").pb-0
                      span.primary--text.mc-content-set-1.font-weight-semibold {{ content.rightTitle }}
                  v-row(justify="center")
                    v-col(cols="5")
                      p.mc-content-set-1.font-gray {{ content.leftDescription }}
                    v-col(cols="1")
                    v-col(cols="5")
                      p.mc-content-set-1.font-gray {{ content.rightDescription }}
                div(v-else)
                  v-row(justify="center")
                    v-col(cols="10")
                      span.primary--text.mc-content-set-1.font-weight-semibold {{ content.leftTitle }}
                      p.mc-list-content-set-1.font-gray {{ content.leftDescription }}
                      span.primary--text.mc-content-set-1.font-weight-semibold {{ content.rightTitle }}
                      p.mc-list-content-set-1.font-gray {{ content.rightDescription }}

            //- version 2
            div(v-if="version === 2").font-open-sans
              v-row(justify="center")
                v-col(cols="10")
                  v-row(justify="start")
                    v-col(v-for="(content, index) in contents" :key="index" cols="12" sm="6")
                      v-row(justify="start").pr-1
                        v-col(cols="1" :class="!$isMobile ? 'pa-0' : ['pl-0', 'pt-0']")
                          v-icon(:large="$isWideScreen" color="primary" :class="{'mt-2': $isWideScreen}").mdi-check-circle
                        v-col(:class="!$isMobile ? 'pa-0' : ['pr-0', 'pt-0']")
                          span.font-gray.mc-list-content-set-1 {{ content }}
            div(v-if="version === 4").font-open-sans
              v-row(justify="center")
                v-col(v-for="(content, index) in contents" :key="index" cols="12" sm="4" align="center").pb-0
                  picture-source(
                    v-bind="getImageBindings(content.imageBindings)"
                  )
                  p.mc-title-set-2.font-weight-semibold {{ content.title }}
                  div.px-5
                    p.mc-content-set-1.font-gray {{ content.description }}
            footer
            v-row(justify="center" :class="{'mt-10': version !== 4}")
              v-col(cols="11")
                p(:class="{'text-center': version === 1}").mc-content-set-1.font-gray.font-open-sans {{ panelDescription }}
            v-row(justify="center")
              //- v-btn(
              //-   color="primary"
              //-   depressed
              //-   rounded
              //-   width="228px"
              //-   height="59px"
              //-   href="https://staging-web-main.herokuapp.com/signup/health-facilities"
              //- ).text-none.my-3
              signup-button(
                depressed
                color="success"
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
              ).text-none.my-3
                span.generic-button-text Start Your Free Trial
    generic-media-panel(
      v-else
      :content="mediaContent"
      :title-classes="[...mediaHeaderClasses, 'font-weight-semibold']"
      :super-title-classes="mediaSuperTitleClasses"
      :content-classes="[...mediaDescriptionClasses, 'justify-left']"
      :hide-btn="hideBtn"
    ).mt-16
      template(slot="title")
        slot(name="title")
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            color="success"
            facility-type="clinic"
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started Free
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    PictureSource,
    GenericPanel,
  },
  props: {
    // version 1 - 4 panel with only text
    // version 2 - table format
    // version 3 - generic media panel format
    // version 4 - 3 images in a row with title and description
    version: {
      type: Number,
      default: 3,
    },
    panelTitle: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    contents: {
      type: Array,
      default: () => ([]),
    },
    // contentFour: {
    //   type: Object,
    //   default: () => ({
    //     title: '',
    //     description: '',
    //   }),
    // },
    panelDescription: {
      type: String,
      default: '',
    },
    mediaContent: {
      type: Object,
      default: () => {},
    },
    mediaHeaderClasses: {
      type: Array,
      default: () => ['mc-title-set-2'],
    },
    mediaSuperTitleClasses: {
      type: Array,
      default: () => ['mc-content-set-1', 'lh-title', 'font-weight-semibold', 'primary--text'],
    },
    mediaDescriptionClasses: {
      type: Array,
      default: () => ['mc-content-set-1', 'font-open-sans', 'font-gray'],
    },
    hideBtn: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.superTitleClasses = ['mc-content-set-1', 'lh-title', 'font-weight-semibold', 'primary--text'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.headerClasses = ['mc-title-set-2', 'font-weight-semibold'];
    return {
    };
  },
  methods: {
    getImageBindings (imageBindings) {
      const [image, extension] = imageBindings.mobileImage && this.$isMobile
        ? imageBindings.mobileImage.split('.')
        : imageBindings.image.split('.');
      const bindings = {
        ...imageBindings,
        image,
        imageFileExtension: `.${extension}`,
        imageAlt: imageBindings.imageAlt || imageBindings.alt || this.content.title,
        extensionExclusive: imageBindings.extensionExclusive || (imageBindings.mobileImage && this.$isMobile),
        imageWidth: imageBindings.width,
        imageHeight: imageBindings.height,
      };
      return bindings;
    },
  },
};
</script>

<style scoped>
.table{
  border-style: solid;
  border-width: 1px;
  border-color: grey;
  border-radius: 20px;
}
.table-entry1{
  border-left-style: solid;
  border-color: grey;
  border-width: 1px;
}
.table-entry2{
  border-top-style: solid;
  border-color: grey;
  border-width: 1px;
}
.table-entry3{
  border-top-style: solid;
  border-left-style: solid;
  border-color: grey;
  border-width: 1px;
}
</style>
