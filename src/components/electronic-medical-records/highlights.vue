<template lang="pug">
  div.pt-5
    v-container
      v-layout(v-for="(highlight,index) in highlights" :key="index" row wrap justify-center)
        v-flex(xs5 v-if="index%2 === 0")
          img(style="max-width: 90%" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
        v-flex(xs7 v-else align-self-center).pr-5.text-xs-right
          span.font-medium.lh-title {{ highlight.title }}
          br
          br
          span.font-small {{ highlight.text }}
        v-flex(xs7 v-if="index%2 === 0" align-self-center).pl-5
          span.font-medium.lh-title {{ highlight.title }}
          br
          br
          span.font-small {{ highlight.text }}
        v-flex(xs5 v-else)
          img(style="max-width: 90%" :src="require(`@/assets/images/${ highlight.image }`)" :alt="highlight.title")
</template>

<script>
  export default {
    data () {
      return {
        //- TODO: Update to actual content
        highlights: [
          {
            title: 'Manage on the Go',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          },
          {
            title: 'Oversee Security',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          },
          {
            title: 'Online Profile',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          }
        ]
        //
      };
    }
  };
</script>

