<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Build lasting connections with your patients"
      meta-title="MYCURE Patient Relationship Management"
      btn-text="Book a Demo"
    )
    //- 2nd panel
    features(
      title="Let them know you are there."
      description="Reinforce continuity of care in an effective and timely way using this medical CRM."
      :items="features"
    )
    //- 3rd panel
    generic-media-panel(
      content-align-right
      header="Connect with your EMR"
      cols-left="6"
      cols-right="6"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      :descriptions="['MYCURE allows API integrations with other EMR software.']"
      dummy
    )
    //- 4th panel
    generic-media-panel(
      header="Don't have an EMR yet?"
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header-classes="headerClasses"
      :dense="$isMobile"
      dummy
    )
    //- 5th to 6th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="info.header"
      :descriptions="info.descriptions"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      dummy
    )
      //- Check list
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="descriptionClasses") {{ item }}
    //- 7th panel
    generic-media-panel(
      header="Find the best combination to engage with your patients"
      :descriptions="['Book a demo with our friendly experts today.']"
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
    ThinkLongTerm,
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Quick Calls and Chats',
      },
      {
        title: 'Appointment Schedule',
      },
      {
        title: 'SMS and In-app Reminders',
      },
      {
        title: 'Promotions and Packages',
      },
      {
        title: 'Feedback Forms',
      },
    ];
    this.infoPanels = [
      {
        header: 'Meet Oliver',
        descriptions: [
          'Oliver is MYCURE’s virtual assistant that checks on your patients if they are diligently following your care plan. He’s undergoing rigorous training right now and we’ll get back to you once he’s done!',
        ],
      },
      {
        header: 'One tool to rule them all.',
        descriptions: [
          'Why use multiple apps when you can get all features in one account?',
        ],
        list: [
          'Designed for medical care',
          'API Integrations available',
          'Easy to set up',
        ],
      },
    ];
    this.headerClasses = ['mc-title-set-2', 'lh-title'];
    this.descriptionClasses = ['mc-content-set-2', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Patient Relationship Management',
      description: 'Build lasting connections with your patients with MYCURE’s medical CRM by making quick calls and appointments to reinforce continuity of care in effective ways.',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  created () {
    this.loading = false;
  },
};
</script>
