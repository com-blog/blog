<template>
  <div>
    <full-calendar :options="calendarOptions"></full-calendar>
    <edit-calendar-popup-container
      :dialog="dialog.open"
      :event="dialog.selectedEvent"
      @toggle-dialog="toggleDialog"
    ></edit-calendar-popup-container>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, PropType } from 'vue';
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import { Event } from '@/shared/types/Calendar';
  import EditCalendarPopupContainer from '@/components/calendars/popups/container/EditCalendarPopupContainer.vue';

  const props = defineProps({
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  });

  const dialog = reactive({
    open: false,
    selectedEvent: {} as Event,
  });

  function selectEvent(info) {
    dialog.selectedEvent = info;
    toggleDialog(true);
  }

  function clickEvent(info) {
    info.jsEvent.preventDefault();
    dialog.selectedEvent = info.event;
    toggleDialog(true);
  }

  function dropEvent(info) {
    info.jsEvent.preventDefault();
    dialog.selectedEvent = info.event;

    if (!confirm('Are you sure about this change?')) {
      info.revert();
    }
  }

  function toggleDialog(isOpen: Boolean) {
    dialog.open = isOpen;
  }

  const calendarOptions = reactive({
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today',
    },
    locale: 'zh-tw',
    buttonText: {
      today: '今天',
    },
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    height: 'auto',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: selectEvent,
    eventClick: clickEvent,
    eventDrop: dropEvent,
    events: computed(() => props.events),
    slotDuration: '00:15:00',
    eventOverlap: false,
  });
</script>

<style lang="scss">
  $mobileBreakpoints: 768px;
  @media (max-width: $mobileBreakpoints) {
    .fc .fc-toolbar-title {
      font-size: 1em !important;
    }
  }
</style>
