<template lang="pug">
  v-container(v-if="!pageLoading").main-container
    v-row(align="center" justify="center").mx-1
      v-col(cols="12" sm="8" md="5")
        v-col.text-center
          template(v-if="!code")
            h1.font-weight-bold.pb-2 No code detected, returning to signin page...
          template(v-if="code")
            template(v-if="!loading && error")
              h2.font-weight-bold.pb-2 Failed to authenticate using {{ provider }}
              span.orange--text {{ error }}
              br
              v-btn(
                @click="$nuxt.$router.replace({ name: 'signin' })"
                color="primary"
              ).mt-5 return to sign in page
            template(v-else)
              v-progress-circular(indeterminate).mb-2
                h1.font-weight-bold.pb-2 Signing in using {{ provider }}...
</template>

<script>
import { signin } from '~/utils/axios';

export default {
  layout: 'signin',
  asyncData: ({ params }) => ({
    provider: params.provider,
  }),
  data: () => ({
    pageLoading: true,
    loading: false,
    error: null,
  }),
  computed: {
    code () {
      if (!process.browser) return '';
      return new URLSearchParams(window.location.search).get('code') || '';
    },
    queryParams () {
      if (!process.browser) return '';
      return new URLSearchParams(window.location.search).get('state') || '';
    },
  },
  watch: {
    code: {
      immediate: true,
      handler: 'authenticateToServer',
    },
  },
  mounted () {
    this.pageLoading = false;
  },
  methods: {
    async authenticateToServer () {
      if (!this.code) {
        this.$nuxt.$router.replace({ name: 'signin' });
        return;
      }
      this.error = null;
      this.loading = true;
      try {
        const res = await signin({
          strategy: this.provider,
          redirectURI: window.location.href.split('?')[0],
          code: this.code,
        });

        // add the access token to the query params
        const usp = new URLSearchParams(window.atob(this.queryParams));
        if (res.accessToken) usp.append('accessToken', res.accessToken);

        let target = usp.get('target') || process.env.CMS_URL || '';

        // no target, redirect to
        if (!target) {
          const query = Array.from(usp.keys()).reduce((o, k) => ({ ...o, [k]: usp.get(k) }), {});
          this.$nuxt.$router.replace({ name: 'signin', query });
          return;
        }

        // redirect outside
        usp.delete('target');
        target += `?${usp.toString()}`;
        window.location = target;
      } catch (error) {
        console.error(error);
        this.error = error.message || 'Failed to authenticate to server';
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.main-container {
  min-height: 20vh;
}
</style>
