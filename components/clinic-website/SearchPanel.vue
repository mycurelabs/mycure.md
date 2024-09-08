<template lang="pug">
  div.full-container
    v-col(
      fluid
      :style="backgroundStyle"
    ).background-container
    template(v-if="$isMobile").search-bar-container
      v-card(height="250" style="margin-top: -100px" :class="$isMobile ? 'mx-2' :  'mx-8'").rounded-lg
        v-card-text.pt-8
          h3.mc-h3.title--text Easily book your next visit to {{ name || 'this health facility' }}
        v-card-text
          v-row(justify="center")
            v-col(cols="12" md="10")
              v-text-field(
                v-model="searchText"
                outlined
                clearable
                placeholder="Search"
                :disabled="disabled"
                @keyup.enter="debouncedSearch"
              ).mt-3.search-bar
                template(v-slot:append)
                  div(
                    @click="debouncedSearch"
                  ).search-icon.text-center.pt-2
                    v-icon(color="white") {{ mdiMagnify }}
    v-container(v-else fluid).search-bar-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center', align: 'center' }" disable-parent-padding).mt-6
          v-col(cols="12").text-center
            v-card(:height="$isWideScreen ? '280' : '240'").rounded-lg
              v-card-text(:class="$isWideScreen ? 'pt-12' : 'pt-10'")
                h3.mc-h3.title--text Easily book your next visit to {{ name || 'this health facility' }}
              v-card-text
                v-row(justify="center")
                  v-col(cols="12" md="10")
                    v-text-field(
                      v-model="searchText"
                      outlined
                      clearable
                      placeholder="Search services and doctors"
                      :disabled="disabled"
                      @keyup.enter="debouncedSearch"
                    ).mt-3.search-bar
                      template(v-slot:append)
                        v-tooltip(top)
                          template(v-slot:activator="{ on, attrs }")
                            div(
                              @click="debouncedSearch"
                              v-on="on"
                            ).search-icon.text-center.pt-2
                              v-icon(color="white") {{ mdiMagnify }}
                          span Search
                        //- div(@click="debouncedSearch").primary.search-icon.pt-3.text-center
</template>

<script>
// utils
import { mdiMagnify } from '@mdi/js';
import debounce from 'lodash/debounce';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    clinic: {
      type: Object,
      default: () => ({}),
    },
    disabled: Boolean,
  },
  data () {
    return {
      debouncedSearch: debounce(this.search, 500),
      mdiMagnify,
    };
  },
  computed: {
    searchText: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
    backgroundStyle () {
      const overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
      return { 'background-image': `${overlay}, url(${this.coverURL})` };
    },
    name () {
      return this.clinic?.name;
    },
    coverURL () {
      return this.clinic?.coverURL || require('~/assets/images/clinics-website/usp-background.png');
    },
  },
  methods: {
    search () {
      this.$emit('search', this.searchText);
    },
  },
};
</script>

<style scoped>
.full-container {
  width: 100%;
  height: 400px;
}

.background-container {
  width: 100%;
  height: 225px;
  background-size: cover;
  background-position: center;
}

.search-bar-container {
  height: 400px;
}
.search-bar >>> .v-input__slot {
  border-radius: 5px 5px 5px 5px;
  padding-right: 0 !important;
}
.search-bar >>> .v-input__append-inner {
  margin-top: 0 !important;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px !important;
}
.search-icon {
  border-radius: 5px;
  background-color: #0099CC;
  height: 40px;
  width: 40px;
}

.search-icon:hover {
  cursor: pointer;
}

@media screen and (min-width: 1015px) {
  .search-bar-container {
    margin-top: -200px;
  }
  .full-container {
    width: 100%;
    height: 525px;
  }
  .background-container {
    height: 375px;
  }
}
@media screen and (min-width: 1904px) {
  .search-bar-container {
    margin-top: -200px;
  }
  .full-container {
    width: 100%;
    height: 625px;
  }
  .background-container {
    height: 425px;
  }
}
</style>
