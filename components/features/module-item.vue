<template lang="pug">
  div
    div
        img(v-lazy="require(`~/assets/images/module-icons/${moduleItem.icon}`)" width="40%" height="40%" :alt="moduleItem.title")
        br
        span.font-21 {{ moduleItem.title }}
        br
        p.font-15.module-item-subTitle.pre-white-space {{ moduleItem.subTitle }}
    br
    div(v-if="typeof(moduleItem.description) === 'string'").module-item-description {{ moduleItem.description }}
    div(
      v-else-if="typeof(moduleItem.description) === 'object'"
      :class="{'pre-white-space': $isRegularScreen }"
    ).module-item-description {{ moduleItem.description | parse-description }}
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  name: 'ModuleItem',
  filters: {
    parseDescription (description) {
      return parseTextWithNewLine(description.text, description.parseFields);
    },
  },
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
