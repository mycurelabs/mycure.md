<template lang="pug">
  v-card(color="primary").elevation-0
    v-card-text
      p.white--text Not sure whom to consult?
      p.white--text
        strong {{ hospitalName }}'s &nbsp;
        | has receptionists available via chat. Would you like to chat with them?.
      v-btn(
        color="white"
        target="_blank"
        rel="noopener noreferrer"
        :href="goToChat()"
      ) Chat Now
</template>

<script>
export default {
  props: {
    hospitalName: {
      type: String,
      default: '',
    },
    orgId: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToChat () {
      if (!this.orgId) return;
      return `${process.env.PX_PORTAL_URL}/dashboard/inbox?organization=${this.orgId}&createRoom=true`;
    },
  },
};
</script>
