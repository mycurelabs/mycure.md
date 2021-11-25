<template lang="pug">
  div(v-if="!loading").footer-gray
     v-container.pa-0
        v-row(justify="center")
          generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
            v-col(cols="12")
              v-row(v-if="!$isMobile").mt-4.justify-space-around
                template(v-for="(footerItem, index) in footerItems")
                  v-col(cols="6" md="2").footer-section.shrink
                    p(v-if="footerItem.type === 'footer-header'").font-poppins.mc-h4.mt-3 {{ footerItem.value.toUpperCase() }}
                    img(
                      v-else-if="footerItem.type === 'footer-logo'"
                      src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
                      alt="White MYCURE Logo"
                      width="150px"
                      height="41.89px"
                    )
                    div(v-for="(col, index) in footerItem.columns").my-3
                      a(
                        v-if="col.type === 'link'"
                        :href="col.link"
                      ).mc-hyp2-no-font-style.d-block {{col.value}}
                      a(
                        v-else-if="col.type === 'email'"
                        :href="`mailto:${col.value}`"
                      ).mc-hyp2-no-font-style.d-block {{col.value}}
                      a(
                        v-else-if="col.type === 'chat'"
                        @click.stop="toggleChat()"
                      ).mc-hyp2-no-font-style.d-block {{col.value}}
                      span(v-else).primary--text.mc-hyp2-no-font-style.d-block {{col.value}}
              v-row(v-if="$isMobile")
                v-col(cols="12").text-center.mt-3
                  img(
                    src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
                    alt="White MYCURE Logo"
                    width="150px"
                    height="41.89px"
                  )
                  template(v-for="(col, index) in footerItems[0].columns")
                    a(
                      v-if="col.type === 'email'"
                      :href="`mailto:${col.value}`"
                    ).black--text.d-block.font-14 {{col.value}}
                    span(v-else).black--text.d-block.font-14 {{ col.value }}
                v-expansion-panels(flat).footer-gray.elevation-0.mx-2
                  v-expansion-panel(v-for="(footerItem, index) in footerItems" :key="index").footer-gray
                    template(v-if="footerItem.type === 'footer-header'")
                      v-expansion-panel-header.primary--text {{ footerItem.value }}
                        template(v-slot:actions)
                          v-icon(color="primary") {{ mdiChevronDown }}
                      template(v-for="(col, index) in footerItem.columns")
                        v-expansion-panel-content
                          a(
                            v-if="col.type === 'link'"
                            :href="col.link"
                            target="_blank"
                            el="noopener noreferrer"
                          ).black--text.d-block.font-14 {{col.value}}
                          a(
                            v-if="col.type === 'phone'"
                            :href="`tel:${col.value}`"
                          ).black--text.d-block.font-14 {{col.value}}
                          a(
                            v-if="col.type === 'email'"
                            :href="`mailto:${col.value}`"
                          ).black--text.d-block.font-14 {{col.value}}
                          a(
                            v-if="col.type === 'chat'"
                            @click.stop="toggleChat()"
                          ).black--text.d-block.font-14 {{col.value}}
              v-row(align="center" no-gutters).mt-10
                v-col(
                  :class="{ 'text-center order-last' : $isMobile }"
                  cols="12"
                  md="7"
                ).font-14
                  span.call-number.black--text Copyright &copy; {{ new Date().getFullYear() }}
                    a(href="https://mycure.md" rel="noopener noreferrer")
                      strong.primary--text &nbsp;MYCURE Inc.&nbsp;
                  span.call-number.black--text #[br(v-if="$isMobile")] All Rights Reserved.
                v-col(v-if="$isMobile" cols="12")
                  hr.mb-4
                v-col(
                  :class="{ 'order-first text-center ' : $isMobile, 'text-right' : !$isMobile }"
                  cols="12"
                  md="5"
                )
                  template(v-for="(account, key) in socMed")
                    a(:href="account.link" target="_blank" rel="noopener noreferrer")
                      img(:src="require(`~/assets/images/${ account.icon }`)" width="20" height="20" :alt="account.name").ma-4
</template>

<script>
import { mdiChevronDown } from '@mdi/js';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  data () {
    return {
      footerItems: [
        {
          type: 'footer-logo',
          columns: [
            { type: 'email', value: 'hello@mycure.md' },
            { type: 'phone', value: 'PH: (+632) 7799 6262' },
            { type: 'phone', value: 'PH: (+63) 917 303 4350' },
            { type: 'phone', value: 'US: 1-671-646-2733' },
          ],
        },
        {
          type: 'footer-header',
          value: 'About',
          columns: [
            // { type: 'link', value: 'Fight COVID-19: Free EMR', link: '/fight-covid-19' },
            { type: 'link', value: 'Our Story', link: '/our-story' },
            { type: 'link', value: 'Blog', link: 'https://blog.mycure.md' },
            { type: 'link', value: 'Careers', link: 'https://culture.mycure.md/' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Solutions',
          columns: [
            { type: 'link', value: 'Doctor\'s Clinics', link: '/doctors-clinics' },
            { type: 'link', value: 'Outpatient Clinics', link: '/clinics' },
            { type: 'link', value: 'Skin Clinics', link: '/clinics/skin' },
            { type: 'link', value: 'Dental Clinics', link: '/clinics/dental' },
            { type: 'link', value: 'Corporate Clinics', link: '/clinics/corporate' },
            { type: 'link', value: 'Diagnostics', link: '/diagnostics' },
            { type: 'link', value: 'OFW Clinics', link: '/diagnostics/ofw' },
            { type: 'link', value: 'Mobile Labs', link: '/diagnostics/mobile-labs' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Services',
          columns: [
            { type: 'link', value: 'CMS Features', link: '/features' },
            { type: 'link', value: 'Appointment Scheduling', link: '/booking' },
            { type: 'link', value: 'Work Offline', link: '/syncbase' },
            { type: 'link', value: 'Virtual Practice', link: '/telehealth' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Legal',
          columns: [
            { type: 'link', value: 'Terms of Use', link: '/terms' },
            { type: 'link', value: 'Privacy Policy', link: '/privacy-policy' },
          ],
        },
      ],
      socMed: [
        {
          name: 'MYCURE - Instagram',
          link: 'https://www.instagram.com/mycure.md/',
          icon: 'mycure-homepage-wireframe-icon-ig.png',
          id: 'footer-ig-btn',
        },
        {
          name: 'MYCURE - LinkedIn',
          link: 'https://www.linkedin.com/company/mycure',
          icon: 'mycure-homepage-wireframe-icon-linkedin.png',
          id: 'footer-linkedin-btn',
        },
        {
          name: 'MYCURE - YouTube',
          link: 'https://www.youtube.com/channel/UCfQ5QBdFh6f9Tuj2tWkRmvg',
          icon: 'mycure-homepage-wireframe-icon-ytub-e.png',
          id: 'footer-yt-btn',
        },
        {
          name: 'MYCURE - Facebook',
          link: 'https://www.facebook.com/mycure.md',
          icon: 'mycure-homepage-wireframe-icon-fb.png',
          id: 'footer-fb-btn',
        },
        {
          name: 'MYCURE - Twitter',
          link: 'https://twitter.com/mycureapp',
          icon: 'mycure-homepage-wireframe-icon-twitter.png',
          id: 'footer-twitter-btn',
        },
      ],
      loading: true,
      mdiChevronDown,
    };
  },
  created () {
    this.loading = false;
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.footer-gray {
  background-color: #f0f0f0!important;
}
a {
  text-decoration: none !important;
}

.v-expansion-panel-header__icon i{
  color: #009fdf;
}
</style>
