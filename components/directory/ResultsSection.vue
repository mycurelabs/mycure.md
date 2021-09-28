<template lang="pug">
  v-container
    v-row(justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-container
          v-row(align="center" justify="center" :class="$isMobile? ( type === 'account' ? 'results-margin-mobile' : 'results-margin-mobile-org') : 'results-margin' ").results-summary
            v-col(v-if="!loading" cols="12" :class="{'text-center': $isMobile}")
              v-row(align="center")
                v-col(align="start")
                  p(v-if="itemsTotal") Showing&nbsp;
                    strong.primary--text {{ itemsTotal }}&nbsp;
                    | {{ resultsName }}{{ itemsTotal > 1 ? 's' : '' }}
                  p(v-else) There are no results available.
            v-col(cols="12")
              v-row(v-if="loading" justify="center")
                v-col(cols="12" md="5").text-center
                  v-progress-circular(
                    color="primary"
                    indeterminate
                    size="100"
                  ).mt-16
              v-row(v-else-if="items.length" align="stretch")
                v-col(
                  v-for="(item, key) in items"
                  :key="key"
                  cols="12"
                  md="4"
                )
                  doc-search-card(
                    v-if="type === 'account'"
                    :doctor="item"
                    :read-only="readOnly"
                  )
                  clinic-search-card(
                    v-else-if="type === 'organization'"
                    :organization="item"
                    :read-only="readOnly"
                  )
              br
              v-pagination(
                v-model="page"
                :length="itemsLength"
                :total-visible="totalVisible"
              )
</template>

<script>
import ClinicSearchCard from '~/components/directory/ClinicSearchCard';
import DocSearchCard from '~/components/directory/DocSearchCard';

export default {
  components: {
    ClinicSearchCard,
    DocSearchCard,
    GenericPanel: () => import('~/components/generic/GenericPanel.vue'),
  },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    resultsName: {
      type: String,
      default: 'results',
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Results Type
     * e.g. doctor | organization | service
     */
    type: {
      type: String,
      default: null,
    },
    /**
     * Pagination
     * @param {Object} pagination
     * @param {Number} pagination.page
     * @param {Number} pagination.itemsLength
     * @param {Number} pagination.itemsTotal
     * @param {Number} pagination.totalVisible
     */
    pagination: {
      type: Object,
      default: () => ({}),
    },
    // Read only
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    page: {
      get () {
        return this.pagination.page || 0;
      },
      set (val) {
        this.$emit('page:update', val);
      },
    },
    itemsLength () {
      return this.pagination.itemsLength || 0;
    },
    totalVisible () {
      return this.pagination.totalVisible || 0;
    },
    itemsTotal () {
      return this.pagination.itemsTotal || 0;
    },
  },
};
</script>

<style scoped>
.results-summary {
  z-index: -1;
  /* background-color: #fafafa; */
}

.results-margin {
  margin-top: 280px;
}
.results-margin-mobile {
  margin-top: 230px;
}
.results-margin-mobile-org {
  margin-top: 300px;
}

@media screen and (max-width: 970px) {
  .results-margin {
    margin-top: 330px;
  }
}
</style>
