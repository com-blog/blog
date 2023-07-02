<template>
  <v-card max-width="960" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <template v-if="isPC">
        <v-app-bar color="teal-darken-4">
          <v-app-bar-title>Blog</v-app-bar-title>
          <v-spacer></v-spacer>

          <v-btn v-for="item in nav.items" text="item.title" :to="item.to">
            {{ item.title }}
          </v-btn>
        </v-app-bar>
      </template>

      <template v-else>
        <v-app-bar color="teal-darken-4" prominent>
          <v-app-bar-nav-icon variant="text"
                              @click.stop="nav.drawer = !nav.drawer">
          </v-app-bar-nav-icon>
          <v-toolbar-title>Blog</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="nav.drawer" location="top">
          <v-list lines="one">
            <v-list-item
                v-for="item in nav.items"
                :key="item.title"
                :title="item.title"
                :to="item.to"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </template>

      <v-main>
        <v-container fluid>
          <slot/>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { reactive, computed } from 'vue';

  const nav = reactive({
    title: 'asds',
    drawer: false,
    items: [
      { title: "Home", to: "/home/" },
      { title: "Post", to: "/posts/" },
    ]
  })

  const isPC = computed(() => window.innerWidth > 767)
</script>

<style lang="scss" scoped>

</style>
