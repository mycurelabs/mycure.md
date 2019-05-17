<template lang="pug">
  div      
    v-container     
      v-flex(xs12 md12)
        v-tabs(height="80%" color="rgba(0, 0, 0, 0)" fixed-tabs)
          v-tab.tab.white
            strong.font-m.font-mc-grey.text-none Private Practice
              br
              | 
              span.font-xs.text-none Solo or group clinic practitioners  
          v-tab.tab.white
            strong.font-m.font-mc-grey.text-none Multispecialty Clinics
              br
              | 
              span.font-xs.text-none One stop, multi-staff clinics
</template>

<script>
import private_prac from './private';
import multispecialty from './multispecialty';

export default {
  components: {
    private_prac,
    multispecialty
  }
};
</script>

<style scoped>
.tab{
  border-radius: 10px 10px 0 0;
  width: 400px;
  height: 100%px;
}

</style>
