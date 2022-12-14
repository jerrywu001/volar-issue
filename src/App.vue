<script setup lang="ts">
import { ref } from 'vue'
import { ListComponent } from './components/List'
import { Sandpack } from 'sandpack-vue3';

const list = [
  {
    name: "John",
  },
  {
    name: "Doe",
  },
  {
    name: "Smith",
  }
]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component
    :data="list"
    :active-index="'2'"
    @toggle="toggle"
  />

  <!-- test Sandpack -->
  <sandpack
    template="react-ts"
    :options="{
      showTabs: true,
      visibleFiles: [
        '/src/App.vue',
        '/src/main.ts'
      ]
    }"
  />
</template>

<style>
li.active {
  color: red;
}
</style>
