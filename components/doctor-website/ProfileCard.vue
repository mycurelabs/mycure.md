<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding)
        v-col(cols="12")
          v-card(elevation="0").rounded-lg.py-6.px-12
            v-row(:justify="$isMobile? 'center' : 'start'").pa-3
              v-avatar(size="100")
                img(:src="picUrl")
              v-col(cols="12" md="9")
                h3.mc-h3 {{ fullName }}
                p(v-if="!$isMobile").mc-b3.mb-0 {{ specialties.slice(0, 3).join(' | ')}}
                div(v-else)
                  p(v-for="specialty in specialties.slice(0, 4)").mb-0.mc-b2.font-weight-light {{ specialty }}
                p(v-if="practicingYear").mc-b4.mb-0 {{ `Practicing since ${practicingYear}` }}
              v-spacer
              share-button(:direction="$isMobile ? 'bottom' : 'top'" color="primary" @clipSuccess="$emit('clipSuccess')")
</template>

<script>
import {
  mdiShareVariant,
} from '@mdi/js';
import ShareButton from '~/components/doctor-website/ShareButton';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
    ShareButton,
  },
  props: {
    picUrl: {
      type: String,
      default: null,
    },
    fullName: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    practicingYear: {
      type: Number,
      default: null,
    },
  },
  data () {
    return {
      mdiShareVariant,
    };
  },
};
</script>
