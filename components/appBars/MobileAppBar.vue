<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="appBars.drawer = !appBars.drawer"> </v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="appBars.drawer" location="top">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :title="item.title" :to="item.to"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { reactive, PropType } from 'vue';
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

  const appBars = reactive({
    drawer: false,
  });
</script>
