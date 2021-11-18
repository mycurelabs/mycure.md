<template lang="pug">
  v-menu(
    left
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
    :disabled="readOnly"
  )
    template(v-slot:activator="{ on }")
      v-text-field(
        v-on="on"
        v-model="dateFormatted"
        :label="label"
        :prepend-inner-icon="mdiCalendar"
        clearable
        :readonly="!readOnly"
        :disabled="readOnly"
        :filled="filled"
        :outlined="outlined"
        :single-line="singleLine"
        :flat="flat"
        :solo="solo"
        :solo-inverted="soloInverted"
        :hide-details="hideDetails"
        :rules="rules"
        :height="height"
        :class="{ 'bordered': bordered }"
        @click:clear="$emit('clear')"
      )
    v-date-picker(
      v-if="mode === 'date'"
      v-model="date"
      :allowedDates="allowedDates"
      :events="events"
      :type="type"
      :max="max"
      :min="minDate"
      color="primary"
      scrollable
    )
      v-spacer
      v-btn(v-if="requireConfirmation" text color="primary" @click="confirmDate") OK
    v-time-picker(
      v-if="mode === 'time'"
      v-model="time"
      color="primary"
    )
      v-spacer
      v-btn(text @click="mode = 'date'") Back
      v-btn(text color="primary" @click="confirmTime") OK
</template>

<script>
import split from 'lodash/split';
import {
  format,
  getTime,
  setYear,
  setMonth,
  setDate,
  setHours,
  setMinutes,
} from 'date-fns';
import { mdiCalendar } from '@mdi/js';

export default {
  props: {
    value: {
      type: [Number, Date, String],
      default: null,
    },
    format: {
      type: String,
      default: null,
    },
    formatterOverride: {
      type: Function,
      default: null,
    },
    type: {
      type: String,
      default: 'date',
    },
    max: {
      type: String,
      default: null,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    allowedDates: {
      type: [Array, Object, Function],
      default: null,
    },
    events: {
      type: [Array, Function],
      default: null,
    },
    label: {
      type: String,
      default: 'Select Date',
    },
    height: {
      type: String,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    datetime: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    soloInverted: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    requireConfirmation: {
      type: Boolean,
      default: true,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      menu: false,
      mode: 'date',
      mdiCalendar,
    };
  },
  computed: {
    date: {
      get () {
        if (!this.value) return;
        // internal: format used by v-date-picker
        return format(this.value, 'YYYY-MM-DD');
      },
      set (val) {
        const [year, month, date] = split(val, '-');
        const withYear = setYear(this.value, year);
        const withMonth = setMonth(withYear, month - 1); // month is 0 based
        const withDate = this.type === 'date'
          ? setDate(withMonth, date)
          : withMonth;

        const result = getTime(withDate);
        this.$emit('input', result);
        if (!this.datetime) this.$emit('change', result);
      },
    },
    time: {
      get () {
        if (!this.value) return;
        // internal: format used by v-time-picker
        return format(this.value, 'HH:mm');
      },
      set (val) {
        const [hours, minutes] = split(val, ':');
        const withHour = setHours(this.value, hours);
        const withMinutes = setMinutes(withHour, minutes);

        const result = getTime(withMinutes);
        this.$emit('input', result);
      },
    },
    typedFormat () {
      if (this.format) return this.format;
      if (this.type === 'month') return 'MM/YYYY';
      return 'MM/DD/YYYY';
    },
    dateFormatted () {
      if (!this.value) return;
      if (this.formatterOverride) return this.formatterOverride(this.value);
      return this.$morphDateFormat(this.value, this.typedFormat);
    },
    minDate () {
      return format(new Date(), 'YYYY-MM-DD');
    },
  },
  watch: {
    menu (val, prev) {
      if (val && !prev) this.mode = 'date';
    },
    date () {
      if (this.type === 'month' || !this.requireConfirmation) {
        this.confirmDate();
      }
    },
  },
  methods: {
    confirmDate () {
      if (this.datetime) {
        this.mode = 'time';
      } else {
        this.$emit('change', this.value);
        this.menu = false;
      }
    },
    confirmTime () {
      this.$emit('change', this.value);
      this.menu = false;
    },
  },
};
</script>

<style scoped>
.bordered >>> .v-input__slot {
  border-radius: 0px 5px 5px 0px;
  border: 4px solid #0099CC;
  padding-right: 0 !important;
}
</style>
