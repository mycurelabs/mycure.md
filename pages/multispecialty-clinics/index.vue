<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
</template>

<script>
import Usp from '~/components/multispecialty-clinics/usp';
import Workflow from '~/components/multispecialty-clinics/workflow';
export default {
  components: {
    Usp,
    Workflow,
  },
};
</script>
