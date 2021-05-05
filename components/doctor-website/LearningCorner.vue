<template lang="pug">
  v-container
    v-row(justify="center" align="center" no-gutters)
      v-col(cols="12" md="10").pt-10
        h1.text-center.primary--text.font-weight-heavy Learning Corner
        br
        template(v-if="materials.length")
          v-row
            v-col(cols="12" md="4")
              span.font-weight-bold Browse by Category:&nbsp;
              br
              v-checkbox(
                v-for="(category, key) in categories"
                :key="key"
                :value="selectedCategory === category"
                :label="category"
                dense
                hide-details
                @click="onCategorySelect(category)"
              ).py-0.my-0
            v-col(cols="12" md="8")
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
                  :items="sortTypes"
                  item-text="text"
                  item-value="value"
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
                  md="4"
                ).material-container
                  v-card(height="100%").px-4
                    v-card-text
                      h3.my-2 {{ material.title }}
                      p.my-2 {{ material.description }}
                      i.primary--text.font-12(v-if="material.category") {{ material.category }}
                    v-card-actions
                      v-spacer
                      a(@click="openFile(material)").primary--text.font-weight-bold View
                      v-spacer
        template(v-else)
          p.text-center.font-open-sans.font-gray No materials have been added to this section yet. You may check this website from time to time for updates!
</template>

<script>
import { uniqBy } from 'lodash';
import { fetchLearningCornerMaterials } from '~/utils/axios';

export default {
  props: {
    doctorId: {
      type: String,
      default: null,
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
      selectedCategory: null,
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
      if (val) {
        this.filteredMaterials = this.materials.filter(material => material.category === val);
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
      window.open(material.url, '_blank', 'noopener noreferrer');
    },
  },
};
</script>

<style scoped>
/* .material-container {
  position: relative;
} */
.material-bottom {
  position: absolute;
  bottom: 0;
}
</style>
