<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
</template>

<script>
import Usp from '@/components/specialized/usp';
import Workflow from '@/components/specialized/workflow';
export default {
  components: {
    Usp,
    Workflow
  }
};
</script>