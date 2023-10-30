<script setup lang="ts">
import Camera from './components/Camera.vue'
import Settings from './components/Settings.vue'
</script>

<template>
  <div>
    <Suspense>
      <!-- <Camera /> -->
      <Settings />
    </Suspense>
  </div>
</template>

<style lang="scss"></style>
