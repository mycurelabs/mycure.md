<template lang="pug">
  div
    v-container
      v-layout(justify-center).text-xs-center
        slot(name="privateFiller")
        slot(name="multiFiller")
      v-layout(justify-center).text-xs-center
        slot(name="chatWindow")
</template>
