<template lang="pug">
  div
    pre(style="position: fixed; z-index: 99999; color: green;" v-if="!$isProduction()") {{scrollTop}}
    router-view
</template>

<script>
export default {
  name: "App",
  created() {
    this.$scrollspy().subscribe({
      next: scrollTop => {
        this.scrollTop = scrollTop;
      },
      error: e => console.log(e)
    });
  },
  data() {
    return {
      scrollTop: 0
    };
  }
};
</script>

<style>
html,
body {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

.feature-item {
  background-color: white !important;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
  -moz-box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
  box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
}

.hr-blue {
  height: 2px;
  width: 150px;
  background-color: #0099cc;
}

.slide-up-fade-in {
  animation: slide-up-fade-in ease 1s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards; /*when the spec is finished*/
  -webkit-animation: slide-up-fade-in ease 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/
  -moz-animation: slide-up-fade-in ease 1s;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -moz-animation-fill-mode: forwards; /*FF 5+*/
  -o-animation: slide-up-fade-in ease 1s;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -o-animation-fill-mode: forwards; /*Not implemented yet*/
  -ms-animation: slide-up-fade-in ease 1s;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
  -ms-animation-fill-mode: forwards; /*IE 10+*/

  opacity: 0;
  opacity: 1\9;
}

@keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@-moz-keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    -moz-transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    -moz-transform: translate(0px, 0px);
  }
}

@-webkit-keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    -webkit-transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0px, 0px);
  }
}

@-o-keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    -o-transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    -o-transform: translate(0px, 0px);
  }
}

@-ms-keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    -ms-transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    -ms-transform: translate(0px, 0px);
  }
}
</style>
