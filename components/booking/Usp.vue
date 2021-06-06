<template lang="pug">
  v-container
    v-row(justify="center" align="center" :style="{ height: panelHeight }")
      generic-sub-page-panel(
        content="Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use."
        :content-classes="descriptionClasses"
        :content-column-bindings="contentColumnBindings"
        :media-column-bindings="mediaColumnBindings"
        :generic-panel-bindings="genericPanelBindings"
      )
        template(slot="title")
          h1(:class="titleClasses") Grow your #[br]
            vue-typer(
              :text="['Practice', 'Clinic', 'Diagnostics', 'Hospital']"
              :repeat="Infinity"
              :erase-delay="100"
              erase-style="backspace"
            ).typer
            span #[br] Safely
        template(slot="image")
          img(
            :src="require(`~/assets/images/booking/Booking USP.png`)"
            alt="homepage image"
            width="100%"
          )
        div(slot="cta-button" :class="{'text-center': $isMobile}")
          signup-button(
            color="success"
            depressed
            rounded
            large
            x-large
            small
            :large="$isRegularScreen"
            :x-large="$isWideScreen"
          ).text-none.letter-spacing-normal.font-s Get Started
    //- v-container(fluid :class="{'usp-mobile' : $isMobile }")
    //-   v-row(
    //-     align="center"
    //-     justify="center"
    //-     :style="{ height: panelHeight }"
    //-     no-gutters
    //-   )
    //-     v-col(cols="8" md="7" offset-md="1" :class="{ 'order-last' : !$isMobile }")
    //-       v-img(
    //-         :src="require('../../assets/images/booking/Booking USP.png')"
    //-         width="108%"
    //-         alt="homepage image"
    //-       )
    //-     v-col(cols="12" md="3" offset-md="1" :class="{ 'text-center' : $isMobile }")
    //-       h1(:class="titleClasses") Grow your #[br]
    //-         vue-typer(
    //-           :text="['Practice', 'Clinic', 'Diagnostics', 'Hospital']"
    //-           :repeat="Infinity"
    //-           :erase-delay="100"
    //-           erase-style="backspace"
    //-         ).typer
    //-         span #[br] Safely
    //-       p(:class="descriptionClasses").font-gray.font-open-sans Bring in more patients using a powerful healthcare service booking and management software. It's free, secure, and easy to use.
    //-       br
    //-       signup-button(
    //-         color="success"
    //-         rounded
    //-         large
    //-         x-large
    //-         small
    //-         :large="$isRegularScreen"
    //-         :x-large="$isWideScreen"
    //-       ).text-none.letter-spacing-normal.font-s Get Started
</template>

<script>
import GenericSubPagePanel from '~/components/generic/GenericSubPagePanel';
import SignupButton from '~/components/commons/SignupButton';
import classBinder from '~/utils/class-binder';
export default {
  components: {
    GenericSubPagePanel,
    SignupButton,
  },
  data () {
    return {
      email: '',
    };
  },
  computed: {
    // Classes
    titleClasses () {
      const classes = classBinder(this, {
        mobile: ['font-m', 'text-center'],
        regular: ['font-l'],
        wide: ['font-xl'],
      });
      return classes;
    },
    descriptionClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-s', 'text-justify'],
          wide: ['font-xs', 'text-justify'],
        }),
        'font-gray',
        'font-open-sans',
      ];
    },
    panelHeight () {
      if (this.$isMobile) return 'auto';
      if (this.$isRegularScreen) return '650px';
      return '100vh';
    },
    contentColumnBindings () {
      return {
        cols: 12,
        md: 4,
        xl: 5,
      };
    },
    mediaColumnBindings () {
      return {
        cols: 12,
        md: 7,
        offsetMd: 1,
        xl: 6,
      };
    },
    genericPanelBindings () {
      return {
        justify: 'center',
        align: 'center',
      };
    },
  },
  methods: {
    getStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.vue-typer >>> .custom.char.typed  {
  color: #04B1E7;
}

.vue-typer >>> .custom.caret {
  width: 5px;
  background-color: #FFFFFF;
}

.vue-typer >>> .custom.caret.typing {
  background-color: #04B1E7;
}

.usp-mobile {
  margin-top: 38px;
}
</style>
