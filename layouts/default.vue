<template>
  <v-card max-width="960" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <!-- app-bar -->
      <pc-app-bar v-if="isPC" :title="nav.title" :items="nav.items" />
      <mobile-app-bar v-else :title="nav.title" :items="nav.items" />
      <!-- main contents -->
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { reactive, computed } from 'vue';
  import PcAppBar from '../components/appBars/PcAppBar';
  import MobileAppBar from '../components/appBars/MobileAppBar';

  const nav = reactive({
    title: 'Erin',
    items: [
      { title: 'Home', to: '/home/' },
      { title: 'Post', to: '/posts/' },
    ],
  });

  const isPC = computed(() => window.innerWidth > 767);
</script>

<style lang="scss" scoped></style>
