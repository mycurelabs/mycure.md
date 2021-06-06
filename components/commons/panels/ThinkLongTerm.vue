<template lang="pug">
  div
    v-container
      v-row(justify="center")
        generic-panel
          v-col(cols="12").text-center
            strong(:class="metaTitleClasses").primary--text Why MYCURE?
            h2(:class="panelHeaderClasses").font-weight-semibold Think Long-Term
    generic-media-panel(
      v-for="(panel, key) in panels"
      align="center"
      :key="key"
      :content="panel"
      :title-classes="headerClasses"
      :content-classes="descriptionClasses"
      :class="{'pb-16': key === 1}"
      hide-btn
      disable-parent-padding
    )
      template(slot="content")
        p {{ panel.description }}&nbsp;
          span(v-if="$nuxt.$route.name !== 'doctors-clinics' && panel.descriptionAppend") {{ panel.descriptionAppend }}
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.panels = [
      {
        title: 'MYCURE is not just your ordinary medical app.',
        description: 'It’s a platform built for the healthcare ecosystem. You can connect and share files with clinics, diagnostic centers, hospitals, and other physicians within the MYCURE network.',
        descriptionAppend: 'MYCURE has open APIs to give you more flexibility in integrating with other systems.',
        imageBindings: {
          image: 'Preventing Failures.png',
          customPath: 'commons/',
          extensionExclusive: true,
        },
        contentAlign: 'right',
      },
      {
        title: 'As your practice grows, your tech tools need to upgrade too.',
        description: 'The great thing about starting with MYCURE is that you only need to upgrade once you need to. We’re here to make your practice so much easier to manage because you are a crucial part of healthcare. Together, let’s make this world a healthier place.',
        imageBindings: {
          image: 'As your practice grows.png',
          customPath: 'commons/',
          extensionExclusive: true,
        },
        contentAlign: 'left',
      },
    ];
    return {};
  },
  computed: {
    panelHeaderClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
    },
    metaTitleClasses () {
      return classBinder(this, {
        regular: ['font-xs'],
        wide: ['font-s'],
      });
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-s'],
          regular: ['font-m'],
          wide: ['font-l'],
        }),
        'primary--text',
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
};
</script>
