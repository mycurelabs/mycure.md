<template lang="pug">
div(style="min-height: 650px;").row.items-center
  div.col-xs-12
    div.row.no-wrap.justify-center.timeline-container
      slot(name="default")
</template>

<style scoped>
.timeline-container {
  border-top: 2px solid rgba(0, 0, 0, 0.2);
}
</style>
