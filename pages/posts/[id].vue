<template>
  <div>
    <h2>Blogs for {{ id }}</h2>
  </div>
</template>

<script setup>
  import { useRoute } from 'nuxt/app';

  const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
