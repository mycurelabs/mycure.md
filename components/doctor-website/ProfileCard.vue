<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:row-bindings="{ justify: 'center' }" disable-parent-padding)
        v-col(cols="12")
          v-card(elevation="0").rounded-xl.py-6.px-12
            v-row.pa-3
              v-avatar(size="100")
                img(:src="picUrl")
              v-col(cols="9")
                h3.mc-h3 {{ fullName }}
                p.mc-b3.mb-0 {{ specialties.slice(0, 3).join(' | ')}}
                p(v-if="practicingYear").mc-b4.mb-0 {{ `Practicing since ${practicingYear}` }}
              v-spacer
              share-button(direction="top" color="primary")
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
