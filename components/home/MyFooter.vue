<template lang="pug">
  div.footer-gray
    v-container
      v-row(justify="center" align="center" no-gutters)
        v-col.text-center
          img(
            src="~/assets/images/mycure-footer-logo.png"
            alt="White MYCURE Logo"
            width="200"
          ).mt-4
      v-row.mt-4.justify-space-around
        template(v-for="(footerItem, index) in footerItems")
          v-col(cols="6" md="2").footer-section
            h4(v-if="footerItem.type === 'footer-header'").primary--text {{ footerItem.value }}
            a(
              v-for="(col, index) in footerItem.columns"
              v-if="col.type === 'link'"
              :href="col.link"
              target="_blank"
              el="noopener noreferrer"
            ).white--text.d-block.font-16 {{col.value}}
</template>

<script>
export default {
  data () {
    return {
      footerItems: [
        {
          type: 'footer-header',
          value: 'About',
          columns: [
            { type: 'link', value: 'Fight COVID-19:', link: '/index' },
            { type: 'link', value: 'Our Story', link: '/our-story' },
            { type: 'link', value: 'Blog', link: 'https://blog.mycure.md' },
            { type: 'link', value: 'Careers', link: 'https://culture.mycure.md/' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Support',
          columns: [
            { type: 'link', value: 'FAQs', link: '/faqs' },
            { type: 'link', value: 'Chat with us', link: '/our-story' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Patients',
          columns: [
            { type: 'link', value: 'Consult', link: '/' },
            { type: 'link', value: 'Lab & Imaging', link: '/' },
            { type: 'link', value: 'My Health', link: '/' },
            { type: 'link', value: 'Medicine Delivery', link: '/' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Providers',
          columns: [
            { type: 'link', value: 'Clinics', link: '/' },
            { type: 'link', value: 'Enterprise', link: '/' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Legal',
          columns: [
            { type: 'link', value: 'Terms of use', link: '/terms' },
            { type: 'link', value: 'Privacy Policy', link: '/privacy-policy' },
          ],
        },
        {
          type: 'footer-header',
          value: 'Contact Us',
          columns: [
            { type: 'link', value: 'hello@mycure.md', link: '/' },
            { type: 'link', value: '(+632) 7799 6262', link: '/' },
            { type: 'link', value: '(+63) 917 303 4350', link: '/' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-gray {
  background-color: #343a40 !important;
}
a {
  text-decoration: none !important;
}
</style>
