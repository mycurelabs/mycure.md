<template lang="pug">
  v-container
    template(v-for="row in rows")
      v-row(align="center").my-10
        v-col(cols="12" md="6")
          b(v-if="row.superTitle").mr-2.primary--text {{row.superTitle}}
            v-chip(
              v-if="row.superTitleChipText"
              dense
              color="#E6C03A"
            ) {{row.superTitleChipText}}
          h1 {{row.title}}
          ul(v-if="row.list && row.list.length")
            template(v-for="listItem in row.list")
              li #[v-icon(size="20").success--text mdi-checkbox-marked-circle] {{listItem}}
          v-btn(
            v-if="row.cta"
            color="primary"
            rel="noreferrer noopener"
            target="_blank"
            text
            :href="row.cta.link"
          ).mt-2.text-none {{row.cta.text}} #[v-icon {{row.cta.icon}}]
        v-col(cols="12" md="6" :class="{ 'order-first': row.imagePos === 'left' }")
          img(
            :src="row.image"
            width="100%"
            style="border-radius: 5px"
          ).elevation-2
</template>

<script>
export default {
  data () {
    return {
      rows: [
        {
          imagePos: 'right',
          image: require('../../assets/images/providers/Phone-Mockup.png'),
          title: 'You and your patients are the stars on MYCURE, making every step easy from appointments to analytics',
          list: [
            'Bring your healthcare services online',
            'Know the exact number of patients before going to your clinic',
            'Control number of patients everyday for a worry-free practice',
          ],
        },
        {
          imagePos: 'left',
          image: require('../../assets/images/providers/Homepage-cropped.png'),
          title: 'Patients can book your healthcare services online, keeping you both safe',
          superTitle: 'DIRECTORY',
          superTitleChipText: 'Coming Soon!',
          list: [
            'Acquire patients beyond your reach',
            'Hassle-free from booking to billing',
            'Better communication from virtual to physical accomodation',
          ],
        },
        {
          imagePos: 'right',
          image: require('../../assets/images/providers/Clinic-Website-cropped.png'),
          title: 'Get a good first impression when patients learn about you on your very own website',
          superTitle: 'FREE WEBSITE',
          list: [
            'Increase exposure for your medical services',
            'Promote your healthcare providers',
            'Patients book directly with you',
          ],
          cta: {
            link: `${process.env.WEB_MAIN_URL}/clinics/5f3f8084c05456557164c3d3`,
            text: 'View sample website',
            icon: 'mdi-arrow-right',
          },
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
