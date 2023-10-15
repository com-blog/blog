<template>
  <div>
    <calendar-view :events="props.events"></calendar-view>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue/dist/vue';
  import CalendarView from '@/components/calendars/presentational/CalendarView';
  import { Event } from '@/shared/types/Calendar';

  const props = defineProps({
    events: {
      type: Array as PropType<Event[]>,
      required: true,
    },
  });
</script>

<style lang="scss" scoped></style>
