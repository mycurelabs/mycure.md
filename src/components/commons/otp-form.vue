<template lang="pug">
  div
    table(width="100%")
      tr
        td(v-for="pos in otpLength")
          input(
            type="text" 
            maxlength="1" 
            :id="`otp-field-${pos}`"
            @input="change($event, pos)"
            @onkeydown="deleteChar($event, pos)"
          ).otp-field
</template>

<script>
export default {
  props: {
    otpLength: {
      type: Number,
      default: 6
    }
  },
  methods: {
    change (event, pos) {
      const value = event.target.value;
      if (pos >= this.otpLength || pos === 1) return;
      if (value) {
        document.getElementById(`otp-field-${pos+1}`).focus();
      } else {
        document.getElementById(`otp-field-${pos-1}`).focus();
      }
      console.warn(value, pos);
    },
    deleteChar(event, pos) {
      const key = event.key;
      console.warn(key, pos)
      if (key === "Backspace" || key === "Delete") {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.otp-field {
  height: 50px;
  width: 50px;
  border-bottom: 2px solid grey;
  text-align: center;
  font-size: 25px;
  padding: 5px;
}

.otp-field:focus {
  outline: none;
}
</style>