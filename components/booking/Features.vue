<template lang="pug">
  v-container
    v-row(justify="center" no-gutters)
      v-col(cols="12" md="10")
        template(v-for="row in rows")
          v-row(v-if="!$isMobile" align="center").row-margins
            v-col(cols="12" md="6" :class="{ 'order-last': row.imagePos === 'left' }")
              b(v-if="row.superTitle").primary--text {{row.superTitle}}
              h1(:class="headerClasses").mt-2 {{row.title}}
              ul(v-if="row.list && row.list.length" :class="descriptionClasses")
                template(v-for="listItem in row.list")
                  li.mt-4.d-flex #[v-icon(size="25").success--text.mr-2 mdi-checkbox-marked-circle]
                    div {{listItem}}
            v-col(cols="1").subtitle-gray
            v-col(cols="12" md="5" :class="{ 'order-first': row.imagePos === 'left' }")
              img(
                :src="row.image"
                width="100%"
                style="border-radius: 5px"
              ).elevation-2
          //-Mobile
          v-row(v-else align="center" justify="center").my-10
            v-col(cols="12").text-center
              b.font-14(v-if="row.superTitle").mr-2.primary--text {{row.superTitle}}
              h1(:class="headerClasses").mt-2 {{row.title}}
            v-col(cols="10")
              img(
                :src="row.image"
                width="100%"
                style="border-radius: 5px"
              ).elevation-2
            v-col(cols="12").ml-4
              ul(v-if="row.list && row.list.length" :class="descriptionClasses")
                template(v-for="listItem in row.list")
                  li.mt-4.d-flex #[v-icon(size="25").success--text.mr-2.mb-auto mdi-checkbox-marked-circle]
                    div {{listItem}}
</template>

<script>
export default {
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
          image: require('../../assets/images/providers/pxp-page.jpg'),
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

.row-margins {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
