<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container.px-5
        v-layout(row justify-center)
          v-layout(column justify-center)
            div(v-for="(item, i) in items" :key="i").padding-top-75
              div.hr-blue.margin-top-50
              v-layout(row justify-center).pb-5
                v-flex(xs7).text-xs-center
                  h2.font-36 {{ item.title }}
              v-layout(row justify-center)
                v-flex(xs12 md5).pr-5
                  img(
                    :src="require(`@/assets/images/${ item.image }.png`)"
                    height="300"
                  )
                v-flex(xs12 md8 align-self-center)
                  //- span(v-if="i===1").font-weight-bold.font-18 Solo is designed to work in areas with zero or low internet.                 
                  span(v-if="i===1").font-18.font-weight-bold Solo is designed to work in areas with zero or low internet.
                    |
                    span.font-18.font-weight-regular &nbsp;Ideal to be used in health community centers as well as doctors in the field, the ones doing voluntary work on mission.
                  p.font-18 {{ item.content1 }}
                  p.font-18 {{ item.content2 }}
                    span(v-if="i === 1").font-18.font-weight-bold &nbsp;More importantly, it's FREE.
                  p.font-18(v-if="i === 1") For more information on Solo, please email us at #[span.primary--text hello@mycure.md].
                  v-btn(
                    v-if="i === 3"
                    color="#2e9fdf"
                    @click.stop="toggleChat"
                    large
                  ).text-none
                    strong.font-18.white--text Contact us 
    div(v-else)
      v-container.pt-5
        div(v-for="(item, i) in items" :key="i").pb-5
          v-layout(row justify-center).pb-5
            v-flex(xs12).text-xs-center
              h2.font-36 {{ item.title }}
          v-layout(column justify-center)
            v-flex(xs12 md12 align-self-center)
              img(
                :src="require(`@/assets/images/${ item.image }.png`)"
                height="300"
              )
            v-flex(xs12 md12 align-self-center).pt-3.text-xs-center
              span(v-if="i===1").font-18.font-weight-bold Solo is designed to work in areas with zero or low internet.
                |
                span.font-18.font-weight-regular &nbsp; Ideal to be used in health community centers as well as doctors in the field, the ones doing voluntary work on mission.
              p.font-18 {{ item.content1 }}
              p.font-18 {{ item.content2 }}
                span(v-if="i === 1").font-18.font-weight-bold &nbsp;More importantly, it's FREE.
              p.font-18(v-if="i === 1") For more information on Solo, please email us at #[span.primary--text hello@mycure.md].
              v-btn(
                v-if="i === 3"
                color="#2e9fdf"
                @click.stop="toggleChat"
                large
              ).text-none
                strong.font-18.white--text Contact us 
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        items: [
          {
            image: 'mycure-web-banner-circles-csr-01-logo',
            title: 'Enabling heroes, Saving lives.',
            content1: 'The team behind MYCURE has from the onset agreed to start something that will have an impact to humanity. They pledge to share the technology they build to the world with little to no cost.',
            content2: 'Thus, they created Solo - the first-ever FREE Patient Records Organizer that works offline and syncs online using cloud storage.'
          },
          {
            image: 'mycure-web-banner-circles-csr-02-helping-hands',
            title: 'Social Responsibility',
            // content1: 'Ideal to be used in health community centers as well as doctors in the field, the ones doing voluntary work on mission.',
            content2: 'While there are other electronic medical record (EMR) systems around, Solo uses advanced tech, applies user-friendly flows and continuously improves.'
          },
          {
            image: 'mycure-web-banner-circles-csr-03-group-of-doctors',
            title: 'Making Technology Available to 7 Million Doctors Worldwide',
            content1: 'MYCURE\'s vision is to build and provide powerful technology to help organize, manage and secure the world\'s health data.',
            content2: 'These tools aim to help our health professionals become more efficient in what they do, to save more lives and continue to be our everyday unsung heroes.'
          },
          {
            image: 'mycure-web-banner-circles-csr-04-communities',
            title: 'Sharing Our Expertise for Better Communities',
            content1: 'We are open for partnerships to doctors, NGOs, and health community centers who want to get involved with outreach work and medical missions with us.',
            content2: ''
          }
        ]
      };
    },
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      },
    }
  };
</script>

<style scoped>
a {
  text-decoration: none;
}
.padding-top-75 {
  padding-top: 75px;
}
.margin-top-50 {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>
