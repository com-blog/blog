<template>
  <div>
    <v-dialog v-model="computedDialog" width="640">
      <v-card title="預約">
        <v-card-text>
          <v-divider></v-divider>

          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="開始時間"
                  :model-value="dayjs(computedEvent.start).format('YYYY/MM/DD HH:mm:ss (dddd)')"
                  readonly="readonly"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="結束時間"
                  :model-value="dayjs(computedEvent.end).format('YYYY/MM/DD HH:mm:ss (dddd)')"
                  readonly="readonly"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
        </v-card-text>

        <v-card-actions class="mr-4 mb-3">
          <v-spacer></v-spacer>
          <v-btn class="bg-blue-accent-1" color="default" rounded elevated elevation="4" @click="save">保存</v-btn>
          <v-btn class="bg-blue-grey-darken-1" color="default" rounded elevated elevation="4" @click="toggleDialog"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
  import { PropType, computed } from 'vue';
  import { Event } from '@/shared/types/Calendar';
  import { useDayjs } from '@/.nuxt/imports';

  // Props
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

  // Emits
  const emits = defineEmits(['save', 'toggleDialog']);

  // Computed
  const computedEvent = computed(() => props.event as Event);
  const computedDialog = computed(() => props.dialog);

  // Variables
  const dayjs = useDayjs();

  // Functions
  const save = () => {
    emits('save', computedEvent);
  };

  const toggleDialog = () => {
    emits('toggleDialog', false);
  };
</script>
<style lang="scss" scoped></style>
