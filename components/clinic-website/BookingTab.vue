<template lang="pug">
  v-row.transparent
    v-col(cols="12" md="4").pt-0
      v-list(flat)
        template(v-for="(calendarEvents, labelName) in calendarEventsByType")
          v-subheader.primary--text.font-weight-bold {{ labelName | start-case }}
          template(v-for="(calendarEvent, index) in calendarEvents")
            v-list-item(:key="calendarEvent.id" v-ripple @click="openEvent(calendarEvent)" color="primary")
              v-list-item-content
                v-list-item-title {{ calendarEvent.title }}
                v-list-item-subtitle {{ calendarEvent.description }}
    v-col(cols="12" md="8" style="overflow: auto;").white
      div(
        style="width: 100%; height: auto; overflow: scroll; padding-right: 10px;"
      )#calcom-mounting-point
      //- pre bookingEmbedUrl -  {{ bookingEmbedUrl }}
      //- pre calLink - {{ calLink }}
      //- pre calendar object - {{ JSON.stringify(calendar, null, 2) }}
      //- pre appoint type object - {{ JSON.stringify(selectedAppointmentType, null, 2) }}
</template>

<script>
import { groupBy, startCase } from 'lodash';
import { getCalendar, listCalendarEvents } from '@/services/booking';
export default {
  props: {
    clinic: {
      type: Object,
      default: () => ({}),
    },
  },
  filters: {
    startCase,
  },
  data () {
    return {
      calendar: {},
      calendarEvents: [],
      selectedAppointmentType: null,
      calLink: '',
    };
  },
  computed: {
    clinicId () {
      return this.clinic?.id || '';
    },
    clinicName () {
      return this.clinic?.name || '';
    },
    picUrl () {
      return this.clinic?.picURL || '';
    },
    description () {
      return this.clinic?.description || '';
    },
    insurers () {
      return this.clinic?.insurers || [];
    },
    bookingPublicPageUrl () {
      return this.calendar?.integration?.calcom?.publicPageUrl || '';
    },
    bookingEmbedUrl () {
      return this.calendar?.integration?.calcom?.embedUrl || '';
    },
    calcomOrigin () {
      const url = new URL(this.bookingEmbedUrl);
      return `${url.protocol}//${url.hostname}`;
    },
    calendarEventsByType () {
      return groupBy(this.calendarEvents, 'metadata.appointmentType');
    },
    calendarEventsAppointmentTypes () {
      const appointmentTypes = Object.keys(this.calendarEventsByType);
      return appointmentTypes.map((appointmentType) => {
        return {
          value: appointmentType,
          label: startCase(appointmentType) + 's',
        };
      });
    },
  },
  watch: {
    selectedAppointmentType (newValue) {
      this.calLink = `${this.calendar?.id}/${newValue?.id}`;
      this.mountCalcom();
    },
  },
  async mounted () {
    await this.init();
    this.selectedAppointmentType = this.calendarEvents?.[0];
    this.$calcom('init', { origin: this.calcomOrigin });
  },
  methods: {
    async init () {
      this.calendar = await getCalendar({ organizationId: this.clinicId });
      this.calendarEvents = await listCalendarEvents({ calendarId: this.calendar.id });
      this.$emit('loaded', this.calendarEvents);
    },
    openEvent (event) {
      console.warn('openEvent', event);
      this.selectedAppointmentType = event;
    },
    mountCalcom () {
      try {
        console.warn('mountCalcom', this.calLink);
        globalThis.document.getElementById('calcom-mounting-point').innerHTML = '';
        this.$calcom('inline', {
          elementOrSelector: '#calcom-mounting-point',
          // calLink: 'rick/get-rick-rolled',
          calLink: this.calLink,
        });
      } catch (e) {
        console.error('Error mounting calcom', e);
      }
    },
  },
};
</script>
