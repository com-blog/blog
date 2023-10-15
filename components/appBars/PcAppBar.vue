<template>
  <v-app-bar color="primary">
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn v-for="item in items" :key="item.title" :text="item.title" :to="item.to">
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { RouteItem } from '@/shared/types/Nav';

  defineProps({
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<RouteItem>,
      required: true,
    },
  });
</script>
