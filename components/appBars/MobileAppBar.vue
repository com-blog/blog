<template>
  <v-app-bar color="teal-darken-4" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="appBars.drawer = !appBars.drawer"> </v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="appBars.drawer" location="top">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :title="item.title" :to="item.to"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { reactive } from 'vue';

  defineProps({
    title: String,
    items: Array,
  });

  const appBars = reactive({
    drawer: false,
  });
</script>
