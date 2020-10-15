<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        div(v-if="materials.length")
          v-row
            v-col(cols="12" md="4")
              h3.primary--text.mt-2 Learning Corner
              span.font-weight-bold Browse by Category:&nbsp;
                v-btn(
                  v-if="selectedCategory"
                  color="error"
                  text
                  @click="selectedCategory = null"
                ).text-none
                  v-icon(left) mdi-close
                  | Clear
              br
              div(
                v-for="(category, key) in categories"
                :key="key"
                :class="{ 'primary--text': selectedCategory === category }"
                @click="onCategorySelect(category)"
              )
                | {{ category }}
                br
            v-col(cols="12" md="8")
              v-row
                v-col(cols="2")
                  i Sort by
                v-col(cols="6")
                  v-select(
                    outlined
                    dense
                    label="Newest, Oldest, Alphabetically"
                    :items="sortTypes"
                    item-text="text"
                  )
              v-row(v-for="(material, key) in filteredMaterials" :key="key")
                v-col.shrink
                  v-avatar(tile size="100")
                    img(
                      :src="materialPicURL"
                      style="border-radius: 5px"
                    )
                v-col.grow
                  h3 {{ material.title }}
                  p {{ material.description }}
                  br
                  p.grey--text {{ material.category }}
                  v-divider
        h4(v-else) This section is empty.
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
      },
      {
        text: 'Oldest',
      },
      {
        text: 'Alphabetically',
      },
    ];
    return {
      materials: [],
      filteredMaterials: [],
      selectedCategory: null,
    };
  },
  computed: {
    materialPicURL () {
      return require('~/assets/images/doctor-website/doctor-website-profile-clinic.png');
    },
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
  },
};
</script>
