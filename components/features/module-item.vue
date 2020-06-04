<template lang="pug">
  div
    div
        img(v-lazy="require(`~/assets/images/module-icons/${moduleItem.icon}`)" width="40%" height="40%" :alt="moduleItem.title")
        br
        span.font-21 {{ moduleItem.title }}
        br
        p.font-15.module-item-subTitle {{ moduleItem.subTitle }}
    br
    div.module-item-description {{ moduleItem.description }}
</template>

<script>
export default {
  name: 'ModuleItem',
  props: {
    moduleItem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.module-item-subTitle {
  text-align: center;
  width: 85%;
  color: #04b0e7;
  margin: 0 auto;
}

.module-item-description {
  text-align: center;
  color: #a7a7a7;
}
</style>
