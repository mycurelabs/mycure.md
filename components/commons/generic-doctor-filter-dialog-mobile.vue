<template lang="pug">
  v-dialog(v-model="optionDialog" max-width="280" persistent)
    v-container.white.px-0
      div.px-4
        p.font-20.primary--text Filter Settings
      div
        v-btn(
          :outlined="mobileViewType === 'list'"
          width="50%"
          :color="mobileViewType === 'grid' ? 'primary' : 'grey'"
          tile
          @click="$emit('update-mobile-view', 'grid')"
          elevation="0"
        )
          v-icon(
            size="24"
            :color="mobileViewType === 'grid' ? 'white' : 'grey'"
          ) mdi-view-grid
        v-btn(
          :outlined="mobileViewType === 'grid'"
          width="50%"
          :color="mobileViewType === 'list' ? 'primary' : 'grey'"
          tile
          @click="$emit('update-mobile-view', 'list')"
          elevation="0"
        )
          v-icon(
            size="32"
            :color="mobileViewType === 'list' ? 'white' : 'grey'"
          ) mdi-view-list
      div.px-4.mt-3
        p.mb-3 Specialization
        v-select(
          v-model="selectedSpecialization"
          :items="specializations"
          item-text="info"
          item-value="tag"
          dense
          outlined
        ).input-field
      div.px-4.mt-3
        p.mb-3 Sort by
        v-select(
          v-model="selectedSort"
          :items="sortBy"
          item-text="info"
          item-value="tag"
          dense
          outlined
        ).input-field
      div.px-4.mt-6
        v-btn(
          width="50%"
          tile
          elevation="0"
          rounded
          @click="$emit('close-dialog')"
        ).letter-spacing-normal.text-none Cancel
        v-btn(
          width="50%"
          color="primary"
          tile
          elevation="0"
          rounded
          @click="$emit('apply-filters-mobile')"
        ).letter-spacing-normal.text-none Update
</template>

<script>
export default {
  props: {
    optionDialog: {
      type: Boolean,
      default: false,
    },
    closeDialog: {
      type: Function,
      default: () => {},
    },
    applyFiltersMobile: {
      type: Function,
      default: () => {},
    },
    mobileViewType: {
      type: String,
      default: 'grid',
    },
    /**
     * Array of sorting objects
     * @type {Array}
     */
    specializations: {
      type: Array,
      default: () => ([]),
    },
    /**
     * Array of filter objects
     * @type {Array}
     */
    sortBy: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      selectedSpecialization: 'default',
      selectedSort: 'default',
    };
  },
};
</script>

<style scoped>
.input-field {
  height: 40px;
}
</style>
