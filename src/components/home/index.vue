<template lang="pug">
  div.home
    mcNavbarHome
    div.home-body.pt-5
      panel-1
      panel-2
      panel-3
      panel-4
      panel-5
      panel-6
      panel-7
      panel-8
      panel-9
      panel-10
      panel-11
    mcFooter
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import panel9 from './panel-9';
  import panel10 from './panel-10';
  import panel11 from './panel-11';

  export default {
    components: {
      mcNavbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7,
      panel8,
      panel9,
      panel10,
      panel11
    }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

.home {
  font-family: 'Poppins', sans-serif
}

.mc-blue {
	background-color: #2e9fdf
}

.mc-dark-grey {
	background-color: #343a40
}

.mc-grey {
	background-color: #616161
}

.mc-light-grey {
	background-color: #f6f6f6
}

.mc-yellow {
	background-color: #ffff33
}

.font-xl {
  font-size: 40px
}

.font-l {
  font-size: 24px
}

.font-m {
  font-size: 18px
}

.font-s {
  font-size: 16px;
}

.font-xs {
  font-size: 12px
}

</style>
