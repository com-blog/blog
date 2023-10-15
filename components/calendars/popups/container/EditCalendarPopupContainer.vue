<template>
  <div>
    <!-- eslint-disable vue/no-mutating-props -->
    <edit-calendar-popup-view
      :dialog="computedDialog"
      :event="props.event"
      @save="save"
      @toggle-dialog="toggleDialog"
    ></edit-calendar-popup-view>
  </div>
</template>
<script setup lang="ts">
  import { PropType, computed } from 'vue';
  import { Event } from '@/shared/types/Calendar';
  import EditCalendarPopupView from '@/components/calendars/popups/presentational/EditCalendarPopupView.vue';

  const props = defineProps({
    dialog: {
      type: Boolean,
      required: true,
    },
    event: {
      type: Object as PropType<Event>,
      required: true,
    },
  });

  const emits = defineEmits(['toggleDialog']);
  // Computed
  const computedDialog = computed(() => props.dialog);

  const save = (event: Event) => {
    // TODO: call API
    console.log(event);
  };

  const toggleDialog = (isOpen: Boolean) => {
    emits('toggleDialog', isOpen);
  };
</script>
<style lang="scss"></style>
