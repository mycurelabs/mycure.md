<template lang="pug">
  div
    generic-media-panel(
      v-for="(content, key) in contents"
      :key="key"
      :content="content"
      :title-classes="headerClasses"
      hide-btn
    )
      template(slot="content")
        v-row(
          v-for="(item, key) in content.list"
          :key="key"
          dense
        ).my-1
          div.d-flex
            v-icon(left color="primary") mdi-checkbox-marked-circle
            span(:class="descriptionClasses") {{ item }}
</template>

<script>
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
export default {
  components: {
    GenericMediaPanel,
  },
  props: {
    headerClasses: {
      type: Array,
      default: () => ([]),
    },
    descriptionClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      contents: [
        {
          title: 'MYCURE makes every step of patient care a breeze',
          list: [
            'Organized patient visits for easy COVID-19 safety compliance',
            'Patient and doctor have access to necessary medical records',
            'Patients pay using multiple online payment channels',
          ],
          imageBindings: {
            image: 'Phone-Mockup.png',
            customPath: 'booking/',
            extensionExclusive: true,
          },
          contentAlign: 'left',
        },
        {
          title: 'Patients book your healthcare services, keeping you both safe',
          superTitle: 'DIRECTORY',
          list: [
            'Acquire patients beyond your reach',
            'Hassle-free from booking to billing',
            'Covers virtual to physical accommodation',
          ],
          imageBindings: {
            image: 'pxp-page.png',
            customPath: 'booking/',
            extensionExclusive: true,
          },
          contentAlign: 'right',
        },
        {
          title: 'Impress your patients when they learn about you on your website',
          superTitle: 'FREE WEBSITE',
          list: [
            'Increase exposure for your medical services',
            'Promote your healthcare providers',
            'Patients book directly with you',
          ],
          imageBindings: {
            image: 'Clinic-Website-cropped.png',
            customPath: 'booking/',
            extensionExclusive: true,
          },
          contentAlign: 'left',
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

</style>
