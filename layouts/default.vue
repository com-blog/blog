<template>
  <v-card class="mx-auto" elevation="8">
    <v-layout>
      <!-- app-bar -->
      <pc-app-bar v-if="usePCBar" :title="nav.title" :items="nav.items" />
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

<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import PcAppBar from '@/components/appBars/PcAppBar';
  import MobileAppBar from '@/components/appBars/MobileAppBar';
  import { isPC } from '@/shared/utils';

  const nav = reactive({
    title: 'Erin',
    items: [
      { title: 'Home', to: '/' },
      { title: 'About', to: '/about/' },
    ],
  });

  const usePCBar = computed(() => isPC());
</script>

<style lang="scss" scoped></style>
