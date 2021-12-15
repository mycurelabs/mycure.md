<template lang="pug">
  div(v-if="!loading.page").main-container
    main-panel(
      ref="top"
      :pic-url="picURL"
      :clinic-name="clinicName"
      :formatted-address="formattedAddress"
      :clinic-phone="clinicPhone"
      :style="{ height: isVerified ? $isMobile ? '120vh' : '130vh' : '120vh' }"
      @book="onBook"
      @redirect="onRedirect($event)"
    )
    //- insert panels here
    //- insert search panel
    //- Workflow area
    v-container(ref="tabs").pb-16
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding).mt-6
          v-col(cols="12")
            v-tabs(
              right
              v-model="tabSelect"
              background-color="transparent"
              slider-color="primary"
              active-class="black--text"
            ).mb-6
              v-row(v-if="!$isMobile" align="center" :style="$isMobile ? 'margin-bottom: 10px' : ''").pa-3
                img(
                  src="~/assets/images/MYCURE-icon.png"
                  width=" 20"
                  alt="MYCURE icon"
                  @click="onHome"
                ).mr-2
                span(@click="onHome" style="color: #72727D;").mc-b2 Home /&nbsp;
                span(@click="onRedirect(tabSelect)").mc-b2 {{ tabSelect }}
              v-tab(
                v-for="(tab, key) in tabsList"
                :key="key"
                :href="`#${tab}`"
                :class="{'ml-4': !$isMobile}"
                dense
              ).mc-hyp2.font-weight-bold.text-none {{ tab }}
              v-tab-item(value="Services")
                div.grey-bg.pt-8
                  h3 hello
              v-tab-item(value="Our Doctors")
                div.grey-bg.pt-8
                  h3 hello
              v-tab-item(value="About Clinic")
                div.grey-bg.pt-8
                  about-clinic(
                    :pic-url="picURL"
                    :clinic-name="clinicName"
                    :description="description"
                  )
              v-tab-item(value="Contact Us")
                div.grey-bg.pt-8
                  h3 hello

</template>

<script>
import isEmpty from 'lodash/isEmpty';
// utils
import { getOrganization } from '~/utils/axios/organizations';
import { formatAddress } from '~/utils/formats';
// components
import MainPanel from '~/components/clinic-website/new/MainPanel';
import AboutClinic from '~/components/clinic-website/new/AboutClinic';
import GenericPanel from '~/components/generic/GenericPanel';
// Insert components from '~/compononets/clinic-website/new'
export default {
  components: {
    MainPanel,
    GenericPanel,
    AboutClinic,
  },
  layout: 'empty',
  async asyncData ({ params, $sdk, redirect, error }) {
    try {
      const clinic = await getOrganization({ id: params.id }, true) || {};
      // Show 404 if no clinic found, or if clinic is existing, but has not setup its website yet
      // Will not redirect if it's a 'diagnostic-center' since these are the orgs we have up for claiming
      if (isEmpty(clinic) ||
        (!clinic?.websiteId && clinic?.type !== 'diagnostic-center') ||
        !clinic?.publicFields?.length) {
        return error({ statusCode: 404, message: 'clinic-not-found' });
      }
      return {
        clinic,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    this.tabsList = ['Services', 'Our Doctors', 'About Clinic', 'Contact Us'];
    return {
      loading: {
        page: false,
      },
      tabSelect: 'Services',
    };
  },
  computed: {
    picURL () {
      return this.clinic?.picURL || require('~/assets/images/facility-placeholder.jpg');
    },
    clinicName () {
      return this.clinic?.name || 'MYCURE Clinic';
    },
    formattedAddress () {
      if (!this.clinic?.address) return '';
      return formatAddress(this.clinic.address, 'street1, street2, city, province, country');
    },
    clinicPhone () {
      const { phone, phones } = this.clinic;
      if (phones?.length) return phones.join(', ');
      return phone || '';
    },
    description () {
      return this.clinic?.description ||
      `${this.name || 'This facility'} specializes in telehealth services. ${this.name || 'It'} is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
  },
  created () {
    //
  },
  methods: {
    onRedirect (type) {
      this.tabSelect = type;
      const element = this.$refs.tabs;
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
    onHome () {
      const element = this.$refs.top;
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
.main-container {
  background-color: #f9f9f9;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.grey-bg {
  background-color: #f9f9f9;
}
</style>
