<template lang="pug">
  div
    v-dialog(v-model="successDialog" persistent max-width="500")
      v-card
        v-card-text(style="padding: 40px;").text-center
          h1(style="font-size: 50px") 🎉
          br
          h2 Booking successful!
          br
          p.subheading Your #[b {{ successfulBookingEventTypeName }}] booking with #[b {{ successfulBookingClinicName }}] on #[b {{ successfulBookingDate }} ] from #[b {{ successfulBookingStartTime }} ] to #[b {{ successfulBookingEndTime }}] has been successfully set! 🎉
          br
          v-btn(
            color="primary"
            @click="closeDialog"
          ) Let's go!

    v-row.transparent
      v-col(cols="12" md="4").pt-0
        div(v-if="currentUser")
          //- p You are logged in as:
          div(
            style="display: flex; align-items: center; border: 1px solid lightgrey; border-radius: 4px; background-color: white; gap: 10px; padding: 10px; width: 100%;"
          ).mb-4

            div(style="display: flex; align-items: center;")
              v-avatar(color="primary" size="50")
                img(
                  v-if="currentUser.picURL"
                  :src="currentUser.picURL"
                )
                v-icon(v-else dark) {{ mdiAccount }}

            div(style="width: 100%;")
              h3.mc-h4.title--text {{ currentUser.name.firstName }} {{ currentUser.name.lastName }}
              span.mc-b2 {{ currentUser.email }}

            div(style="display: flex; justify-content: end; align-items: center; width: 100%;")
              v-btn(color="primary" depressed @click="onSignout") Log out

        div(style="border: 1px solid lightgrey; border-radius: 4px;")
          v-list(v-if="hasCalendarEvents" flat style="border-radius: 4px;")
            template(v-for="(calendarEvents, labelName) in calendarEventsByType")
              v-subheader.primary--text.font-weight-bold {{ labelName | start-case }}
              template(v-for="(calendarEvent, index) in calendarEvents")
                //- pre {{JSON.stringify(calendarEvent, null, 2)}}
                v-list-item(:key="calendarEvent.id" v-ripple @click="openEvent(calendarEvent)" color="primary")
                  v-list-item-content
                    v-list-item-title {{ calendarEvent.title }}
                    v-list-item-subtitle {{ calendarEvent.description }}
          div(v-else)
            v-row(justify="center" align="center" style="height: 200px")
              v-col.text-center
                p.black--text No available booking
      v-col(cols="12" md="8" style="overflow: auto;").white
        template(v-if="currentUser && hasCalendarEvents")
          div(
            style="width: 100%; height: auto; overflow: scroll; padding-right: 10px;"
          )#calcom-mounting-point
        template(v-else-if="!hasCalendarEvents")
          v-row(justify="center" align="center" style="height: 100%")
            v-col.text-center
              p.black--text No available booking
              //- p.black--text Login or create an account #[a(:href="pxpRedirectURL") here].
        template(v-else-if="!currentUser")
          v-row(justify="center" align="center" style="height: 100%")
            v-col.text-center
              p.black--text You need an account to book an appointment.
              p.black--text Login or create an account #[a(:href="pxpRedirectURL") here].
</template>

<script>
import {
  mdiAccount,
} from '@mdi/js';
import { groupBy, startCase } from 'lodash';
import { getCalendar, listCalendarEvents } from '@/services/booking';
import { getCurrentUser, signout } from '@/services/auth';

function formatDate (date, format) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  return format
    .replace('dd', day)
    .replace('MM', month)
    .replace('yyyy', year);
};

function formatTime (date, format) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return format
    .replace('hh', hours)
    .replace('mm', minutes)
    .replace('a', hours >= 12 ? 'PM' : 'AM');
}

export default {
  components: {
    mdiAccount,
  },
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
      successDialog: false,
      successfulBookingData: {},
      currentUser: null,
    };
  },
  computed: {
    successfulBookingEventTypeName () {
      return this.successfulBookingData?.eventType?.title;
    },
    successfulBookingClinicName () {
      return this.successfulBookingData?.organizer?.name;
    },
    successfulBookingDate () {
      const startTime = this.successfulBookingData?.booking?.startTime;
      return formatDate(new Date(startTime), 'dd/MM/yyyy');
    },
    successfulBookingStartTime () {
      const startTime = this.successfulBookingData?.booking?.startTime;
      return formatTime(new Date(startTime), 'hh:mm a');
    },
    successfulBookingEndTime () {
      const endTime = this.successfulBookingData?.booking?.endTime;
      return formatTime(new Date(endTime), 'hh:mm a');
    },
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
    hasCalendarEvents () {
      return this.calendarEvents.length > 0;
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
    pxpRedirectURL () {
      const pxpUrl = `${process.env.PXP_URL}/signin-email`;
      return `${pxpUrl}?redirect=${window.location.href}`;
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
      this.currentUser = await getCurrentUser();
      this.calendar = await getCalendar({ organizationId: this.clinicId });
      this.calendarEvents = await listCalendarEvents({ calendarId: this.calendar.id });
      this.$emit('loaded', this.calendarEvents);
    },
    openEvent (event) {
      console.warn('openEvent', event);
      this.selectedAppointmentType = event;
    },
    async mountCalcom () {
      try {
        if (!this.currentUser) return;
        if (!this.hasCalendarEvents) return;
        const mountPointElement = globalThis.document.getElementById('calcom-mounting-point');
        if (!mountPointElement) return;
        mountPointElement.innerHTML = '';
        await this.$calcom('inline', {
          elementOrSelector: '#calcom-mounting-point',
          // calLink: 'rick/get-rick-rolled',
          calLink: this.calLink,
          config: {
            subjectId: this.currentUser.uid,
            name: [
              this.currentUser.name.firstName,
              this.currentUser.name.lastName,
            ].join(' '),
            email: this.currentUser.email,
            sex: this.currentUser.sex,
          },
        });
        this.$calcom('on', {
          action: 'bookingSuccessful',
          callback: this.onBookingSuccessful,
        });
      } catch (e) {
        console.error('Error mounting calcom', e);
      }
    },
    unmountCalcom () {
      const el = globalThis.document.getElementById('calcom-mounting-point');
      if (!el) return;
      el.innerHTML = '';
    },
    closeDialog () {
      this.successDialog = false;
    },
    onBookingSuccessful (event) {
      console.warn('onBookingSuccessful', event);
      this.successfulBookingData = event?.detail?.data || {};

      // TODO: implement payment

      this.successDialog = true;
      this.mountCalcom();
    },
    onSignout () {
      signout();
      this.currentUser = null;
      this.unmountCalcom();
    },
  },
};
</script>
