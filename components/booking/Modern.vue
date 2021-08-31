<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(
        hide-btn
        :disable-parent-padding="disableParentPadding"
      )
        v-card(width="100%" :class="$isMobile ? 'pa-3' : ['pa-10', 'mx-10'] ").primary.rounded-xl.pt-16
          v-card-text.white--text
            v-row(justify="center")
              span.font-weight-semibold.mc-content-set-1 MYCURE helps medical practicioners anywhere they are
            v-row(justify="center").my-3
              span.font-weight-semibold.mc-content-set-1  --------
            v-row(align="center")
              v-col(cols="12" sm="6" justify="center")
                v-row(align="center")
                  v-col(cols="3")
                    v-icon(large) mdi-circle
                  v-col(justify="center")
                    h1.font-weight-semibold.mc-content-set-1 Dr. Gay Cadorna-Toledo
                    h1.font-weight-light.mc-content-set-2 MYCURE User since 2017
              v-col(cols="12" sm="6")
                span.font-weight-light.mc-content-set-1 “It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far. MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”
</template>

<script>
import GenericPanel from '~/components/generic/GenericPanel';
// import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    GenericPanel,
    // PictureSource,
  },
  // props: {
  //   /**
  //    * Content to display
  //    * @type {Object}
  //    * @param centerPanelTitle - short statement for the content placed at the top-center
  //    * @param superTitle - subheader or pre-title
  //    * @param {String} title - panel main title
  //    * @param {String} description - panel content
  //    * @param {String} contentAlign - which side to put the content
  //    * @param {Object} imageBindings - description of image to display with content
  //    *   @param {String} customPath - path to folder of image
  //    *   @param {String} image - image name with extension
  //    *   @param {String} mobileImage -image name with extension for display on mobile devices
  //    *   @param {String} imageAlt - alt message of image
  //    */
  //   content: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  //   /**
  //    * If there should be no button
  //    * @type {Boolean}
  //    */
  //   hideBtn: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   /**
  //    * If panel should have no padding in the y-axis
  //    * @type {Boolean}
  //    */
  //   disableParentPadding: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   /**
  //    * List of center panel title classes
  //    * @type {Array, Object}
  //    */
  //   centerPanelTitleClasses: {
  //     type: [Array, Object],
  //     default: undefined,
  //   },
  //   /**
  //    * List of title classes
  //    * @type {Array, Object}
  //    */
  //   titleClasses: {
  //     type: [Array, Object],
  //     default: undefined,
  //   },
  //   /**
  //    * List of content classes
  //    * @type {Array, Object}
  //    */
  //   contentClasses: {
  //     type: [Array, Object],
  //     default: undefined,
  //   },
  //   /**
  //    * List of super title classes
  //    * @type {Array, Object}
  //    */
  //   superTitleClasses: {
  //     type: [Array, Object],
  //     default: undefined,
  //   },
  //   /**
  //    * Adjusts alignment of elements in regards to the y-axis
  //    * @type {String}
  //    */
  //   align: {
  //     type: String,
  //     default: undefined,
  //   },
  //   /**
  //    * Adjusts alignment of elements in regards to the x-axis
  //    * @type {String}
  //    */
  //   justify: {
  //     type: String,
  //     default: 'center',
  //   },
  //   /**
  //    * Number of columns specified for generic sub page panel
  //    * @type {Number | String}
  //    *
  //    */
  //   containerColumn: {
  //     type: [Number, String],
  //     default: '10',
  //   },
  // },
  // data () {
  //   this.defaultTitleClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
  //   this.defaultContentClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
  //   this.defaultSuperTitleClasses = ['mc-subheader-set-4', 'font-open-sans', 'font-weight-bold', 'primary--text'];
  //   return {};
  // },
  // methods: {
  //   getPanelBindings (content) {
  //     const contentColumnBindings = {
  //       cols: 12,
  //       md: 5,
  //       // alignSelf: 'center',
  //       ...content.contentAlign === 'right' && { offsetMd: 1 },
  //     };
  //     const mediaColumnBindings = {
  //       cols: 12,
  //       md: 6,
  //       ...content.contentAlign === 'left' && { offsetMd: 1 },
  //     };
  //     const panelBindings = {
  //       centerPanelTitleClasses: this.centerPanelTitleClasses,
  //       titleClasses: this.titleClasses ? this.titleClasses : this.defaultTitleClasses,
  //       contentClasses: this.contentClasses ? this.contentClasses : this.defaultContentClasses,
  //       superTitleClasses: this.superTitleClasses ? this.superTitleClasses : this.defaultSuperTitleClasses,
  //       contentColumnBindings,
  //       mediaColumnBindings,
  //       centerPanelTitle: content.centerPanelTitle,
  //       title: content.title,
  //       superTitle: content.superTitle,
  //       description: content.description,
  //       contentRight: content.contentAlign === 'right',
  //       genericPanelBindings: {
  //         justify: this.justify,
  //         align: this.align,
  //       },
  //     };
  //     return panelBindings;
  //   },
  //   getImageBindings (imageBindings) {
  //     const [image, extension] = imageBindings.mobileImage && this.$isMobile
  //       ? imageBindings.mobileImage.split('.')
  //       : imageBindings.image.split('.');
  //     const bindings = {
  //       ...imageBindings,
  //       image,
  //       imageFileExtension: `.${extension}`,
  //       imageAlt: imageBindings.imageAlt || imageBindings.alt || this.content.title,
  //       extensionExclusive: imageBindings.extensionExclusive || (imageBindings.mobileImage && this.$isMobile),
  //       imageWidth: imageBindings.width,
  //       imageHeight: imageBindings.height,
  //     };
  //     return bindings;
  //   },
  // },
};
</script>
