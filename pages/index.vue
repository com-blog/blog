<template>
  <calendar-container :events="events"></calendar-container>
</template>
<script setup lang="ts">
  import CalendarContainer from '@/components/calendars/container/CalendarContainer.vue';
  import { Reservation } from '@/api/reservation';

  const events = Reservation.get();
</script>
