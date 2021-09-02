<template lang="pug">
  div
    v-container(v-if="version !== 3")
      v-row(justify="center").pa-5
        v-col(cols="12").py-16
          v-row(justify="center").mb-10
            v-col(cols="11")
              div.text-center
                p(:class="{'primary--text': version === 2}").mc-title-set-1.font-weight-semibold.mb-0 {{ panelTitle }}
                p(v-if="version === 2").mc-content-set-1.mb-0 {{ subTitle }}
          //- version 1
          div(v-if="version === 1")
            div(v-for="(content, index) in contents" :key="index")
              v-row(justify="center")
                v-col(cols="5").pb-0
                  span.primary--text.mc-content-set-1.font-weight-semibold {{ content.leftTitle }}
                v-col(cols="1").pb-0
                v-col(cols="5").pb-0
                  span.primary--text.mc-content-set-1.font-weight-semibold {{ content.rightTitle }}
              v-row(justify="center")
                v-col(cols="5")
                  p.mc-content-set-1.grey--text {{ content.leftDescription }}
                v-col(cols="1")
                v-col(cols="5")
                  p.mc-content-set-1.grey--text {{ content.rightDescription }}
          //- version 2
          div(v-if="version === 2")
            v-row(justify="center")
              v-col(cols="10").table
                v-row.mc-content-set-1
                  v-col(v-for="(content, index) in contents" :key="index" cols="6" :class=" index < 2 ? {'table-entry1': index === 1} : (index % 2 === 0 ? 'table-entry2' : 'table-entry3')")
                    v-icon(small black) mdi-circle
                    span &nbsp; {{ content }}
          div(v-else)
            v-row(justify="center")
              v-col(v-for="(content, index) in contents" :key="index" cols="4" align="center").pb-0
                picture-source(
                  v-bind="getImageBindings(content.imageBindings)"
                )
                p.mc-title-set-2.font-weight-semibold {{ content.title }}
                p.mc-content-set-1 {{ content.description }}
          //- footer
          v-row(justify="center" :class="{'mt-10': version !== 4}")
            v-col(cols="11")
              p(:class="{'text-center': version === 1}").mc-content-set-1.text-center {{ panelDescription }}
          v-row(justify="center")
            v-btn(
              color="primary"
              depressed
              outlined
              rounded
              width="228px"
              height="59px"
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
export default {
  components: {
    SignupButton: () => import('~/components/commons/SignupButton'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    PictureSource,
  },
  props: {
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
  computed: {
    secondPanel () {
      return {
        title: 'Stop wasting your time',
        superTitle: 'Tired of long waiting lines?',
        description: 'Without an appointment booking system, healthcare providers find it difficult to organize patient visits resulting to missed opportunities and more time wasted.',
        contentAlign: 'right',
        imageBindings: {
          image: 'Stakes.webp',
          mobileImage: 'Stakes.webp',
          imageAlt: 'Doctor with a lot of paper work',
          customPath: 'booking/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '197.14px' : (this.$isRegularScreen ? '328.58px' : '507.14px'),
        },
      };
    },
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
