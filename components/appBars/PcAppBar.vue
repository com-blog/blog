<template>
  <v-app-bar color="teal-darken-4">
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn v-for="item in items" :key="item.title" :text="item.title" :to="item.to">
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
  defineProps({
    title: String,
    items: Array,
  });
</script>
