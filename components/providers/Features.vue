<template lang="pug">
  v-container
    template(v-for="row in rows")
      v-row(v-if="!$isMobile" align="center").my-10
        v-col(cols="12" md="6" :class="{ 'order-last': row.imagePos === 'left' }").header-gray
          b(v-if="row.superTitle").primary--text {{row.superTitle}}
            v-chip(
              v-if="row.superTitleChipText"
              dense
              color="#E6C03A"
            ).ml-4.white--text {{row.superTitleChipText}}
          h1.mt-2 {{row.title}}
          ul(v-if="row.list && row.list.length")
            template(v-for="listItem in row.list")
              li.mt-4.d-flex #[v-icon(size="25").success--text.mr-2 mdi-checkbox-marked-circle]
                div {{listItem}}
          v-btn(
            v-if="row.cta"
            color="primary"
            rel="noreferrer noopener"
            target="_blank"
            text
            :href="row.cta.link"
          ).mt-2.text-none {{row.cta.text}} #[v-icon {{row.cta.icon}}]
        v-col(cols="1").subtitle-gray
        v-col(cols="12" md="5" :class="{ 'order-first': row.imagePos === 'left' }")
          img(
            :src="row.image"
            width="100%"
            style="border-radius: 5px"
          ).elevation-2
      //-Mobile
      v-row(v-else align="center" justify="center").my-10
        v-col(cols="12").header-gray.text-center
          b.font-14(v-if="row.superTitle").mr-2.primary--text {{row.superTitle}}
            v-chip(
              v-if="row.superTitleChipText"
              dense
              color="#E6C03A"
            ).ml-4.white--text {{row.superTitleChipText}}
          h1.font-20.mt-2 {{row.title}}
        v-col(cols="10")
          img(
            :src="row.image"
            width="100%"
            style="border-radius: 5px"
          ).elevation-2
        v-col(cols="12").ml-4
          ul(v-if="row.list && row.list.length")
            template(v-for="listItem in row.list")
              li.mt-4.d-flex #[v-icon(size="25").success--text.mr-2.mb-auto mdi-checkbox-marked-circle]
                div {{listItem}}
          v-btn(
            v-if="row.cta"
            color="primary"
            rel="noreferrer noopener"
            target="_blank"
            text
            :href="row.cta.link"
          ).mt-2.text-none {{row.cta.text}} #[v-icon {{row.cta.icon}}]
</template>

<script>
export default {
  data () {
    return {
      rows: [
        {
          imagePos: 'right',
          image: require('../../assets/images/providers/Phone-Mockup.png'),
          title: 'MYCURE makes every step of patient care a breeze',
          list: [
            'Organized patient visits for easy COVID-19 safety compliance',
            'Patient and doctor have access to necessary medical records',
            'Patients pay using multiple online payment channels',
          ],
        },
        {
          imagePos: 'left',
          image: require('../../assets/images/providers/Homepage-cropped.png'),
          title: 'Patients book your healthcare services, keeping you both safe',
          superTitle: 'DIRECTORY',
          // superTitleChipText: 'Coming Soon!',
          list: [
            'Acquire patients beyond your reach',
            'Hassle-free from booking to billing',
            'Covers virtual to physical accommodation',
          ],
        },
        {
          imagePos: 'right',
          image: require('../../assets/images/providers/Clinic-Website-cropped.png'),
          title: 'Impress your patients when they learn about you on your website',
          superTitle: 'FREE WEBSITE',
          list: [
            'Increase exposure for your medical services',
            'Promote your healthcare providers',
            'Patients book directly with you',
          ],
          // cta: {
          //   link: `${process.env.WEB_MAIN_URL}/clinics/5f3f8084c05456557164c3d3`,
          //   text: 'View sample website',
          //   icon: 'mdi-arrow-right',
          // },
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
