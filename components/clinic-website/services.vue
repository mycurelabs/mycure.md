<template lang="pug">
  generic-container
    v-row(justify="center" align="center")
      h1 {{ headerText }}
    v-row(v-if="!$isMobile" justify="center" align="center")
      v-col(cols="12" md="4" align-self="start")
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in servicesColumn1"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span {{ item }}
      v-col(v-if="showTwoColumn || showThreeColumn" cols="12" md="4" align-self="start")
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in servicesColumn2"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span {{ item }}
      v-col(v-if="showThreeColumn" cols="12" md="4" align-self="start")
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in servicesColumn3"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span {{ item }}
    v-row(v-if="$isMobile" justify="start" align="center")
      v-col(cols="12")
        v-list(two-line).text-left
          v-list-item(
            v-for="(item, key) in services"
            :key="key"
          )
            v-list-item-action
              img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
            v-list-item-content
              span {{ item }}
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    GenericContainer,
  },
  props: {
    /**
     * Array of services strings
     * @type {Array}
     */
    services: {
      type: Array,
      default: () => ([]),
    },
    /**
     * String header text
     * @type {String}
     */
    headerText: {
      type: String,
      default: '',
    },
  },
  computed: {
    showOneColumn () {
      return this.services.length < 4;
    },
    showTwoColumn () {
      return this.services.length < 7 && this.services.length > 3;
    },
    showThreeColumn () {
      return this.services.length >= 7;
    },
    columnCount () {
      return this.showOneColumn ? '4' : this.showTwoColumn ? '4' : '4';
    },
    columnOffsetCount () {
      return this.showOneColumn ? '4' : this.showTwoColumn ? '2' : '';
    },
    servicesColumn1 () {
      if (this.showOneColumn) {
        return this.services;
      }

      if (this.showTwoColumn) {
        return this.services.filter((v, i) => !(i % 2));
      }

      return this.services.filter((v, i) => !(i % 3));
    },
    servicesColumn2 () {
      if (this.showOneColumn) {
        return false;
      }

      if (this.showTwoColumn) {
        return this.services.filter((v, i) => (i % 2));
      }

      return this.services.filter((v, i) => (i % 3 === 1));
    },
    servicesColumn3 () {
      if (this.showThreeColumn) {
        return this.services.filter((v, i) => (i % 3 > 1));
      }

      return false;
    },
  },
};
</script>
