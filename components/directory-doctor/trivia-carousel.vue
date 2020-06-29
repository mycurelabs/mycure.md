<template lang="pug">
  v-container(fluid).primary.py-12
    v-carousel(height="300" show-arrows-on-hover hide-delimiters)
      v-carousel-item(v-for="(slide, i) in slides" :key="i")
        v-row(align="center" justify="center" class="fill-height").text-center
          div(style="width: 50%;")
            h3.mb-4.font-32 {{ slide[0] }}
            h1.mb-4.font-56.white--text {{ slide[1] }}
            p.font-20.white--text {{ slide[2] }}
</template>

<script>
export default {
  data () {
    return {
      slides: [
        [
          'MYCURE 1',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 2',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 3',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 4',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
        [
          'MYCURE 5',
          '"64% of consumers would see a doctor via video."',
          'www.americanwell.com',
        ],
      ],
    };
  },
};
</script>
