<template lang="pug">
  div
    template(v-if="materials.length")
      v-row
        v-col(cols="12")
          v-card(flat).rounded-md.px-16.py-8
            v-card-title
              h3.mc-h3.mb-10 Learning Corner
            v-card-text
              v-row
                v-col(cols="12" md="4")
                  span.font-weight-bold.black--text Browse by Tag:&nbsp;
                  br
                  br
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
                v-col(cols="12" md="4")
                  span.font-weight-bold.black--text Sort by:
                  br
                  br
                  v-select(
                    v-model="materialSorter"
                    outlined
                    dense
                    clearable
                    label="Sort"
                    item-text="text"
                    item-value="value"
                    :items="sortTypes"
                    :disabled="isPreviewMode"
                    @change="sortMaterials(materialSorter)"
                    @clear="filteredMaterials = [...materials]"
                  )
      v-row.pt-5.grey-bg
        v-col(
          v-for="(material, key) in filteredMaterials"
          :key="key"
          cols="12"
          md="6"
        )
          v-card(height="100%" flat).material-container.rounded-md.py-6.px-10
            v-card-text
              h3.mc-h3.my-2.black--text {{ material.title }}
              i.font-gray.font-12.font-italic(v-if="material.category") {{ material.category }}
              p.my-2.mc-b4 {{ material.description }}
            v-card-actions.text-center.py-3.px-4
              v-btn(
                depressed
                block
                color="primary"
                @click="openFile(material)"
              ).text-none.font-weight-bold.rounded-md View
    template(v-else)
      v-row(v-if="loading")
        v-col(cols="12")
          v-skeleton-loader(type="list-item, card-heading")
        v-col(cols="12" md="6")
          v-skeleton-loader(type="article, actions")
      p(v-else).text-center.font-open-sans.font-gray No materials have been added to this section yet. You may check this website from time to time for updates!
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
      loading: true,
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
        this.loading = true;
        const items = await fetchLearningCornerMaterials({ account: this.doctorId });
        this.materials = items || [];
        this.filteredMaterials = [...this.materials];
        this.loading = false;
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
.bordered-card {
  border: 0.5px solid rgb(218, 218, 218) !important;
}
.grey-bg {
  background-color: #f9f9f9;
}
</style>
