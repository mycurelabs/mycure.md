<template lang="pug">

</template>

<script>
export default {
  mounted () {
    const queryParams = this.$route.query || {};
    const url = new URL(process.env.SIGNUP_URL || 'https://myaccount.mycure.md');
    const params = new URLSearchParams(url.search);
    for (const key in queryParams) {
      const value = queryParams[key];
      params.set(key, value);
    }
    url.search = params.toString();
    location.href = url.href;
  },
};
</script>
