<template lang="pug">
  v-row(justify="center" align="center" no-gutters)
    v-col(cols="12").pt-10
      template(v-if="materials.length")
        v-row
          v-col(cols="12" md="5").px-5
            span.font-weight-bold Browse by Tag:&nbsp;
            br
            br
            v-row
              v-autocomplete(
                v-model="selectedCategory"
                label="Select Tags"
                multiple
                dense
                outlined
                clearable
                :disabled="isPreviewMode"
                :items="categories"
              )
          v-col(cols="12" md="7").px-5
            span.font-weight-bold Sort by
            br
            br
            v-row
              v-select(
                v-model="materialSorter"
                outlined
                dense
                clearable
                label="Newest, Oldest, Alphabetically"
                item-text="text"
                item-value="value"
                :items="sortTypes"
                :disabled="isPreviewMode"
                @change="sortMaterials(materialSorter)"
                @clear="filteredMaterials = [...materials]"
              )
        v-row.pt-5
          v-col(cols="12")
            v-row(align="stretch")
              v-col(
                v-for="(material, key) in filteredMaterials"
                :key="key"
                cols="12"
                md="6"
              )
                v-card(height="100%").material-container
                  v-card-text
                    h3.my-2 {{ material.title }}
                    p.my-2 {{ material.description }}
                    i.primary--text.font-12(v-if="material.category") {{ material.category }}
                  div.material-bottom.text-center.pa-3
                    v-btn(
                      depressed
                      block
                      color="primary"
                      @click="openFile(material)"
                    ).text-none.font-weight-bold View
      template(v-else)
        p.text-center.font-open-sans.font-gray No materials have been added to this section yet. You may check this website from time to time for updates!
</template>

<script>
import uniqBy from 'lodash/uniqBy';
import { fetchLearningCornerMaterials } from '~/utils/axios';

export default {
  props: {
    doctorId: {
      type: String,
      default: null,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.sortTypes = [
      {
        text: 'Newest',
        value: 'newest',
      },
      {
        text: 'Oldest',
        value: 'oldest',
      },
      {
        text: 'Alphabetically',
        value: 'alphabetically',
      },
    ];
    return {
      materials: [],
      filteredMaterials: [],
      selectedCategory: [],
      materialSorter: null,
    };
  },
  computed: {
    categories () {
      if (!this.materials.length) {
        return [];
      }
      return uniqBy(this.materials, 'category')
        ?.map(material => material.category) || [];
    },
  },
  watch: {
    selectedCategory (val) {
      if (val.length) {
        this.filteredMaterials = [...this.materials].filter(material => val.includes(material.category));
        return;
      }
      this.filteredMaterials = [...this.materials];
    },
  },
  async mounted () {
    await this.fetchMaterials();
  },
  methods: {
    async fetchMaterials () {
      try {
        const items = await fetchLearningCornerMaterials({ account: this.doctorId });
        this.materials = items || [];
        this.filteredMaterials = [...this.materials];
      } catch (error) {
        console.error(error);
      }
    },
    onCategorySelect (category) {
      this.selectedCategory = category;
    },
    sortMaterials (sorter) {
      switch (sorter) {
        case 'newest':
          this.filteredMaterials = this.filteredMaterials.sort((a, b) => b.createdAt - a.createdAt);
          break;
        case 'oldest':
          this.filteredMaterials = this.filteredMaterials.sort((a, b) => a.createdAt - b.createdAt);
          break;
        case 'alphabetically':
          this.filteredMaterials = this.filteredMaterials.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
          break;
        default:
          this.filteredMaterials = [...this.materials];
      }
    },
    openFile (material) {
      if (this.isPreviewMode) return;
      window.open(material.url, '_blank', 'noopener noreferrer');
    },
  },
};
</script>

<style scoped>
.material-container {
  position: relative;
  padding-bottom: 50px;
}
.material-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
