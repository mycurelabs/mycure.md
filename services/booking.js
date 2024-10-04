import sdk from '@mycure/sdk-js';

export const BOOKING_SERVICE_NAME = 'booking/bookings';
export const BOOKING_CALENDAR_EVENTS_SERVICE_NAME = 'booking/event-types';
export const BOOKING_CALENDARS_SERVICE_NAME = 'booking/calendars';
export const BOOKING_SCHEDULES_SERVICE_NAME = 'booking/schedules';

function formatMoney (number) {
  if (typeof number !== 'number') return number;
  return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(number);
};

function mapCalendarEvents (items) {
  return items.map((item) => {
    const isPaid = item.requiresPayment;
    const price = isPaid ? `${formatMoney(item.invoiceTemplate?.items?.[0]?.unitAmount)}` : '';
    const priceColor = isPaid ? 'info' : 'success';
    return {
      ...item,
      isPaid,
      formattedPrice: price,
      formattedPriceColor: priceColor,
    };
  });
};

export async function getCalendar (opts) {
  const organizationId = opts.organizationId;
  const query = {
    organization: organizationId,
    ...opts.query,
  };
  const { items } = await sdk.service(BOOKING_CALENDARS_SERVICE_NAME).find(query);
  const calendar = items?.[0];
  return calendar;
};

export async function listCalendarEvents (opts) {
  const calendarId = opts.calendarId;
  const query = {
    calendar: calendarId,
    $populate: {
      schedule: {
        service: BOOKING_SCHEDULES_SERVICE_NAME,
        method: 'find',
        localId: 'schedule',
      },
    },
  };
  const { items } = await sdk.service(BOOKING_CALENDAR_EVENTS_SERVICE_NAME).find(query);
  return mapCalendarEvents(items);
};
