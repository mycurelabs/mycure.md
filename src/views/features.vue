<template lang="pug">
  div#top.white
    usp
    roles-and-privileges
    medical-records
    reports
    billing
    registration-and-queuing
    lab-and-imaging
    inventory
    syncbase
    //- cta
    mc-cta-bottom(
      :ctaContent="ctaContent"
      :btnColor="$mcColors.mcAltGreen"
    )
</template>

<script>
import McToolbarHome from '@/components/commons/mc-toolbar-home';
import McFooter from '@/components/commons/mc-footer';
import Usp from '@/components/features/usp';
import RolesAndPrivileges from '@/components/features/roles-and-privileges';
import MedicalRecords from '@/components/features/medical-records';
import RegistrationAndQueuing from '@/components/features/registration-and-queuing';
import Billing from '@/components/features/billing';
import LabAndImaging from '@/components/features/lab-and-imaging';
import Inventory from '@/components/features/inventory';
import Reports from '@/components/features/reports';
import Syncbase from '@/components/features/syncbase';
import McCtaBottom from '@/components/commons/mc-cta-bottom';
import VueScrollTo from 'vue-scrollto';
import { parseTextWithNewLine } from '@/utils';

export default {
  components: {
    McToolbarHome,
    McFooter,
    Usp,
    RolesAndPrivileges,
    MedicalRecords,
    RegistrationAndQueuing,
    Billing,
    LabAndImaging,
    Inventory,
    Reports,
    Syncbase,
    McCtaBottom
  },
  data () {
    return {
      ctaContent: {
        text: 'Embrace a new habit',
        subtext: this.parseCtaSubText(),
        btnText: 'Get Started Today',
        image: 'mycure-web-footer'
      }
    };
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  },
  computed: {
    uspTitle () {
      const { title } = this.uspContents;
      return parseTextWithNewLine(title, ['time', 'more']);
    }
  },
  methods: {
    parseCtaSubText () {
      const subtext = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
      return subtext;
    }
  }
};
</script>