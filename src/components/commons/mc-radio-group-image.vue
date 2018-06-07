<template lang="pug">
  div.row.justify-content-md-center
    div(v-for="(item, key) in value" @click="select(key, item)").col-xs-12.col-md-3
      div(:class="{selected: item.isSelected}").item.pt-5.pb-5
        img( :src="item.src")
        br
        br
        h5 {{item.name}} 
          i(
            class="material-icons" 
            :id="'tooltip_'+item.id" 
            v-if="item.hasTooltip"
            style="margin-bottom: -10px; position: absolute;"
          ).color-primary info
        b-tooltip(:target="'#tooltip_'+item.id" :title="item.tooltipMessage" placement="bottom")
        //- div.pt-5
        //- center
          //- div(:class="{selected: item.isSelected}").radio-item
</template>

<script>
  export default {
    props: {
      value: Array
    },
    created() {
      this.items = this.value;
    },
    data() {
      return {
        items: null
      }
    },
    methods: {
      select(key, item) {
        const items = [];
        this.items.forEach((item, index, array) => {
          if(key === index) {
            item.isSelected = true;
            items.push(item);
          } else {
            item.isSelected = false;
            items.push(item);
          }
        });
        this.items = items;
        this.$emit('input', this.items);
        this.$emit('select', item);
      }
    }
  }
</script>

<style scoped>
  .item {
    /* outline: 1px solid red; */
  }

  .item:hover {
    /* background-color: red; */
    cursor: pointer;
  }

  .item.selected {
    background-color: white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
    -moz-box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
    box-shadow: 0px 0px 10px -2px rgba(160,181,191,1);
  }

  .radio-item {
    width: 20px;
    height: 20px;
    border: 2px solid #0099cc;
    border-radius: 100%;
  }

  .radio-item.selected {
    border: 2px solid #0099cc;
    background-color: #0099cc;
  }
</style>


