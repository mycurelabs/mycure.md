<template lang="pug">
  div
    div.container
      div.row.justify-content-center.pt-4.pb-4
        div.col-xs-12.col-md-8.text-center
          h1 MYCURE Directory
          h2 Find doctors near you, Let's start searching.
          input(v-model="query" label="Search for doctors" placeholder="Search for doctors" @input="input").form-control
          br
          label(v-if="loading") Searching for {{query}}...
</template>

<script>
  import { mapActions } from 'vuex';
  import _ from 'lodash';
import { setInterval } from 'timers';
  export default {
    data() {
      return {
        loading: false,
        query: '',
        debounceTime: 500
      }
    },
    created() {
      if(this.$route.query && this.$route.query.search) {
        this.query = this.$route.query.search;
        if(this.query.length < 4)
          this.search(this.query);
      }
    },
    methods: {
      ...mapActions({
        searchDoctor: 'user/searchDoctor'
      }),
      input: _.debounce(e => {
        this.query = e.target.value
      }, this.debounceTime),
      async search(query) {
        try {
          this.loading = true;
          const results = await this.searchDoctor(query);
          this.$emit('update:completed', results);
          this.loading = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
    watch: {
      query(val) {
        if(!val) return;
        if(val.length < 4) return;
        setTimeout(() => {
          this.search(val);
        }, this.debounceTime)
      }
    }
  }
</script>